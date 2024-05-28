<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">VOCO õppehoonete kaart</div>
            <p class="textP">Ülesandeks oli luua illustreeritud ja interaktiivne kaardi prototüüp, mis näitab VOCO
                õppehoonete asukohti (Kopli 1, Põllu 11) ning lubab hüpikakende kaudu saada hoonete kohta
                lisainformatsiooni. Kahjuks sain ülesandest esialgu natuke valesti aru - lõin kaks eraldi kaarti (Kopli
                kaardi ja Põllu kaardi), kui tegelikult pidin need kujutama ühel kaardil ning lisainformatsioonina pidid
                avanema asukohatäpsustused. Minu prototüüp sisaldas eraldi Kopli ja Põllu kaarte ning
                lisainformatsioonina näidati hoopis sissepääsude asukohti.
                Prototüübi ja illustratsioonide (aluskaart, 3D efektiga hooned) loomiseks kasutasin Figmat.
                Selle ülesande käigus õppisin andmete lihtsustatud visualiseerimist. Näiteks kasutasin parklate
                tähistamiseks sinist värvi ja suuremate alade puhul, kuhu mahtus, tähte "P", kuna see on tüüpiline viis
                parklate tähistamiseks. Hoonete erinevad värvid aitasid kasutajal kaardil selgelt eristada eri hoonete
                asukohti. Lisaks sain harjutada interaktiivsuste lisamist ja animatsioonide loomist Figmas.
                <br><br>
                Siin saad katsetada <a
                    href="https://www.figma.com/proto/x3fdYrq47UYSYmG6EHttja/3D-Map?type=design&node-id=12-517&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=12%3A517"
                    target="_blank">VOCO õppehoonete kaarti</a>.
            </p>
        </div>
    </div>
    <div class="popupImagesSectionWrapper">
        <div class="popUpImages" ref="popUpImages">
            <img v-for="image in images" :src="image" alt="Illustration">
        </div>
        <div class="imagesNavigator">
            <div v-for="i, index in images" class="images-nav-dot-block" @click="navigateToImage(index)">
                <div class="nav-dot"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { render, ref } from 'vue';
import TextButton from '../TextButton.vue';
import TextButtonBack from '../TextButtonBack.vue';
import Kaart from '@/assets/img/kaart.webp';

const popUpImages = ref(null)

const images = [Kaart]

function navigateToImage(index) {
    popUpImages.value.scrollTo({ left: popUpImages.value.offsetWidth * index, behaviour: 'smooth' });
}

</script>

<style scoped>
.popUpTextAndButtons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
    overflow-y: scroll;
    max-height: 100vh;
}

.popUpTextAndButtons::-webkit-scrollbar {
    background: transparent;
    width: 0;
}

.popupImagesSectionWrapper {
    position: relative;
    width: 45%;
}

.popUpImages {
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    height: 100vh;
    top: 0;
    transition: all 1s ease;
    scroll-behavior: smooth;
}

.popUpImages ::-webkit-scrollbar {
    display: none;
}

.popUpImages img {
    object-fit: cover;
}

.imagesNavigator {
    display: none;
    align-items: center;
    justify-content: center;
    top: 0;
    margin-top: -100px;
}

.imagesNavigator .images-nav-dot-block {
    padding: 12px;
}

.imagesNavigator .nav-dot {
    width: 20px;
    height: auto;
    aspect-ratio: 1;
    background: white;
    border-radius: 50%;
}

.imagesNavigator .nav-dot:hover {
    background: #60121c;
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

    .popupImagesSectionWrapper {
        position: static;
        width: 80%;
        height: 600px;
        margin-bottom: 100px;
    }

    .popUpImages {
        display: flex;
        flex-direction: row;
        overflow-x: hidden;
        height: 100%;
        top: 0;
        transition: all 1s ease;
        scroll-behavior: smooth;
    }

    .popUpImages img {
        object-fit: cover;
    }

    .popUpTextAndButtons {
        overflow-y: hidden;
        max-height: fit-content;
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

    .popUpImages {
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

    .popupImagesSectionWrapper {
        width: 100%;
        height: 600px;
        margin-bottom: 0;
    }
}
</style>