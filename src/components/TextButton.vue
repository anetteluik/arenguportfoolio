<template>
  <div class="buttonWrapper"> 
    <div class="button">
      <p>
        <slot></slot>
      </p>
      <!-- Use the img prop if provided, otherwise use a default image -->
      <img :src="'/arenguportfoolio/src/assets/img/'+getImageSource(imgType)" :alt="alt">
    </div>
  </div>
</template>



<script setup>
// Import the defineProps function from 'vue'
import { defineProps } from 'vue';

// Define the props for the component
const props = defineProps({
  imgType: 'upright' | 'right', // Declare img prop
  alt: String, // Declare alt prop
  customImgProp: String // Declare customImgProp prop
});

function getImageSource(imgType) {
  switch (imgType) {
    case 'upright':
      return "upright-arrow.svg";
    case 'right':
      return "right-arrow.svg";
    default:
      return "arrow.svg";
  }
}
</script>

<style scoped>
.buttonWrapper {
  display: flex;
  justify-content: right;
}

.button {
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
}

.button p {
  padding-right: 8px;
  margin: 0;
  white-space: nowrap;
}

.button img {
  height: 1em;
  width: 1em;
  align-self: center;
}
</style>