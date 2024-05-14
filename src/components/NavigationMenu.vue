<template>
    <div class="menu" @click="linkClickHandler" :class="{ 'active': props.shown }">
        <div class="navOption" @click="toggleSection(allSections.akadeemilineAreng)">
            <div class="optionNotClick">Akadeemiline areng</div>
            <img src="../assets/img/arrow-down.svg" alt="Arrow Icon">
        </div>
        <div class="subsection">
            <ul v-if="currentlyOpenSection === allSections.akadeemilineAreng">
                <router-link to="/graafilise-disaini-alused">
                    <li><p>Graafilise disaini alused</p></li>
                </router-link>
                <router-link to="/kasutajakogemuse-analuus">
                    <li><p>Kasutajakogemuse analüüs</p></li>
                </router-link>
                <router-link to="/veebikujundus">
                    <li><p>Veebikujundus</p></li>
                </router-link>
                <router-link to="/psuhholoogia-ja-suhtlemine">
                    <li><p>Psühholoogia ja suhtlemine</p></li>
                </router-link>
                <router-link to="/tootearendus">
                    <li><p>Tootearendus</p></li>
                </router-link>
                <router-link to="/arvutite-riistvara-ja-vorgud">
                    <li><p>Arvutite riistvara ja võrgud</p></li>
                </router-link>
                <router-link to="/programmeerimise-alused">
                    <li><p>Programmeerimise alused</p></li>
                </router-link>
                <router-link to="/veebiarendus-ja-haldus">
                    <li><p>Veebiarendus ja haldus</p></li>
                </router-link>
                <router-link to="/karjaariplaneerimine-ja-ettevotlus">
                    <li><p>Karjääriplaneerimine ja ettevõtlus</p></li>
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
                    <li><p>Tutvumispraktika</p></li>
                </router-link>
                <router-link to="/spetsialiseerumispraktika">
                    <li><p>Spetsialiseerumispraktika</p></li>
                </router-link>
            </ul>
        </div>
        <div class="navOption" @click="toggleSection(allSections.erialasedTegevused)">
            <div class="optionNotClick">Erialased tegevused</div>
            <img src="../assets/img/arrow-down.svg" alt="Arrow Icon">
        </div>
        <div class="subsection">
            <ul v-if="currentlyOpenSection === allSections.erialasedTegevused">
                <router-link to="/koolitused">
                    <li><p>Koolitused</p></li>
                </router-link>
                <router-link to="/iseseisev-nokitsemine">
                    <li><p>Iseseisev nokitsemine</p></li>
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
    if (e.target.classList.contains("option") || e.target.nodeName === 'P') {
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

li p {
    background: linear-gradient(
            90deg,
            #61131D 0%,
            #61131D 50%,
            rgba(255, 255, 255, 0) 50%,
            rgba(255, 255, 255, 0) 100%
    ) 100%;
    background-size: 210% 210%;
    transition: background-position 0.3s ease-in-out;
}

a {
    color: #EFEDEB;
}

li p:hover,
.router-link-active li p {
    background: linear-gradient(
            90deg,
            #61131D 0%,
            #61131D 100%,
    ) 100%;
    background-position: 0;
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

@media only screen and (max-width: 1500px) {
    .subsection {
        display: flex;
        flex-direction: column;
        width: 70vw;
    }

    li {
        padding: 0 24px 0 24px;
    }

}

@media only screen and (max-width: 600px) {
    .subsection {
        display: flex;
        flex-direction: column;
        width: 90vw;
    }

    li {
        padding: 0 8px 0 8px;
    }

    a {
        margin: 0;
    }

}
</style>