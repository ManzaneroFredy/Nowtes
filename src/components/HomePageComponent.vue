<template>
  <v-container>
    <div class="title-page ml-4 mt-4 mb-4 d-flex flex-row align-center">
      <h1 class="w-100 justify-start text-title">Pendientes</h1>
      <v-btn
        class="btn-new-note"
        prepend-icon="mdi-plus"
        @click="$emit('showCreateNoteComponent', 'createNoteComponent')"
      >
        Nueva nota
      </v-btn>
    </div>
    <v-virtual-scroll class="scroll-container" :items="notes">
      <template v-slot:default="{ item }">
        <NoteComponent
          :key="item.getId()"
          :title="item.getTitle()"
          :description="item.getDescription()"
          :deadline="item.getDeadline()"
          :iscompleted="item.iscompleted()"
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
import { ref, onMounted } from "vue";
import NoteComponent from "./NoteComponent.vue";
import Note from "@/domain/entities/Note";
import MysqlNoteRepository from "@/domain/repositories/MysqlNoteRepository";
import { GetAllNotesUseCase } from "@/domain/usesCases/getAllNotes";

const notes = ref<Note[]>([]);

const getAllNoteUseCase = new GetAllNotesUseCase(new MysqlNoteRepository());

onMounted(async () => {
  notes.value = await getAllNoteUseCase.getAll();
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
  display: flex;
  height: 80vh;
}
</style>
