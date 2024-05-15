<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">VOCO õppehoonete kaart</div>
            <p class="textP">Ülesandeks oli luua illustreeritud ja interaktiivne kaardi prototüüp, mis näitab VOCO
                õppehoonete asukohti (Kopli 1, Põllu 11) ning lubab pop-up akende kaudu saada hoonete kohta
                lisainformatsiooni. Kahjuks sain ülesandest esialgu natuke valesti aru - lõin kaks eraldi kaarti (Kopli
                kaardi ja Põllu kaardi), kui tegelikult pidin need kujutama ühel kaardil ning lisainformatsioonina pidid
                avanema asukohatäpsustused. Minu prototüüp sisaldas eraldi Kopli ja Põllu kaarte ning
                lisainformatsioonina näidati hoopis sissepääsude asukohti.
                Prototüübi ja illustratsioonide (aluskaart, 3D efektiga hooned) loomiseks kasutasin Figmat.
                Selle ülesande käigus õppisin andmete lihtsustatud visualiseerimist. Näiteks kasutasin parklate
                tähistamiseks sinist värvi ja suuremate alade puhul, kuhu mahtus, tähte "P", kuna see on tüüpiline viis
                parklate tähistamiseks. Hoonete erinevad värvid aitasid kasutajal kaardil selgelt eristada eri hoonete
                asukohti. Lisaks sain harjutada interaktiivsuste lisamist ja animatsioonide loomist Figmas.
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
        <img src="/src/assets/img/kaart.webp" alt="">
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