<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Avasta Tartut</div>
            <p class="textP">Aasta Tegija võistluse ülesandeks oli luua mobiilirakendus nimega "Avasta Tartut", mis
                võimaldab kasutajatel planeerida nii pere- kui ka kultuurireise. Rakendus pidi sisaldama kaarti, kus on
                märgitud erinevad vaatamisväärsused ning pakkuma kasutajatele mugavat teekonda nende avastamiseks. Antud
                ülesande täitmiseks oli aega viis tundi ning kasutasin selleks disainitööriista Figma, rakenduse logo
                loomiseks Adobe Illustratorit.

                Osalemine Aasta Tegija võistlusel oli minu jaoks eriti oluline, sest teadsin, et saan väärtuslikku
                tagasisidet UX/UI valdkonna professionaalidelt. Võidu saavutamine polnud mu peamine eesmärk; pigem
                soovisin õppida, kuidas oma oskusi erialaselt täiustada ning millele peaksin tulevikus rohkem rõhku
                panema. Tagasiside aitas mul märgata oma nõrkusi ning sain aru, et keskendusin liigselt disainile ja
                lahedatele animatsioonidele, kuid jätsin tagaplaanile kasutajamugavuse ning märkamata jäid mõned
                olulised loogikavead struktuuris. Tänu tagasisidele olen teadlikum ning olen proovinud edaspidi
                keskenduda rohkem kasutajakesksele disainile.
                <br><br>
                Aasta Tegija võistlusel saavutasin kolmanda koha.
                <br><br>
                Siit leiad <a
                    href="https://www.figma.com/proto/ZSA93PInhOiwftN6NDKLzg/Avasta-Tartut?page-id=103%3A1031&node-id=103-1032&viewport=246%2C635%2C0.16&t=D4EI1Ew3LMyRbshz-1&scaling=scale-down&starting-point-node-id=103%3A1032"
                    target="_blank">rakenduse prototüübi</a> ja <a
                    href="https://docs.google.com/document/d/1G8dQK-3VcInhF31Ss4v-dD8Io6uRw68SXnTDLNo6-Yw/edit?usp=sharing"
                    target="_blank">projekti
                    dokumentatsiooni</a>.
            </p>
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
import imgAvastaTartut2 from '@/assets/img/avastatartut2.webp';
import imgAvastaTartut3 from '@/assets/img/avastatartut3.webp';

const popUpImages = ref(null)

const images = [imgAvastaTartut, imgAvastaTartut2, imgAvastaTartut3]

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