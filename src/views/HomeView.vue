<template>
  <main>
    <div class="jumbo">
      <div class="jumboWrapper">
        <div class="mainTitle">
          <h1>Anette Luik</h1>
        </div>
        <div class="details">
          <p>Arenguportfoolio</p>
          <p>UX/UI nooremdisainer</p>
        </div>
      </div>
    </div>
    <div class="mainInfo">
      <div class="mainWrapper">
        <div class="subtitle">
          <p>saame tuttavaks</p>
        </div>
        <div class="title">
          <h3>Mina olen Anette</h3>
        </div>
        <div class="descriptionWrapper">
          <div class="description">
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
          <router-link to="/minust">
            <TextButton :imgType="'upright'" :alt="'Button Icon'">Veel minust</TextButton>
          </router-link>
        </div>
        <div class="aboutSectionPhotos">
          <div class="aboutPhoto">
            <img src="../assets/img/profile.jpg" alt="Profile Picture">
          </div>
          <div class="aboutPhoto">
            <img src="../assets/img/profile.jpg" alt="Profile Picture">
          </div>
        </div>
      </div>
      <div class="arengWrapper">
        <div class="areng">
          <h3>Akadeemiline areng</h3>
          <div class="sliderPhotos">
            <div class='flex-container' @scroll="sideScroll" @wheel="sideScroll">
              <div class='card'>
                <img src="/src/assets/img/avastatartut.webp" alt="">
              </div>
              <div class='card'>card</div>
              <div class='card'>card</div>
              <div class='card'>card</div>
              <div class='card'>card</div>
              <div class='card'>card</div>
              <div class='card'>card</div>
              <div class='card'>card</div>
              <div class='card'>card</div>
              <div class='card'>card</div>
            </div>
          </div>
          <div class="slider">

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import TextButton from "../components/TextButton.vue"

function sideScroll(event) {
  event.preventDefault();
  const scrollableElement = event.target.closest('.flex-container')
  let change = event.deltaY;
  let speed = 1;
  let scroll = change * speed;
  let reachedTheLeftSideOfSidescroll = scrollableElement.scrollLeft == 0
  let isTryingToScrollUp = scroll < 0
  let reachedTheRightSideOfSidescroll = scrollableElement.scrollLeft + scrollableElement.clientWidth >= scrollableElement.scrollWidth
  let isTryingToScrollDown = scroll > 0
  if (reachedTheLeftSideOfSidescroll && isTryingToScrollUp
  || reachedTheRightSideOfSidescroll && isTryingToScrollDown) { 
      window.scrollBy(0, scroll * 0.2); // 0.2 makes the scroll slower
  } else {
    scrollableElement.scrollBy(scroll, 0);
  }
}
</script>

<style>

.sliderCardsWrapper {
  max-width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.sliderPhotos {
  padding: 10px;
  overflow-y: hidden;
  width: 100%;
}

.flex-container {
  overflow-x: scroll; 
  padding-bottom: 17px;
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
}

/* width */
.flex-container::-webkit-scrollbar {
  height: 12px;
}

/* Track */
.flex-container::-webkit-scrollbar-track {
  background: #CEAAAE;
}

/* Handle */
.flex-container::-webkit-scrollbar-thumb {
  background: #61131D;
}

.flex-container::-webkit-scrollbar-thumb:hover {
  background: #831a28;
}

.card {
  flex: 3 0 33%;
  min-height: 400px;
  min-width: 300px;
  display: inline-block;
  background-color: blueviolet;
}


</style>