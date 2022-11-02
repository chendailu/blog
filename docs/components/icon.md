---
title: Icon 图标
---

# 图标

<template>
    <div>
        <div class='set-class'>
          开启前缀：<xly-switch v-model='value'></xly-switch>
        </div>
      <div class='demo-wrap'>
        <div v-for='item in list' :key='item.font_class' class='icon-item'>
            <div class='tips-info' :ref='item.font_class'>复制成功！</div>
            <i class='icon' :class='"xly_icon_"+item.font_class'></i>
            <span>{{item.name}}</span>
            <span>{{item.font_class}}</span>
            <div class='copy' @click='copyIcon(item.font_class)'>复制</div>
        </div>
      </div>
    </div>
</template>

<script>

export default {

  methods: {

    copyIcon(name){

      let info = this.value ? `xly_icon_${name}` : name

      let input = document.createElement('input')

      input.setAttribute("value", info)

      document.body.appendChild(input)

      input.select();

      let res = document.execCommand("copy")

      document.body.removeChild(input);

      this.cancelClass(name)

    },

    cancelClass(name){

      this.$refs[name][0].classList.add("active")

      setTimeout(()=>{

        this.$refs[name][0].classList.remove("active")

      }, 1000)

    }

  },

  data() {

    return {

      value: false,

      list: [

         {

      "icon_id": "31972994",

      "name": "取消_line",

      "font_class": "cancel_line",

      "unicode": "e71b",

      "unicode_decimal": 59163

    },

    {

      "icon_id": "31972995",

      "name": "标签_line",

      "font_class": "tag_line",

      "unicode": "e71c",

      "unicode_decimal": 59164

    },

    {

      "icon_id": "30780966",

      "name": "群聊",

      "font_class": "a-ziyuan1381",

      "unicode": "e71a",

      "unicode_decimal": 59162

    },

    {

      "icon_id": "30780600",

      "name": "icon-kfckfc",

      "font_class": "a-ziyuan1382",

      "unicode": "e719",

      "unicode_decimal": 59161

    },

    {

      "icon_id": "30778077",

      "name": "关于_line",

      "font_class": "a-ziyuan13801",

      "unicode": "e718",

      "unicode_decimal": 59160

    },

    {

      "icon_id": "28874280",

      "name": "network",

      "font_class": "network",

      "unicode": "e716",

      "unicode_decimal": 59158

    },

    {

      "icon_id": "28874281",

      "name": "network_line",

      "font_class": "network_line",

      "unicode": "e717",

      "unicode_decimal": 59159

    },

    {

      "icon_id": "27764142",

      "name": "检查更新",

      "font_class": "checkupdate",

      "unicode": "e610",

      "unicode_decimal": 58896

    },

    {

      "icon_id": "27763578",

      "name": "应用管理",

      "font_class": "applicationmanagement",

      "unicode": "e60f",

      "unicode_decimal": 58895

    },

    {

      "icon_id": "27374590",

      "name": "停止",

      "font_class": "Stop",

      "unicode": "e715",

      "unicode_decimal": 59157

    },

    {

      "icon_id": "25782669",

      "name": "导入",

      "font_class": "a-ziyuan1380",

      "unicode": "e714",

      "unicode_decimal": 59156

    },

    {

      "icon_id": "25105599",

      "name": "评论",

      "font_class": "comments",

      "unicode": "e713",

      "unicode_decimal": 59155

    },

    {

      "icon_id": "24647264",

      "name": "链接",

      "font_class": "link_line",

      "unicode": "e712",

      "unicode_decimal": 59154

    },

    {

      "icon_id": "24616027",

      "name": "定位",

      "font_class": "positioning",

      "unicode": "e60e",

      "unicode_decimal": 58894

    },

    {

      "icon_id": "24615986",

      "name": "评论",

      "font_class": "comments_line",

      "unicode": "e60d",

      "unicode_decimal": 58893

    },

    {

      "icon_id": "24615881",

      "name": "点赞",

      "font_class": "praise_line",

      "unicode": "e60c",

      "unicode_decimal": 58892

    },

    {

      "icon_id": "23642076",

      "name": "移动",

      "font_class": "move_line",

      "unicode": "e711",

      "unicode_decimal": 59153

    },

    {

      "icon_id": "23232544",

      "name": "帮助",

      "font_class": "help",

      "unicode": "e61c",

      "unicode_decimal": 58908

    },

    {

      "icon_id": "23048444",

      "name": "等待",

      "font_class": "waiting",

      "unicode": "e61a",

      "unicode_decimal": 58906

    },

    {

      "icon_id": "22377316",

      "name": "组织架构",

      "font_class": "organization_line",

      "unicode": "e70c",

      "unicode_decimal": 59148

    },

    {

      "icon_id": "22377317",

      "name": "受害人",

      "font_class": "victim_line",

      "unicode": "e70d",

      "unicode_decimal": 59149

    },

    {

      "icon_id": "22377319",

      "name": "收起展开",

      "font_class": "ensconce_line",

      "unicode": "e70e",

      "unicode_decimal": 59150

    },

    {

      "icon_id": "22377320",

      "name": "金钱",

      "font_class": "money_line",

      "unicode": "e70f",

      "unicode_decimal": 59151

    },

    {

      "icon_id": "22377321",

      "name": "嫌疑人",

      "font_class": "Suspects_line",

      "unicode": "e710",

      "unicode_decimal": 59152

    },

    {

      "icon_id": "20546720",

      "name": "联系人相似度",

      "font_class": "connectionsequence",

      "unicode": "ecd0",

      "unicode_decimal": 60624

    },

    {

      "icon_id": "20490058",

      "name": "地理轨迹",

      "font_class": "geographicaltrack",

      "unicode": "ecab",

      "unicode_decimal": 60587

    },

    {

      "icon_id": "20490059",

      "name": "共同对象",

      "font_class": "commonobjects",

      "unicode": "ecac",

      "unicode_decimal": 60588

    },

    {

      "icon_id": "20490060",

      "name": "差异性分析",

      "font_class": "differenceanalysis",

      "unicode": "ecad",

      "unicode_decimal": 60589

    },

    {

      "icon_id": "20490061",

      "name": "共同联系",

      "font_class": "commoncontact",

      "unicode": "ecae",

      "unicode_decimal": 60590

    },

    {

      "icon_id": "20490062",

      "name": "共同文件",

      "font_class": "commondocument",

      "unicode": "ecaf",

      "unicode_decimal": 60591

    },

    {

      "icon_id": "20490063",

      "name": "交易明细",

      "font_class": "billdetails",

      "unicode": "ecb0",

      "unicode_decimal": 60592

    },

    {

      "icon_id": "20490064",

      "name": "基站碰面",

      "font_class": "sitemeet",

      "unicode": "ecb1",

      "unicode_decimal": 60593

    },

    {

      "icon_id": "20490065",

      "name": "好友相似度",

      "font_class": "contactsimilarity",

      "unicode": "ecb2",

      "unicode_decimal": 60594

    },

    {

      "icon_id": "20490066",

      "name": "交易时序",

      "font_class": "transactionsequence",

      "unicode": "ecb3",

      "unicode_decimal": 60595

    },

    {

      "icon_id": "20490067",

      "name": "共同交易",

      "font_class": "jointtransaction",

      "unicode": "ecb4",

      "unicode_decimal": 60596

    },

    {

      "icon_id": "20490068",

      "name": "话单时序",

      "font_class": "billtiming",

      "unicode": "ecb5",

      "unicode_decimal": 60597

    },

    {

      "icon_id": "20490069",

      "name": "共群分析",

      "font_class": "congroupanalysis",

      "unicode": "ecb6",

      "unicode_decimal": 60598

    },

    {

      "icon_id": "20490070",

      "name": "涉嫌分析",

      "font_class": "suspectedanalysis",

      "unicode": "ecb7",

      "unicode_decimal": 60599

    },

    {

      "icon_id": "20490071",

      "name": "经济情况",

      "font_class": "economicsituation",

      "unicode": "ecb8",

      "unicode_decimal": 60600

    },

    {

      "icon_id": "20490072",

      "name": "身份信息",

      "font_class": "identityinformation",

      "unicode": "ecb9",

      "unicode_decimal": 60601

    },

    {

      "icon_id": "20490073",

      "name": "话单数据",

      "font_class": "billdata",

      "unicode": "ecba",

      "unicode_decimal": 60602

    },

    {

      "icon_id": "20490074",

      "name": "联系时序",

      "font_class": "mutualtrade",

      "unicode": "ecbb",

      "unicode_decimal": 60603

    },

    {

      "icon_id": "20490075",

      "name": "社会关系",

      "font_class": "socialrelations",

      "unicode": "ecbc",

      "unicode_decimal": 60604

    },

    {

      "icon_id": "20490076",

      "name": "固定收支",

      "font_class": "fixedincome",

      "unicode": "ecbd",

      "unicode_decimal": 60605

    },

    {

      "icon_id": "20490077",

      "name": "碰面分析",

      "font_class": "meetanalysis",

      "unicode": "ecbe",

      "unicode_decimal": 60606

    },

    {

      "icon_id": "20490078",

      "name": "画像概览",

      "font_class": "portraitoverview",

      "unicode": "ecbf",

      "unicode_decimal": 60607

    },

    {

      "icon_id": "20490079",

      "name": "同行分析",

      "font_class": "peeranalysis",

      "unicode": "ecc0",

      "unicode_decimal": 60608

    },

    {

      "icon_id": "20490080",

      "name": "通话轨迹",

      "font_class": "calltrace",

      "unicode": "ecc1",

      "unicode_decimal": 60609

    },

    {

      "icon_id": "20490081",

      "name": "手机概览",

      "font_class": "mobileoverview",

      "unicode": "ecc2",

      "unicode_decimal": 60610

    },

    {

      "icon_id": "20490082",

      "name": "相互交易",

      "font_class": "mutualtransaction",

      "unicode": "ecc3",

      "unicode_decimal": 60611

    },

    {

      "icon_id": "20490083",

      "name": "经济能力",

      "font_class": "economicbehavior",

      "unicode": "ecc4",

      "unicode_decimal": 60612

    },

    {

      "icon_id": "20490084",

      "name": "相互联系",

      "font_class": "interlinked",

      "unicode": "ecc5",

      "unicode_decimal": 60613

    },

    {

      "icon_id": "20490085",

      "name": "相互通话",

      "font_class": "mutualconversation",

      "unicode": "ecc6",

      "unicode_decimal": 60614

    },

    {

      "icon_id": "20490086",

      "name": "时空分析",

      "font_class": "spatiotemporalanalysis",

      "unicode": "ecc7",

      "unicode_decimal": 60615

    },

    {

      "icon_id": "20490087",

      "name": "行为习惯",

      "font_class": "behaviorhabit",

      "unicode": "ecc8",

      "unicode_decimal": 60616

    },

    {

      "icon_id": "20490088",

      "name": "特服号码",

      "font_class": "specialnumber",

      "unicode": "ecc9",

      "unicode_decimal": 60617

    },

    {

      "icon_id": "20490089",

      "name": "作息分析",

      "font_class": "routine",

      "unicode": "ecca",

      "unicode_decimal": 60618

    },

    {

      "icon_id": "20490090",

      "name": "账单概览",

      "font_class": "billoverview",

      "unicode": "eccb",

      "unicode_decimal": 60619

    },

    {

      "icon_id": "20490091",

      "name": "账单明细",

      "font_class": "zhangdanmingxi",

      "unicode": "eccc",

      "unicode_decimal": 60620

    },

    {

      "icon_id": "20490092",

      "name": "相似度分析",

      "font_class": "similarityanalysis",

      "unicode": "eccd",

      "unicode_decimal": 60621

    },

    {

      "icon_id": "20490093",

      "name": "一人多机分析",

      "font_class": "yirenduojifenxi",

      "unicode": "ecce",

      "unicode_decimal": 60622

    },

    {

      "icon_id": "20490094",

      "name": "频率分析",

      "font_class": "frequencyanalysis",

      "unicode": "eccf",

      "unicode_decimal": 60623

    },

    {

      "icon_id": "16328190",

      "name": "多文档",

      "font_class": "Multipledocuments_line",

      "unicode": "ec98",

      "unicode_decimal": 60568

    },

    {

      "icon_id": "15953838",

      "name": "云分析",

      "font_class": "Cloud_line",

      "unicode": "ec95",

      "unicode_decimal": 60565

    },

    {

      "icon_id": "15953684",

      "name": "排序上",

      "font_class": "sorton_line",

      "unicode": "ec93",

      "unicode_decimal": 60563

    },

    {

      "icon_id": "15953685",

      "name": "排序下",

      "font_class": "Sortedunder_line",

      "unicode": "ec94",

      "unicode_decimal": 60564

    },

    {

      "icon_id": "15843915",

      "name": "文档文件",

      "font_class": "doc",

      "unicode": "ec92",

      "unicode_decimal": 60562

    },

    {

      "icon_id": "15649093",

      "name": "历史记录",

      "font_class": "historyrecord",

      "unicode": "e619",

      "unicode_decimal": 58905

    },

    {

      "icon_id": "15621645",

      "name": "重置密码",

      "font_class": "respass",

      "unicode": "e6ef",

      "unicode_decimal": 59119

    },

    {

      "icon_id": "15477397",

      "name": "通知",

      "font_class": "tongzhi",

      "unicode": "ec91",

      "unicode_decimal": 60561

    },

    {

      "icon_id": "15412317",

      "name": "帮助",

      "font_class": "help_line",

      "unicode": "ec90",

      "unicode_decimal": 60560

    },

    {

      "icon_id": "15384703",

      "name": "用户手册",

      "font_class": "UserManual",

      "unicode": "e618",

      "unicode_decimal": 58904

    },

    {

      "icon_id": "15384611",

      "name": "问题反馈",

      "font_class": "Feedback",

      "unicode": "e617",

      "unicode_decimal": 58903

    },

    {

      "icon_id": "15383317",

      "name": "用户手册",

      "font_class": "UserManual_line",

      "unicode": "ec8e",

      "unicode_decimal": 60558

    },

    {

      "icon_id": "15383318",

      "name": "问题反馈",

      "font_class": "Feedback_line",

      "unicode": "ec8f",

      "unicode_decimal": 60559

    },

    {

      "icon_id": "15381267",

      "name": "省略号",

      "font_class": "omission",

      "unicode": "ec8b",

      "unicode_decimal": 60555

    },

    {

      "icon_id": "15381268",

      "name": "加载",

      "font_class": "loading_line",

      "unicode": "ec8c",

      "unicode_decimal": 60556

    },

    {

      "icon_id": "15381269",

      "name": "时间",

      "font_class": "time_line",

      "unicode": "ec8d",

      "unicode_decimal": 60557

    },

    {

      "icon_id": "15338177",

      "name": "源代码",

      "font_class": "Sourcecode_line",

      "unicode": "e683",

      "unicode_decimal": 59011

    },

    {

      "icon_id": "15296224",

      "name": "警告",

      "font_class": "Warning",

      "unicode": "ec88",

      "unicode_decimal": 60552

    },

    {

      "icon_id": "15296225",

      "name": "成功",

      "font_class": "success",

      "unicode": "ec89",

      "unicode_decimal": 60553

    },

    {

      "icon_id": "15296226",

      "name": "错误",

      "font_class": "errors",

      "unicode": "ec8a",

      "unicode_decimal": 60554

    },

    {

      "icon_id": "15224103",

      "name": "筛选",

      "font_class": "screening",

      "unicode": "ec87",

      "unicode_decimal": 60551

    },

    {

      "icon_id": "15210528",

      "name": "勾",

      "font_class": "hook",

      "unicode": "ec86",

      "unicode_decimal": 60550

    },

    {

      "icon_id": "15194764",

      "name": "日历",

      "font_class": "calendar",

      "unicode": "ec85",

      "unicode_decimal": 60549

    },

    {

      "icon_id": "14943279",

      "name": "注销",

      "font_class": "Logout_line",

      "unicode": "e6f7",

      "unicode_decimal": 59127

    },

    {

      "icon_id": "14943214",

      "name": "卡片模式",

      "font_class": "cards_line",

      "unicode": "e70b",

      "unicode_decimal": 59147

    },

    {

      "icon_id": "14943162",

      "name": "图片",

      "font_class": "image_line",

      "unicode": "e70a",

      "unicode_decimal": 59146

    },

    {

      "icon_id": "14943132",

      "name": "升级",

      "font_class": "update_line",

      "unicode": "e709",

      "unicode_decimal": 59145

    },

    {

      "icon_id": "14943078",

      "name": "日志",

      "font_class": "Viewlog_line",

      "unicode": "e707",

      "unicode_decimal": 59143

    },

    {

      "icon_id": "14942978",

      "name": "拍照",

      "font_class": "takephotos_line",

      "unicode": "e708",

      "unicode_decimal": 59144

    },

    {

      "icon_id": "14942801",

      "name": "案件类型",

      "font_class": "CaseType_line",

      "unicode": "e706",

      "unicode_decimal": 59142

    },

    {

      "icon_id": "14774744",

      "name": "注销",

      "font_class": "Logout",

      "unicode": "ec76",

      "unicode_decimal": 60534

    },

    {

      "icon_id": "2242675",

      "name": "正确",

      "font_class": "zhengque",

      "unicode": "e611",

      "unicode_decimal": 58897

    },

    {

      "icon_id": "14767230",

      "name": "右",

      "font_class": "right",

      "unicode": "e6a7",

      "unicode_decimal": 59047

    },

    {

      "icon_id": "14767231",

      "name": "左",

      "font_class": "left",

      "unicode": "e703",

      "unicode_decimal": 59139

    },

    {

      "icon_id": "14767232",

      "name": "下",

      "font_class": "down",

      "unicode": "e704",

      "unicode_decimal": 59140

    },

    {

      "icon_id": "14767233",

      "name": "上",

      "font_class": "top",

      "unicode": "e705",

      "unicode_decimal": 59141

    },

    {

      "icon_id": "14684531",

      "name": "暂停",

      "font_class": "timeout",

      "unicode": "e6a9",

      "unicode_decimal": 59049

    },

    {

      "icon_id": "14683062",

      "name": "导入",

      "font_class": "Import",

      "unicode": "ec78",

      "unicode_decimal": 60536

    },

    {

      "icon_id": "14683045",

      "name": "个人账号",

      "font_class": "user",

      "unicode": "ec79",

      "unicode_decimal": 60537

    },

    {

      "icon_id": "14683046",

      "name": "编辑",

      "font_class": "edit",

      "unicode": "ec7a",

      "unicode_decimal": 60538

    },

    {

      "icon_id": "12655352",

      "name": "移除",

      "font_class": "Remove_line",

      "unicode": "e67a",

      "unicode_decimal": 59002

    },

    {

      "icon_id": "12655353",

      "name": "校验",

      "font_class": "verify_line",

      "unicode": "e67b",

      "unicode_decimal": 59003

    },

    {

      "icon_id": "12655355",

      "name": "详情",

      "font_class": "details_line",

      "unicode": "e67d",

      "unicode_decimal": 59005

    },

    {

      "icon_id": "12655356",

      "name": "压缩文件",

      "font_class": "zipped_line",

      "unicode": "e67e",

      "unicode_decimal": 59006

    },

    {

      "icon_id": "12655357",

      "name": "用户",

      "font_class": "user_line",

      "unicode": "e67f",

      "unicode_decimal": 59007

    },

    {

      "icon_id": "12655358",

      "name": "预警",

      "font_class": "alert_line",

      "unicode": "e680",

      "unicode_decimal": 59008

    },

    {

      "icon_id": "12655359",

      "name": "硬盘",

      "font_class": "hdd_line",

      "unicode": "e681",

      "unicode_decimal": 59009

    },

    {

      "icon_id": "12655360",

      "name": "预警命中",

      "font_class": "Earlywarninghit_line",

      "unicode": "e682",

      "unicode_decimal": 59010

    },

    {

      "icon_id": "12655362",

      "name": "邮件",

      "font_class": "mail_line",

      "unicode": "e684",

      "unicode_decimal": 59012

    },

    {

      "icon_id": "12655363",

      "name": "音乐文件",

      "font_class": "Musicfiles_line",

      "unicode": "e685",

      "unicode_decimal": 59013

    },

    {

      "icon_id": "12655364",

      "name": "暂停",

      "font_class": "timeout_line",

      "unicode": "e686",

      "unicode_decimal": 59014

    },

    {

      "icon_id": "12655365",

      "name": "智能搜索",

      "font_class": "Smartsearch_line",

      "unicode": "e687",

      "unicode_decimal": 59015

    },

    {

      "icon_id": "12655367",

      "name": "源码文件",

      "font_class": "Sourcefile_line",

      "unicode": "e689",

      "unicode_decimal": 59017

    },

    {

      "icon_id": "12655368",

      "name": "账单",

      "font_class": "bill_line",

      "unicode": "e68a",

      "unicode_decimal": 59018

    },

    {

      "icon_id": "12655369",

      "name": "账单分析",

      "font_class": "Billanalysis_line",

      "unicode": "e68b",

      "unicode_decimal": 59019

    },

    {

      "icon_id": "12655370",

      "name": "转码",

      "font_class": "Transcoding_line",

      "unicode": "e68c",

      "unicode_decimal": 59020

    },

    {

      "icon_id": "12655371",

      "name": "阵列",

      "font_class": "Array_line",

      "unicode": "e68d",

      "unicode_decimal": 59021

    },

    {

      "icon_id": "12655372",

      "name": "折线图",

      "font_class": "linechart_line",

      "unicode": "e68e",

      "unicode_decimal": 59022

    },

    {

      "icon_id": "12655373",

      "name": "共同联系人",

      "font_class": "Commoncontact_line",

      "unicode": "e68f",

      "unicode_decimal": 59023

    },

    {

      "icon_id": "12655374",

      "name": "审计中心",

      "font_class": "AuditCenter_line",

      "unicode": "e690",

      "unicode_decimal": 59024

    },

    {

      "icon_id": "12655375",

      "name": "话单分析",

      "font_class": "MachineTranslation_line",

      "unicode": "e691",

      "unicode_decimal": 59025

    },

    {

      "icon_id": "12655376",

      "name": "话单关系",

      "font_class": "Billrelation_line",

      "unicode": "e692",

      "unicode_decimal": 59026

    },

    {

      "icon_id": "12655377",

      "name": "提取",

      "font_class": "extract_line",

      "unicode": "e693",

      "unicode_decimal": 59027

    },

    {

      "icon_id": "12655378",

      "name": "设备",

      "font_class": "device_line",

      "unicode": "e694",

      "unicode_decimal": 59028

    },

    {

      "icon_id": "12655379",

      "name": "列表模式",

      "font_class": "Listmode_line",

      "unicode": "e695",

      "unicode_decimal": 59029

    },

    {

      "icon_id": "12655380",

      "name": "时序图",

      "font_class": "Timingdiagram_line",

      "unicode": "e696",

      "unicode_decimal": 59030

    },

    {

      "icon_id": "12655381",

      "name": "热力图",

      "font_class": "Heatmap_line",

      "unicode": "e697",

      "unicode_decimal": 59031

    },

    {

      "icon_id": "12655382",

      "name": "视图",

      "font_class": "view_line",

      "unicode": "e698",

      "unicode_decimal": 59032

    },

    {

      "icon_id": "12655384",

      "name": "柱状图",

      "font_class": "Histogram_line",

      "unicode": "e699",

      "unicode_decimal": 59033

    },

    {

      "icon_id": "12655385",

      "name": "保存",

      "font_class": "save_line",

      "unicode": "e69a",

      "unicode_decimal": 59034

    },

    {

      "icon_id": "12655386",

      "name": "案件中心",

      "font_class": "Casecenter_line",

      "unicode": "e69b",

      "unicode_decimal": 59035

    },

    {

      "icon_id": "12655387",

      "name": "PDF文件",

      "font_class": "pdffile_line",

      "unicode": "e69c",

      "unicode_decimal": 59036

    },

    {

      "icon_id": "12655388",

      "name": "记录",

      "font_class": "recording_line",

      "unicode": "e69d",

      "unicode_decimal": 59037

    },

    {

      "icon_id": "12655389",

      "name": "桌面",

      "font_class": "desktop_line",

      "unicode": "e69e",

      "unicode_decimal": 59038

    },

    {

      "icon_id": "12655390",

      "name": "布控",

      "font_class": "Deployment_line",

      "unicode": "e69f",

      "unicode_decimal": 59039

    },

    {

      "icon_id": "12655391",

      "name": "不可见",

      "font_class": "Invisible_line",

      "unicode": "e6a0",

      "unicode_decimal": 59040

    },

    {

      "icon_id": "12655392",

      "name": "资源下载",

      "font_class": "Download_line",

      "unicode": "e6a6",

      "unicode_decimal": 59046

    },

    {

      "icon_id": "12655393",

      "name": "窗口最大化",

      "font_class": "Windowmaximization_line",

      "unicode": "e6aa",

      "unicode_decimal": 59050

    },

    {

      "icon_id": "12655394",

      "name": "差异性",

      "font_class": "difference_line",

      "unicode": "e6ab",

      "unicode_decimal": 59051

    },

    {

      "icon_id": "12655395",

      "name": "导出",

      "font_class": "Export_line",

      "unicode": "e6ac",

      "unicode_decimal": 59052

    },

    {

      "icon_id": "12655396",

      "name": "窗口化",

      "font_class": "Windowing_line",

      "unicode": "e6ad",

      "unicode_decimal": 59053

    },

    {

      "icon_id": "12655397",

      "name": "第一页",

      "font_class": "Thefirstpage_line",

      "unicode": "e6ae",

      "unicode_decimal": 59054

    },

    {

      "icon_id": "12655398",

      "name": "关系图",

      "font_class": "relationchart_line",

      "unicode": "e6af",

      "unicode_decimal": 59055

    },

    {

      "icon_id": "12655399",

      "name": "布控命中",

      "font_class": "Clothcontrolhit_line",

      "unicode": "e6b0",

      "unicode_decimal": 59056

    },

    {

      "icon_id": "12655400",

      "name": "返回",

      "font_class": "return_line",

      "unicode": "e6b1",

      "unicode_decimal": 59057

    },

    {

      "icon_id": "12655401",

      "name": "雕复",

      "font_class": "Carving_line",

      "unicode": "e6b2",

      "unicode_decimal": 59058

    },

    {

      "icon_id": "12655402",

      "name": "更多",

      "font_class": "More_line",

      "unicode": "e6b3",

      "unicode_decimal": 59059

    },

    {

      "icon_id": "12655403",

      "name": "触发器",

      "font_class": "trigger_line",

      "unicode": "e6b4",

      "unicode_decimal": 59060

    },

    {

      "icon_id": "12655404",

      "name": "个人数据库",

      "font_class": "Personaldatabase_line",

      "unicode": "e6b5",

      "unicode_decimal": 59061

    },

    {

      "icon_id": "12655405",

      "name": "采集",

      "font_class": "collection_line",

      "unicode": "e6b6",

      "unicode_decimal": 59062

    },

    {

      "icon_id": "12655406",

      "name": "案件",

      "font_class": "case_line",

      "unicode": "e6b7",

      "unicode_decimal": 59063

    },

    {

      "icon_id": "12655407",

      "name": "旋转",

      "font_class": "Spin_line",

      "unicode": "e6b8",

      "unicode_decimal": 59064

    },

    {

      "icon_id": "12655408",

      "name": "分区",

      "font_class": "Partition_line",

      "unicode": "e6b9",

      "unicode_decimal": 59065

    },

    {

      "icon_id": "12655409",

      "name": "复制",

      "font_class": "copy_line",

      "unicode": "e6ba",

      "unicode_decimal": 59066

    },

    {

      "icon_id": "12655410",

      "name": "放大至全屏",

      "font_class": "Zoomintofullscreen-line",

      "unicode": "e6bb",

      "unicode_decimal": 59067

    },

    {

      "icon_id": "12655411",

      "name": "地图",

      "font_class": "map_line",

      "unicode": "e6bc",

      "unicode_decimal": 59068

    },

    {

      "icon_id": "12655412",

      "name": "工具箱",

      "font_class": "Toolbox_line",

      "unicode": "e6bd",

      "unicode_decimal": 59069

    },

    {

      "icon_id": "12655413",

      "name": "公有数据",

      "font_class": "Publicdata_line",

      "unicode": "e6be",

      "unicode_decimal": 59070

    },

    {

      "icon_id": "12655414",

      "name": "电子数据",

      "font_class": "digitaldata_line",

      "unicode": "e6bf",

      "unicode_decimal": 59071

    },

    {

      "icon_id": "12655415",

      "name": "播放",

      "font_class": "Play_line",

      "unicode": "e6c0",

      "unicode_decimal": 59072

    },

    {

      "icon_id": "12655416",

      "name": "关联",

      "font_class": "Related_line",

      "unicode": "e6c1",

      "unicode_decimal": 59073

    },

    {

      "icon_id": "12655417",

      "name": "分析",

      "font_class": "analysis_line",

      "unicode": "e6c2",

      "unicode_decimal": 59074

    },

    {

      "icon_id": "12655418",

      "name": "工具",

      "font_class": "tool_line",

      "unicode": "e6c3",

      "unicode_decimal": 59075

    },

    {

      "icon_id": "12655420",

      "name": "话单",

      "font_class": "Contacts_line",

      "unicode": "e6c4",

      "unicode_decimal": 59076

    },

    {

      "icon_id": "12655421",

      "name": "固件",

      "font_class": "Firmware_line",

      "unicode": "e6c5",

      "unicode_decimal": 59077

    },

    {

      "icon_id": "12655422",

      "name": "恢复",

      "font_class": "restore_line",

      "unicode": "e6c6",

      "unicode_decimal": 59078

    },

    {

      "icon_id": "12655423",

      "name": "函数",

      "font_class": "function_line",

      "unicode": "e6c7",

      "unicode_decimal": 59079

    },

    {

      "icon_id": "12655424",

      "name": "可见",

      "font_class": "visible_line",

      "unicode": "e6c8",

      "unicode_decimal": 59080

    },

    {

      "icon_id": "12655425",

      "name": "汇总报表",

      "font_class": "Summaryreport_line",

      "unicode": "e6c9",

      "unicode_decimal": 59081

    },

    {

      "icon_id": "12655426",

      "name": "历史记录",

      "font_class": "historyrecord_line",

      "unicode": "e6ca",

      "unicode_decimal": 59082

    },

    {

      "icon_id": "12655427",

      "name": "截屏",

      "font_class": "Screenshot_line",

      "unicode": "e6cb",

      "unicode_decimal": 59083

    },

    {

      "icon_id": "12655428",

      "name": "联系人",

      "font_class": "Contactperson_line",

      "unicode": "e6cc",

      "unicode_decimal": 59084

    },

    {

      "icon_id": "12655429",

      "name": "介质",

      "font_class": "medium_line",

      "unicode": "e6cd",

      "unicode_decimal": 59085

    },

    {

      "icon_id": "12655430",

      "name": "检索",

      "font_class": "Search_line",

      "unicode": "e6ce",

      "unicode_decimal": 59086

    },

    {

      "icon_id": "12655431",

      "name": "命中",

      "font_class": "Hit_line",

      "unicode": "e6cf",

      "unicode_decimal": 59087

    },

    {

      "icon_id": "12655432",

      "name": "话单时序",

      "font_class": "Billtiming_line",

      "unicode": "e6d0",

      "unicode_decimal": 59088

    },

    {

      "icon_id": "12655433",

      "name": "配置",

      "font_class": "Configuration_line",

      "unicode": "e6d1",

      "unicode_decimal": 59089

    },

    {

      "icon_id": "12655434",

      "name": "全部下载",

      "font_class": "Downloadall_line",

      "unicode": "e6d2",

      "unicode_decimal": 59090

    },

    {

      "icon_id": "12655435",

      "name": "清空",

      "font_class": "Empty_line",

      "unicode": "e6d3",

      "unicode_decimal": 59091

    },

    {

      "icon_id": "12655436",

      "name": "居住地",

      "font_class": "Placeofresidence_line",

      "unicode": "e6d4",

      "unicode_decimal": 59092

    },

    {

      "icon_id": "12655437",

      "name": "内存镜像",

      "font_class": "Memorymirroring_line",

      "unicode": "e6d5",

      "unicode_decimal": 59093

    },

    {

      "icon_id": "12655438",

      "name": "密码",

      "font_class": "password_line",

      "unicode": "e6d6",

      "unicode_decimal": 59094

    },

    {

      "icon_id": "12655439",

      "name": "上一级",

      "font_class": "upperlevel_line",

      "unicode": "e6d7",

      "unicode_decimal": 59095

    },

    {

      "icon_id": "12655440",

      "name": "时序",

      "font_class": "Timing_line",

      "unicode": "e6d8",

      "unicode_decimal": 59096

    },

    {

      "icon_id": "12655441",

      "name": "删除",

      "font_class": "delete_line",

      "unicode": "e6d9",

      "unicode_decimal": 59097

    },

    {

      "icon_id": "12655442",

      "name": "上一页",

      "font_class": "Previous_line",

      "unicode": "e6da",

      "unicode_decimal": 59098

    },

    {

      "icon_id": "12655443",

      "name": "视频",

      "font_class": "video_line",

      "unicode": "e6db",

      "unicode_decimal": 59099

    },

    {

      "icon_id": "12655444",

      "name": "视频文件",

      "font_class": "Videofile_line",

      "unicode": "e6dc",

      "unicode_decimal": 59100

    },

    {

      "icon_id": "12655445",

      "name": "视频侦查",

      "font_class": "Videoreconnaissance_line",

      "unicode": "e6dd",

      "unicode_decimal": 59101

    },

    {

      "icon_id": "12655447",

      "name": "收藏",

      "font_class": "Collect_line",

      "unicode": "e6de",

      "unicode_decimal": 59102

    },

    {

      "icon_id": "12655448",

      "name": "任务",

      "font_class": "task_line",

      "unicode": "e6df",

      "unicode_decimal": 59103

    },

    {

      "icon_id": "12655449",

      "name": "痕迹",

      "font_class": "trace_line",

      "unicode": "e6e0",

      "unicode_decimal": 59104

    },

    {

      "icon_id": "12655450",

      "name": "数据库",

      "font_class": "packet_line",

      "unicode": "e6e1",

      "unicode_decimal": 59105

    },

    {

      "icon_id": "12655451",

      "name": "添加",

      "font_class": "add_line",

      "unicode": "e6e2",

      "unicode_decimal": 59106

    },

    {

      "icon_id": "12655452",

      "name": "首页",

      "font_class": "home_line",

      "unicode": "e6e3",

      "unicode_decimal": 59107

    },

    {

      "icon_id": "12655453",

      "name": "视频恢复",

      "font_class": "Videorecovery_line",

      "unicode": "e6e4",

      "unicode_decimal": 59108

    },

    {

      "icon_id": "12655454",

      "name": "碎片",

      "font_class": "Debris_line",

      "unicode": "e6e5",

      "unicode_decimal": 59109

    },

    {

      "icon_id": "12655455",

      "name": "手动下载",

      "font_class": "Manualdownload_line",

      "unicode": "e6e6",

      "unicode_decimal": 59110

    },

    {

      "icon_id": "12655456",

      "name": "刷新",

      "font_class": "Refresh_line",

      "unicode": "e6e7",

      "unicode_decimal": 59111

    },

    {

      "icon_id": "12655457",

      "name": "缩小至窗口",

      "font_class": "Zoomouttowindow_line",

      "unicode": "e6e8",

      "unicode_decimal": 59112

    },

    {

      "icon_id": "12655458",

      "name": "私有数据",

      "font_class": "Privatedata_line",

      "unicode": "e6e9",

      "unicode_decimal": 59113

    },

    {

      "icon_id": "12655459",

      "name": "手机镜像",

      "font_class": "Phonemirror_line",

      "unicode": "e6ea",

      "unicode_decimal": 59114

    },

    {

      "icon_id": "12655460",

      "name": "通话频率",

      "font_class": "Callfrequency_line",

      "unicode": "e6eb",

      "unicode_decimal": 59115

    },

    {

      "icon_id": "12655461",

      "name": "图片",

      "font_class": "image",

      "unicode": "e6ec",

      "unicode_decimal": 59116

    },

    {

      "icon_id": "12655462",

      "name": "通话轨迹",

      "font_class": "Calltrack_line",

      "unicode": "e6ed",

      "unicode_decimal": 59117

    },

    {

      "icon_id": "12655463",

      "name": "图表文件",

      "font_class": "Chartfile_line",

      "unicode": "e6ee",

      "unicode_decimal": 59118

    },

    {

      "icon_id": "12655466",

      "name": "停止",

      "font_class": "stop_line",

      "unicode": "e6f0",

      "unicode_decimal": 59120

    },

    {

      "icon_id": "12655467",

      "name": "尾页",

      "font_class": "lastpage_line",

      "unicode": "e6f1",

      "unicode_decimal": 59121

    },

    {

      "icon_id": "12655468",

      "name": "我的文档",

      "font_class": "mydocument_line",

      "unicode": "e6f2",

      "unicode_decimal": 59122

    },

    {

      "icon_id": "12655469",

      "name": "文件预览",

      "font_class": "Filepreview_line",

      "unicode": "e6f3",

      "unicode_decimal": 59123

    },

    {

      "icon_id": "12655470",

      "name": "图片文件",

      "font_class": "Picturefile_line",

      "unicode": "e6f4",

      "unicode_decimal": 59124

    },

    {

      "icon_id": "12655471",

      "name": "文档修复",

      "font_class": "Documentrepair_line",

      "unicode": "e6f5",

      "unicode_decimal": 59125

    },

    {

      "icon_id": "12655472",

      "name": "未知文件",

      "font_class": "Unknownfile_line",

      "unicode": "e6f6",

      "unicode_decimal": 59126

    },

    {

      "icon_id": "12655474",

      "name": "系统设置",

      "font_class": "Systemsettings_line",

      "unicode": "e6f8",

      "unicode_decimal": 59128

    },

    {

      "icon_id": "12655475",

      "name": "文件夹",

      "font_class": "folder_line",

      "unicode": "e6f9",

      "unicode_decimal": 59129

    },

    {

      "icon_id": "12655476",

      "name": "排序",

      "font_class": "Sort_line",

      "unicode": "e6fa",

      "unicode_decimal": 59130

    },

    {

      "icon_id": "12655477",

      "name": "文档文件",

      "font_class": "Documentfile_line",

      "unicode": "e6fb",

      "unicode_decimal": 59131

    },

    {

      "icon_id": "12655478",

      "name": "系统数据库",

      "font_class": "Systemdatabase_line",

      "unicode": "e6fc",

      "unicode_decimal": 59132

    },

    {

      "icon_id": "12655479",

      "name": "扫描",

      "font_class": "scanning_line",

      "unicode": "e6fd",

      "unicode_decimal": 59133

    },

    {

      "icon_id": "12656598",

      "name": "最小化",

      "font_class": "minimize_line",

      "unicode": "e6fe",

      "unicode_decimal": 59134

    },

    {

      "icon_id": "12656786",

      "name": "展开",

      "font_class": "Unfold_line",

      "unicode": "e6ff",

      "unicode_decimal": 59135

    },

    {

      "icon_id": "12656851",

      "name": "人物画像",

      "font_class": "Characterportrait_line",

      "unicode": "e700",

      "unicode_decimal": 59136

    },

    {

      "icon_id": "12656905",

      "name": "关闭",

      "font_class": "shutdown_line",

      "unicode": "e701",

      "unicode_decimal": 59137

    },

    {

      "icon_id": "12656909",

      "name": "收起",

      "font_class": "Collapse_line",

      "unicode": "e702",

      "unicode_decimal": 59138

    },

    {

      "icon_id": "12858911",

      "name": "下一页",

      "font_class": "Nextpage_line",

      "unicode": "e601",

      "unicode_decimal": 58881

    },

    {

      "icon_id": "13283272",

      "name": "无子集",

      "font_class": "Nosubset_line",

      "unicode": "e602",

      "unicode_decimal": 58882

    },

    {

      "icon_id": "13283273",

      "name": "编辑",

      "font_class": "edit_line",

      "unicode": "e603",

      "unicode_decimal": 58883

    },

    {

      "icon_id": "13283274",

      "name": "验证码",

      "font_class": "Captcha_line",

      "unicode": "e604",

      "unicode_decimal": 58884

    },

    {

      "icon_id": "13283275",

      "name": "有子集",

      "font_class": "Hasasubset_line",

      "unicode": "e605",

      "unicode_decimal": 58885

    },

    {

      "icon_id": "13283276",

      "name": "搜索",

      "font_class": "searchfor_line",

      "unicode": "e606",

      "unicode_decimal": 58886

    },

    {

      "icon_id": "13292791",

      "name": "复选默认",

      "font_class": "Checkdefault_line",

      "unicode": "e607",

      "unicode_decimal": 58887

    },

    {

      "icon_id": "13292792",

      "name": "单选选中",

      "font_class": "Singleselection_line",

      "unicode": "e608",

      "unicode_decimal": 58888

    },

    {

      "icon_id": "13292793",

      "name": "单选默认",

      "font_class": "Radiodefault_line",

      "unicode": "e609",

      "unicode_decimal": 58889

    },

    {

      "icon_id": "13292794",

      "name": "复选半选",

      "font_class": "Checkhalf_line",

      "unicode": "e60a",

      "unicode_decimal": 58890

    },

    {

      "icon_id": "13292795",

      "name": "复选全选",

      "font_class": "Checkall_line",

      "unicode": "e60b",

      "unicode_decimal": 58891

    },

    {

      "icon_id": "14191673",

      "name": "搜索",

      "font_class": "searchfor",

      "unicode": "e6a8",

      "unicode_decimal": 59048

    },

    {

      "icon_id": "14167421",

      "name": "清除",

      "font_class": "Clear",

      "unicode": "ec6b",

      "unicode_decimal": 60523

    },

    {

      "icon_id": "14167422",

      "name": "拍照",

      "font_class": "takephotos",

      "unicode": "ec74",

      "unicode_decimal": 60532

    },

    {

      "icon_id": "14167423",

      "name": "案件",

      "font_class": "cases",

      "unicode": "ec75",

      "unicode_decimal": 60533

    },

    {

      "icon_id": "14167385",

      "name": "标签",

      "font_class": "tag",

      "unicode": "ec5f",

      "unicode_decimal": 60511

    },

    {

      "icon_id": "14167387",

      "name": "案件类型",

      "font_class": "CaseType",

      "unicode": "ec61",

      "unicode_decimal": 60513

    },

    {

      "icon_id": "14167388",

      "name": "查看日志",

      "font_class": "Viewlog",

      "unicode": "ec62",

      "unicode_decimal": 60514

    },

    {

      "icon_id": "14167389",

      "name": "关于我们",

      "font_class": "AboutUs",

      "unicode": "ec63",

      "unicode_decimal": 60515

    },

    {

      "icon_id": "14167392",

      "name": "卡片模式",

      "font_class": "cards",

      "unicode": "ec65",

      "unicode_decimal": 60517

    },

    {

      "icon_id": "14167395",

      "name": "录制",

      "font_class": "record",

      "unicode": "ec68",

      "unicode_decimal": 60520

    },

    {

      "icon_id": "14167396",

      "name": "添加",

      "font_class": "add",

      "unicode": "ec69",

      "unicode_decimal": 60521

    },

    {

      "icon_id": "14167398",

      "name": "设备",

      "font_class": "facility",

      "unicode": "ec6a",

      "unicode_decimal": 60522

    },

    {

      "icon_id": "14167400",

      "name": "列表模式",

      "font_class": "ListMode",

      "unicode": "ec6c",

      "unicode_decimal": 60524

    },

    {

      "icon_id": "14167401",

      "name": "设置",

      "font_class": "install",

      "unicode": "ec6d",

      "unicode_decimal": 60525

    },

    {

      "icon_id": "14167404",

      "name": "照片",

      "font_class": "Photos",

      "unicode": "ec6f",

      "unicode_decimal": 60527

    },

    {

      "icon_id": "14167405",

      "name": "删除",

      "font_class": "delete",

      "unicode": "ec70",

      "unicode_decimal": 60528

    },

    {

      "icon_id": "14167406",

      "name": "升级",

      "font_class": "update",

      "unicode": "ec71",

      "unicode_decimal": 60529

    },

    {

      "icon_id": "14167408",

      "name": "文件夹",

      "font_class": "folder",

      "unicode": "ec73",

      "unicode_decimal": 60531

    },

    {

      "icon_id": "14132529",

      "name": "重启",

      "font_class": "restart",

      "unicode": "e6a1",

      "unicode_decimal": 59041

    },

    {

      "icon_id": "14132530",

      "name": "密码",

      "font_class": "mima",

      "unicode": "e6a2",

      "unicode_decimal": 59042

    },

    {

      "icon_id": "14132531",

      "name": "报表",

      "font_class": "report",

      "unicode": "e6a3",

      "unicode_decimal": 59043

    },

    {

      "icon_id": "14132532",

      "name": "退出",

      "font_class": "quit",

      "unicode": "e6a4",

      "unicode_decimal": 59044

    },

    {

      "icon_id": "14132533",

      "name": "数据",

      "font_class": "packet",

      "unicode": "e6a5",

      "unicode_decimal": 59045

    }

  ]

    }

  },

}

</script>

<style>

  .demo-wrap{

    display: flex;

    flex-wrap: wrap;

  }

  .icon-item{

    width: 160px;

    height: 100px;

    padding: 10px 0;

    border: 1px solid;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: space-around;

    cursor: pointer;

    position: relative;

    overflow: hidden;

    font-size: 12px;

  }

  .icon-item:hover .copy{

    bottom: 0;

  }

  .icon{

    display:inline-block;

    font-size: 24px;

    text-align: center;

  }

  .copy{

    position: absolute;

    width: 100%;

    height: 40px;

    background: #000;

    bottom: -40px;

    left: 0;

    text-align: center;

    line-height: 40px;

    color: #fff;

    opacity: 0.8;

    transition: 0.3s;

    font-size: 12px;

  }

  .tips-info{

    position: absolute;

    top: -30px;

    left: 0;

    width: 100%;

    height: 30px;

    text-align: center;

    line-height: 30px;

    background: green;

    opacity: 0.6;

    color: #fff;

    transition: 0.3s;

    font-size: 12px;

  }

  .active{

    top: 0;

  }

  .set-class{

    margin-bottom: 20px;

  }

</style>

### 使用

```html
<!-- 第一种方式 -->

<xly-icon type="timeout"></xly-icon>

<xly-icon type="Import"></xly-icon>

<!-- 第二种方式 -->

<i class="xly_icon_timeout"> </i>

<i class="xly_icon_Import"> </i>
```
