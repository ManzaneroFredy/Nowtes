<template>
  <div class="back">
    <v-container class="h-screen d-flex flex-column justify-center back w-100">
      <v-container class="d-flex flex-wrap justify-center">
        <div class="nowtes-block" rounded>
          <div class="nowtes-logo">
            <img src="../assets/LogoMakr.png" alt="logo nowtes" />
            <h3>Nowtes</h3>
          </div>
        </div>
        <LoginComponent></LoginComponent>
      </v-container>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import LoginComponent from "../components/LoginComponent.vue";
</script>

<style lang="scss" scoped>
.nowtes-block {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 550px;
  background-color: $dark-bg;
  .nowtes-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      color: $dark-title-app;
    }
  }
}

.back {
  background-color: $dark-menu-bg;
}
</style>
