<template>
  <div>
    <el-upload list-type="picture-card" :limit="1" action="#" :on-preview="preview" :file-list="fileList">
      <i class="el-icon-plus" />
    </el-upload>
    <el-dialog :visible.sync="showDialog" title="图片预览">
      <img src="" alt="" style="width:100%;">
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [{ url: '' }],
      showDialog: false
    }
  },
  methods: {
    // 点击预览
    preview(file) {
      this.imgUrl = file.url
      this.showDialog = true
    }
  }
}
</script>

<style>

</style>
