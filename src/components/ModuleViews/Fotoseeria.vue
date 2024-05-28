<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Fotoseeria</div>
            <p class="textP">Ülesande eesmärk oli luua 3-4 fotost koosnev fotoseeria, mille keskmes on ühendav lugu.
                Minu töö lugu oli väljendada inimese käe võimu - kuidas värvikirevad metsad on muutunud hallideks ja
                tuhmideks linnadeks. Kõigis loodud fotoseeriates oli ühine põhimõte: käsi puul, käest on läbi näha
                linna.
                Fotode jäädvustamiseks kasutasin oma mobiiltelefoni Oneplus 9 Pro ning järeltöötluseks programmi Adobe
                Photoshop.
                Selle ülesande käigus õppisin, kui oluline on fotograafias valida õige kompositsioon. Näiteks kasutasin
                linnafotodel kolmandiku reeglit ja püüdsin teha fotosid nii, et järeltöötluses oleks võimalik neid
                vajadusel suurendada. Uurisin erinevaid järeltöötluse tehnikaid, nagu mustvalgeks muutmine, kontrasti ja
                valguse manipuleerimine ning erinevate filtrite kasutamine. Mõistsin, kuidas järeltöötlus võib
                märgatavalt muuta foto visuaalset mõju ning see aitas mul palju efektiivsemalt edasi anda sõnumit
                "värvikire mets, hall ja tuim linn". Õppevideotest leidsin erinevaid põhimõtteid ja tehnikaid
                fotograafias ning sain inspiratsiooni oma fotoseeria loomiseks. Näiteks soovitati fotograafia põhimõtete
                osas jäädvustada palju-palju pilte, et hiljem valida parimad, vältides olukorda, kus kolmest fotost
                kõige parem foto jääb näiteks uduseks. Lisaks tutvusin tehniliste aspektidega, nagu kaamera eraldusvõime
                seadistamine ja formaadi (portree, maastik) valimine.
                <br><br>
                Siit leiad kogu <a
                    href="https://drive.google.com/drive/folders/1I6P8Dsm3qNxA8zsbwdU8rZ372JjpeyYO?usp=sharing"
                    target="_blank">fotoseeriat</a> hõlmavad materjalid.
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
import Fotoseeria from '@/assets/img/fotoseeria.webp';
import Fotoseeria2 from '@/assets/img/loodus1.webp';
import Fotoseeria3 from '@/assets/img/loodus2.webp';
import Fotoseeria4 from '@/assets/img/loodus3.webp';

const popUpImages = ref(null)

const images = [Fotoseeria, Fotoseeria2, Fotoseeria3, Fotoseeria4]

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