<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Disaini kavandamine ja prototüüpimine</div>
            <p class="textP">Kursuse käigus tutvusin Steve Krugi raamatuga "Don’t Make Me Think". Raamatust
                pidin välja tooma 10 põhikontseptsiooni ning nende kohta koostama põhjaliku selgitava dokumendi.
                Kursuse raames tutvusin esmakordselt ka Figma platvormiga. Läbisin koolituse nimega Figma ABC, kus
                õpetati platvormil navigeerimist, funktsionaalsusi ning selle abil kasutajaliidese disaini loomist. Sain
                põhjaliku ülevaate kasutajakogemuse erinevatest aspektidest, sealhulgas leitavus, ligipääsetavus,
                kasutatavus ja usaldusväärsus. Tutvusin erinevate kasutajakogemuse modelleerimise mudelitega, nagu
                Honeycomb mudel, Bridge mudel ja kasutajakogemuse redel.
                Kõige olulisemad teadmised, mida sellest kursusest kaasa võtan, on seotud veebilehtede WCAG
                standarditega ja nende erinevate tasemetega (A, AA, AAA). Õppisin, kuidas muuta veebisisu
                ligipääsetavaks ka puuetega inimestele ning kasutasin erinevaid pistikprogramme ja tööriistu standardite
                kontrollimiseks ja tagamiseks.
                <br><br>
                Siit saab vaadata <a
                    href="https://drive.google.com/drive/folders/1tnBJ1eedKG8RYIe0COKh7Lpa3HhndMJo?usp=drive_link"
                    target="_blank">kõiki kursuse raames valminud töid</a>.
            </p>
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
import { render, ref } from 'vue';
import TextButton from '../TextButton.vue';
import TextButtonBack from '../TextButtonBack.vue';
import Kavandamine from '@/assets/img/kavandamine.webp';
import Blanki from '@/assets/img/blanki.webp';

const popUpImages = ref(null)

const images = [Kavandamine, Blanki]

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
        height: 500px;
        margin-bottom: 40px;
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