<template>
    <div class="popUpWrapper" :class="{ 'show': shown }">
        <div class="popUp">
            <div class="backArrow" @click="$emit('close')"><img src="../assets/img/arrow-back.svg"
                    alt="Back button arrow icon"></div>

            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps(['shown']);
</script>

<style scoped>
.popUpWrapper {
    /* Initial state: hidden off-screen */
    transform: translateX(100%);
    transition: transform 1s ease;
    /* Additional styles for fixed position */
    position: fixed;
    top: 0;
    right: 0;
    min-height: 100vh;
    width: 100vw;
    z-index: 999;
    overflow-y: scroll;
}

.popUpWrapper.show {
    transform: translateX(0);
    transition: transform 1s ease;
}

.popUp {
    display: flex;
    flex-direction: row;
    width: 75vw;
    min-height: 100vh;
    justify-content: center;
    position: fixed;
    top: 0;
    /* Initially hide the menu off-screen */
    right: 0;
    z-index: 999 !important;
    background-color: #EFEDEB;
}

.backArrow {
    margin: 36px;
    position: absolute;
    left: 0;
    top: 0;
}

@media only screen and (max-width: 1500px) {
    .popUp {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
    }
    
}

@media only screen and (max-width: 600px) {
    .popUp {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        /* Initially hide the menu off-screen */
        right: 0;
    }
}

</style>