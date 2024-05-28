<template>
  <div class="footer">
    <div class="info">
      <div class="infoBoxMe">
        <h4>Anette Luik</h4>
        <p>Arenguportfoolio</p>
        <p>UX/UI nooremdisainer</p>
      </div>
      <div class="infoWrapper">
        <div class="infoBox">
          <h6>Kontakt</h6>
          <p><a href="mailto:anetteluik.b@gmail.com?subject=Saame sõpradeks!" target="_blank">anetteluik.b@gmail.com</a></p>
          <p><a href="tel:+372-5352-7343" target="_blank">+372 5352 7343</a></p>
        </div>
        <div class="infoBox">
          <h6>Leiad mind ka</h6>
          <p><a href="https://www.behance.net/luikanette" target="_blank">Behance</a></p>
          <p><a href="https://dribbble.com/anetteluik" target="_blank">Dribbble</a></p>
          <p><a href="https://www.linkedin.com/in/anette-luik/" target="_blank">LinkedIn</a></p>
        </div>
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

a {
  color: #EFEDEB;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
}

.infoWrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 180px;
  width: 100%;
}

.infoBox {
  margin-top: 80px;
  margin-bottom: 80px;
  margin: 80px 16px 80px 16px;
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
}

.infoBoxMe {
  margin-top: 80px;
  margin-bottom: 20px;
  margin: 80px 40px 20px 0;
  width: 40%;
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
}

.rights p{
  font-size: 14px;
}

@media only screen and (max-width: 1080px) {
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    width: 90%;
  }

  .infoWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80%;
  }

  .infoBoxMe {
    align-self: center;
    text-align: center;
  }


  .rights {
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

@media only screen and (max-width: 600px) {
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    width: 90%;
  }

  .infoWrapper {
    display: flex;
    flex-direction: column;
    gap: 0;
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

.infoBoxMe {
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 80px;
  width: 100%;
}

  .infoBoxMe h4 {
    margin-bottom: 16px;
  }
}
</style>