<script setup>
import Veebikoolitused from "@/components/ModuleViews/Veebikoolitused.vue";
import Õppekäigud from "@/components/ModuleViews/Õppekäigud.vue";
import Külalislektorid from "@/components/ModuleViews/Külalislektorid.vue";
import ÜritusedKonverentsid from "@/components/ModuleViews/ÜritusedKonverentsid.vue";
import Advendihommik from "@/components/ModuleViews/Advendihommik.vue";
import Fotoseeria from "@/components/ModuleViews/Fotoseeria.vue";
import VOCOKaart from "@/components/ModuleViews/VOCOKaart.vue";
import Visiitkaart from "@/components/ModuleViews/Visiitkaart.vue";
import OneBoxLayout from "@/components/OneBoxLayout.vue";
import PopUp from "@/components/PopUp.vue";
import { computed, ref, markRaw } from 'vue';
let allModules = {
    veebikoolitused: markRaw(Veebikoolitused),
    oppekaigud: markRaw(Õppekäigud),
    lektorid: markRaw(Külalislektorid),
    konverents: markRaw(ÜritusedKonverentsid),
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
                    <h2>Koolitused</h2>
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
                <div id="koolitused" class="moodulWrapper">
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.veebikoolitused)" :title="'Veebikoolitused'"
                            :text="''">
                            <img class="backg" src="../assets/img/avastatartut.webp"
                                alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.oppekaigud)" :title="'Õppekäigud'"
                            :text="''">
                            <img class="backg" src="../assets/img/rosabella.webp" alt="Rosabella logo T-särgil">
                        </OneBoxLayout>
                    </div>
                    <div class="moodulSection">
                        <OneBoxLayout @click="toggleModule(allModules.lektorid)" :title="'Külalislektorite loengud'"
                            :text="''">
                            <img class="backg" src="../assets/img/photoshop-luik.webp"
                                alt="Avasta Tartut mobiilirakenduse mockup">
                        </OneBoxLayout>
                        <OneBoxLayout @click="toggleModule(allModules.konverents)"
                            :title="'Üritused ja konverentsid'"
                            :text="''">
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

#koolitused {
    margin-top: 0px;
}
</style>
