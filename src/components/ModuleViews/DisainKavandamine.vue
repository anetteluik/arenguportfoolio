<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Disaini kavandamine ja prototüüpimine</div>
            <p class="textP">Kursuse käigus tutvusin kurikuulsa Steve Krugi raamatuga "Don’t Make Me Think". Raamatust
                pidin välja tooma 10 põhikontseptsiooni ning nende kohta koostama põhjaliku selgitava dokumendi. See
                ülesanne mitte ainult ei aitanud mul süvendada oma arusaamist, vaid ka kinnistas omandatud teadmisi.
                Kursuse raames tutvusin esmakordselt ka Figma platvormiga. Läbisin koolituse nimega Figma ABC, kus
                õpetati platvormil navigeerimist, funktsionaalsusi ning selle abil kasutajaliidese disaini loomist. Sain
                põhjaliku ülevaate kasutajakogemuse erinevatest aspektidest, sealhulgas leitavus, ligipääsetavus,
                kasutatavus ja usaldusväärsus. Tutvusin erinevate kasutajakogemuse modelleerimise mudelitega, nagu
                Honeycomb mudel, Bridge mudel ja kasutajakogemuse redel.
                Kõige olulisemad teadmised, mida sellest kursusest kaasa võtan, on seotud veebilehtede WCAG
                standarditega ja nende erinevate tasemetega (A, AA, AAA). Õppisin, kuidas muuta veebisisu
                ligipääsetavaks ka puuetega inimestele ning kasutasin erinevaid pluginaid ja tööriistu standardite
                kontrollimiseks ja tagamiseks.
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
        <img src="/src/assets/img/kavandamine.webp" alt="">
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