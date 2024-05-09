<template>
    <div class="moodulSectionTwo">
        <div class="moodulTwo">
            <slot></slot>
            <div class="gradient"></div>
            <div class="imgText">
                <h5>
                    {{ title }}
                </h5>
                <p>
                    {{ text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Define the props for the component
const props = defineProps(['title', 'text']);
</script>

<style scoped>
.imgText {
    position: absolute;
    bottom: 40px;
    /* Adjust vertical position */
    left: 40px;
    /* Adjust horizontal position */
    color: #EFEDEB;
}

.imgText h5 {
    font-size: clamp(24px, 2vw, 32px);
}


.moodulSectionTwo {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60%;
    margin-top: 24px;
}

.moodulTwo {
    position: relative;
    width: 100%;
    height: 45vh;
    overflow: hidden;
}

.gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, #221517, transparent);
}
</style>