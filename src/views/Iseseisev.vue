<script setup>
import Triskel from "@/components/ModuleViews/Triskel.vue";
import Hubert from "@/components/ModuleViews/Hubert.vue";
import ClearMind from "@/components/ModuleViews/ClearMind.vue";
import Illustrator from "@/components/ModuleViews/Illustrator.vue";
import Advendihommik from "@/components/ModuleViews/Advendihommik.vue";
import Fotoseeria from "@/components/ModuleViews/Fotoseeria.vue";
import VOCOKaart from "@/components/ModuleViews/VOCOKaart.vue";
import Visiitkaart from "@/components/ModuleViews/Visiitkaart.vue";
import OneBoxLayout from "@/components/OneBoxLayout.vue";
import PopUp from "@/components/PopUp.vue";
import { computed, ref, markRaw } from 'vue';
let allModules = {
    triskel: markRaw(Triskel),
    hubert: markRaw(Hubert),
    clearMind: markRaw(ClearMind),
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
                    <h2>Iseseisev nokitsemine</h2>
                </div>
                <div class="detailsMoodul">
                    <p>Erialased tegevused</p>
                </div>
            </div>
        </div>
        <PopUp :shown="popupOpen" @close="closePopup()">
            <component :is="currentlyOpenModule"></component>
        </PopUp>
        <div class="mainInfo">
            <div class="mainWrapper">
                <div class="title">
                    <h3>Tagasivaade</h3>
                </div>
                <div class="descriptionWrapperMoodul">
                    <div class="descriptionMoodul">
                        <p>Siit leiad kollektsiooni projektidest, mis on loodud väljaspool akadeemilisi kursuseid.
                            Võrreldes oma varasemate töödega kõige uuematega, olen märganud kasvu ja arengut ning iga
                            projekt on olnud võimalus õppida ja rakendada uusi teadmisi ja oskusi. Täna panustan
                            tugevamalt kasutajasõbralikkusele ja visuaalsele harmooniale. Olen õppinud mõistma
                            kasutajate ja klientide vajadusi ning ootusi ja kohandanud oma lähenemist vastavalt.</p>
                    </div>
                </div>
                <div class="moodulWrapper">
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.triskel)" :title="'Triskel'"
                            :text="'Plakati kujundus, etenduse kava kujundus, Figma'">
                            <img class="backg" src="../assets/img/triskel.webp"
                                alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.hubert)" :title="'Hubert'"
                            :text="'Facebooki kaanefoto kujundamine, Figma'">
                            <img class="backg" src="../assets/img/hubert.webp" alt="Rosabella logo T-särgil">
                        </OneBoxLayout>
                    </div>
                    <OneBoxLayout :title="'R-Heroic'"
                        :text="'Veebilehe responsive prototüüp, Figma'">
                        <img class="backg" src="../assets/img/tulekuls.webp"
                            alt="Clear Mind energiajoogi mockup purkidel">
                    </OneBoxLayout>
                    <div class="moodulSection">
                        <OneBoxLayout :title="'RumVessel'"
                            :text="'Logo kujundamine, kliendisuhtlus, Figma'">
                            <img class="backg" src="../assets/img/tulekulv.webp"
                                alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout :title="'Petcity Grooming'"
                            :text="'Ühe lehe re-design, Figma, personaalne projekt'">
                            <img class="backg" src="../assets/img/tulekulv.webp" alt="Rosabella logo T-särgil">
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
