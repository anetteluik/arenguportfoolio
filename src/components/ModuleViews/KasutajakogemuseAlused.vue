<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Kasutajakogemuse analüüsi alused</div>
            <p class="textP">Iglu esimene loeng andis ülevaate kasutatavuse testimise tugevustest ja piirangutest.
                Kasutatavuse testimise plussid on loomulikult seotud kasutajakogemuse parandamisega. Samuti võib
                testimise käigus ilmneda varjatud probleeme, millele poleks muidu tähelepanu pööratud, ning varajase
                kasutatavuse testimise abil on võimalik juba varakult saada aimu kasutajate emotsioonidest toote/teenuse
                suhtes. Kasutatavuse testimisega kaasnevad ka piirangud, eriti seoses testimise ettevalmistamise
                pikaajalise protsessiga ning riskiga valida vale sihtgrupp, mis võib moonutada vastuste usaldusväärsust.
                Loengu käigus sain teada, et tüüpiline kasutatavuse testimise valimi suurus koosneb tavaliselt 5-6
                inimesest. Lisaks tutvustati erinevaid intervjuutehnikaid ja rõhutati küsimuste korrektse koostamise
                tähtsust (küsimused ei tohiks olla suunavad ning peaksid vältima ühe-sõna-vastustele viivaid küsimusi,
                näiteks “kas” küsimused). Samuti on oluline säilitada neutraalne seisukoht küsitlemise ajal ning
                eelistada märkmete tegemiseks pigem märkmikku (või veelgi parem, salvestada vestlus).
            </p>
        </div>
        <div class="forwardBackButtons">
            <router-link to="/avasta-tartut">
                <TextButtonBack :imgType="'back'" :alt="'Button Icon'" class="buttonRe">Eelmine</TextButtonBack>
            </router-link>
            <router-link to="">
                <TextButton :imgType="'right'" :alt="'Button Icon'" class="buttonRe">Järgmine</TextButton>
            </router-link>
        </div>
    </div>
    <div class="popUpImage">
        <img src="/src/assets/img/iglu-loeng1.webp" alt="">
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