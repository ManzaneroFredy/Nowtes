<template>
  <v-container>
    <div class="title-page ml-4 mt-4 mb-4 d-flex flex-wrap align-center">
      <v-btn icon="mdi-chevron-left" variant="text" size="large"></v-btn>
      <h1>Nota #{{ note.id }}</h1>
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

<script lang="ts" setup>
import Note from "@/note/note";

const note: Note = {
  id: 1,
  title: "title 1",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam aliquid eaque sint eos laudantium quidem dolore, repellendus eius qui eligendi porro magni impedit facilis, id eveniet, eum praesentium. Non! ",
  priority: "Alta",
  status: "En progreso",
};
</script>

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
