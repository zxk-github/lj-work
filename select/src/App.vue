<template>
  <div id="app">
    <h1>document: {{title}}</h1>
    <h1>window: {{title1}}</h1>
    <h1>UA: {{ua}}</h1>
   <el-upload
        :action="upLoadUrl"
        :before-upload="beforeAvatarUploadImgLOGO"
        :limit="1"
        :on-success="handleAvatarSuccessImgLOGO"
        :on-remove="handleRemoveUploadImgLOGO"
    >
        <el-button size="small" type="primary">选择LOGO</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upLoadUrl: '/v1/' + 'common/file/upload/0/en', // 文件上传 
      
      obj: {
        value: '1'
      },
      title: '',
      title1: '',
      ua: ''
    }
  },
  mounted() {
    // this.value = '3'
    this.getDetail();
    var title = document.getElementsByTagName('title')[0];
    this.title = document.title||  title.text||  title.innerHTML;
    this.title1 = window.title;
    this.ua = window.navigator.userAgent;
  },
  methods: {
    handleAvatarSuccessImgLOGO(res, file) {
      console.log(res)
      console.log(file);
    },
    beforeAvatarUploadImgLOGO(file) {

    },
    handleRemoveUploadImgLOGO() {

    },




    getDetail() {
      var _this = this;
      setTimeout(function() {
        _this.obj = {
          value: '4'
        }
      }, 1000)
    }
  }
}
</script>

<style>
@import url("//unpkg.com/element-ui@2.4.9/lib/theme-chalk/index.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
