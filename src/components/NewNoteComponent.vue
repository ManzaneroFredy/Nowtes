<template>
  <v-container>
    <div class="title-page ml-4 mt-4 mb-4 d-flex align-center">
      <v-btn icon="mdi-chevron-left" variant="text" size="large"></v-btn>
      <h1 class="">Nueva nota</h1>
    </div>
    <v-sheet class="d-flex flex-row p-1 setting-container" rounded>
      <div class="d-flex flex-row mt-5 mb-3 ml-6 w-100">
        <h3 class="align-self-center mb-5 mr-6">Titulo:</h3>
        <v-textarea
          class="align-self-center"
          density="compact"
          label="Ingrese un titulo"
          variant="outlined"
          no-resize
          rounded="lg"
          rows="2"
        ></v-textarea>
      </div>
      <div class="d-flex flex-row mt-5 mb-3 ml-6">
        <h3 class="align-self-center mb-5 mr-6">Descripción:</h3>
        <v-textarea
          class="align-self-center"
          density="compact"
          label="Ingrese un titulo"
          variant="outlined"
          no-resize
          rounded="lg"
          rows="2"
        ></v-textarea>
      </div>
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.title-page {
  h1 {
    color: $light-font-title;
    width: 105vh;
  }
}

.settings-container {
  background-color: $light-note-bg;
  height: 75vh;
  width: 100vh;
}

.btn-delete-data {
  color: $light-font-title;
  background-color: $light-high-status;
  width: 20vh;
}

.btn-end-sesion {
  background-color: $light-mid-status;
  width: 20vh;
  margin-bottom: 20vh;
}
</style>
