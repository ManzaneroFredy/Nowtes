<template>
  <v-container>
    <div class="title-page ml-4 mt-4 mb-4 d-flex align-center">
      <v-btn
        icon="mdi-chevron-left"
        variant="text"
        size="large"
        @click="$emit('showInitComponent', 'initComponent')"
      ></v-btn>
      <h1 class="">Nota Actual</h1>
      <div class="d-flex ml-12 ga-6 justify-end">
        <v-btn
          class="delete-btn"
          variant="flat"
          prepend-icon="mdi-trash-can"
          rounded="lg"
          @click="deleteNote"
        >
          Borrar
        </v-btn>
        <v-btn
          class="edit-btn"
          rounded="lg"
          prepend-icon="mdi-pencil"
          variant="flat"
          @click="
            $emit('showEditNoteComponent', 'editNoteComponent', note?.getId())
          "
        >
          Editar
        </v-btn>
      </div>
    </div>
    <v-sheet
      class="d-flex flex-column justify-start p-1 setting-container bg-nowte"
      rounded
    >
      <div class="pt-4 ml-9 container">
        <h2 class="text-nowteText">{{ titleValue }}</h2>
        <div class="note-body mb-7 mt-4">
          <p class="text-nowteText">{{ descriptionValue }}</p>
        </div>
        <div class="mb-12">
          <p class="text-nowteText">
            <b class="text-nowteText">Entregar antes de : </b>
            {{ dateValue }}
          </p>
        </div>
        <div class="d-flex flex-row mb-4 align-center">
          <p><b class="text-nowteText">Prioridad: </b></p>
          <v-sheet
            class="ml-5 priority-indicator d-flex justify-center text-nowteText"
            rounded="lg"
          >
            <h5 class="align-self-center text-nowteText">
              {{ priorityValue }}
            </h5>
          </v-sheet>
        </div>
        <div class="d-flex flex-row mb-16 align-center">
          <p><b class="text-nowteText">Estatus: </b></p>
          <v-sheet
            class="ml-8 status-indicator d-flex justify-center text-nowteText"
            rounded="lg"
          >
            <h5 class="align-self-center text-nowteText">
              {{ note?.iscompleted() ? "Active" : "Not Active" }}
            </h5>
          </v-sheet>
        </div>
      </div>
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import Note from "@/domain/entities/Note";
import MysqlNoteRepository from "@/infrastructure/MysqlNoteRepository";
import { DeleteNote } from "@/domain/usesCases/deleteCompleteNote";
// import { GetNoteUseCase } from "@/domain/usesCases/getNote";

const note = ref<Note>();
const deleteNoteUseCase = new DeleteNote(new MysqlNoteRepository());
// const getNoteUseCase = new GetNoteUseCase(new MysqlNoteRepository());
/*
const props = defineProps({ noteId: { type: String, required: true } });

const getNote = async () => {
  if (props.noteId) {
    note.value = GetNoteUseCase.getById(props.noteId);
  } else {
    console.log("Error: Nota no encontrada");
  }
};
*/
const priorities = ["Baja", "Media", "Alta"];

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  deadline: {
    type: Date,
    required: false,
  },
  priority: {
    type: String,
    required: false,
  },
  deleteAtDeadline: {
    type: Boolean,
    requirte: false,
  },
});
let idValue = ref(props.id);
let titleValue = ref(props.title);
let descriptionValue = ref(props.description);
let dateValue = ref(props.deadline);
let priorityValue = ref(props.priority);
let deleteAtDeadLineValue = ref(props.deleteAtDeadline);
const deleteNote = async () => {
  if (note.value) {
    await deleteNoteUseCase.deleteNote(note.value.getId());
  } else {
    console.error("No hay ninguna nota para eliminar.");
  }
};
</script>

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

.delete-btn {
  background-color: $light-high-status;
  color: $light-menu-bg;
}

.edit-btn {
  background-color: $dark-bg;
  color: $light-menu-bg;
}

.note-body {
  max-height: 35vh;
}

.priority-indicator {
  background-color: $light-high-status;
  width: 10vh;
  height: 4vh;
  p {
    color: black;
  }
}

.status-indicator {
  background-color: $light-mid-status;
  width: 15vh;
  height: 4vh;
}

.container {
  h2 {
    color: $light-font;
  }
  p {
    color: $light-header-panel;
  }
  b {
    color: $light-font;
  }
}
</style>
