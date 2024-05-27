<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Animatsioonid</div>
            <p class="textP">Kuigi Animatsioonide kursuse maht kogu mooduli vältel oli pigem tagasihoidlik, oli see minu
                absoluutne lemmik. Sain selgeks <i>cinemagraph</i>ide olemuse, nende mitmekülgsed kasutusalad ning erinevused
                GIF-idest. Tutvusin ka Microsoft Research Cliplets programmiga, kus pidin looma enda <i>cinemagraph</i>i.
                <i>Cinemagraph</i> on omapärane kombinatsioon liikumatust pildist ja liikuvas vormis videost, kus suurem osa
                stseenist püsib paigal ning liigub ainult üksik element. Minu loomingus oli paigalseisev element veekogu
                ääres seisev puuma, ning liikuvaks osaks oli puuma saba. <br><br>
                Lisaks kasvas minu huvi Adobe After Effects programmi vastu, mida õppisin läbi erinevate õppevideote.
                Õppisin, kuidas animeerida 3D-graafikat ning üheks ülesandeks oli leida YouTube'ist juhend, mis näitaks
                samm-sammult animatsiooni loomist ning seda siis ise järele teha. Võtsin ette üsna keerulise video, kuid
                animatsiooni loomise käigus sain aru, et see polegi tegelikult nii keeruline. Selle töö käigus leidsin
                armastuse liikuva graafika vastu ning kui aeg ja võimalused lubavad, soovin selles vallas veelgi edasi
                õppida.
                <br><br>
                Minu loodud animatsiooni ja <i>cinemagraph</i>iga saab tutvuda <a
                    href="https://drive.google.com/drive/folders/1F-jRZDQY7Vu35jy-tEoHmK8Hfplwshg8?usp=sharing" target="_blank">siin</a>.
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
import Puma from '@/assets/img/puma.gif';

const popUpImages = ref(null)

const images = [Puma]

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
    width: 100%;
    flex-shrink: 0;
}

.imagesNavigator {
    display: none;
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

.forwardBackButtons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


@media only screen and (max-width: 1500px) {
    .popUpTextAndButtons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 80%;
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

    .popupImagesSectionWrapper {
        position: static;
        width: 80%;
        height: 600px;
        margin-bottom: 100px;
    }

    .popUpImages {
        display: flex;
        flex-direction: row;
        overflow-x: hidden;
        height: 100%;
        top: 0;
        transition: all 1s ease;
        scroll-behavior: smooth;
    }

    .popUpImages img {
        object-fit: cover;
    }

    .popUpTextAndButtons {
        overflow-y: hidden;
        max-height: fit-content;
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

    .popupImagesSectionWrapper {
        width: 100%;
        height: 600px;
        margin-bottom: 0;
    }
}
</style>