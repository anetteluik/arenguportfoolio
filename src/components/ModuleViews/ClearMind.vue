<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Clear Mind</div>
            <p class="textP">Projekti ülesandeks oli kliendiga koostööd tehes välja selgitada teenuse/tooteidee,
                vajadused, eesmärgid ja ootused lõpptulemusele. Minu kliendi soov oli saada oma ideele logo, Facebooki
                konto eelvaate <i>mockup</i> (profiilipilt ning kaanefoto kujundus) ning tootedisain (etiketi ja purgi kujundus
                ning selle kujutamine mockupil). Logo kujundamiseks kasutasin Adobe Illustratorit, <i>mockup</i>ide jaoks Adobe Photoshopi
                ning esitluse ja muude visuaalide loomiseks keskkonda Figma.
                Antud ülesande käigus õppisin rakendama kliendikeskset disaini, kohandades disainilahendusi vastavalt
                kliendi individuaalsetele vajadustele ja eelistustele. Selleks pidasin mitmeid arutelusid kliendiga, et
                korrektselt mõista nõudeid ning nägemust lõpptulemusest. Tegemist oli mitmekülgse projektiga, kus
                uurisin erinevaid kujundusvorminguid alates tootedisainist kuni sotsiaalmeedia platvormide (nagu
                Facebook ja Instagram) postitusteni ning animeeritud sotsiaalmeedia sisuni (viimaseni kahjuks ei
                jõudnudki). Oluline oli arvestada lisaks kliendi konkreetsete soovide ja visioonidele ka lisaks
                lõppkasutajaga.
                Arvan, et projekt oli edukas, sest suhtlus kliendiga oli sujuv, klient oli lõpptulemusega väga rahul
                ning sain kogeda väga reaalset kliendiga koostöö olukorda, mis ka tulevikus kindlasti ette tuleb.
                <br><br>
                Siit leiad kogu projekti <a
                    href="https://www.figma.com/design/Uy73DsuihrpP8w2IM2ytud/Clear-Mind?node-id=0%3A1&t=Ppg0KrCHjR4jlhUk-1"
                    target="_blank">dokumentatsiooni
                    ja visuaalid</a>.
            </p>
        </div>
        <div class="forwardBackButtons">
            <router-link to="">
                <TextButtonBack :imgType="'back'" :alt="'Button Icon'" class="buttonRe">Eelmine</TextButtonBack>
            </router-link>
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
import { render, ref } from 'vue';
import TextButton from '../TextButton.vue';
import TextButtonBack from '../TextButtonBack.vue';
import ClearMind from '@/assets/img/clearmind.webp';
import ClearMind2 from '@/assets/img/clearmind3.webp';
import ClearMind3 from '@/assets/img/clearmind2.webp';

const popUpImages = ref(null)

const images = [ClearMind, ClearMind2, ClearMind3]

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