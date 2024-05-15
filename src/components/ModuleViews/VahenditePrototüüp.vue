<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Vahendite kasutamine prototüüpimiseks, arendusraamistikud</div>
            <p class="textP">Videoõpetuse abil õppisin tundma Vue arendusraamistikku ning kasutades Vued, pidi looma
                veebilehe, millele on lisatud funktsionaalne e-poe ostukorvi. See tähendas, et ostukorvi lisatud toodete
                arv ja tooted ise olid selgelt nähtavad ning toodete lisamisel ostukorvi oli võimalik neid ka
                üksikasjalikumalt vaadata. Kuigi tegemist oli suuresti arendustööga, hõlmas ülesanne ka
                disainilahenduste analüüsimist ja hindamist kasutajamugavuse seisukohast.
                Kursuse teise ülesandena oli vaja luua high-fidelity prototüüp internetipanga rakendusest. Prototüüp
                pidi sisaldama konto väljavõtte vaadet, võimalust vahetada rolli (näiteks isikliku, lapse ja ettevõtte
                konto vahel), võimalust hallata mitut pangakontot ühe rolli all (nt põhikonto ja säästukonto) ning
                võimalust teha ülekandeid. Lisaks lisasime funktsionaalsuse, kus kuvatakse kõiki varasemaid ülekandeid
                ja lihtsustatud võimaluse pangakonto numbri kopeerimiseks.
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
        <img src="/src/assets/img/vue.webp" alt="">
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