<script setup>
import ProgrammeerimiseA from "@/components/ModuleViews/ProgrammeerimiseA.vue";
import OOP from "@/components/ModuleViews/OOP.vue";
import ErialaneMatemaatika from "@/components/ModuleViews/ErialaneMatemaatika.vue";
import OneBoxLayout from "@/components/OneBoxLayout.vue";
import PopUp from "@/components/PopUp.vue";
import { computed, ref, markRaw } from 'vue';
let allModules = {
    programmeerimisealused: markRaw(ProgrammeerimiseA),
    oop: markRaw(OOP),
    matemaatika: markRaw(ErialaneMatemaatika),
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
                    <h2>Programmeerimise alused</h2>
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
                        <p>Programmeerimise aluste ja objektorienteeritud programmeerimise moodulites õppisin kasutama
                            Git'i, navigeerima ja lahendama keerukaid seoseid ning töötama TypeScript'i ja API-dega.
                            Lisaks sain praktilise kogemuse rakenduste loomisel, sealhulgas DOM haldamisel ja andmete
                            manipuleerimisel. Erialane matemaatika tugevdas minu andmete töötlemise oskusi ja
                            matemaatilist arusaamist ning võimaldas mul arendada oma analüüsi- ning uurimismeetodeid.
                        </p>
                    </div>
                </div>
                <div class="moodulWrapper">
                    <OneBoxLayout @click="toggleModule(allModules.programmeerimisealused)" :title="'Programmeerimise alused'"
                        :text="'Probleemide süsteemne lahendamine, Git ja Github'">
                        <img class="backg" src="../assets/img/github.webp"
                            alt="Clear Mind energiajoogi mockup purkidel">
                    </OneBoxLayout>
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.oop)" :title="'Objektorienteeritud programmeerimine'"
                            :text="'TypeScript, objektmudelid, API, DOM elemendid'">
                            <img class="backg" src="../assets/img/typescript.webp"
                                alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.matemaatika)" :title="'Erialane matemaatika'"
                            :text="'Matemaatiline analüüs, küsimustiku koostamine, risttabelid, tunnused'">
                            <img class="backg" src="../assets/img/matemaatika.webp" alt="Rosabella logo T-särgil">
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
