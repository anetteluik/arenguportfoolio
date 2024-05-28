<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Advendihommik ja jõulukaart</div>
            <p class="textP">Nendes ülesannetes sain kogemuse trükikujunduse, video monteerimise, töötluse ja
                animeerimise vallas.
                <br><br>
                Advendihommiku ülesanne oli kujundada Adobe Illustratoris tänukiri Variku kooli algklassiõpilasele A5
                formaadis kõrge resolutsiooniga (300 ppi), et säiliks kujunduse kvaliteet väljatrükil. Lisaks oli
                oluline järgida brändieeskirju. Näiteks ei tohtinud ma oma tänukirja kujunduses kasutada VOCO logo (mis
                oli algselt plaanis), kuna see ei vastanud kooli tänukirja blanketi nõuetele. Animeeritud jõulukaardi
                loomisel sain ülevaate erinevate meediumivormingute eelistest ja piirangutest. Näiteks, kuigi GIF-id on
                lihtsamad, jäävad nad helita ja nende pikkus on eelistatult alla 15 sekundi, samas pakuvad videod rohkem
                võimalusi, kuid nõuavad rohkem aega ja on mahukamad. Sain katsetada kaadrianimatsioonidega ning
                <i>mask</i>imist videos, kuid pidin ka kasutama palju abi internetist, et viia ellu oma videoideed
                täpselt
                sellisena, nagu ette kujutasin.
                <br><br>
                Siit saab näha <a
                    href="https://drive.google.com/file/d/1gF90Z95hAAzgEwW7qk1RwnuaesGVScII/view?usp=sharing"
                    target="_blank">animeeritud jõulukaarti</a> VOCO IT-osakonnale ning tutvuda lähemalt <a
                    href="https://drive.google.com/file/d/1QpiVF0Y9pE4sSN5XG_re28YP9PLPCU7e/view?usp=sharing"
                    target="_blank">tänukirjaga</a>.
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
import Tänukiri from '@/assets/img/tänukiri.webp';

const popUpImages = ref(null)

const images = [Tänukiri]

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