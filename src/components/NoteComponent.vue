<template>
  <v-sheet
    v-if="!isDeleted"
    rounded="xl"
    class="w-auto bg-nowte"
    :class="{ deleting: isDeleting }"
  >
    <div class="w-50 mr-16 ml-5 mt-2">
      <h2 class="title mb-4 text-nowteText">{{ props.title }}</h2>
      <p class="title text-nowteText">
        {{ props.substract }}
      </p>
    </div>
    <div class="d-flex flex-row flex-wrap mt-2 mr-16">
      <div class="w-25 d-flex flex-column mr-3 title">
        <h2 class="ml-4 mb-3 align-center text-nowteText">Fecha</h2>
        <v-sheet rounded class="align-center deadline d-flex bg-warning">
          <p class="ml-4 justify-center align-center text-nowteText">
            {{ props.endline }}
          </p>
        </v-sheet>
      </div>
      <div class="w-25 d-flex flex-column title">
        <h2 class="ml-14 mb-3 text-nowteText">Estatus</h2>
        <v-sheet
          rounded
          class="justify-center align-center deadline d-flex ml-12 bg-primary"
        >
          <p class="justify-center text-nowteText">
            {{ props.status }}
          </p>
        </v-sheet>
      </div>
    </div>
    <div class="d-flex flex-wrap ml-2 mt-2">
      <div class="ml-5 w-100">
        <h2 class="title text-nowteText">Acción</h2>
      </div>
      <div class="mt-n3">
        <v-btn
          class="mr-2"
          variant="text"
          density="comfortable"
          icon="mdi-pencil"
          @click="$emit('showEditNoteComponent', 'editNoteComponent')"
        ></v-btn>
        <v-btn
          variant="text"
          density="comfortable"
          icon="mdi-delete"
          @click="handleDelete"
        ></v-btn>
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
import { defineProps, ref, getCurrentInstance } from "vue";

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

const isDeleting = ref(false);
const isDeleted = ref(false);
const { emit } = getCurrentInstance();

const handleDelete = () => {
  isDeleting.value = true;
  setTimeout(() => {
    isDeleted.value = true;
    emit("deleteNote", props.title);
  }, 300); // Duración de la animación
};
</script>

<style scoped lang="scss">
.note {
  transition: opacity 0.3s ease;
}

.deleting {
  opacity: 0;
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
