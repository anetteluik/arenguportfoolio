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
                    <h2>Tootearendus</h2>
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
                        <p>Mooduli raames käisin läbi kogu tootearenduse protsessi - esialgse idee valideerimisest kuni
                            hinna kujunemiseni. Tootearenduse ideest kujunes välja ka reaalne toode, mida
                            kursusekaaslastega erinevatel müügiüritustel pakkusime. Protsess oli täis väljakutseid, kuid
                            samas õpetlik ja arendav. Näiteks olin unustanud trükiettevalmistuse olulised reeglid ning
                            ei kasutanud küünalde siltide loomisel õigeid juhiseid. Õnneks oli trükikoda väga abivalmis
                            ja aitas mind failide korrigeerimisel. Praegu on meie küünlaprojekt pausil, kuna keskendume
                            projektidele, mis on otseselt seotud UX/UI valdkonnaga. Allpool on näha infograafik, mis
                            annab kokkuvõtte Tootearendusekursusel läbitud protsessist.
                        </p>
                    </div>
                </div>
                <div class="moodulWrapperToode">
                    <div class="tootearendus">
                        <img src="/src/assets/img/tootearendus.webp" alt="">
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

.tootearendus {
    width: 100%;
    height: fit-content;
    margin-bottom: 100px;
}

.tootearendus img {
    object-fit: contain;
}

.moodulWrapperToode {
  margin-top: 80px;
  margin-bottom: 208px;
  height: fit-content;
}

@media only screen and (max-width: 600px) {
    .tootearendus {
        margin-bottom: 0px;
    }
}
</style>
