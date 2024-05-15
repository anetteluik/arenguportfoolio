<script setup>
import TextButton from "../components/TextButton.vue"
import Footer from "@/components/Footer.vue";
</script>

<template>
    <main>
        <div class="jumboMinust">
            <div class="flexBoxMinust">
                <div class="minustWrapper">
                    <div class="minustTitle">
                        <h3>Minu lugu</h3>
                    </div>
                    <div class="details">
                        <p>Minu kodukoht asub pisikeses Keeni külas Valga maakonnas. Enne, kui avastasin UX/UI disaini
                            valdkonna, olin seadnud endale mitmeid erinevaid tööalaseid eesmärke, alustades loomaarsti
                            ja
                            laulja ning lõpetades automaalri erialaga. Ent nagu elu ikka, kulgeb see oma rada pidi ning
                            täiesti juhuslikult sattusin niimoodi tutvuma UX/UI disaini valdkonnaga. Tagasi vaadates
                            sain
                            aru, et enamik seatud eesmärkidest hõlmasid loovust ning nutikust, mis on olnud mulle
                            südamelähedased alates lapsepõlvest. Seega, kui avastasin praeguse eriala, mõtlesin
                            endamisi:
                            "Juhhuu, see ongi ju see, mida olen terve elu otsinud".</p>
                    </div>
                </div>
                <div class="lisainfoWrapper">
                    <div class="roomud">
                        <h4>Minu Rõõmud</h4>
                        <p>Mootorrattasõit</p>
                        <p>Heegeldamine</p>
                        <p>Videograafia</p>
                    </div>
                    <div class="hetkeOpingud">
                        <h4>Minu hetkeõpingud</h4>
                        <p>Liikumisgraafika</p>
                        <p>3D modelleerimine</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="haridustee">
            <div class="haridusteeWrapper">
                <div class="title">
                    <h3>Haridustee ja kogemused</h3>
                </div>
                <div class="buttonWrapper">
                    <a href="https://drive.google.com/file/d/1eW8FRnc0NBVs9Vp23znZ0aVTvXfJx_SC/view?usp=sharing" target="_blank">
                        <TextButton class="highlight" :imgType="'upright'" :alt="'Button Icon'">Vaata CV-d</TextButton>
                    </a>
                </div>

            </div>
        </div>
        <div class="ajatelg">
            <div class="imageWrapper">
                <img class="desktop" src="/src/assets/img/haridustee.svg" alt="Kogemuste ja haridustee ajatelg">
                <img class="mobile" src="/src/assets/img/haridustee-tel.svg" alt="Kogemuste ja haridustee ajatelg">
            </div>
        </div>
        <div class="mainInfo">
            <div class="mainWrapper">
                <div class="title">
                    <h3>Oskuste hindamine</h3>
                </div>
                <div class="descriptionWrapper">
                    <div id="hindamine" class="description">
                        <p>Disainivaldkond areneb pidevalt ja sellega koos ka minu oskused. Nagu Albert Einstein ütles,
                            õppimine on elukestev teekond, mis tähenadb, et minu oskused pidevalt täienevad ja
                            kohanduvad valkonna nõuete kohaselt. Selle asemel, et hinnata oma teadmisi
                            traditsiooniliselt 5-palli süsteemis või sarnasel skaalal, toon välja programmid ja
                            vahendid, mida ma hetkel igapäevatöös kasutan ning kui sageli neid rakendan.</p>
                    </div>
                </div>
                <div class="oskusedImage">
                    <img class="oskusedDesktop" src="/src/assets/img/oskused.svg"
                        alt="Tabel, mis indikeerib erinevate programmide oskustaset">
                    <img class="oskusedTel" src="/src/assets/img/oskused-tel.svg"
                        alt="Tabel, mis indikeerib erinevate programmide oskustaset">
                </div>
            </div>
        </div>
    </main>
</template>

<style>
.descriptionWrapper {
    margin-bottom: 164px;
}

.highlight {
    background-color: #C2CFF2;
}

#hindamine {
    margin-bottom: 40px;
}

.oskusedImage img {
    width: 100%;
}

.oskusedTel {
    display: none;
}

.oskusedImage {
    margin-bottom: 208px;
    width: 85%;
}

.imageWrapper {
    width: 80%;
    align-self: center;
    margin: 124px 0 124px 0;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.ajatelg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
}

.haridustee {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #EFEDEB;
    height: fit-content;
    width: 100%;
    margin-top: 80px;
}

.haridusteeWrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    height: 100%;
}

.buttonWrapper {
    display: flex;
    justify-content: flex-start;
}

.jumboMinust {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    background-color: #61131D;
}

.minustWrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    height: 100%;
}

.flexBoxMinust {
    display: flex;
    flex-direction: row;
    width: 70%;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
}

.minustTitle {
    color: #EFEDEB;
    font-family: "Magnat";
    margin: 0;
    padding: 20px 0 20px 0;
    font-size: max(2.5rem, 3vw);
}

.lisainfoWrapper {
    display: flex;
    flex-direction: column;
    gap: 56px;
    margin-right: 80px;
    margin-left: 56px;
    color: #EFEDEB;
}

.mobile {
    display: none;
}

h4 {
    font-size: clamp(24px, 2vw, 32px);
    margin-bottom: 16px;
}

p {
    margin-bottom: 8px;
    font-size: clamp(18px, 1.5vw, 20px);
}

.details p {
    font-size: clamp(18px, 1.5vw, 20px);
    line-height: 1.5;
}

@media only screen and (max-width: 1080px) {
    .flexBoxMinust {
        flex-direction: column;
        width: 80%;
    }

    .lisainfoWrapper {
        display: flex;
        flex-direction: row;
        gap: 94px;
        margin-bottom: 124px;
        justify-content: flex-start;
        width: 80%;
        margin-left: 0;
    }

    .minustWrapper {
        width: 100%;
        margin-top: 180px;
    }

    .flexBoxMinust {
        align-items: start;
    }

    .haridusteeWrapper {
        width: 80%;
    }

    .mainWrapper {
        width: 80%;
    }

    .descriptionWrapper {
        margin-bottom: 80px;
    }

    .description {
        width: 100%;
    }

    .mainInfo {
        margin-top: 80px;
    }

    .oskusedImage {
        width: 100%;
    }

}

@media only screen and (max-width: 600px) {
    .mobile {
        display: flex;
    }

    .desktop {
        display: none;
    }

    .flexBoxMinust {
        flex-direction: column;
        width: 90%;
    }

    .lisainfoWrapper {
        display: flex;
        flex-direction: column;
        gap: 64px;
        margin-bottom: 124px;
        justify-content: flex-start;
        width: 80%;
        margin-left: 0;
    }

    .imageWrapper {
        margin-top: 80px;
        margin-bottom: 80px;
    }

    .minustWrapper {
        width: 100%;
        margin-top: 120px;
    }

    .haridusteeWrapper {
        width: 80%;
    }

    .mainWrapper {
        width: 90%;
    }

    .descriptionWrapper {
        margin-bottom: 80px;
    }

    .description {
        width: 100%;
    }

    .mainInfo {
        margin-top: 80px;
    }

    .oskusedImage {
        width: 100%;
    }

    .oskusedTel {
        display: flex;
    }

    .oskusedDesktop {
        display: none;
    }
}
</style>