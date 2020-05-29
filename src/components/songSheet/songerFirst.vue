<template>
  <div>
    <div class="con">
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-3 left">
          <img :src="artist.img1v1Url" class="sheetimg" />
        </div>
        <div class="col-md-8 col-sm-8 col-xs-8 right">
          <h2>{{ artist.name }}</h2>
          <p>
            标签
            <button
              class="btn btn-info"
              v-for="(item, index) in artist.alias"
              :key="index"
            >
              {{ item }}
            </button>
          </p>
          <P>出版时间 {{ artist.publishTime | formatDate }}</P>
          <p class="desc">{{ artist.briefDesc }}</p>
        </div>
      </div>

      <h3>
        歌手推荐 <span class="ss">{{ artist.albumSize }}张专辑</span
        ><span class="ss">{{ artist.mvSize }}</span
        ><span class="ss">热门歌曲{{ artist.musicSize }}首</span>
      </h3>
      <table-list :listData="List"></table-list>
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
export default class SongerFirst extends Vue {
  artist = "";
  List = [];

  created() {
    this.get();
  }
  get() {
    if (typeof this.$route.query.songId === "undefined") return;
    axios({
      url: "https://api.imjad.cn/cloudmusic/",
      method: "get",
      params: {
        type: "artist",
        id: this.$route.query.songId
      }
    }).then(res => {
      this.artist = res.data.artist;
      this.List = res.data.hotSongs;
    });
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
.row .right .desc {
  color: #333;
}
h3 .ss {
  display: inline-block;
  margin-left: 2rem;
  font-size: 20px;
}
</style>
