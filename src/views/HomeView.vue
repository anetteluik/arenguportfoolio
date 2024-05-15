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
            <p>Olen 21-aastane loomasõber, mootorrattur ja UX/UI noorem disainer. Oma senise elu jooksul on mind köitnud
              kõik loominguline - alates kokandusest ja käsitööst kuni kunstiõpetustundideni. Uskumatu, aga mulle
              meeldis (ja meeldib siiani) ka matemaatikaülesannete lahendamine. Arvan, et eriala, mille olen valinud,
              hõlmab suuresti just neid teemasid, millega mulle on alati meeldinud tegeleda - loomingulisus, nutikus,
              analüütiline mõtlemine ja seoste loomine. Seepärast armastan seda, mida teen, ning leian igapäevaselt
              motivatsiooni ennast ja oma oskusi UX/UI valdkonnas täiustada.</p>
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
                <router-link to="/graafilise-disaini-alused">
                  <img class="backg" src="/src/assets/img/avastatartut.webp" alt="">
                  <div class="gradient"></div>
                  <div class="imgText">
                    <h5>
                      Graafilise disaini alused
                    </h5>
                  </div>
                </router-link>
              </div>
              <div class='card'>
                <router-link to="/kasutajakogemuse-analuus">
                  <img class="backg" src="/src/assets/img/frillice.webp" alt="">
                  <div class="gradient"></div>
                  <div class="imgText">
                    <h5>
                      Kasutajakogemuse analüüs
                    </h5>
                  </div>
                </router-link>
              </div>
              <div class='card'>
                <router-link to="/veebikujundus">
                  <img class="backg" src="/src/assets/img/puma.gif" alt="">
                  <div class="gradient"></div>
                  <div class="imgText">
                    <h5>
                      Veebikujundus
                    </h5>
                  </div>
                </router-link>
              </div>
              <div class='card'>
                <router-link to="/psuhholoogia-ja-suhtlemine">
                  <img class="backg" src="/src/assets/img/Spotify.webp" alt="">
                  <div class="gradient"></div>
                  <div class="imgText">
                    <h5>
                      Psühholoogia ja suhtlemine
                    </h5>
                  </div>
                </router-link>
              </div>
              <div class='card'>
                <router-link to="/tootearendus">
                  <img class="backg" src="/src/assets/img/kyynal.webp" alt="">
                  <div class="gradient"></div>
                  <div class="imgText">
                    <h5>
                      Tootearendus
                    </h5>
                  </div>
                </router-link>
              </div>
              <div class='card'>
                <router-link to="/arvutite-riistvara-ja-vorgud">
                  <img class="backg" src="/src/assets/img/it.webp" alt="">
                  <div class="gradient"></div>
                  <div class="imgText">
                    <h5>
                      Arvutite riistvara ja võrgud
                    </h5>
                  </div>
                </router-link>
              </div>
              <div class='card'>
                <router-link to="/programmeerimise-alused">
                  <img class="backg" src="/src/assets/img/matemaatika.webp" alt="">
                  <div class="gradient"></div>
                  <div class="imgText">
                    <h5>
                      Programmeerimise alused
                    </h5>
                  </div>
                </router-link>
              </div>
              <div class='card'>
                <router-link to="/veebiarendus-ja-haldus">
                  <img class="backg" src="/src/assets/img/tarkvaraarendus.webp" alt="">
                  <div class="gradient"></div>
                  <div class="imgText">
                    <h5>
                      Veebiarendus ja haldus
                    </h5>
                  </div>
                </router-link>
              </div>
              <div class='card'>
                <router-link to="/karjaariplaneerimine-ja-ettevotlus">
                  <img class="backg" src="/src/assets/img/hakaton.webp" alt="">
                  <div class="gradient"></div>
                  <div class="imgText">
                    <h5>
                      Karjääriplaneerimine ja ettevõtlus
                    </h5>
                  </div>
                </router-link>
              </div>
              <div class='card'>
                <router-link to="/koolitused">
                  <img class="backg" src="/src/assets/img/wud.webp" alt="">
                  <div class="gradient"></div>
                  <div class="imgText">
                    <h5>
                      Koolitused
                    </h5>
                  </div>
                </router-link>
              </div>
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
.imgText {
  position: absolute;
  bottom: 24px;
  /* Adjust vertical position */
  left: 24px;
  /* Adjust horizontal position */
  color: #EFEDEB;
  padding-right: 24px;
}

.imgText h5 {
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.3;
}

.gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, #221517, transparent);
}

.backg {
  transition: transform 0.3s ease;
  /* Transition effect for smooth zoom */
}

.backg:hover {
  transform: scale(1.05);
  /* Zoom effect on hover */
}

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
  position: relative;
  flex: 3 0 33%;
  min-height: 400px;
  min-width: 300px;
  display: inline-block;
  background-color: blueviolet;
  overflow: hidden;
}


@media only screen and (max-width: 1080px) {
  .areng {
    margin-bottom: 0;
    height: auto;
  }

  .arengWrapper {
    margin-top: 80px;
  }
}

@media only screen and (max-width: 600px) {
  .areng {
    margin-bottom: 0;
    height: auto;
  }

  .arengWrapper {
    margin-top: 0px;
    margin-bottom: 0;
  }
}
</style>