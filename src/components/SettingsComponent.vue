<template>
  <v-container>
    <div class="title-page ml-4 mt-4 mb-4">
      <h1>Preferencias</h1>
    </div>
    <v-sheet
      class="d-flex flex-column justify-start p-1 setting-container"
      rounded
    >
      <h3 class="pt-4 ml-9">Interfaz</h3>
      <h4 class="pt-12 ml-9"><b>Tema oscuro</b></h4>
      <v-switch class="ml-9" inset label="Desactivado"></v-switch>
      <v-select
        class="w-25 ml-9"
        label="Método para priorizar las tareas"
        variant="outlined"
        :items="['Prioridad', 'Fecha']"
      ></v-select>
      <h4 class="mt-4 ml-9"><b>Borrar datos</b></h4>
      <small class="ml-9"
        >Esta opción eliminará todas las notas guardadas</small
      >
      <v-btn class="mt-4 ml-8 w-25 btn-color" rounded="xl"
        >Eliminar datos</v-btn
      >
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.title-page {
  h1 {
    color: $light-font-title;
  }
}

.settings-container {
  background-color: $light-note-bg;
  height: 75vh;
  width: 100vh;
}

.btn-color {
  color: $light-font-title;
  background-color: $light-high-status;
  margin-bottom: 20vh;
}
</style>
