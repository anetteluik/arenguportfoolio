<template>
    <div class="popUpTextAndButtons">
        <div class="popUpTextAndButtonsWrapper">
            <div class="text">Üritused ja konverentsid</div>
            <p class="textP"><b>INSPIRATSIOONIPÄEV</b><br>
                <b>10.01.2023</b>
                <br><br>
                <b>Päeva teema:</b> Inspireeriv edulugu
                <br>
                <b>Külalised:</b> Foxway OÜ, Lauri Räpp, Milos - Brett Mesipuu, VOCO Karjäärinõustaja
                <br>
                Inspiratsioonipäeval jagasid külalised õpilastega oma edulugusid, tuues välja nii õnnestumised kui ka
                raskused ja takistused.
                <br><br>
                <b>HÄKATON</b><br>
                <b>15.02.2023</b>
                <br><br>
                <b>Päeva teema:</b> Tark ja terve Eesti
                <br>
                Ülesandeks oli päeva jooksul välja mõelda idee seoses teemaga “Tark ja terve Eesti” ning see idee mingil
                määral ellu viia - luua prototüüp, koostada persoona, leida kasutaja valupunktid/rõõmud, mõelda välja
                unikaalne müügiargument, tulud/kulud jne. Meie grupp koosnes viiest inimesest - mina, Kerli Pajusaar,
                Heiki Kotsar, Angelika Glaser ning Kristofer-Robin Lai. Meie idee üldistatult - rakendus e-ainete teabe
                kiireks ja lihtsaks kuvamiseks.
                <br><br>
                <b>WUD</b><br>
                <b>23.11.2023</b>
                <br><br>
                <b>Külalised:</b> David Lamas, m.c. schraefel, Amol Kadam, Helen Susan Selirand, Hannah Baker, Nesli
                Hazal Oktay, Pärt Ojamaa, Melinda Jacobs, Kaili Tamm, Muzaffer Akay, Kristiina Kallasmaa, Yuval
                Keshtcher
                <br>
                WUD (World Usability Day) on sündmus, kus keskendutakse kasutatavusele. Kahepäevasel konverentsil uuriti
                teemasid alates AI integreerimisvõimalustest UX analüütikas kuni funktsionaalsustesse mängulisuse
                lisamiseni. Mulle jäid eriti meelde Melinda Jacobs ja Muzaffer Akay, kuna nende esitlus kõnetas mind
                kõige enam. Hiljem sain isegi võimaluse Melinda Jacobsiga vestelda ning arutasime laiemalt ettevõtluse
                ning kasutusmugavuse teemadel.
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
        <img src="/src/assets/img/wud.webp" alt="">
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