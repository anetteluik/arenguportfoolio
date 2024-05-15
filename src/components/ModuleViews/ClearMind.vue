<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Clear Mind</div>
            <p class="textP">Projekti ülesandeks oli kliendiga koostööd tehes välja selgitada teenuse/tooteidee,
                vajadused, eesmärgid ja ootused lõpptulemusele. Minu kliendi soov oli saada oma ideele logo, Facebooki
                konto eelvaate mockup (profiilipilt ning kaanefoto kujundus) ning tootedisain (etiketi ja purgi kujundus
                ning selle kujutamine mockupil). Logo kujundamiseks kasutasin Illustratorit, mockupide jaoks Photoshopi
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
    <div class="popUpImage">
        <img src="/src/assets/img/clearmind.webp" alt="">
    </div>
</template>

<script setup>
import { render } from 'vue';
import TextButton from '../TextButton.vue';
import TextButtonBack from '../TextButtonBack.vue';

</script>

<style scoped>
.popUpTextAndButtons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
}

.popUpImage {
    width: 45%;
}

.popUpImage img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

    .popUpImage {
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

    .popUpImage {
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