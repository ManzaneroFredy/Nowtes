<template>
  <div class="d-flex flex-column align-center container bg-background">
    <div class="mb-16">
      <v-img
        v-if="!themeValue"
        width="100"
        :src="require(`../assets/logo.png`)"
        alt="Nowtes logo"
        eager
        class="mt-10"
      >
      </v-img>
      <v-img
        v-if="themeValue"
        width="100"
        :src="require(`../assets/LogoMakr.png`)"
        alt="Nowtes logo"
        eager
        class="mt-10"
      >
      </v-img>
    </div>
    <v-container
      class="d-flex flex-column flex-wrap ga-7 option-container h-50 justify-center"
    >
      <v-btn
        variant="plain"
        size="x-large"
        :ripple="false"
        @click="$emit('showInitComponent', init)"
      >
        <h3 class="text-whiteText">Inicio</h3>
      </v-btn>
      <v-divider></v-divider>
      <v-btn
        variant="plain"
        size="x-large"
        :ripple="false"
        @click="$emit('showHistorialComponent', historial)"
      >
        <h3 class="text-whiteText">Historial</h3>
      </v-btn>
      <v-divider></v-divider>
      <v-btn
        variant="plain"
        size="x-large"
        :ripple="false"
        @click="$emit('showPreferenceComponent', preference)"
      >
        <h3 class="text-whiteText">Preferencias</h3>
      </v-btn>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useTheme } from "vuetify";

let init = "initComponent";
let historial = "historialComponent";
let preference = "preferenceComponent";

const theme = useTheme();
let themeValue = ref(true);

themeValue.value = theme.global.current.value.dark;
watch(
  () => theme.global.current.value.dark,
  (newValue) => {
    themeValue.value = newValue;
  }
);
</script>

<style scoped lang="scss">
.container {
  height: calc(100vh - 36px);
  width: 24rem;
  background-color: $light-menu-bg;
}
.option-container {
  color: $light-font;
}
</style>
