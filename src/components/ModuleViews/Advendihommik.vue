<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Advendihommik ja jõulukaart</div>
            <p class="textP">Nendes ülesannetes sain kogemuse trükikujunduse, video monteerimise, töötluse ja
                animeerimise vallas.

                Advendihommiku ülesanne oli kujundada Adobe Illustratoris tänukiri Variku kooli algklassiõpilasele A5
                formaadis kõrge resolutsiooniga (300 ppi), et säiliks kujunduse kvaliteet väljatrükil. Lisaks oli
                oluline järgida brändieeskirju. Näiteks ei tohtinud ma oma tänukirja kujunduses kasutada VOCO logo (mis
                oli algselt plaanis), kuna see ei vastanud kooli tänukirja blanketi nõuetele. Animeeritud jõulukaardi
                loomisel sain ülevaate erinevate meediumivormingute eelistest ja piirangutest. Näiteks, kuigi GIF-id on
                lihtsamad, jäävad nad helita ja nende pikkus on eelistatult alla 15 sekundi, samas pakuvad videod rohkem
                võimalusi, kuid nõuavad rohkem aega ja on mahukamad. Sain katsetada kaadrianimatsioonidega ning
                maskimist videos, kuid pidin ka kasutama palju abi internetist, et viia ellu oma videoideed täpselt
                sellisena, nagu ette kujutasin.
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
        <img src="/src/assets/img/tänukiri.webp" alt="">
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