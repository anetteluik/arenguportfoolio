<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Illustrator ja Photoshop</div>
            <p class="textP">Illustratori ja Photoshopi platvormi õppimiseks valmistas õpetaja ette mitmesuguseid
                ülesandeid, mis eeldasid erinevate tööriistade kasutamist ja nende funktsioonide tundmaõppimist mõlemas
                keskkonnas. Kursuse vältel õppisin, millised värvitoonid omavahel sobivad, tutvusin erinevate
                värviskeemidega (monokroomne, analoogne jne) ning õppisin testima, millised on ebasobivad
                värvikombinatsioonid ligipääsetavuse standardite kohaselt. Tüpograafia mängis õppetöös olulist rolli,
                rõhutades teksti tähtsust kasutajasõbralikus disainis. Õppisin valima fondi vastavalt selle
                kasutusotstarbele (näiteks ei ole mõistlik kasutada display fonti sisutekstina ;) ), kohandama
                vahekaugusi ja joondusi, arvestades kasutajamugavust ja loetavust. Lisaks õppisin rastergraafika
                töötlemist ja loomist Adobe Photoshopi abil.
                Sain aru, et kuigi Figma on mitmekülgne platvorm, pakub Adobe Illustrator teatud tüüpi kujunduste
                loomisel rohkem vabadust ja kohandamisvõimalusi. Seetõttu olen püüdnud Figmat kasutada rohkem
                prototüüpide loomiseks ning illustratsioone luua eelistatavalt Illustratoris.
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
        <img src="/src/assets/img/photoshop-luik.webp" alt="">
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