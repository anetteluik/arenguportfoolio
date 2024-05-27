<script setup>
import Sisuhaldussüsteemid from "@/components/ModuleViews/Sisuhaldussüsteemid.vue";
import Versioonihaldus from "@/components/ModuleViews/Versioonihaldus.vue";
import ABTestimine from "@/components/ModuleViews/ABTestimine.vue";
import VahenditePrototüüp from "@/components/ModuleViews/VahenditePrototüüp.vue";
import SissejuhatusTarkvaraarendusse from "@/components/ModuleViews/SissejuhatusTarkvaraarendusse.vue";
import Veebihaldus from "@/components/ModuleViews/Veebihaldus.vue";
import VOCOKaart from "@/components/ModuleViews/VOCOKaart.vue";
import Visiitkaart from "@/components/ModuleViews/Visiitkaart.vue";
import OneBoxLayout from "@/components/OneBoxLayout.vue";
import PopUp from "@/components/PopUp.vue";
import { computed, ref, markRaw } from 'vue';
let allModules = {
    sisuhaldus: markRaw(Sisuhaldussüsteemid),
    versioonihaldus: markRaw(Versioonihaldus),
    abtestimine: markRaw(ABTestimine),
    vahenditekasutaminep: markRaw(VahenditePrototüüp),
    sissejuhatus: markRaw(SissejuhatusTarkvaraarendusse),
    veebihaldus: markRaw(Veebihaldus),
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
                    <h2>Veebiarendus ja haldus</h2>
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
                        <p>Veebiarenduse ja halduse moodulis arendasin teadmisi veebisaidi haldamisest, SEO-dest ja
                            pistikprogrammidest ning e-kaubanduse integreerimisest veebilehele. Versioonihalduse ja
                            GitHubiga tutvumisel õppisin repositooriumide loomise kohta, koodi <i>branch</i>idest ning
                            nende
                            olulisusest. Samuti uurisin tarkvaraarenduse põhimõtteid, metoodikaid, projektiplaani
                            koostamist, ning erinevaid sisuhaldusüsteeme (näiteks WordPress, WebFlow, Wix ning
                            SquareSpace).</p>
                    </div>
                </div>
                <div class="moodulWrapper">
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.sisuhaldus)" :title="'Sisuhaldussüsteemid'"
                            :text="'GA4, SEO, Wordpressis veebilehtede loomine'">
                            <img class="backg" src="../assets/img/katana.webp" alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.versioonihaldus)" :title="'Versioonihaldus'"
                            :text="'Github, repositooriumid, koodiharud'">
                            <img class="backg" src="../assets/img/github.webp" alt="Rosabella logo T-särgil">
                        </OneBoxLayout>
                    </div>
                    <OneBoxLayout @click="toggleModule(allModules.abtestimine)" :title="'A/B testimine'"
                        :text="'GA4, A/B testimine, Wordpress'">
                        <img class="backg" src="../assets/img/ab.webp" alt="Clear Mind energiajoogi mockup purkidel">
                    </OneBoxLayout>
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.vahenditekasutaminep)"
                            :title="'Vahendite kasutamine prototüüpimiseks, arendusraamistikud'"
                            :text="'Vue, prototüüpimine'">
                            <img class="backg" src="../assets/img/vue.webp" alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.sissejuhatus)"
                            :title="'Sissejuhatus tarkvaraarendusse'"
                            :text="'Tarkvaraarenduse metoodikad, projektiplaani koostamine, projektide ebaõnnestumise põhjused'">
                            <img class="backg" src="../assets/img/tarkvaraarendus.webp" alt="Rosabella logo T-särgil">
                        </OneBoxLayout>
                    </div>
                    <OneBoxLayout @click="toggleModule(allModules.veebihaldus)" :title="'Veebihaldus'"
                        :text="'LAMP stack, serverite tüübid'">
                        <img class="backg" src="../assets/img/linux.webp" alt="Clear Mind energiajoogi mockup purkidel">
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
