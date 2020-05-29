<template>
  <div id="app">
    <div class="">
      <!-- 搜索接口暂不支持
      <div class="col-md-3 col-sm-3 col-xs-3">
        <input type="text" class="form-control" placeholder="搜索" v-model="words" @keyup.enter="search(words)"/>
        <person-show :is-show="inputShow" @on-close="closeMsg('inputShow')">
           <ol>
             <li v-for="(item,index) in searchList" :key="index" class="select-li" @click="closeMsg('inputShow')">
             <router-link :to="{path:'/playDetail',query:{id:item.id,name:item.name,songer:item.ar[0].name}}">
             <p>{{item.name}}--{{item.ar[0].name}}--{{item.id}}</p>
             </router-link>
             </li>
          </ol>
        </person-show>
      </div> -->

      <el-dialog title="个人资料" :visible.sync="isShow">
        <el-avatar src="/3.jpg"></el-avatar>
        <el-progress :percentage="50"></el-progress>
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm">
          <el-form-item
            label="nickname"
            prop="nickname"
            :rules="[{ required: true, message: '请输入昵称' }]"
          >
            <el-input
              placeholder="昵称"
              v-model="dynamicValidateForm.nickname"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item
            label="性别"
            prop="sex"
            :rules="[{ required: true, message: '请输入性别' }]"
          >
            <el-input
              placeholder="性别"
              v-model="dynamicValidateForm.sex"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item
            label="年龄"
            prop="age"
            :rules="[{ required: true, message: '请输入年龄' }]"
          >
            <el-input
              placeholder="年龄"
              v-model="dynamicValidateForm.age"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item
            label="城市"
            prop="city"
            :rules="[{ required: true, message: '请输入城市' }]"
          >
            <el-input
              placeholder="城市"
              v-model="dynamicValidateForm.city"
              clearable
            ></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer">
          <el-button @click="isShow = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
      <el-menu-item v-for="(item, index) in menuList" :key="index">
        <router-link :to="{ path: item.path }">
          {{ item.name }}
        </router-link>
      </el-menu-item>
      <el-menu-item>
        <el-link type="primary" @click="showAboutMe">我的</el-link>
      </el-menu-item>
    </el-menu>
    <div class="con">
      <!-- <slide-show :slides="slides" :inv="inv"></slide-show> -->
      <el-carousel>
        <el-carousel-item v-for="(item, index) in slides" :key="index">
          <img :src="item.src" />
        </el-carousel-item>
      </el-carousel>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
// import SlideShow from "./components/slide";
export default {
  components: {
    // SlideShow
  },
  data() {
    return {
      menuList: [
        { id: 1, name: "网易云", path: "/" },
        { id: 2, name: "我的音乐", path: "/mymusic" },
        { id: 3, name: "歌手", path: "/musicer" },
        { id: 4, name: "电台", path: "/station" }
      ],
      slides: [
        {
          src: require("./assets/1.jpg"),
          title: "xxx1",
          href: "detail/analysis"
        },
        {
          src: require("./assets/2.jpg"),
          title: "xxx2",
          href: "detail/count"
        },
        {
          src: require("./assets/3.jpg"),
          title: "xxx3",
          href: "http://xxx.xxx.com"
        },
        {
          src: require("./assets/4.jpg"),
          title: "xxx4",
          href: "detail/forecast"
        }
      ],
      inv: 2000,
      words: "",
      searchList: [],
      isShow: false,
      inputShow: false,
      dynamicValidateForm: {
        nickname: "",
        sex: "",
        age: "",
        city: ""
      }
    };
  },
  methods: {
    // search(words) {
    //   this.$http
    //     .get("https://api.imjad.cn/cloudmusic/?type=search&s=" + this.words)
    //     .then(res => {
    //       this.searchList = res.data.result.songs;
    //       (this.inputShow = true), (this.words = "");
    //     });
    // },
    showAboutMe() {
      this.isShow = true;
    },
    closeMsg(attr) {
      this[attr] = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.isShow = false;
          console.log("success submit", valid);
        } else {
          console.log("error");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
}
.footer {
  width: 100%;
  height: 50px;
  background: #242424;
}
.footer h2 {
  color: #ccc;
}
.select-li {
  width: 600px;
  font-size: 16px;
}
.person .row {
  width: 100%;
  height: 60px;
}
.person .from-group span {
  color: red;
}

/* elementUI */
.el-carousel,
.el-carousel__container,
.el-carousel__item {
  height: 400px !important;
}
.el-carousel img {
  width: 100%;
  height: 100%;
}
.el-input {
  margin-bottom: 10px;
}
</style>
