<template>
  <div>
    <el-table :data="listData" style="width: 100%">
      <el-table-column scoped="name" label="播放" width="180">
        <template slot-scope="{ row }">
          <router-link
            :to="{
              path: 'playDetail',
              query: {
                id: row.id,
                name: row.name,
                songer: row.ar[0].name,
                mv: row.mv
              }
            }"
          >
            <button class="btn btn-success">play</button>
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="歌曲标题" width="180">
      </el-table-column>
      <el-table-column prop="id" label="id" width="180"> </el-table-column>
      <el-table-column prop="ar[0].name" label="歌手"> </el-table-column>
      <el-table-column prop="al.name" label="专辑"> </el-table-column>
      <el-table-column prop="al.picUrl" label="专辑图片"> </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class TableList extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop({ required: true }) listData: any;
}
</script>
