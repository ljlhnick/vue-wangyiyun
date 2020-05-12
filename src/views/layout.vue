<template>
  <div>
    <h3>{{ title }}</h3>
    <el-row>
      <el-col :span="8" v-for="(item, index) in songList" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <router-link :to="{ path: path, query: { songId: item.id } }">
            <img :src="item.avatarUrl" class="image" />
          </router-link>
          <div style="padding: 14px;">
            <span>{{ item.desc }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.id }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import axios from "axios";
import { Route } from "vue-router";
@Component
export default class Layout extends Vue {
  title = "";
  songList = [];
  path = "";

  created() {
    // console.log("create", this.$router.currentRoute);
    this.get(this.$router.currentRoute);
  }

  get(router: Route) {
    //request local data.json file
    axios.get("../../data.json").then(res => {
      if (router.path === "/") {
        this.songList = res.data.songList;
        this.title = "歌单";
        this.path = "/songFirst";
      } else if (router.path === "/mymusic") {
        this.songList = res.data.mymusicList;
        this.title = "我的网易云";
        this.path = "/songFirst";
      } else if (router.path === "/musicer") {
        this.songList = res.data.songer;
        this.title = "歌手";
        this.path = "/songerFirst";
      } else if (router.path === "/station") {
        this.songList = res.data.stationList;
        this.title = "电台";
        this.path = "/staionFirst";
      } else {
        this.songList = [];
      }
    });
  }

  @Watch("$route", { immediate: false, deep: false })
  pageRefresh() {
    this.get(this.$router.currentRoute);
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
h3 {
  color: pink;
  padding: 20px;
}
.wrap {
  padding-left: 10px;
  position: relative;
  width: 300px;
  height: 300px;
  margin: 20px 0;
}
img {
  width: 100%;
  height: 400px;
}
.wrap img {
  display: block;
  width: 92%;
}
.wrap p {
  display: block;
  position: absolute;
  bottom: 0;
  width: 90%;
  height: 30px;
  line-height: 30px;
  background: yellow;
  opacity: 0.5;
  overflow: hidden;
}
</style>
