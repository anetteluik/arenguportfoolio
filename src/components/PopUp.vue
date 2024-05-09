<template>
    <div class="popUp">
        <div class="popUpText">
        </div>
        <div class="popUpImage">
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

function toggleSection(section) {
    if (currentlyOpenSection.value === section) {
        currentlyOpenSection.value = null;
    } else {
        currentlyOpenSection.value = section
    }
}

let allSections = {
    akadeemilineAreng: "akadeemilineAreng",
    praktika: "praktika",
    erialasedTegevused: 'erialasedTegevused'
}

let currentlyOpenSection = ref(null);
const props = defineProps(['shown']);
</script>

<style scoped>
.popUp {
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 100vh;
    position: fixed;
    background-color: #D9D9D9;
}

.popUpText {
    width: 65%;
    height: 100%;
}

.popUpImage {
    width: 35%;
    height: 100%;
    background-color: blue;
}
</style>