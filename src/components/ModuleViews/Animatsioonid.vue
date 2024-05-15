<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Animatsioonid</div>
            <p class="textP">Kuigi Animatsioonide kursuse maht kogu mooduli vältel oli pigem tagasihoidlik, oli see minu
                absoluutne lemmik. Sain selgeks cinemagraphide olemuse, nende mitmekülgsed kasutusalad ning erinevused
                GIF-idest. Tutvusin ka Microsoft Research Cliplets programmiga, kus pidin looma enda cinemagraphi.
                Cinemagraph on omapärane kombinatsioon liikumatust pildist ja liikuvas vormis videost, kus suurem osa
                stseenist püsib paigal ning liigub ainult üksik element. Minu loomingus oli paigalseisev element veekogu
                ääres seisev puma, ning liikuvaks osaks oli puma saba. Cinemagraphi pumast saab vaadata siit.
                Lisaks avardus minu huvi Adobe After Effects programmi vastu, mida õppisin läbi erinevate õppevideote.
                Õppisin, kuidas animeerida 3D-graafikat ning üheks ülesandeks oli leida YouTube'ist juhend, mis näitaks
                samm-sammult animatsiooni loomist ning seda siis ise järele teha. Võtsin ette üsna keerulise video, kuid
                animatsiooni loomise käigus sain aru, et see polegi tegelikult nii keeruline. Selle töö käigus leidsin
                armastuse liikuva graafika vastu ning kui aeg ja võimalused lubavad, soovin selles vallas veelgi edasi
                õppida.
                Minu loodud animatsiooni saab vaadata siit.
            </p>
        </div>
        <div class="forwardBackButtons">
            <router-link to="">
                <TextButton :imgType="'right'" :alt="'Button Icon'" class="buttonRe">Järgmine</TextButton>
            </router-link>
        </div>
    </div>
    <div class="popupImagesSectionWrapper">
        <div class="popUpImages" ref="popUpImages">
            <img v-for="image in images" :src="image" alt="Illustration">
        </div>
        <div class="imagesNavigator">
            <div v-for="i, index in images" class="images-nav-dot-block" @click="navigateToImage(index)">
                <div class="nav-dot"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, render, markRaw, ref } from 'vue';
import TextButton from '../TextButton.vue';
import imgAvastaTartut from '@/assets/img/puma.gif';
import imgClearMind from '@/assets/img/clearmind.webp';
import imgFotoseeria from '@/assets/img/fotoseeria.webp';

const popUpImages = ref(null)

const images = [imgAvastaTartut, imgClearMind, imgFotoseeria]

function navigateToImage(index) {
    popUpImages.value.scrollTo({ left: popUpImages.value.offsetWidth * index, behaviour: 'smooth' });
}

</script>

<style scoped>
.popUpTextAndButtons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
    overflow-y: scroll;
    max-height: 100vh;
}

.popUpTextAndButtons::-webkit-scrollbar {
    background: transparent;
    width: 0;
}

.popupImagesSectionWrapper {
    position: relative;
    width: 45%;
}

.popUpImages {
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    height: 100vh;
    top: 0;
    transition: all 1s ease;
    scroll-behavior: smooth;
}

.popUpImages ::-webkit-scrollbar {
    display: none;
}

.popUpImages img {
    object-fit: cover;
}

.imagesNavigator {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    margin-top: -100px;
}

.imagesNavigator .images-nav-dot-block {
    padding: 12px;
}

.imagesNavigator .nav-dot {
    width: 20px;
    height: auto;
    aspect-ratio: 1;
    background: white;
    border-radius: 50%;
}

.imagesNavigator .nav-dot:hover {
    background: #60121c;
}

.popUpTextAndButtons .text {
    font-size: 48px;
    font-weight: 700;
    padding: 0 100px 0 120px;
    margin-bottom: 24px;
    margin-top: 100px;
}

.popUpTextAndButtons .textP {
    font-size: clamp(16px, 3vw, 18px);
    padding: 0 100px 0 120px;
    line-height: 1.5;
}

.buttonRe {
    font-size: 18px;
    margin: 96px 100px 56px 120px;
}


@media only screen and (max-width: 1500px) {
    .popUpTextAndButtons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 80%;
        height: 100%;
    }

    .popUpImages img {
        width: 100%;
        height: 100%;
    }

    .popUpTextAndButtons .text {
        font-size: clamp(40px, 1.5vw, 48px);
        font-weight: 700;
        padding: 0;
        margin-bottom: 24px;
        margin-top: 100px;
    }

    .popUpTextAndButtons .textP {
        font-size: clamp(16px, 3vw, 18px);
        padding: 0;
    }

    .buttonRe {
        font-size: 16px;
        margin: 56px 0 56px 0;
    }
}

@media only screen and (max-width: 600px) {
    .popUpTextAndButtons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 80%;
        height: 100%;
    }

    .popUpImages {
        width: 100%;
        height: 100%;
    }

    .popUpTextAndButtons .text {
        font-size: clamp(40px, 1.5vw, 48px);
        font-weight: 700;
        padding: 0;
        margin-bottom: 24px;
        margin-top: 100px;
    }

    .popUpTextAndButtons .textP {
        font-size: clamp(16px, 3vw, 18px);
        padding: 0;
    }

    .buttonRe {
        font-size: 16px;
        margin: 56px 0 56px 0;
    }
}
</style>