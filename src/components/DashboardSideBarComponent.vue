<template>
  <div class="d-flex flex-column align-center container">
    <div class="mb-16">
      <v-img
        width="100"
        :src="require(`../assets/logo.png`)"
        alt="Nowtes logo"
        eager
        class="mt-10"
      >
      </v-img>
    </div>
    <v-container
      class="d-flex flex-column flex-wrap ga-7 option-container h-50 justify-center"
    >
      <v-btn variant="plain" size="x-large" :ripple="false">
        <h3>Inicio</h3>
      </v-btn>
      <v-divider></v-divider>
      <v-btn variant="plain" size="x-large" :ripple="false">
        <h3>Historial</h3>
      </v-btn>
      <v-divider></v-divider>
      <v-btn variant="plain" size="x-large" :ripple="false">
        <h3>Preferencias</h3>
      </v-btn>
    </v-container>
  </div>
</template>

<script lang="ts" setup></script>

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
