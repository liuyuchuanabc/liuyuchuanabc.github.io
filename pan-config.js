/**
 * 网盘链接可选标签（按需填写 tags 数组，可多选）：
 * 画质：720P / 1080P / 4K / 蓝光 / HDR
 * 来源：WEB-DL / BluRay / REMUX / 枪版
 * 音轨：国语 / 粤语 / 英语 / 双语
 * 字幕：中字 / 中英双字 / 无字幕
 */
window.PAN_LINKS_CONFIG = {
  pageTitle: "网盘地址复制",
  movies: [
    {
      name: "少林足球",
      links: [
        { label: "夸克", url: "https://pan.quark.cn/s/e217768cefe2", tags: ["1080P", "17.9G", "己盘"] },
        {
          label: "迅雷",
          url: "https://pan.xunlei.com/s/VOtzi0-CeMABURQ1xwyp1EuwA1?pwd=a5n2",
          codeLabel: "提取码",
          code: "a5n2",
          tags: ["1080P", "外盘"]
        },
        { label: "阿里", url: "https://www.alipan.com/s/zbGUMM1W8Ne", tags: ["1080P","17.9G", "己盘"]},
        { label: "百度", url: "https://pan.baidu.com/j/1kEMWTpuLbv", tags: ["1080P", "群文件", "12.2G"]}
      ]
    },
    {
      name: "盲井",
      links: [
        // { label: "夸克", url: "https://pan.quark.cn/s/283179ba4da1", tags: ["己盘", "1080P", "4.4G"] },
        { 
          label: "百度", 
          url: "https://pan.baidu.com/s/1r_jJDQnE1Ycxw913v37-CA?pwd=2a6i", 
          codeLabel: "提取码",
          code: "2a6i",
          tags: ["己盘", "1080P", "4.4G"] 
        }

      ]
    },
    {
      name: "让子弹飞",
      links: [
        { label: "阿里", url: "https://www.alipan.com/s/cMjGUFakgJC", tags: ["1080P", "9.8G", "己盘"] },
        { label: "夸克", url: "https://pan.quark.cn/s/3ec8ab9065ce", tags: ["1080P", "16.7G", "己盘"] },
        {
          label: "迅雷",
          url: "https://pan.xunlei.com/s/VOlklRHhkURKS6Ep1k1FqvD6A1?pwd=vxdb",
          codeLabel: "提取码",
          code: "vxdb",
          tags: ["4K", "15.6G", "外盘"]
        },
        {
          label: "百度",
          url: "https://pan.baidu.com/s/1j4loIgErT8HD40k36bp6Cg?pwd=q7vn",
          codeLabel: "提取码",
          code: "q7vn",
          tags: ["4K", "15.59G", "己盘"]
        }
      ]
    },
    {
      name: "喜剧之王",
      links: [
        { label: "夸克", url: "https://pan.quark.cn/s/1d8b1b905794", tags: ["1080P", "2.5G", "己盘"] },
        {
          label: "迅雷",
          url: "https://pan.xunlei.com/s/VOllmjHHTtCVqPWRm_CZI6uBA1?pwd=jt7p",
          codeLabel: "提取码",
          code: "jt7p",
          tags: ["1080P", "2.5G", "外盘"]
        },
        {
          label: "百度",
          url: "https://pan.baidu.com/s/1STpY5MdiQx6CcuQIdRZ7VQ",
          codeLabel: "提取码",
          code: "14Xu",
          tags: ["1080P", "5.37G", "己盘"]
        }
      ]
    },
    {
      name: "西游降魔篇",
      links: [
        { label: "阿里云盘", url: "https://www.alipan.com/s/Y9GUqpTrw1C", tags: ["1080P", "2.42G", "己盘"] },
        {
          label: "百度盘",
          url: "https://pan.baidu.com/s/1apFxq0IDfV0hwMO_s9NfMw?pwd=iavh",
          codeLabel: "提取码",
          code: "iavh",
          tags: ["1080P","21.97G", "己盘"]
        },
        { label: "夸克盘", url: "https://pan.quark.cn/s/669c60508062", tags: ["1080P", "18.1G", "己盘"] },
        { label: "迅雷盘", url: "https://pan.xunlei.com/s/VOtzllZhIwg4D7w4UWp4NmxPA1?pwd=hipe", tags: ["1080P", "外盘"] }
      ]
    },
    {
      name: "西游伏妖篇",
      links: [
        { label: "阿里云盘", url: "https://www.alipan.com/s/EbEZJZ7LRmc", tags: ["1080P", "5.64G", "己盘"] },
        {
          label: "百度盘",
          url: "https://pan.baidu.com/j/1oXqNjgbEOl",
          tags: ["1080P", "群文件", "5.64G"]
        },
        { label: "夸克盘", url: "https://pan.quark.cn/s/6373a48959db", tags: ["1080P", "27.5G","己盘"] },
        { label: "迅雷盘", url: "https://pan.xunlei.com/s/VOtzlb8eXeTPKjoQ38SlHJ4_A1?pwd=ny9c", tags: ["1080P", "外盘", "12.2G"] }
      ]
    },
    {
      name: "痴迷电影",
      links: [
        { label: "迅雷", url: "https://pan.xunlei.com/s/VOxJ_NeKG53EI5DkS3ghoDCDA1?pwd=vk9j#", tags: ["1080P", "已盘", "12.2G"] },
        { label: "夸克", url: "https://pan.quark.cn/s/cfcf7f8c3160", tags: ["1080P", "6.6G","己盘"] },
        {
          label: "百度",
          url: "https://pan.baidu.com/s/1a8fCl2Kf-CYK4RVIOl4y_g?pwd=3x4c",
          codeLabel: "提取码",
          code: "3x4c",
          tags: ["1080P", "5.76G", "己盘"]
        }
      ]
    },
    {
      name: "后室",
      links: [
        // 等更新
        { label: "夸克", url: "https://pan.quark.cn/s/5b83706fdffe", tags: ["1080P", "9.8G", "己盘"] },
        { label: "迅雷", url: "https://pan.xunlei.com/s/VOxUQna0NZzy6pkpLMC_IaXlA1?pwd=6j3x", tags: ["1080P", "外盘"] },
        {
          label: "百度",
          url: "https://pan.baidu.com/s/1_3XkCg_SKC6TEytxR49sSA?pwd=38k5",
          codeLabel: "提取码",
          code: "38k5",
          tags: ["1080P", "9.76G", "己盘"]
        }
      ]
    },
    {
      name: "落叶归根",
      links: [
        { label: "夸克", url: "https://pan.quark.cn/s/69f28cbba768", tags: ["2K", "13.2G", "己盘"] },
        {
          label: "百度",
          url: "https://pan.baidu.com/s/15l1-CCZmS5Ob_2DK2A1yhw?pwd=5hg7",
          codeLabel: "提取码",
          code: "5hg7",
          tags: ["1080P", "12.96G", "已盘"]
        }
      ]
    },
    {
      name: "杀的就是你",
      links: [
        { label: "阿里云", url: "https://www.alipan.com/s/4kQwcZPuusQ", tags: ["2K", "6.1G", "己盘"] },
        { label: "夸克", url: "https://pan.quark.cn/s/003336d3bc14", tags: ["1080P", "6.1G", "己盘"] },
        { label: "迅雷", url: "https://pan.xunlei.com/s/VOrEVzL5c1eKXBigVkWFXhIdA1?pwd=qm7q", tags: ["1080P", "外盘", "6.1G"] },
        {
          label: "百度",
          url: "https://pan.baidu.com/s/10R4uqYGELpm6rr7mC-IDFw?pwd=qdjm",
          codeLabel: "提取码",
          code: "qdjm",
          tags: ["1080P", "6.1G", "己盘"]
        }
      ]
    },
    {
      name: "木乃伊",
      links: [
        { label: "夸克", url: "https://pan.quark.cn/s/0364fd565543", tags: ["1080P", "己盘"] },
        { label: "迅雷", url: "https://pan.xunlei.com/s/VOsuJSqbGe6ObNigmOdcJ1XuA1?pwd=8de5", tags: ["1080P", "外盘"] },
        {
          label: "百度",
          url: "https://pan.baidu.com/s/1IpdwNKVnbSzE9PFCNtBXsw?pwd=hrcx",
          codeLabel: "提取码",
          code: "hrcx",
          tags: ["1080P", "己盘"]
        }
      ]
    },
    {
      name: "火遮眼",
      links: [
        { label: "夸克", url: "https://pan.quark.cn/s/301d90262b84#/list/share", tags: ["1080P"] },
        {
          label: "迅雷",
          url: "https://pan.xunlei.com/s/VOwutfLIOsTQZwM31rACnrsOA1?pwd=p9kz",
          codeLabel: "提取码",
          code: "p9kz",
          tags: ["1080P"]
        },
        {
          label: "百度",
          url: "https://pan.baidu.com/s/1VP5jraagL1WZcV5Sg0YRig?pwd=pij3#list/path=%2F",
          codeLabel: "提取码",
          code: "pij3",
          tags: ["1080P"]
        }
      ]
    },
    {
      name: "公民义警",
      links: [
        { label: "夸克", url: "https://pan.quark.cn/s/11189f3abf05", tags: ["1080P", "5.6G", "己盘"] },
        { label: "迅雷", url: "https://pan.xunlei.com/s/VOwYSW02zGYA_sEY7vFkd6b_A1?pwd=fgyn", tags: ["1080P"] },
        {
          label: "百度",
          url: " https://pan.baidu.com/s/1ufnG1Z__c4DG696wb-GPOw?pwd=fsn5",
          codeLabel: "提取码",
          code: "fsn5",
          tags: ["1080P","5.6G", "己盘"]
        }
      ]
    },
    {
      name: "地狱尖兵",
      links: [
        {
          label: "阿里",
          url: "https://www.aliyundrive.com/s/2KPV4TDBH9m?pwd=null",
          tags: ["1080P"]
        },
        {
          label: "百度",
          url: "https://pan.baidu.com/s/1r9RoAOARacoFlPUDkj4SiA?pwd=0404",
          codeLabel: "密钥",
          code: "0404",
          tags: ["1080P"]
        },
        {
          label: "迅雷",
          url: "https://pan.xunlei.com/s/VNHc6QmxXaVEZToOqp7B4aNTA1",
          codeLabel: "密钥",
          code: "9nzz",
          tags: ["1080P"]
        },
        { label: "夸克", url: "https://pan.quark.cn/s/c5ac7242db5d#/list/share", tags: ["1080P"] }
      ]
    },
    {
      name: "人皮客栈",
      links: [
        {
          label: "百度",
          url: "https://pan.baidu.com/s/1BP0eAG6jd1QsFzR45vcQdg?pwd=ci6s",
          codeLabel: "提取码",
          code: "ci6s",
          tags: ["1080P"]
        },
        {
          label: "迅雷",
          url: "https://pan.baidu.com/s/1BP0eAG6jd1QsFzR45vcQdg?pwd=ci6s",
          codeLabel: "提取码",
          code: "ci6s",
          tags: ["1080P"]
        },
        { label: "夸克", url: "https://pan.quark.cn/s/5b75fad50f14#/list/share", tags: ["1080P"] },
        {
          label: "阿里",
          url: "https://www.aliyundrive.com/s/7db9sRDrx1c/folder/61bd3ff72f23617355fe4b1f88e2c8f155776723",
          tags: ["1080P"]
        }
      ]
    },
    {
      name: "昆池岩",
      links: [
        { label: "夸克", url: "https://pan.quark.cn/s/bbf821353e52", tags: ["1080P", "3.8G", "己盘"] },
        {
          label: "百度",
          url: "https://pan.baidu.com/s/1c4aV3fnbBdmBVBc95oa_UQ?pwd=p4th",
          codeLabel: "提取码",
          code: "p4th",
          tags: ["1080P", "3.8G", "己盘"]
        }
      ]
    },
    {
      name: "电锯惊魂",
      links: [
        {
          label: "百度",
          url: "https://pan.baidu.com/s/1GREHOVTGFa0ewlTotR0YNA?pwd=88bd",
          codeLabel: "提取码",
          code: "88bd",
          tags: ["1080P"]
        },
        { label: "阿里", url: "https://www.aliyundrive.com/s/MLigrYZLx6h", tags: ["1080P"] },
        { label: "夸克", url: "https://pan.quark.cn/s/6fe262b0ca28#/list/share", tags: ["1080P"] },
        { label: "迅雷", url: "https://pan.xunlei.com/s/VOmVO-doTCNnL3IMZPLoogOFA1?pwd=j93v", tags: ["1080P"] }
      ]
    },
    {
      name: "惊蛰，落叶，熊猫，后室，肖申克，茶馆，心花，阿甘，来电，老友记，调音师",
      links: [
        {
          label: "百度",
          url: "https://pan.baidu.com/s/1f2zouSTc8GHT1fBuvgG2EA?pwd=qd66",
          codeLabel: "提取码",
          code: "qd66",
          tags: ["1080P"]
        }
      ]
    }
  ]
};
