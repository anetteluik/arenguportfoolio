<script setup>
import OneBoxLayout from "@/components/OneBoxLayout.vue";
import TextButton from "@/components/TextButton.vue";
</script>

<style scoped>
.popUpWrapper {
  /* Initial state: hidden off-screen */
  /*transform: translateX(100%);
  transition: transform 0.3s ease;
  /* Additional styles for fixed position */
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
}

.popUp {
  display: flex;
  flex-direction: row;
  width: 75vw;
  height: 100vh;
  background-color: #e72020;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  /*transform: translateX(100%);
  /* Initially hide the menu off-screen */
  right: 0;
  z-index: 999 !important;
}

.popUpTextAndButtons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;
  height: 100%;
  background-color: aliceblue;

}

.popUpImage {
  width: 45%;
  height: 100%;
  background-color: blue;
}

.popUpTextAndButtons .text {
  font-size: 48px;
  font-weight: 700;
  padding: 0 100px 0 120px;
  margin-bottom: 24px;
}

.popUpTextAndButtons .textP {
  font-size: 18px;
  padding: 0 100px 0 120px;
  line-height: 28px;
}

.popUpTextAndButtons img {
  margin: 36px;
}

.buttonRe {
  font-size: 18px;
  margin: 96px 100px 56px 120px;
}
</style>

<template>
  <main>
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
    <div class="popUpWrapper">
      <div class="popUp">
        <div class="popUpTextAndButtons">
          <div class="popUpTextAndButtonsWrapper">
            <div class="backArrow"><img src="../assets/img/arrow-back.svg" alt="Back button arrow icon"></div>
            <div class="text">Avasta Tartut</div>
            <p class="textP">Aasta Tegija võistluse ülesanne oli luua mobiilirakendus nimega "Avasta Tartut", mis
              võimaldab kasutajatel
              planeerida nii pere- kui ka kultuurireise. Rakendus pidi sisaldama kaarti, millel on märgitud erinevad
              vaatamisväärsused, ning pakub kasutajatele sobiva teekonna nende avastamiseks. Antud ülesande täitmiseks
              oli
              antud viis tundi ning kasutasin selleks disainitööriista Figma. <br>
              Aasta Tegija võistlusel osalemine oli minu jaoks ülimalt oluline, sest teadsin, et hindajate hulgas on
              nimekad ettevõtteid ja isikuid. Võidu saavutamine polnud minu jaoks niivõrd tähtis, vaid ootasin huviga
              tagasisidet tööle. Olen aja jooksul pidevalt täiendanud oma oskusi kasutajakogemuse ja visuaalse disaini
              vallas ning tagasi vaadates mõistan, et olin liialt keskendunud visuaalsele poolele ning ei pööranud
              piisavalt tähelepanu kasutajamugavuse ja ligipääsetavuse olulisusele. <br>
              Saadud tagasiside aitas mul mõista, et peaksin rohkem rõhku panema kasutajakesksele disainile, mitte
              ainult
              visuaalsete elementide täiustamisele. <br>
              Aasta Tegija võistlusel pälvisin kolmanda koha. <br>
              Siin on link minu loodud prototüübile ja projekti dokumentatsioonile.</p>
          </div>
          <div class="forwardBackButtons">
            <router-link to="">
              <TextButton :imgType="'right'" :alt="'Button Icon'" class="buttonRe">Jargmine</TextButton>
            </router-link>
          </div>
        </div>
        <div class="popUpImage">
        </div>
      </div>
    </div>
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
            <OneBoxLayout :title="'Avasta Tartut'" :text="'Mobiilirakenduse prototüüp, Figma, Illustrator'">
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
