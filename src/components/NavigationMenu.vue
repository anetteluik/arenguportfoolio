<template>
    <div class="menu" :class="{ 'active': props.shown }">
        <div class="navOption" @click="toggleSection(allSections.akadeemilineAreng)">
            <div class="option">Akadeemiline areng</div>
            <img src="../assets/img/arrow-down.svg" alt="Arrow Icon">
        </div>
        <div class="subsection">
            <ul v-if="currentlyOpenSection === allSections.akadeemilineAreng">
                <li>Graafilise disaini alused</li>
                <li>Kasutajakogemuse analüüs</li>
                <li>Veebikujundus</li>
                <li>Psühholoogia ja suhtlemine</li>
                <li>Tootearendus</li>
                <li>Arvutite riistvara ja võrgud</li>
                <li>Programmeerimise alused</li>
                <li>Veebiarendus ja haldus</li>
                <li>Karjääriplaneerimine ja ettevõtlus</li>
            </ul>
        </div>
        <div class="navOption" @click="toggleSection(allSections.praktika)">
            <div class="option">Praktika</div>
            <img src="../assets/img/arrow-down.svg" alt="Arrow Icon">
        </div>
        <div class="subsection">
            <ul v-if="currentlyOpenSection === allSections.praktika">
                <li>Tutvumispraktika</li>
                <li>Spetsialiseerumispraktika</li>
            </ul>
        </div>
        <div class="navOption" @click="toggleSection(allSections.erialasedTegevused)">
            <div class="option">Erialased tegevused</div>
            <img src="../assets/img/arrow-down.svg" alt="Arrow Icon">
        </div>
        <div class="subsection">
            <ul v-if="currentlyOpenSection === allSections.erialasedTegevused">
                <li>Koolitused</li>
                <li>Iseseisev nokitsemine</li>
            </ul>
        </div>
        <div class="navOption">
            <div class="option">Minust</div>
        </div>
        <div class="navOption">
            <div class="option">Eneserefleksioon</div>
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
ul {
    width: 100%;
    list-style: none;
    font-size: clamp(16px, 3vw, 18px);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    color: #EFEDEB;
    align-items: center;
    justify-content: center;
    padding: 0;
}

.subsection {
    display: flex;
    flex-direction: column;
    width: 51vw;
}

li {
    padding: 0 28px 0 28px;
    margin-bottom: 40px;
}

.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9;
    position: fixed;
    top: 0;
    transform: translateX(100%);
    /* Initially hide the menu off-screen */
    right: 0;
    width: 100vw;
    /* Set menu width */
    height: 100vh;
    /* Set menu height */
    background-color: #895D61;
    /* Set menu background color */
    transition: transform 0.3s ease-in-out;
    /* Transition effect */
    flex-wrap: nowrap;
}

.navOption .option {
    font-family: "Magnat";
    padding: 32px;
    color: #EFEDEB;
    text-transform: uppercase;
}

.menu.active {
    transform: translateX(0);
    /* Slide menu in from the right */
}

.navOption {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: clamp(24px, 3vw, 48px);
}

.navOption img {
    height: 0.7em;
    width: 0.7em;
    align-self: center;
}

@media only screen and (max-width: 600px) {
    .subsection {
        display: flex;
        flex-direction: column;
        width: 100vw;
    }

    li {
        padding: 0 8px 0 8px;
    }

}
</style>