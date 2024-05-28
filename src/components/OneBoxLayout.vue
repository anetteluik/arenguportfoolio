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
    bottom: 24px;
    /* Adjust vertical position */
    left: 40px;
    /* Adjust horizontal position */
    color: #EFEDEB;
    padding-right: 40px;
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
    cursor: pointer;
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

.backg {
    transition: transform 0.3s ease;
    /* Transition effect for smooth zoom */
}

.backg:hover {
    transform: scale(1.05);
    /* Zoom effect on hover */
}

@media only screen and (max-width: 600px) {
    .moodulSectionTwo {
        margin-top: 24px;
    }

    .imgText {
        position: absolute;
        bottom: 24px;
        /* Adjust vertical position */
        left: 24px;
        /* Adjust horizontal position */
        color: #EFEDEB;
        padding-right: 16px;
    }
}
</style>