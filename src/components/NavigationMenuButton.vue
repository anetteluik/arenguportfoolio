<template>
  <div class="menuToggleContainer" :class="{'active': shown}" 
  @click='$emit("toggle")'>
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 48px;
  height: 48px;
  right: 0;
  z-index: 20;
  margin-right: 138px;
  margin-top: 72px;
  cursor: pointer;
  background-color: #61131D;
  transition: background-color 0.5s ease 0.3s;
}

.menuToggleContainer.active {
  background-color: transparent;
  transition: background-color 0s ease 0s;
}

.menuToggle {
  display: flex;
  align-items: center;
  width: 38px;
  height: 14px;
  position: fixed;
}

.line {
  width: 100%;
  height: 3px;
  background-color: #EFEDEB;
  position: absolute;
  transition: all ease-in-out 0.15s;
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

@media only screen and (max-width: 1080px) {
  .menuToggleContainer {
  width: 48px;
  height: 48px;
  right: 0;
  z-index: 20;
  margin-right: 40px;
  margin-top: 24px;
  cursor: pointer;
}
}
</style>