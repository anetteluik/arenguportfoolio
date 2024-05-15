<script setup>
import Animatsioonid from "@/components/ModuleViews/Animatsioonid.vue";
import HTMLjaCSS from "@/components/ModuleViews/HTMLjaCSS.vue";
import DisainKavandamine from "@/components/ModuleViews/DisainKavandamine.vue";
import Veebitehnoloogiad from "@/components/ModuleViews/Veebitehnoloogiad.vue";
import VisandiLoomine from "@/components/ModuleViews/VisandiLoomine.vue";
import Fotoseeria from "@/components/ModuleViews/Fotoseeria.vue";
import VOCOKaart from "@/components/ModuleViews/VOCOKaart.vue";
import Visiitkaart from "@/components/ModuleViews/Visiitkaart.vue";
import OneBoxLayout from "@/components/OneBoxLayout.vue";
import PopUp from "@/components/PopUp.vue";
import { computed, ref, markRaw } from 'vue';
let allModules = {
    animatsioonid: markRaw(Animatsioonid),
    htmljacss: markRaw(HTMLjaCSS),
    disainikavamdamine: markRaw(DisainKavandamine),
    veebitehnoloogiad: markRaw(Veebitehnoloogiad),
    visandiloomine: markRaw(VisandiLoomine),
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
                    <h2>Veebikujundus</h2>
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
                        <p>Tutvusin Steve Krugi raamatuga "Don't Make Me Think", kus tutvustati UX disaini põhimõtteid
                            ja reegleid. Kõige olulisem teadmine, mille omandasin kogu mooduli vältel, oli veebilehe
                            WCAG standardid ja nende erinevad tasemed, mis tagavad kõigile infokeskkonda kaasatud
                            inimestele võrdsed võimalused. Sain parema arusaamise HTML-i, CSS-i ja Bootstrap 4-i
                            kasutamisest erinevate ülesannete täitmisel. Mooduli raames tutvusin mitmete erinevate
                            kasutajakogemuse analüüsi meetoditega ning õppisin kasutama mõisteid nagu sketch, wireframe,
                            mockup ja prototüüp.</p>
                    </div>
                </div>
                <div class="moodulWrapper">
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.animatsioonid)" :title="'Animatsioonid'"
                            :text="'GIF, cinemagraph, 3D graafika animeerimine, Adobe After Effects'">
                            <img class="backg" src="../assets/img/avastatartut.webp"
                                alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.htmljacss)" :title="'HTML ja CSS'"
                            :text="'Veebilehe koodimine nullist, HTML5, semantilised elemendid, Bootstrap 4'">
                            <img class="backg" src="../assets/img/rosabella.webp" alt="Rosabella logo T-särgil">
                        </OneBoxLayout>
                    </div>
                    <OneBoxLayout @click="toggleModule(allModules.disainikavamdamine)" :title="'Disaini kavandamine ja prototüüpimine'"
                        :text="'Figmaga tutvumine, WCAG standardid ja tasemed, kasutajakogemuse modelleerimise mudelid'">
                        <img class="backg" src="../assets/img/clearmind.webp"
                            alt="Clear Mind energiajoogi mockup purkidel">
                    </OneBoxLayout>
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.veebitehnoloogiad)" :title="'Veebitehnoloogiad ja kujundusvahendid'"
                            :text="'Kasutajakogemuse analüüsi meetodid, UX terminoloogia'">
                            <img class="backg" src="../assets/img/photoshop-luik.webp"
                                alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.visandiloomine)"
                            :title="'Visandi loomine ja struktuurikavand'"
                            :text="'Isotüübi meetod, piktogrammid, ligatuurid ja monogrammid'">
                            <img class="backg" src="../assets/img/tänukiri.webp" alt="Rosabella logo T-särgil">
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
