(function () {
  var config = window.PAN_LINKS_CONFIG || { movies: [] };
  var homePage = document.getElementById("homePage");
  var copyPage = document.getElementById("copyPage");
  var openLinksBtn = document.getElementById("openLinksBtn");
  var backBtn = document.getElementById("backBtn");
  var movieList = document.getElementById("movieList");
  var searchInput = document.getElementById("searchInput");
  var toast = document.getElementById("toast");
  var toastTimer = null;

  function showPage(pageName) {
    var isCopy = pageName === "copy";
    homePage.classList.toggle("is-active", !isCopy);
    copyPage.classList.toggle("is-active", isCopy);

    if (isCopy) {
      setTimeout(function () {
        searchInput.focus({ preventScroll: true });
      }, 120);
    }
  }

  function formatLinkText(item) {
    var lines = [item.url];
    if (item.code) {
      lines.push((item.codeLabel || "提取码") + "：" + item.code);
    }
    return lines.join("\n");
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 1800);
  }

  function fallbackCopy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  function copyText(text, copyName) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(
        function () {
          showToast("已复制：" + copyName);
        },
        function () {
          fallbackCopy(text);
          showToast("已复制：" + copyName);
        }
      );
      return;
    }

    fallbackCopy(text);
    showToast("已复制：" + copyName);
  }

  function createMovieCard(movie) {
    var card = document.createElement("article");
    card.className = "movie-card";

    var titleRow = document.createElement("div");
    titleRow.className = "movie-title-row";

    var title = document.createElement("h2");
    title.textContent = movie.name;

    titleRow.appendChild(title);
    card.appendChild(titleRow);

    var links = document.createElement("div");
    links.className = "link-list";

    movie.links.forEach(function (item) {
      var block = document.createElement("div");
      block.className = "link-item";

      var linkText = document.createElement("div");
      linkText.className = "link-text";

      var label = document.createElement("span");
      label.className = "disk-label";
      label.textContent = item.label;

      var url = document.createElement("span");
      url.className = "disk-url";
      url.textContent = item.url;

      linkText.appendChild(label);
      linkText.appendChild(url);

      if (item.code) {
        var code = document.createElement("span");
        code.className = "disk-code";
        code.textContent = (item.codeLabel || "提取码") + "：" + item.code;
        linkText.appendChild(code);
      }

      var tags = Array.isArray(item.tags) ? item.tags.filter(Boolean) : [];
      if (tags.length) {
        var tagRow = document.createElement("div");
        tagRow.className = "disk-tags";
        tags.forEach(function (tagName) {
          var tag = document.createElement("span");
          tag.className = "disk-tag";
          tag.textContent = tagName;
          tagRow.appendChild(tag);
        });
        linkText.appendChild(tagRow);
      }

      var copyButton = document.createElement("button");
      copyButton.className = "copy-btn";
      copyButton.type = "button";
      copyButton.textContent = "复制";
      copyButton.addEventListener("click", function () {
        copyText(formatLinkText(item), movie.name + " " + item.label);
      });

      block.appendChild(linkText);
      block.appendChild(copyButton);
      links.appendChild(block);
    });

    card.appendChild(links);
    return card;
  }

  function renderMovies() {
    var keyword = searchInput.value.trim().toLowerCase();
    var movies = config.movies.filter(function (movie) {
      return movie.name.toLowerCase().indexOf(keyword) !== -1;
    });

    movieList.innerHTML = "";

    if (!movies.length) {
      var empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "没有找到相关电影";
      movieList.appendChild(empty);
      return;
    }

    movies.forEach(function (movie) {
      movieList.appendChild(createMovieCard(movie));
    });
  }

  document.title = config.pageTitle || "网盘地址复制";
  openLinksBtn.addEventListener("click", function () {
    showPage("copy");
  });
  backBtn.addEventListener("click", function () {
    showPage("home");
  });
  searchInput.addEventListener("input", renderMovies);
  renderMovies();
})();
