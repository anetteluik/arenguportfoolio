<template>
    <div class="menu" @click="linkClickHandler" :class="{ 'active': props.shown }">
        <div class="navOption" @click="toggleSection(allSections.akadeemilineAreng)">
            <div class="optionNotClick">Akadeemiline areng</div>
            <img src="../assets/img/arrow-down.svg" alt="Arrow Icon">
        </div>
        <div class="subsection">
            <ul v-if="currentlyOpenSection === allSections.akadeemilineAreng">
                <router-link to="/graafilise-disaini-alused">
                    <li>Graafilise disaini alused</li>
                </router-link>
                <router-link to="/kasutajakogemuse-analuus">
                    <li>Kasutajakogemuse analüüs</li>
                </router-link>
                <router-link to="/veebikujundus">
                    <li>Veebikujundus</li>
                </router-link>
                <router-link to="/psuhholoogia-ja-suhtlemine">
                    <li>Psühholoogia ja suhtlemine</li>
                </router-link>
                <router-link to="/tootearendus">
                    <li>Tootearendus</li>
                </router-link>
                <router-link to="/arvutite-riistvara-ja-vorgud">
                    <li>Arvutite riistvara ja võrgud</li>
                </router-link>
                <router-link to="/programmeerimise-alused">
                    <li>Programmeerimise alused</li>
                </router-link>
                <router-link to="/veebiarendus-ja-haldus">
                    <li>Veebiarendus ja haldus</li>
                </router-link>
                <router-link to="/karjaariplaneerimine-ja-ettevotlus">
                    <li>Karjääriplaneerimine ja ettevõtlus</li>
                </router-link>
            </ul>
        </div>
        <div class="navOption" @click="toggleSection(allSections.praktika)">
            <div class="optionNotClick">Praktika</div>
            <img src="../assets/img/arrow-down.svg" alt="Arrow Icon">
        </div>
        <div class="subsection">
            <ul v-if="currentlyOpenSection === allSections.praktika">
                <router-link to="/tutvumispraktika">
                    <li>Tutvumispraktika</li>
                </router-link>
                <li>Spetsialiseerumispraktika</li>
            </ul>
        </div>
        <div class="navOption" @click="toggleSection(allSections.erialasedTegevused)">
            <div class="optionNotClick">Erialased tegevused</div>
            <img src="../assets/img/arrow-down.svg" alt="Arrow Icon">
        </div>
        <div class="subsection">
            <ul v-if="currentlyOpenSection === allSections.erialasedTegevused">
                <router-link to="/koolitused">
                    <li>Koolitused</li>
                </router-link>
                <router-link to="/iseseisev-nokitsemine">
                    <li>Iseseisev nokitsemine</li>
                </router-link>
            </ul>
        </div>
        <div class="navOption">
            <router-link to="/minust">
                <div class="option">Minust</div>
            </router-link>
        </div>
        <div class="navOption">
            <div class="option">Eneserefleksioon</div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits(["toggle"])


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

function linkClickHandler(e) {
    if (e.target.classList.contains("option") || e.target.nodeName === 'LI') {
        emit("toggle")
    }

}

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

.optionNotClick {
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