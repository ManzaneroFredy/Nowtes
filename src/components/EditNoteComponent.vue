<template>
  <v-container class="fluid">
    <div class="title-page ml-4 mt-4 mb-4 d-flex align-center">
      <v-btn
        icon="mdi-chevron-left"
        variant="text"
        size="large"
        @click="$emit('showInitComponent', 'initComponent')"
      ></v-btn>
      <h1 class="">Editar nota # {{ props.id }}</h1>
    </div>
    <v-sheet class="setting-container bg-nowte" rounded>
      <v-row no-gutters>
        <v-col>
          <div class="d-flex mt-5 ml-6 w-75">
            <h3 class="align-self-center mb-5 mr-12 ml-6 text-nowteText">
              Titulo:
            </h3>
            <v-textarea
              class="align-self-center"
              density="compact"
              label="Ingrese un titulo"
              variant="outlined"
              no-resize
              rounded="lg"
              rows="2"
              v-model:model-value="titleValue"
            >
            </v-textarea>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <div class="d-flex ml-6 w-75">
            <h3 class="align-self-center mb-5 mr-6 text-nowteText">
              Descripción:
            </h3>
            <v-textarea
              class="align-self-center"
              density="compact"
              label="Ingrese una descripción"
              variant="outlined"
              no-resize
              rounded="lg"
              rows="8"
              v-model:model-value="descriptionValue"
            >
            </v-textarea>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <div class="d-flex align-center mb-6 ml-6">
            <h3 class="mr-12 ml-6 text-nowteText">Fecha:</h3>
            <input
              class="date-picker bg-nowte"
              type="date"
              :value="dateValue"
            />
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <div class="d-flex align-center mb-3 ml-6 w-75">
            <h3 class="mr-5 ml-6 text-nowteText">Prioridad:</h3>
            <v-select
              class=""
              label="Selecciona la prioridad"
              :items="priorities"
              v-model="priorityValue"
            ></v-select>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <div class="d-flex align-center ml-10 w-75">
            <v-checkbox
              label="Borrar cuando la tarea cambie al estado 'Finalizada'"
              v-model="deleteAtDeadLineValue"
            ></v-checkbox>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <div class="d-flex align-center mb-3 ml-12 w-75 ga-8">
            <v-btn
              class="decline-btn font-weight-bold"
              rouneded="lg"
              @click="$emit('showInitComponentFromCancel', 'initComponent')"
              >Cancelar</v-btn
            >
            <v-btn class="save-btn font-weight-bold" rouneded="lg"
              >Guardar</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";
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

let titleValue = ref(props.title);
let descriptionValue = ref(props.description);
let dateValue = ref(props.deadline);
let priorityValue = ref(props.priority);
let deleteAtDeadLineValue = ref(props.deleteAtDeadline);
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

.btn-delete-data {
  color: $light-font-title;
  background-color: $light-high-status;
  width: 20vh;
}

.btn-end-sesion {
  background-color: $light-mid-status;
  width: 20vh;
  margin-bottom: 20vh;
}

.date-picker {
  background-color: $light-bg;
  color: $light-font-title;
  width: 20vh;
  height: 5vh;
  border-radius: 1vh;
  padding: 2vh;
}

.decline-btn {
  background-color: $light-high-status;
  color: $light-title-app;
}

.save-btn {
  background-color: $light-font;
  color: $light-title-app;
}
</style>
