<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Rosabella</div>
            <p class="textP">Ülesanne seisnes uue logo loomises Rosabella iluvõimlemis-rühmale, mis peab olema
                mitmekülgselt kasutatav erinevates kontekstides, olgu selleks siis must kampsun või roosa särk.
                Selle projekti käigus õppisin mitmeid erinevaid lähenemisviise logode kujundamisele, alustades
                negatiivsetest ja värvilistest versioonidest kuni ilma tekstita logomark variantideni. Kõik need
                aspektid on olulised logode kohandatavuse seisukohast erinevates kasutusolukordades. Üks oluline oskus,
                mille omandasin, oli mockupide loomine. Projekti raames pidin paigutama Rosabella logod
                treeningusärkidele ja pusadele, mis nõudis realistlike kujutiste loomist Rosabella poolt antud
                fotomaterjaliga. Sain esmase kogemuse ka mini-CVI loomisel, kus lisaks logode variatsioonidele ja
                mockupidele tuli esile tuua ka kasutatud värvikoodid ja fondid. Need teadmised osutusid kasulikuks ka
                müügiesindajate projektis, kus pidin looma brändi vastavalt klienti nõuetele.
                Nii-nii äge oli teada saada, et minu logo valiti Rosabella treenerite poolt lemmikuks ning kasutatakse
                siiani iluvõimlemisrühma riietel ning sotsiaalmeedias profiilipildina. :)</p>
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