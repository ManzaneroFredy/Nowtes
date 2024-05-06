<template>
  <v-container>
    <div class="title-page ml-4 mt-4 mb-4 d-flex flex-row align-center">
      <h1 class="w-100 justify-start">Pendientes</h1>
      <v-btn class="btn-new-note" prepend-icon="mdi-plus">Nueva nota</v-btn>
    </div>
    <div v-for="note in mockData" :key="note.title">
      <NoteComponent
        :title="note.title"
        :substract="note.substract"
        class="d-flex align-self-start ml-4"
      ></NoteComponent>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import NoteComponent from "./NoteComponent.vue";

interface Note {
  title: string;
  substract: string;
}

const mockData: Array<Note> = [
  {
    title: "title 1",
    substract:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis est voluptatum reiciendis ipsam debitis tempore illo fugiat similique soluta.",
  },
];
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

.btn-new-note {
  background-color: $dark-bg;
  color: $light-font-title;
}
</style>
