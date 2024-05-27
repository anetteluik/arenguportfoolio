<script setup>
import Suhtlemisõpetus from "@/components/ModuleViews/Suhtlemisõpetus.vue";
import Asjaajamine from "@/components/ModuleViews/Asjaajamine.vue";
import KarjääriplaneerimiseAlused from "@/components/ModuleViews/KarjääriplaneerimiseAlused.vue";
import Töökeskkonnaohutus from "@/components/ModuleViews/Töökeskkonnaohutus.vue";
import EttevõtluseAlused from "@/components/ModuleViews/EttevõtluseAlused.vue";
import MajanduseAlused from "@/components/ModuleViews/MajanduseAlused.vue";
import ÕiguslikudAlused from "@/components/ModuleViews/ÕiguslikudAlused.vue";
import Visiitkaart from "@/components/ModuleViews/Visiitkaart.vue";
import OneBoxLayout from "@/components/OneBoxLayout.vue";
import PopUp from "@/components/PopUp.vue";
import { computed, ref, markRaw } from 'vue';
let allModules = {
    suhtlemisopetus: markRaw(Suhtlemisõpetus),
    asjaajamine: markRaw(Asjaajamine),
    karjaariplaneerimine: markRaw(KarjääriplaneerimiseAlused),
    tookeskkonnaohutus: markRaw(Töökeskkonnaohutus),
    ettevotlusealused: markRaw(EttevõtluseAlused),
    majandus: markRaw(MajanduseAlused),
    oiguslik: markRaw(ÕiguslikudAlused),
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
                    <h2>Karjääriplaneerimine ja ettevõtlus</h2>
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
                        <p>Omandasin teadmisi konfliktide lahendamiseks ja keeruliste klientidega suhtlemiseks. Sain
                            põhjalikuma ülevaate UX/UI valdkonnast ja sellest, kuidas see kajastub tööturul.
                            Töökeskkonna ohutuse kursusel tutvusin ergonoomiliste ja tervislike töötingimustega, mis on
                            olulised, arvestades UX/UI disainerite (tüüpiliselt) istuvat tööd. Ettevõtluse alustest
                            õppisin äriprotsessidest ja kuidas oma oskusi innovaatiliselt ära kasutada, eriti
                            äriarenduse kontekstis. Õppisin majanduslikest põhimõtetest ning nende mõjust projektidele
                            ja klientidele, samuti kuidas turuolukorda näitajate abil paremini analüüsida. Lisaks sain
                            ülevaate töölepingutest, nende lõpetamisest, töötaja ja tööandja õigustest ning rahalistest
                            aspektidest töösuhetes.</p>
                    </div>
                </div>
                <div class="moodulWrapper">
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.suhtlemisopetus)" :title="'Suhtlemisõpetus'"
                            :text="'Meeskonnatöö, konfliktide lahendamine, keerukate klientidega suhtlemine'">
                            <img class="backg" src="../assets/img/brain.webp"
                                alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.asjaajamine)" :title="'Asjaajamise alused'"
                            :text="'Ametlikud dokumendid, CV, motivatsioonikiri, digiallkirjastamine'">
                            <img class="backg" src="../assets/img/asjaajamine.webp" alt="Rosabella logo T-särgil">
                        </OneBoxLayout>
                    </div>
                    <OneBoxLayout @click="toggleModule(allModules.karjaariplaneerimine)" :title="'Karjääriplaneerimise alused'"
                        :text="'Tööpakkumised UX/UI disaineritele, kooliga tutvumine, õppekäik BitWebi'">
                        <img class="backg" src="../assets/img/bitweb.webp"
                            alt="Clear Mind energiajoogi mockup purkidel">
                    </OneBoxLayout>
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.tookeskkonnaohutus)" :title="'Töökeskkonnaohutus'"
                            :text="'Riskianalüüs, ohumärgid töökeskkonnas, ergonoomia'">
                            <img class="backg" src="../assets/img/office.webp"
                                alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.ettevotlusealused)"
                            :title="'Ettevõtluse alused'"
                            :text="'Äriideed, ettevõtte loomise protsess, Häkaton'">
                            <img class="backg" src="../assets/img/hakaton.webp" alt="Rosabella logo T-särgil">
                        </OneBoxLayout>
                    </div>
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.majandus)" :title="'Majanduse alused'"
                            :text="'Riigi roll majanduses, Eesti maksusüsteem, raharinglus'">
                            <img class="backg" src="../assets/img/piggy.webp"
                                alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.oiguslik)"
                            :title="'Töötamise õiguslikud alused'"
                            :text="'Töölepingud, töösuhted, rahalised aspektid töötamisel'">
                            <img class="backg" src="../assets/img/contract.webp" alt="Rosabella logo T-särgil">
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
