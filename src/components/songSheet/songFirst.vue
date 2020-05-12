<template>
  <div>
    <div class="con">
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-3 left">
          <img :src="subdesc.coverImgUrl" class="sheetimg" />
        </div>
        <div class="col-md-8 col-sm-8 col-xs-8 right">
          <h2>{{ subdesc.name }}</h2>
          <p>{{ subdesc.createTime | formatDate }}创建</p>
          <div class="btn-toolbar">
            <button class="btn">收藏{{ subdesc.subscribedCount }}</button>
            <button class="btn">分享{{ subdesc.shareCount }}</button>
            <button class="btn">下载{{ subdesc.commentCount }}</button>
            <button class="btn">评论{{ subdesc.commentCount }}</button>
          </div>
          <p>
            标签
            <button
              class="btn btn-info"
              v-for="(item, index) in subdesc.tags"
              :key="index"
            >
              {{ item }}
            </button>
          </p>
          <p>{{ subdesc.description }}</p>
        </div>
      </div>

      <h3>
        歌曲推荐 <span class="ss">{{ subdesc.trackCount }}首歌</span
        ><span class="ss">播放{{ subdesc.playCount }}次</span>
      </h3>
      <table-list :listData="sheepList"></table-list>
      <el-pagination
        background
        @current-change="changePage"
        layout="prev, pager, next"
        :total="totalCount"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import { formatDate } from "./date.js";
import TableList from "../tableList.vue";
import axios from "axios";
import { Vue, Component, Watch } from "vue-property-decorator";
@Component({
  components: {
    TableList
  },
  filters: {
    formatDate(time: Date) {
      const date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
})
export default class SongFirst extends Vue {
  subdesc = "";
  sheepList = [];
  totalCount = 0;
  currentPage = 1;

  created() {
    this.get();
  }

  get() {
    if (typeof this.$route.query.songId === "undefined") {
      return;
    }
    axios({
      url: "https://api.imjad.cn/cloudmusic/",
      method: "get",
      params: {
        type: "playlist",
        id: this.$route.query.songId,
        offest: this.currentPage - 1
      }
    }).then(res => {
      this.subdesc = res.data.playlist;
      this.sheepList = res.data.playlist.tracks;
      this.totalCount = res.data.playlist.trackCount;
    });
  }

  changePage(currentPage: number) {
    this.currentPage = currentPage;
    this.get();
  }

  @Watch("$route", { immediate: false, deep: false })
  pageChange() {
    this.get();
  }
}
</script>
<style scoped>
.con {
  width: 1200px;
  margin: 2rem auto;
}
.row {
  margin-bottom: 2rem;
}
.row .left .sheetimg {
  width: 300px;
  height: 300px;
}
.row .right {
  margin-left: 1rem;
}
.row .right h2 {
  font-size: 25px;
}
.row .right .btn-toolbar {
  margin: 0.8rem 0;
}
.row .right button {
  margin-right: 0.5rem;
}
.row .right p {
  font-size: 14px;
  color: #ccc;
  border-radius: 5px;
}
h3 .ss {
  display: inline-block;
  margin-left: 2rem;
  font-size: 20px;
}
</style>
