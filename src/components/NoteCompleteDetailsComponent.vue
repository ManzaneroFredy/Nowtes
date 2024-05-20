<template>
  <v-container>
    <div class="title-page ml-4 mt-4 mb-4 d-flex align-center">
      <v-btn
        icon="mdi-chevron-left"
        variant="text"
        size="large"
        @click="$emit('showInitComponent', 'initComponent')"
      ></v-btn>
      <h1 class="">Nota #{{ note.getId() }}</h1>
      <div class="d-flex ml-12 ga-6 justify-end">
        <v-btn
          class="delete-btn"
          variant="flat"
          prepend-icon="mdi-trash-can"
          rounded="lg"
          >borrar</v-btn
        >
        <v-btn
          class="edit-btn"
          rounded="lg"
          prepend-icon="mdi-pencil"
          variant="flat"
          @click="
            $emit('showEditNoteComponent', 'editNoteComponent', note.getId())
          "
          >Editar</v-btn
        >
      </div>
    </div>
    <v-sheet
      class="d-flex flex-column justify-start p-1 setting-container"
      rounded
    >
      <div class="pt-4 ml-9 container">
        <h2>{{ note.getTitle() }}</h2>
        <div class="note-body mb-7 mt-4">
          <p>{{ note.getBody() }}</p>
        </div>
        <div class="mb-12">
          <p class="mb-2">
            <b>Última modificación:</b> {{ note.getLastModification() }}
          </p>
          <p><b>Entregar antes de : </b> {{ note.getDeadline() }}</p>
        </div>
        <div class="d-flex flex-row mb-4 align-center">
          <p><b>Prioridad: </b></p>
          <v-sheet
            class="ml-5 priority-indicator d-flex justify-center"
            rounded="lg"
          >
            <h5 class="align-self-center">{{ note.getPriority() }}</h5>
          </v-sheet>
        </div>
        <div class="d-flex flex-row mb-16 align-center">
          <p><b>Estatus: </b></p>
          <v-sheet
            class="ml-8 status-indicator d-flex justify-center"
            rounded="lg"
          >
            <h5 class="align-self-center">{{ note.getStatus() }}</h5>
          </v-sheet>
        </div>
      </div>
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
import Note from "@/domain/entities/Note";

let note = new Note(
  1,
  "title 1",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis est voluptatum reiciendis ipsam debitis tempore illo fugiat similique soluta.",
  "en progreso",
  "21/05/24"
);
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
