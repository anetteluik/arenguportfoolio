<script setup>
import AvastaTartut from "@/components/ModuleViews/AvastaTartut.vue";
import OneBoxLayout from "@/components/OneBoxLayout.vue";
import PopUp from "@/components/PopUp.vue";
import { computed, ref, markRaw } from 'vue';
let allModules = {
    avastaTartut: markRaw(AvastaTartut),
    rosabella: 'praktika',
    clearMind: 'clearMind'
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
    <div class="backdrop" :class="{'shown': popupOpen}"></div>
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
            <p>Minu kodukoht asub pisikeses Keeni külas Valga maakonnas. Enne,
              kui avastasin UX/UI disaini valdkonna, olin seadnud endale mitmeid
              erinevaid tööalaseid eesmärke, alustades loomaarsti ja laulja ning
              lõpetades automaalri erialaga. Ent nagu elu ikka, kulgeb see oma rada
              pidi ning täiesti juhuslikult sattusin niimoodi tutvuma UX/UI disaini
              valdkonnaga. Tagasi vaadates sain aru, et enamik seatud eesmärkidest
              hõlmasid loovust ning nutikust, mis on olnud mulle südamelähedased alates
              lapsepõlvest. Seega, kui avastasin praeguse eriala, mõtlesin endamisi:
              "Juhhuu, see ongi ju see, mida olen terve elu otsinud".</p>
          </div>
        </div>
        <div class="moodulWrapper">
          <div class="moodulSection">
            <OneBoxLayout @click="toggleModule(allModules.avastaTartut)" :title="'Avasta Tartut'" :text="'Mobiilirakenduse prototüüp, Figma, Illustrator'">
              <img class="backg" src="../assets/img/avastatartut.webp" alt="Avasta Tartut mobiilirakenduse mockup">
            </OneBoxLayout>
            <OneBoxLayout :title="'Rosabella'" :text="'Logo kujundamine, mockup, Illustrator, Photoshop'">
              <img class="backg" src="../assets/img/rosabella.webp" alt="Rosabella logo T-särgil">
            </OneBoxLayout>
          </div>
          <OneBoxLayout :title="'Clear Mind'"
            :text="'Logo kujundamine, prototüüp, mockup, kliendisuhtlus, Figma, Photoshop'">
            <img class="backg" src="../assets/img/clearmind.webp" alt="Clear Mind energiajoogi mockup purkidel">
          </OneBoxLayout>
          <div class="moodulSection">
            <OneBoxLayout :title="'Illustrator ja Photoshop'" :text="'Kujundustööd, programmiga tutvumine'">
              <img class="backg" src="../assets/img/avastatartut.webp" alt="Avasta Tartut mobiilirakenduse mockup">
            </OneBoxLayout>
            <OneBoxLayout :title="'Advendihommik ja jõulukaart'"
              :text="'Animatsioonid, kujundustööd, Photoshop, After Effects'">
              <img class="backg" src="../assets/img/rosabella.webp" alt="Rosabella logo T-särgil">
            </OneBoxLayout>
          </div>
          <div class="moodulSection">
            <OneBoxLayout :title="'Fotoseeria'" :text="'Fotograafia, pilditöötlus, Photoshop'">
              <img class="backg" src="../assets/img/avastatartut.webp" alt="Avasta Tartut mobiilirakenduse mockup">
            </OneBoxLayout>
            <OneBoxLayout :title="'VOCO õppehoonete kaart'" :text="'Animatsioonid, kujundustööd, Figma'">
              <img class="backg" src="../assets/img/rosabella.webp" alt="Rosabella logo T-särgil">
            </OneBoxLayout>
          </div>
          <OneBoxLayout :title="'NOPE Creative visiitkaart'" :text="'Trükiettevalmistus, Illustrator, Figma'">
            <img class="backg" src="../assets/img/clearmind.webp" alt="Clear Mind energiajoogi mockup purkidel">
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
