<template>
  <div>
    <div class="con">
      <el-row>
        <el-col :span="6" v-for="(item, index) in sheepList" :key="index">
          <el-card>
            <router-link
              :to="{ path: '/playDetail', query: { djid: item.id } }"
            >
              <img :src="item.coverUrl" class="image" />
            </router-link>
            <div style="padding: 14px;">
              <span>{{ item.name }}</span>
              <p>评论---{{ item.commentCount }}</p>
              <el-tooltip
                effect="dark"
                :content="item.description"
                placement="top"
              >
                <p>{{ item.description }}</p>
              </el-tooltip>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { Vue, Component, Watch } from "vue-property-decorator";
@Component
export default class StationFirst extends Vue {
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
        type: "djradio",
        id: this.$route.query.songId
      }
    }).then(res => {
      this.sheepList = res.data.programs;
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
.el-col {
  border-radius: 4px;
  margin-bottom: 20px;
  height: 500px;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
}
.el-card {
  height: 100%;
}
img {
  width: 100%;
}
</style>
