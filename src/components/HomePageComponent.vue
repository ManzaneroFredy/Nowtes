<template>
  <v-container class="w-100">
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
    <v-virtual-scroll
      class="scroll-container w-100"
      :items="notes"
      v-if="notes.length !== 0"
    >
      <template v-slot:default="{ item, index }">
        <NoteComponent
          :key="item.getId()"
          :title="item.getTitle()"
          :description="item.getDescription()"
          :deadline="item.getDeadline()"
          :iscompleted="item.iscompleted()"
          class="d-flex justify-center ml-4 my-2"
          @showEditNoteComponent="(componentToShow: string) => $emit('showEditNoteComponent', componentToShow, item, index)"
          @showCompleteNoteDetailsComponent="(componentToShow: string) => $emit('showCompleteNoteDetailsComponent',
              componentToShow, item)"
        ></NoteComponent>
      </template>
    </v-virtual-scroll>
    <v-container class="d-flex w-75" v-else>
      <v-row>
        <v-col>
          <v-row class="h-75">
            <v-img
              width="650"
              aspect-ratio="1/1"
              :src="require(`../assets/noData.png`)"
              alt="Nowtes logo"
              class="justify-center"
              eager
            >
            </v-img>
          </v-row>
          <v-row justify="center">
            <h1>No hay notas</h1>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import NoteComponent from "./NoteComponent.vue";
import Note from "@/domain/entities/Note";
import MysqlNoteRepository from "@/infrastructure/MysqlNoteRepository";
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
  height: 80vh;
}
</style>
