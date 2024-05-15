<script setup>
import Frillice from "@/components/ModuleViews/Frillice.vue";
import GoogleAnalytics from "@/components/ModuleViews/GoogleAnalytics.vue";
import KasutajakogemuseAlused from "@/components/ModuleViews/KasutajakogemuseAlused.vue";
import KasutusmugavusSihtrühm from "@/components/ModuleViews/KasutusmugavusSihtrühm.vue";
import Prototüüpimine from "@/components/ModuleViews/Prototüüpimine.vue";
import OneBoxLayout from "@/components/OneBoxLayout.vue";
import PopUp from "@/components/PopUp.vue";
import { computed, ref, markRaw } from 'vue';
let allModules = {
    frillice: markRaw(Frillice),
    google: markRaw(GoogleAnalytics),
    kasutajakogemuse: markRaw(KasutajakogemuseAlused),
    kasutusmugavus: markRaw(KasutusmugavusSihtrühm),
    prototüüpimine: markRaw(Prototüüpimine),
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
                    <h2>Kasutajakogemuse analüüs</h2>
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
                        <p>Õppisin erinevate IT-süsteemide riistvarade, operatsioonisüsteemide ning arvutivõrkude aluste
                            kohta. Praktiliste ülesannete ja rühmatööde kaudu sain kogemuse riistvara konfiguratsioonide
                            lahendamisel ning tarkvara installimise ja haldamise osas. Lisaks omandasin teadmised
                            infoturbest (krüpteerimine, autentimine, autoriseerimine, võrguturbe meetodid). Õppisin,
                            kuidas kaitsta infosüsteeme ja andmeid (nt DDoS rünnakul) erinevate turvameetmete kaudu ning
                            kuidas reageerida potentsiaalsetele turvarikkumistele.
                        </p>
                    </div>
                </div>
                <div class="moodulWrapper">
                    <OneBoxLayout @click="toggleModule(allModules.frillice)" :title="'Frillice'"
                        :text="'Küsimustiku koostamine, kasutajakogemuse uurimine, persoona'">
                        <img class="backg" src="../assets/img/frillice.webp" alt="Frillice esitluse avakuva Macbookil">
                    </OneBoxLayout>
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.google)" :title="'Google Analytics'"
                            :text="'Keskkonnaga tutvumine'">
                            <img class="backg" src="../assets/img/ga4.webp" alt="Google Analytics logo mustal taustal">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.kasutajakogemuse)"
                            :title="'Kasutajakogemuse analüüsi alused'"
                            :text="'Kasutatavuse testimise teooria, valim, intervjuutehnikad'">
                            <img class="backg" src="../assets/img/iglu-loeng1.webp" alt="Kompositsioon Iglu loengust">
                        </OneBoxLayout>
                    </div>
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.kasutusmugavus)"
                            :title="'Kasutusmugavus ja sihtrühm'"
                            :text="'Kasutajakeskse disaini põhitõed, prototüüpide teooria'">
                            <img class="backg" src="../assets/img/iglu-loeng2.webp" alt="Kompositsioon Iglu loengust">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.prototüüpimine)" :title="'Prototüüpimine'"
                            :text="'Prototüüpide eelised, tüüpilised vead, värske pilk'">
                            <img class="backg" src="../assets/img/iglu-loeng3.webp" alt="Kompositsioon Iglu loengust">
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
