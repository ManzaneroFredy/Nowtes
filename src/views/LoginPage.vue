<template>
  <div class="back">
    <v-container class="h-screen d-flex flex-column justify-center back w-100">
      <v-container class="d-flex flex-wrap justify-center">
        <RegisterComponent
          v-if="loginComponent"
          @showRegisterComponent="(componentToShow: string) => {defineComponentView(componentToShow)}"
        ></RegisterComponent>
        <div class="nowtes-block" rounded>
          <div class="nowtes-logo">
            <img src="../assets/LogoMakr.png" alt="logo nowtes" />
            <h3>Nowtes</h3>
          </div>
        </div>
        <LoginComponent
          v-if="registerComponent"
          @showLoginComponent="(componentToShow: string) => {defineComponentView(componentToShow)}"
        ></LoginComponent>
      </v-container>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LoginComponent from "../components/LoginComponent.vue";
import RegisterComponent from "@/components/RegisterComponent.vue";
import ComponentsAvailables from "@/utilities/ComponentAvailableInterface";

let loginComponent = ref(false);
let registerComponent = ref(true);
const componentsAvailables: ComponentsAvailables = {
  // eslint-disable-next-line prettier/prettier, no-undef
  "loginComponent": (showComponent: boolean) => {loginComponent.value = showComponent},
  // eslint-disable-next-line prettier/prettier
  "registerComponent": (showComponent: boolean) => {registerComponent.value = showComponent},
};

const defineComponentView = (componentToShow: string) => {
  for (let key in componentsAvailables) {
    if (key === componentToShow) {
      console.log(key === componentToShow);
      componentsAvailables[key](true);
    } else {
      componentsAvailables[key](false);
    }
  }
};
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
