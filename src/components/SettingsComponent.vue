<template>
  <v-container color-scheme=" isDark ? 'dark' : 'light' ">
    <div class="title-page ml-4 mt-4 mb-4">
      <h1>Preferencias</h1>
    </div>
    <v-sheet
      class="d-flex flex-column justify-start p-1 setting-container"
      rounded
    >
      <h3 class="pt-4 ml-9">Interfaz</h3>
      <h4 class="pt-12 ml-9"><b>Tema oscuro</b></h4>

      <v-switch
        class="ml-9"
        inset
        label="Desactivado"
        @click="toggleDark()"
      ></v-switch>

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
      <v-btn class="mt-4 ml-8 mb-6 btn-delete-data" rounded="xl"
        >Eliminar datos</v-btn
      >
      <h4 class="ml-9"><b>Cerrar sesión</b></h4>
      <v-btn class="mt-2 ml-8 btn-end-sesion" rounded="xl">Cerrar sesión</v-btn>
    </v-sheet>
  </v-container>
</template>

<!--  <script lang="ts" setup> -->
<script lang="js" setup>

import {useDark,useToggle} from "@vueuse/core";


const isDark = useDark({
  selector: "body",
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light",
})

const toggleDark = useToggle(isDark)
</script>

<style lang="scss" scoped>
[color-scheme="light"] {
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
}

[color-scheme="dark"] {
  .title-page {
    h1 {
      color: $dark-font-title;
    }
  }

  .settings-container {
    background-color: $dark-note-bg;
    height: 75vh;
    width: 100vh;
  }
  .btn-delete-data {
    color: $dark-font-title;
    background-color: $dark-high-status;
    width: 20vh;
  }
  .btn-end-sesion {
    background-color: $dark-mid-status;
    width: 20vh;
    margin-bottom: 20vh;
  }
}
</style>
