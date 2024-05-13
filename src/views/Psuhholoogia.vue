<script setup>
import AvastaTartut from "@/components/ModuleViews/AvastaTartut.vue";
import Rosabella from "@/components/ModuleViews/Rosabella.vue";
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
    avastaTartut: markRaw(AvastaTartut),
    rosabella: markRaw(Rosabella),
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
                        <p>Psühholoogia ja suhtlemise kursuse käigus omandasin teadmised reklaami õiguslikest ja
                            eetilistest nõuetest ning kuidas kultuurilised tegurid mõjutavad reklaami tajumist. Samuti
                            sain praktilisi oskusi, analüüsides erinevaid veebireklaame ja esitledes saadud tulemusi.
                            Suhtlemise psühholoogiline analüüs tutvustas mulle effektiivse suhtluse psühholoogiat,
                            neuroturundust ja isiksuseomaduste mõju suhtlemisele. Lisaks avardasin enesekehtestamise ja
                            aktiivse kuulamise oskusi ning omandasin teadmisi erivajaduste, manipulatsiooni ennetamise
                            ja mõjutamise tehnikate kohta. Kokkuvõttes arenesin nende kursuste käigus nii analüüsimis-
                            kui ka suhtlusoskustes ning sain olulisi teadmisi nii erialase kui isikliku elu kontekstis.
                        </p>
                    </div>
                </div>
                <div class="moodulWrapper">
                    <OneBoxLayout @click="toggleModule(allModules.clearMind)" :title="'Clear Mind'"
                        :text="'Logo kujundamine, prototüüp, mockup, kliendisuhtlus, Figma, Photoshop'">
                        <img class="backg" src="../assets/img/clearmind.webp"
                            alt="Clear Mind energiajoogi mockup purkidel">
                    </OneBoxLayout>
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.avastaTartut)" :title="'Avasta Tartut'"
                            :text="'Mobiilirakenduse prototüüp, Figma, Illustrator'">
                            <img class="backg" src="../assets/img/avastatartut.webp"
                                alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.rosabella)" :title="'Rosabella'"
                            :text="'Logo kujundamine, mockup, Illustrator, Photoshop'">
                            <img class="backg" src="../assets/img/rosabella.webp" alt="Rosabella logo T-särgil">
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
