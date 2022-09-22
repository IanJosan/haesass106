<template>
  <div>
    <svg-icon icon-class="eye" style="color:#fff; width: 20px; height: 20px" @click="changeScreen" />
  </div>
</template>

<script>
import Screenfull from 'screenfull'

export default {
  methods: {
    changeScreen() {
      if (!Screenfull.isEnabled) {
        this.$message.warning('无法操作')
        return
      }
      Screenfull.toggle()
    }
  }
}
</script>

<style>

</style>
