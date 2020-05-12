<template>
  <div>
    <h3 class="text-center">歌曲播放页</h3>
    <div class="row">
      <div class="col-md-3 col-sm-3 col-xs-3"></div>
      <audio
        v-if="src"
        :src="src"
        controls
        autoplay
        class="col-md-6 col-sm-6 col-xs-6"
      ></audio>
      <h3 v-else class="text-center">暂时没有播放源</h3>
      <audio v-show="djsrc" :src="djsrc" controls></audio>
    </div>
    <h3 v-show="name" class="text-center">
      {{ name }}--<span>{{ songer }}</span>
    </h3>
    <div v-show="lyric" class="row">
      <div class="col-md-3 col-sm-3 col-xs-3"></div>
      <textarea class="col-md-6 col-sm-6 col-xs-6" v-model="lyric"></textarea>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { Vue, Component, Watch } from "vue-property-decorator";
@Component
export default class PlayDetail extends Vue {
  name: string | string[] = "";
  songer: string | string[] = "";
  lyric = "";
  src = "";
  djsrc = "";

  created() {
    this.get();
  }

  get() {
    if (typeof this.$route.query.djid != "undefined") {
      this.getStation(this.$route.query.djid);
      this.name = "";
      this.songer = "";
      this.lyric = "";
      this.src = "";
      return;
    }

    if (typeof this.$route.query.id === "undefined") return;
    axios({
      method: "get",
      url: "https://api.imjad.cn/cloudmusic/",
      params: {
        type: "lyric",
        id: this.$route.query.id
      }
    }).then(res => {
      this.lyric = res.data.lrc.lyric;
      this.name = this.$route.query.name;
      this.songer = this.$route.query.songer;
      this.getSrc(this.$route.query.id);
    });
  }

  //歌曲
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getSrc(id: any) {
    if (typeof id === "undefined" || id == 0) return;
    axios
      .get("https://api.imjad.cn/cloudmusic/?type=song&id=" + id)
      .then(res => {
        this.src = res.data.data[0].url;
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getStation(id: any) {
    axios.get("https://api.imjad.cn/cloudmusic/?type=dj&id=" + id).then(res => {
      this.djsrc = res.data.data[0].url;
    });
  }

  @Watch("$route", { immediate: false, deep: false })
  pageChange() {
    this.get();
  }
}
</script>
<style scoped>
h3 {
  margin: 1rem 0;
}
audio {
  width: 100%;
  height: 60px;
}
.text-center {
  text-align: center;
}
textarea {
  width: 100%;
  height: 600px;
  color: #daa520;
}
</style>
