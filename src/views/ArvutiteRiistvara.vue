<script setup>
import ITSüsteemideRiistvara from "@/components/ModuleViews/ITSüsteemideRiistvara.vue";
import Operatsioonisüsteemid from "@/components/ModuleViews/Operatsioonisüsteemid.vue";
import Infoturve from "@/components/ModuleViews/Infoturve.vue";
import OneBoxLayout from "@/components/OneBoxLayout.vue";
import PopUp from "@/components/PopUp.vue";
import { computed, ref, markRaw } from 'vue';
let allModules = {
    riistvara: markRaw(ITSüsteemideRiistvara),
    opsusteemid: markRaw(Operatsioonisüsteemid),
    infoturve: markRaw(Infoturve),
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
                    <h2>Arvutite riistvara ja võrgud</h2>
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
                            kuidas reageerida potentsiaalsetele turvarikkumistele.</p>
                    </div>
                </div>
                <div class="moodulWrapper">
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.riistvara)" :title="'IT-süsteemide riistvara'"
                            :text="'Riistvarasüsteemide kasutamine, arvuti ja selle komponendid, programmide miinimum- ja soovituslikud nõuded'">
                            <img class="backg" src="../assets/img/it.webp"
                                alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.opsusteemid)" :title="'Operatsioonisüsteemid'"
                            :text="'Tarkvarade installimine ja haldamine, operatsioonisüsteemide paigaldamine, VMWare'">
                            <img class="backg" src="../assets/img/opsysteem.webp" alt="Rosabella logo T-särgil">
                        </OneBoxLayout>
                    </div>
                    <OneBoxLayout @click="toggleModule(allModules.infoturve)" :title="'Infoturbe ja arvutivõrkude alused'"
                        :text="'Apache veebiserver, kasuta õiguste seadistused, veebiründed ja nende eest kaitse'">
                        <img class="backg" src="../assets/img/apache.webp"
                            alt="Clear Mind energiajoogi mockup purkidel"> 
                    </OneBoxLayout>
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
