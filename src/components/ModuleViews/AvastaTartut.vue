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
    <div class="popUpImage">
    </div>
</template>

<script setup>
import { render } from 'vue';
import TextButton from '../TextButton.vue';

</script>

<style scoped>
.popUpTextAndButtons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
    height: 100%;
}

.popUpImage {
    width: 45%;
    height: 100%;
    background-color: blue;
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
    line-height: clamp(20px, 2vw, 28px);
}



.buttonRe {
    font-size: 18px;
    margin: 96px 100px 56px 120px;
}

@media only screen and (max-width: 600px) {
    .popUpTextAndButtons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }

    .popUpImage {
        width: 100%;
        height: 100%;
        background-color: blue;
    }

    .popUpTextAndButtons .text {
        font-size: clamp(40px, 1.5vw, 48px);
        font-weight: 700;
        padding: 0 40px 0 40px;
        margin-bottom: 24px;
        margin-top: 100px;
    }

    .popUpTextAndButtons .textP {
        font-size: clamp(16px, 3vw, 18px);
        padding: 0 40px 0 40px;
        line-height: clamp(20px, 2vw, 28px);
    }

    .buttonRe {
        font-size: 16px;
        margin: 56px 40px 56px 40px;
    }
}
</style>