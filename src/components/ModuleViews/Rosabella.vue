<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Rosabella</div>
            <p class="textP">Ülesanne seisnes uue logo loomises Rosabella iluvõimlemisrühmale. Logo pidi olema
                paindlikult kasutatav erinevates olukordades, sobides nii mustale pusale kui ka roosale trennisärgile.
                Projekti käigus õppisin nägema erinevaid lähenemisviise logole - logo, mis toimis koos tekstiga ja ka
                eraldi logomargina. Lõin logo jaoks erinevad värvilahendusi - roosa (põhilogo), valge (tumedale
                taustale) ning must (sobib heledamatele taustadele). Tüpograafia valikul pöörasin tähelepanu kirja
                paksusele ja suurusele, et printimisel riietele säiliks joonte selgus ja teravus. Kõik need aspektid on
                olulised logode kohandatavuse seisukohast erinevates kasutusolukordades. Üks oluline oskus, millega sain
                projekti käigus katsetada, oli <i>mockup</i>ide loomine. Logo paigutamine Rosabella trennisärkidele ja pusadele
                nõudis käsitsi kalibreerimist - fotomaterjal oli antud kliendi poolt, mis tähendas, et valmis .psd
                formaadis <i>mockup</i>ide kasutamine polnud võimalik ning Adobe Illustratoril polnud veel välja tulnud “<i>mockup tool</i>”.
                Sain esmase kogemuse ka mini-CVI loomisel, kus lisaks logode variatsioonidele ja mockupidele tuli välja
                tuua ka kasutatud värvikoodid ja fondid.

                Nii suur oli rõõm kuulda, et minu loodud logo valiti Rosabella treenerite poolt lemmikuks ning seda
                kasutatakse siiani iluvõimlemisrühma riietel ja sotsiaalmeedias profiilipildina. :)
                <br><br>
                Siit saab <a
                    href="https://drive.google.com/drive/folders/1i4_Pq3Kmza6IsYtf7lrU6b_1aYA9mimU?usp=sharing" target="_blank">projekti
                    visuaalidega</a> põhjalikumalt tutvuda.
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
import Rosabella from '@/assets/img/rosabella.webp';
import Rosabella2 from '@/assets/img/rosabella2.webp';
import Rosabella3 from '@/assets/img/rosabella3.webp';
import Rosabella4 from '@/assets/img/rosabella4.webp';

const popUpImages = ref(null)

const images = [Rosabella, Rosabella2, Rosabella3, Rosabella4]

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