<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Külalislektorite loengud</div>
            <p class="textP"><b>Age Arus Iglust - UX/UI disainiprotsessid ja uuringud</b><br>
                <b>18.12.2022</b>
                <br>
                Külalislektor rääkis lähemalt UX uuringutest ning nende olulisusest. Teemaks tulid ka ülesanded ja
                punktid, mis on vaja täita, et uuring oleks edukas ja kasutajasõbralik. Samuti vaatasime ülevaatlikult
                erinevaid uuringu tüüpe ja nende läbiviimist.
                <br><br>
                <b>Joonas Kesse - Kasutajamugavus ja sihtrühm</b><br>
                <b>24.01.2023</b>
                <br>
                Külalislektor tutvustas, mida täpselt tähendab UX disaineri mõiste ja mis on selle ameti ülesanded /
                kohustused. Rääkisime põgusalt ka uuringute tüüpidest ning kuidas neid korrektselt analüüsida.
                <br><br>
                <b>Paula Koppel Veriffist - Kasutajakogemuse uuringud/küsitlused</b><br>
                <b>25.01.2023</b>
                <br>
                Tunnis rääkis Paula Koppel lähemalt oma kogemusest Pipedrive’is ning Veriffis. Külalislektor tõi välja
                oma “ämbrisse astumise” kogemused, kuidas ta nende tõttu arenes ning andis näpunäiteid õpilastele.
                Arutlesime klassis natukene lähemalt persoonadest ja kasutajakogemuse uuringutest/küsitlustest - kuidas
                need valmivad, millised sammud tuleb läbida, et küsitlus oleks asjalik ja infot edasi andev.
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