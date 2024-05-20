<template>
  <v-container>
    <div class="title-page ml-4 mt-4 mb-4 d-flex flex-row align-center">
      <h1 class="w-100 justify-start text-title">Pendientes</h1>
      <v-btn
        class="btn-new-note"
        prepend-icon="mdi-plus"
        @click="$emit('showCreateNoteComponent', 'createNoteComponent')"
        >Nueva nota</v-btn
      >
    </div>
    <v-virtual-scroll class="scroll-container" :items="mockData">
      <template v-slot:default="{ item }">
        <NoteComponent
          :key="item.getId()"
          :title="item.getTitle()"
          :substract="item.getBody()"
          :endline="item.getDeadline()"
          :status="item.getStatus()"
          class="d-flex align-self-start ml-4 my-2"
          @showEditNoteComponent="(componentToShow: string) => $emit('showEditNoteComponent', componentToShow, item)"
          @showCompleteNoteDetailsComponent="(componentToShow: string) => $emit('showCompleteNoteDetailsComponent',
              componentToShow, item)"
        ></NoteComponent>
      </template>
    </v-virtual-scroll>
  </v-container>
</template>

<script lang="ts" setup>
import NoteComponent from "./NoteComponent.vue";
import Note from "@/domain/entities/Note";
let note1 = new Note(
  1,
  "title 1",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis est voluptatum reiciendis ipsam debitis tempore illo fugiat similique soluta.",
  "en progreso",
  "2024-05-21",
  "",
  "Baja"
);
let note2 = new Note(
  2,
  "title 2",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis est voluptatum reiciendis ipsam debitis tempore illo fugiat similique soluta.",
  "en progreso",
  "2024-05-21",
  "",
  "Baja"
);
let note3 = new Note(
  3,
  "title 1",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis est voluptatum reiciendis ipsam debitis tempore illo fugiat similique soluta.",
  "en progreso",
  "2024-05-21",
  "",
  "Baja"
);
let note4 = new Note(
  4,
  "title 1",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis est voluptatum reiciendis ipsam debitis tempore illo fugiat similique soluta.",
  "en progreso",
  "2024-05-21",
  "",
  "Baja"
);
let note5 = new Note(
  5,
  "title 1",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis est voluptatum reiciendis ipsam debitis tempore illo fugiat similique soluta.",
  "en progreso",
  "2024-05-21",
  "",
  "Baja"
);

const mockData: Array<Note> = [note1, note2, note3, note4, note5];
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
