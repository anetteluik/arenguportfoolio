<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationMenu from "@/components/NavigationMenu.vue";
import NavigationMenuButton from "@/components/NavigationMenuButton.vue";
import { ref } from "vue";
import Footer from './components/Footer.vue';


let menuShown = ref(false)

function toggleMenu() {
  menuShown.value = !menuShown.value;
}

// window.addEventListener('load', () => {
//   window.scroll(0, 0);
//   const body = document.body;
//   const main = document.querySelector('main');

//   // We define variables we will need later. 
//   // 2 variables to store the scroll position and 2 variables to store the 
//   // container position.
//   let sx = 0;
//   let sy = 0;

//   let dx = sx;
//   let dy = sy;

//   // The trick is to set a height to the body to keep the browser scroll bar.
//   body.style.height = main.clientHeight + 'px';

//   // Then we fix our container so it won't move when the user scrolls.
//   // We will move it ourself with the Linear Interpolation and translations.
//   main.style.position = 'fixed';
//   main.style.top = 0;
//   main.style.left = 0;

//   // We bind a scroll event to the window to watch scroll position.
//   window.addEventListener('scroll', scroll);

//   function scroll() {
//     // We only update the scroll position variables
//     sx = window.scrollX;
//     sy = window.scrollY;
//   }

//   // Then we start a requestAnimationFrame loop. 

//   window.requestAnimationFrame(render);

//   function render() {
//     // We calculate our container position by using our Linear Interpolation method.
//     dx = lerp(dx, sx, 0.05);
//     dy = lerp(dy, sy, 0.05);

//     dx = Math.floor(dx * 100) / 100;
//     dy = Math.floor(dy * 100) / 100;
//     // Finally we translate our container to its new positions.
//     // Don't forget to add a minus sign because the container needs to move in 
//     // the opposite direction of the window scroll.
//     main.style.transform = `translate(-${dx}px, -${dy}px)`;

//     // And we loop again.
//     window.requestAnimationFrame(render);
//   }

//   // This is our Linear Interpolation method.
//   function lerp(a, b, n) {
//     return (1 - n) * a + n * b;
//   }

//   window.addEventListener('resize', () => {
//     body.style.height = main.clientHeight + 'px';
//   });

// });
</script>

<template>
  <router-link id="backToHome" to="/"><img src="/src/assets/img/logo.svg" alt=""></router-link>
  <NavigationMenuButton :shown="menuShown" @toggle="toggleMenu"></NavigationMenuButton>
  <NavigationMenu :shown="menuShown" @toggle="toggleMenu"></NavigationMenu>
  <main>
    <RouterView />
    <Footer></Footer>
  </main>
</template>

<style scoped>
#backToHome {
  position: absolute;
  top: 72px;
  left: 138px;
  cursor: pointer;
}

.router-link-active#backToHome {
  display: none;
}

@media only screen and (max-width: 1080px) {
  #backToHome {
  left: 40px;
  height: 24px;
  padding: 12px 0 12px 0;
  top: 24px;
  cursor: pointer;
}
}

</style>