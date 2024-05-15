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
        <img src="/src/assets/img/fotoseeria.webp" alt="">
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