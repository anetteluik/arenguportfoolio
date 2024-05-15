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
          <h2>Graafilise disaini alused</h2>
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
            <p>Mooduli raames õppisin tundma ja kasutama erinevaid programme, nagu ArtRage, Krita, Adobe Photoshop ja
              Illustrator. Põhilised omandatud oskused tarkvaradega katsetamisest olid erinevad maalimistehnikad,
              pilditöötlus (peamiselt Photoshopis) ja vektorgraafika loomine. Lisaks õppisin trükidisaini ja
              -ettevalmistuse põhimõtteid, brändingu loomist ja selle disainis kasutamise reegleid, värviteooriat,
              tüpograafia eripärasid ning vastavalt kontekstile nende korrektset rakendamist. Mõned projektid
              võimaldasid mul kogeda ka reaalset kliendisuhtlust - klientide vajaduste ja ootuste arvestamist
              disainiprotsessis, enda seisukohtade selgitamist ning selget ja konkreetset suhtlust kliendiga, et tagada
              sujuv infovahetus.</p>
          </div>
        </div>
        <div class="moodulWrapper">
          <div class="moodulSection">
            <OneBoxLayout @click="toggleModule(allModules.avastaTartut)" :title="'Avasta Tartut'"
              :text="'Mobiilirakenduse protoüüp, logo kujundamine, Figma, Illustrator'">
              <img img loading="lazy" class="backg" src="../assets/img/avastatartut.webp"
                alt="Avasta Tartut mobiilirakenduse mockup">
            </OneBoxLayout>
            <OneBoxLayout @click="toggleModule(allModules.rosabella)" :title="'Rosabella'"
              :text="'Logo kujundamine, mockup, Illustrator, Photoshop'">
              <img img loading="lazy" class="backg" src="../assets/img/rosabella.webp" alt="Rosabella logo T-särgil">
            </OneBoxLayout>
          </div>
          <OneBoxLayout @click="toggleModule(allModules.clearMind)" :title="'Clear Mind'"
            :text="'Logo kujundamine, prototüüp, mockup, kliendisuhtlus, Figma, Photoshop'">
            <img img loading="lazy" class="backg" src="../assets/img/clearmind.webp"
              alt="Clear Mind energiajoogi mockup purkidel">
          </OneBoxLayout>
          <div class="moodulSection">
            <OneBoxLayout @click="toggleModule(allModules.illustrator)" :title="'Illustrator ja Photoshop'"
              :text="'Kujundustööd, programmiga tutvumine'">
              <img img loading="lazy" class="backg" src="../assets/img/photoshop-luik.webp"
                alt="Avasta Tartut mobiilirakenduse mockup">
            </OneBoxLayout>
            <OneBoxLayout @click="toggleModule(allModules.advendihommik)" :title="'Advendihommik ja jõulukaart'"
              :text="'Animatsioonid, kujundustööd, trükiettevalmistus, Illustrator, Photoshop, After Effects'">
              <img img loading="lazy" class="backg" src="../assets/img/tänukiri.webp" alt="Rosabella logo T-särgil">
            </OneBoxLayout>
          </div>
          <div class="moodulSection">
            <OneBoxLayout @click="toggleModule(allModules.fotoseeria)" :title="'Fotoseeria'"
              :text="'Fotograafia, pilditöötlus, Photoshop'">
              <img img loading="lazy" class="backg" src="../assets/img/fotoseeria.webp"
                alt="Avasta Tartut mobiilirakenduse mockup">
            </OneBoxLayout>
            <OneBoxLayout @click="toggleModule(allModules.vocokaart)" :title="'VOCO õppehoonete kaart'"
              :text="'Animatsioonid, kujundustööd, Figma'">
              <img img loading="lazy" class="backg" src="../assets/img/kaart.webp" alt="Rosabella logo T-särgil">
            </OneBoxLayout>
          </div>
          <OneBoxLayout @click="toggleModule(allModules.visiitkaart)" :title="'NOPE Creative visiitkaart'"
            :text="'Trükiettevalmistus, Illustrator, Figma'">
            <img img loading="lazy" class="backg" src="../assets/img/visiitkaart.webp"
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
