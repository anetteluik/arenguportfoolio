<template>
    <div class="menu" :class="{'active':props.shown}">
        <div class="navOption">
            <h2>Akadeemiline areng</h2>
        </div>
        <div class="navOption">
            <h2>Praktika</h2>
        </div>
        <div class="navOption">
            <h2>Erialased tegevused</h2>
        </div>
        <div class="navOption">
            <h2>Minust</h2>
        </div>
        <div class="navOption">
            <h2>Enesereflektsioon</h2>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue';

const props = defineProps(['shown']);
</script>

<style scoped>
.menu {
    z-index: 9;
  position: fixed;
  top: 0;
  transform: translateX(100%); /* Initially hide the menu off-screen */
  right: 0;
  width: 100vw; /* Set menu width */
  height: 100vh; /* Set menu height */
  background-color: #fff; /* Set menu background color */
  transition: transform 0.3s ease-in-out; /* Transition effect */
}

.menu.active {
  transform: translateX(0); /* Slide menu in from the right */
}
</style>