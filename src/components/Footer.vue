<template>
  <div class="footer">
    <div class="info">
      <div class="infoBoxMe">
        <h4>Anette Luik</h4>
        <p>Arenguportfoolio</p>
        <p>UX/UI nooremdisainer</p>
      </div>
      <div class="infoBox">
        <h6>Kontakt</h6>
        <p>anetteluik.b@gmail.com</p>
        <p>+372 5352 7343</p>
      </div>
      <div class="infoBox">
        <h6>Menüü</h6>
        <p>Akadeemiline areng</p>
        <p>Praktika</p>
        <p>Erialased tegevused</p>
        <p>Minust</p>
        <p>Eneserefleksioon</p>
      </div>
      <div class="infoBox">
        <h6>Leiad mind ka</h6>
        <p>Behance</p>
        <p>Dribbble</p>
        <p>Instagram</p>
        <p>LinkedIn</p>
      </div>
    </div>
    <div class="rights">
      <p>©2024 Anette Luik. Kõik õigused kaitstud.</p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background-color: #61131D;
  color: #EFEDEB;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
}

.infoBox {
  margin-top: 80px;
  margin-bottom: 80px;
}

.infoBox h6 {
  font-size: clamp(20px, 1.5vw, 24px);
  margin-bottom: 16px;
}

.infoBox p {
  font-size: 16px;
  margin-bottom: 8px;
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-color: #96A8D7;
}

.infoBoxMe {
  margin-top: 80px;
  margin-bottom: 20px;
}

.infoBoxMe h4 {
  font-size: clamp(40px, 1.5vw, 48px);
  font-family: 'Magnat';
  margin-bottom: 20px;
}

.infoBoxMe p {
  font-size: clamp(18px, 1vw, 20px);
}

.rights {
  display: flex;
  justify-content: left;
  width: 70%;
  margin-bottom: 32px;
  font-size: 14px;
}

@media only screen and (max-width: 600px) {
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    width: 90%;
  }

  .rights {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 70%;
    margin-bottom: 32px;
    margin-top: 80px;
    font-size: clamp(14px, 1vw, 16px);
  }

  .infoBox {
    margin-bottom: 20px;
  }

  .infoBoxMe h4 {
  margin-bottom: 16px;
}
}
</style>