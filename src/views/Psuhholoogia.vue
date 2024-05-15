<script setup>
import Reklaamipsühholoogia from "@/components/ModuleViews/Reklaamipsühholoogia.vue";
import SuhtlemiseAnalüüs from "@/components/ModuleViews/SuhtlemiseAnalüüs.vue";
import SuhtlemiseAlused from "@/components/ModuleViews/SuhtlemiseAlused.vue";
import Illustrator from "@/components/ModuleViews/Illustrator.vue";
import Advendihommik from "@/components/ModuleViews/Advendihommik.vue";
import Fotoseeria from "@/components/ModuleViews/Fotoseeria.vue";
import VOCOKaart from "@/components/ModuleViews/VOCOKaart.vue";
import Visiitkaart from "@/components/ModuleViews/Visiitkaart.vue";
import OneBoxLayout from "@/components/OneBoxLayout.vue";
import PopUp from "@/components/PopUp.vue";
import { computed, ref, markRaw } from 'vue';
let allModules = {
    reklaamipsuhholoogia: markRaw(Reklaamipsühholoogia),
    suhtlemiseanaluus: markRaw(SuhtlemiseAnalüüs),
    suhtlemisealused: markRaw(SuhtlemiseAlused),
    illustrator: markRaw(Illustrator),
    advendihommik: markRaw(Advendihommik),
    fotoseeria: markRaw(Fotoseeria),
    vocokaart: markRaw(VOCOKaart),
    visiitkaart: markRaw(Visiitkaart),
    adobe: 'adobe',
};

let popupOpen = ref(false)
function toggleModule(module) {
    popupOpen.value = !popupOpen.value
    currentlyOpenModule.value = module
};
function closePopup() {
    popupOpen.value = !popupOpen.value
}

let currentlyOpenModule = ref(null);

</script>



<template>
    <main>
        <div class="backdrop" :class="{ 'shown': popupOpen }"></div>
        <div class="jumboMoodul">
            <div class="mainWrapperMoodul">
                <div class="moodulTitle">
                    <h2>Psühholoogia ja suhtlemine</h2>
                </div>
                <div class="detailsMoodul">
                    <p>Akadeemiline areng</p>
                </div>
            </div>
        </div>
        <PopUp :shown="popupOpen" @close="closePopup()">
            <component :is="currentlyOpenModule"></component>
        </PopUp>
        <div class="mainInfo">
            <div class="mainWrapper">
                <div class="subtitle">
                    <p>ülevaade</p>
                </div>
                <div class="title">
                    <h3>Mooduli tagasivaade</h3>
                </div>
                <div class="descriptionWrapperMoodul">
                    <div class="descriptionMoodul">
                        <p>Psühholoogia ja suhtlemise kursuse raames õppisin reklaami õiguslikke ja eetilisi aspekte
                            ning kuidas kultuurilised mõjutajad võivad kujundada reklaamide tajumist. Uurisin erinevaid
                            veebireklaame, analüüsisin nende tagamõtteid ja mõjutusviise ning esitlesin neid
                            kursusejuhendajale. Õppisin tundma neuroturunduse põhimõtteid ning sain teada, kuidas
                            isiksuseomadused mõjutavad suhtlust ja vastastikust mõistmist. Harjutasin tunnis õpitud
                            enesekehtestamise viise ja aktiivset kuulamist ning õppisin erivajaduste, manipulatsiooni
                            ennetamise ja mõjutamise tehnikate kohta. Kokkuvõttes arendasin nende kursuste käigus oma
                            analüüsi- ja suhtlusoskusi ning omandasin väärtuslikke teadmisi, mida saan kasutada nii
                            professionaalses kui ka isiklikus elus.
                        </p>
                    </div>
                </div>
                <div class="moodulWrapper">
                    <OneBoxLayout @click="toggleModule(allModules.reklaamipsuhholoogia)" :title="'Reklaamipsühholoogia'"
                        :text="'Reklaami- ja meediaseadus, reklaamide analüüs ja esitlemine'">
                        <img class="backg" src="../assets/img/Spotify.webp"
                            alt="Clear Mind energiajoogi mockup purkidel">
                    </OneBoxLayout>
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.suhtlemiseanaluus)"
                            :title="'Suhtlemise psühholoogiline analüüs'"
                            :text="'Konfliktide lahendamine, neuroturundus'">
                            <img class="backg" src="../assets/img/brain.webp"
                                alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.suhtlemisealused)" :title="'Suhtlemise alused'"
                            :text="'Enesekehtestamine, valetamise roll takistusena, manipulatsioon'">
                            <img class="backg" src="../assets/img/brain.webp" alt="Rosabella logo T-särgil">
                        </OneBoxLayout>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
.backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: #000;
    z-index: 999;
    transition: all 1s ease;
    pointer-events: none;
}

.backdrop.shown {
    opacity: 0.5;
    pointer-events: all;
}
</style>
