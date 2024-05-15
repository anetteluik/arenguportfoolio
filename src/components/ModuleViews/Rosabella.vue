<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Rosabella</div>
            <p class="textP">Ülesanne seisnes uue logo loomises Rosabella iluvõimlemisrühmale. Logo pidi olema
                paindlikult kasutatav erinevates olukordades, sobides nii mustale pusale kui ka roosale trennisärgile.
                Projekti käigus õppisin nägema erinevaid lähenemisviise logole - logo, mis toimis koos tekstiga ja ka
                eraldi logomargina. Lõin logo jaoks erinevad värvilahendusi - roosa (põhilogo), valge (tumedale
                taustale) ning must (sobib heledamatele tasutadele). Tüpograafia valikul pöörasin tähelepanu kirja
                paksusele ja suurusele, et printimisel riietele säiliks joonte selgus ja teravus. Kõik need aspektid on
                olulised logode kohandatavuse seisukohast erinevates kasutusolukordades. Üks oluline oskus, millega sain
                projekti käigus katsedada, oli mockupide loomine. Logo paigutamine Rosabella trennisärkidele ja pusadele
                nõudis käsitsi kalibreerimist - fotomaterjal oli antud kliendi poolt, mis tähendas, et valmis .psd
                formaadis mockupide kasutamine polnud võimalik ning Photoshopil polnud veel välja tulnud “mockup tool”.
                Sain esmase kogemuse ka mini-CVI loomisel, kus lisaks logode variatsioonidele ja mockupidele tuli välja
                tuua ka kasutatud värvikoodid ja fondid.

                Nii suur oli rõõm kuulda, et minu loodud logo valiti Rosabella treenerite poolt lemmikuks ning seda
                kasutatakse siiani iluvõimlemisrühma riietel ja sotsiaalmeedias profiilipildina. :)</p>
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
        <img src="/src/assets/img/rosabella.webp" alt="">
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