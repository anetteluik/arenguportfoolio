<script setup>
import TextButton from "../components/TextButton.vue"
</script>

<template>
    <main>
        <div class="jumboMoodul">
            <div class="mainWrapperMoodul">
                <div class="moodulTitle">
                    <h2>Tutvumispraktika</h2>
                </div>
                <div class="detailsMoodul">
                    <p>Akadeemiline areng</p>
                </div>
            </div>
        </div>
        <div class="mainInfo">
            <div class="mainWrapper">
                <div class="title">
                    <h3>Praktika siht</h3>
                </div>
                <div class="descriptionWrapper">
                    <div class="description">
                        <p>Minu kodukoht asub pisikeses Keeni külas Valga maakonnas. Enne,
                            kui avastasin UX/UI disaini valdkonna, olin seadnud endale mitmeid
                            erinevaid tööalaseid eesmärke, alustades loomaarsti ja laulja ning
                            lõpetades automaalri erialaga. Ent nagu elu ikka, kulgeb see oma rada
                            pidi ning täiesti juhuslikult sattusin niimoodi tutvuma UX/UI disaini
                            valdkonnaga. Tagasi vaadates sain aru, et enamik seatud eesmärkidest
                            hõlmasid loovust ning nutikust, mis on olnud mulle südamelähedased alates
                            lapsepõlvest. Seega, kui avastasin praeguse eriala, mõtlesin endamisi:
                            "Juhhuu, see ongi ju see, mida olen terve elu otsinud".</p>
                    </div>
                </div>
                <div class="aboutSectionPhotos">
                    <div class="aboutPhoto">
                        <img src="../assets/img/profile.jpg" alt="Profile Picture">
                    </div>
                    <div class="aboutPhoto">
                        <img src="../assets/img/profile.jpg" alt="Profile Picture">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
.stupid {
    width: 600px;
    height: 200px;
    background-color: antiquewhite;
}

.sliderCardsWrapper {
    max-width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.sliderPhotos {
    padding: 10px;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
}

.flex-container {
    overflow-x: scroll;
    height: calc(100% + 17px);
    padding-bottom: 17px;
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
}

.card {
    flex: 3 0 33%;
    height: 100%;
    display: inline-block;
    background-color: blueviolet;
}
</style>