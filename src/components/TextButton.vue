<template>
  <div class="buttonWrapper">
    <div class="button">
      <p>
        <slot></slot>
      </p>
      <!-- Use the img prop if provided, otherwise use a default image -->
      <img src="/src/assets/img/arrow.png" alt="">
    </div>
  </div>
</template>

<style scoped>
.buttonWrapper {
  display: flex;
  justify-content: right;
}

.button {
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  background: linear-gradient(90deg,
      #C2CFF2 0%,
      #C2CFF2 50%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0) 100%) 100%;
  background-size: 210% 210%;
  transition: background-position 0.2s ease-in-out;
}

.button:hover {
  background: linear-gradient(90deg,
      #C2CFF2 0%,
      #C2CFF2 100%,
    ) 100%;
  background-position: 0;
}

.button p {
  padding-right: 8px;
  margin: 0;
  white-space: nowrap;
  color: #221517;
}

.button img {
  height: 1em;
  width: 1em;
  align-self: center;
}
</style>