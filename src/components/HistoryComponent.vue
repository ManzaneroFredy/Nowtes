<template>
  <v-container>
    <div class="title-page ml-4 mt-4 mb-4 d-flex flex-row align-center">
      <h1 class="w-100 justify-start text-title">Historial</h1>
    </div>
    <v-virtual-scroll class="scroll-container w-100" :items="uncompletedNotes">
      <template v-slot:default="{ item }">
        <HistoryNoteComponent
          :key="item.getId()"
          :title="item.getTitle()"
          :substract="item.getDescription()"
          :endline="item.getDeadline().toLocaleDateString()"
          :isCompleted="item.iscompleted()"
          class="d-flex align-self-start ml-4 my-2"
        >
        </HistoryNoteComponent>
      </template>
    </v-virtual-scroll>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import HistoryNoteComponent from "./HistoryNoteComponente.vue";
import { GetAllNotesUseCase } from "@/domain/usesCases/getAllNotes";
import MysqlNoteRepository from "@/infrastructure/MysqlNoteRepository";
import Note from "@/domain/entities/Note";

const notes = ref<Note[]>([]);
let uncompletedNotes = ref<Note[]>([]);

const getAllNoteUseCase = new GetAllNotesUseCase(new MysqlNoteRepository());

onMounted(async () => {
  notes.value = await getAllNoteUseCase.getAll();
  uncompletedNotes.value = notes.value.filter((note) => note.iscompleted());
});
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
  height: 80vh;
}
</style>
