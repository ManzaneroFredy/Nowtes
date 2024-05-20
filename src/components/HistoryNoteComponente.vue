<template>
  <v-sheet rounded="xl" class="w-auto">
    <div class="w-50 mr-16 ml-5 mt-2">
      <h2 class="title mb-4">{{ props.title }}</h2>
      <p class="title">
        {{ props.substract }}
      </p>
    </div>
    <div class="d-flex flex-row flex-wrap mt-2 mr-16">
      <div class="w-25 d-flex flex-column mr-3 title">
        <h2 class="ml-4 mb-3 align-center">Fecha</h2>
        <v-sheet rounded class="align-center deadline d-flex">
          <p class="ml-4">{{ props.endline }}</p>
        </v-sheet>
      </div>
      <div class="w-25 d-flex flex-column title">
        <h2 class="ml-14 mb-3">Estatus</h2>
        <v-sheet
          rounded
          class="justify-center align-center deadline d-flex ml-12"
        >
          <p class="justify-center">{{ props.status }}</p>
        </v-sheet>
      </div>
    </div>
    <div class="d-flex flex-wrap ml-2 mt-2">
      <div class="ml-5 w-100 justify-center"><h2 class="title">Acción</h2></div>
      <div class="mt-n3 ml-4">
        <v-btn variant="text" density="comfortable" icon="mdi-delete"></v-btn>
        <v-btn
          variant="text"
          density="comfortable"
          icon="mdi-eye-outline"
          @click="
            $emit(
              'showCompleteNoteDetailsComponent',
              'completeNoteDetailsComponente'
            )
          "
        ></v-btn>
      </div>
    </div>
  </v-sheet>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  substract: {
    type: String,
    required: true,
  },
  endline: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.note {
  width: 1vh;
}

.title {
  color: $light-font;
}

.deadline {
  width: 6.25rem;
  height: 1.813rem;
  background-color: $light-low-status;
}
</style>
