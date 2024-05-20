<template>
  <v-container>
    <div class="title-page ml-4 mt-4 mb-4 d-flex flex-row align-center">
      <h1 class="w-100 justify-start text-title">Historial</h1>
    </div>
    <v-virtual-scroll class="scroll-container" :items="mockData">
      <template v-slot:default="{ item }">
        <NoteComponent
          :key="item.id"
          :title="item.title"
          :substract="item.body"
          :endline="item.deadline"
          :status="item.status"
          class="d-flex align-self-start ml-4 my-2"
        ></NoteComponent>
      </template>
    </v-virtual-scroll>
  </v-container>
</template>

<script lang="ts" setup>
import NoteComponent from "./NoteComponent.vue";
import Note from "@/domain/entities/Note";

const mockData: Array<Note> = [
  {
    id: 1,
    title: "title 1",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis est voluptatum reiciendis ipsam debitis tempore illo fugiat similique soluta.",
    deadline: "21/05/24",
    status: "Terminado",
  },
  {
    id: 2,
    title: "title 1",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis est voluptatum reiciendis ipsam debitis tempore illo fugiat similique soluta.",
    deadline: "21/05/24",
    status: "Terminado",
  },
  {
    id: 3,
    title: "title 1",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis est voluptatum reiciendis ipsam debitis tempore illo fugiat similique soluta.",
    deadline: "21/05/24",
    status: "Terminado",
  },
  {
    id: 4,
    title: "title 1",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis est voluptatum reiciendis ipsam debitis tempore illo fugiat similique soluta.",
    deadline: "21/05/24",
    status: "Terminado",
  },
  {
    id: 5,
    title: "title 1",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis est voluptatum reiciendis ipsam debitis tempore illo fugiat similique soluta.",
    deadline: "21/05/24",
    status: "Terminado",
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

.scroll-container {
  display: flex;
  height: 80vh;
}
</style>
