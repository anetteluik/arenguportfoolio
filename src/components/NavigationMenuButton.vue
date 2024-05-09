<template>
  <div class="menuToggleContainer" @click='$emit("toggle")'>
    <div class="menuToggle" :class="{'active': shown}">
        <div class="line"></div>
        <div class="line"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['shown']);
</script>

<style scoped>
.menuToggleContainer {
  position: fixed;
  width: 38px;
  height: 14px;
  right: 0;
  z-index: 20;
  margin-right: 138px;
  margin-top: 72px;
}

.menuToggle {
  display: flex;
  align-items: center;
  width: 38px;
  height: 14px;
  position: fixed;
  cursor: pointer;
}

.line {
  width: 100%;
  height: 3px;
  background-color: #EFEDEB;
  position: absolute;
  transition: all ease 0.3s;
}

.menuToggle .line:nth-child(1) {
  margin-bottom: 10px;
}

.menuToggle .line:nth-child(2) {
  margin-top: 10px;
}

.menuToggle.active .line:nth-child(1) {
  transform: rotate(30deg);
  margin: 0;
}

.menuToggle.active .line:nth-child(2) {
  transform: rotate(-30deg);
  margin: 0;
}
</style>