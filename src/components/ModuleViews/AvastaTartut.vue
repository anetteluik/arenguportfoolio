<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Avasta Tartut</div>
            <p class="textP">Aasta Tegija võistluse ülesanne oli luua mobiilirakendus nimega "Avasta Tartut",
                mis
                võimaldab kasutajatel
                planeerida nii pere- kui ka kultuurireise. Rakendus pidi sisaldama kaarti, millel on märgitud
                erinevad
                vaatamisväärsused, ning pakub kasutajatele sobiva teekonna nende avastamiseks. Antud ülesande
                täitmiseks
                oli
                antud viis tundi ning kasutasin selleks disainitööriista Figma. <br>
                Aasta Tegija võistlusel osalemine oli minu jaoks ülimalt oluline, sest teadsin, et hindajate
                hulgas on
                nimekad ettevõtteid ja isikuid. Võidu saavutamine polnud minu jaoks niivõrd tähtis, vaid ootasin
                huviga
                tagasisidet tööle. Olen aja jooksul pidevalt täiendanud oma oskusi kasutajakogemuse ja visuaalse
                disaini
                vallas ning tagasi vaadates mõistan, et olin liialt keskendunud visuaalsele poolele ning ei
                pööranud
                piisavalt tähelepanu kasutajamugavuse ja ligipääsetavuse olulisusele. <br>
                Saadud tagasiside aitas mul mõista, et peaksin rohkem rõhku panema kasutajakesksele disainile,
                mitte
                ainult
                visuaalsete elementide täiustamisele. <br>
                Aasta Tegija võistlusel pälvisin kolmanda koha. <br>
                Siin on link minu loodud prototüübile ja projekti dokumentatsioonile.</p>
        </div>
        <div class="forwardBackButtons">
            <router-link to="">
                <TextButton :imgType="'right'" :alt="'Button Icon'" class="buttonRe">Järgmine</TextButton>
            </router-link>
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
import { onMounted, render, markRaw, ref } from 'vue';
import TextButton from '../TextButton.vue';
import imgAvastaTartut from '@/assets/img/avastatartut.webp';
import imgClearMind from '@/assets/img/clearmind.webp';
import imgFotoseeria from '@/assets/img/fotoseeria.webp';

const popUpImages = ref(null)

const images = [imgAvastaTartut, imgClearMind, imgFotoseeria]

function navigateToImage(index) {
    popUpImages.value.scrollTo({left: popUpImages.value.offsetWidth * index, behaviour: 'smooth'});
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
    display: flex;
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
    outline: 2px solid black;
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


@media only screen and (max-width: 1500px) {
    .popUpTextAndButtons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 80%;
        height: 100%;
    }

    .popUpImages img {
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
}
</style>