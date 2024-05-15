<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">HTML ja CSS</div>
            <p class="textP">Selle kursuse jooksul õppisin veebilehe struktuuri põhialuseid, nagu joondus, pealkirjad,
                grupeerimine jne. Kursuse raames pidin läbima Udemy koolitusi, mis keskendusid HTML ja CSSi õpetamisele.
                HTML osas õppisin veebilehtede loomist nullist, struktuuri loomist erinevate komponentide abil, koodi
                fotode lisamist, listide loomist. CSS-is õppisin veebilehtede kujundamist fontidest värvideni ning sain
                teada, kuidas erinevad attribuudid mõjutavad komponentide asetust ja joondusi.
                Kasutasin saadud teadmisi, et luua mitmeleheline veebileht. See projekt hõlmas ülesandeid, nagu
                navigatsioonimenüüde kujundamine HTML-i ja CSS-i abil, failisüsteemi ühendused, vormide loomine ning
                HTML5 semantiliste siltide kasutamine veebilehe struktuuri parendamiseks. Samuti õppisin põgusalt SASS-i
                kasutamisest.
                Tutvusin erinevate validatoritega, nagu W3C HTML validator ja BeautifyTools CSS validatorURL, mis
                kontrollivad koodi kvaliteeti ning vastavust veebilehe standarditele. Tutvusin ka Bootstrap
                raamistikuga. Udemy kursustel, sain selgeks, kuidas Bootstrap 4 kiirendab kaasaegsete ja jätkusuutlike
                veebisaitide loomist.
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