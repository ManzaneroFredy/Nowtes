/* eslint-disable */
<template>
  <div class="dashboard-container">
    <DashboardHeaderComponent></DashboardHeaderComponent>
    <div class="d-flex flex-row">
      <DashboardSideBarComponent
        @showInitComponent="(componetToShow: string) => defineComponentView(componetToShow)"
        @showHistorialComponent="(componetToShow: string) => defineComponentView(componetToShow)"
        @showPreferenceComponent="(componetToShow: string) => defineComponentView(componetToShow)"
      ></DashboardSideBarComponent>
      <SettingsCommponent v-if="preferenceComponent"></SettingsCommponent>
      <HomePageComponent
        v-if="initComponent"
        @showCompleteNoteDetailsComponent="(componetToShow: string, noteItem: Note) => { defineComponentView(componetToShow); currentNote = noteItem }"
        @showCreateNoteComponent="(componetToShow: string) => defineComponentView(componetToShow)"
        @showEditNoteComponent="(componetToShow: string, noteItem: Note, index: number) =>{
           defineComponentView(componetToShow)
           currentNote = noteItem;
           noteIndex = index
        }"
      ></HomePageComponent>
      <HistoryComponent v-if="historialComponent"></HistoryComponent>
      <NoteCompleteDetailsComponent
        v-if="noteCompleteDetailsComponent"
        @showInitComponent="(componetToShow: string) => defineComponentView(componetToShow)"
        @showEditNoteComponent="(componetToShow: string, id: string) =>{
           defineComponentView(componetToShow)
        }"
        :noteId="currentNote.getId()"
        :id="noteIndex + 1"
        :title="currentNote.getTitle()"
        :description="currentNote.getDescription()"
        :deadline="currentNote.getDeadline()"
        :priority="currentNote.getPriority()"
        :delete-at-deadline="true"
      ></NoteCompleteDetailsComponent>
      <NewNoteComponent
        v-if="createNoteComponent"
        @showinitComponentFromSave="(componetToShow: string) => defineComponentView(componetToShow)"
        @showInitComponent="(componetToShow: string) => defineComponentView(componetToShow)"
        @showInitComponentFromCancel="(componetToShow: string) => defineComponentView(componetToShow)"
      >
      </NewNoteComponent>
      <EditNoteComponent
        @showInitComponent="(componetToShow: string) => defineComponentView(componetToShow)"
        @showInitComponentFromCancel="(componetToShow: string) => defineComponentView(componetToShow)"
        :id="noteIndex + 1"
        :title="currentNote.getTitle()"
        :description="currentNote.getDescription()"
        :deadline="currentNote.getDeadline()"
        :priority="currentNote.getPriority()"
        :delete-at-deadline="true"
        v-if="editNoteComponente"
      ></EditNoteComponent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DashboardSideBarComponent from "@/components/DashboardSideBarComponent.vue";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent.vue";
import SettingsCommponent from "@/components/SettingsComponent.vue";
import HomePageComponent from "@/components/HomePageComponent.vue";
import HistoryComponent from "@/components/HistoryComponent.vue";
import NoteCompleteDetailsComponent from "@/components/NoteCompleteDetailsComponent.vue";
import NewNoteComponent from "@/components/NewNoteComponent.vue";
import ComponentsAvailablesInterface from "@/utilities/ComponentAvailableInterface";
import EditNoteComponent from "@/components/EditNoteComponent.vue";
import Note from "@/domain/entities/Note";

let initComponent = ref(true);
let historialComponent = ref(false);
let preferenceComponent = ref(false);
let createNoteComponent = ref(false);
let noteCompleteDetailsComponent = ref(false);
let editNoteComponente = ref(false);
let currentNote: Note;
let noteIndex = 0;

//Strategy pattern
const componentsAvailables: ComponentsAvailablesInterface = {
  // eslint-disable-next-line prettier/prettier, no-undef
  initComponent: (showComponent: boolean) => {
    initComponent.value = showComponent;
  },
  // eslint-disable-next-line prettier/prettier
  historialComponent: (showComponent: boolean) => {
    historialComponent.value = showComponent;
  },
  // eslint-disable-next-line prettier/prettier
  preferenceComponent: (showComponent: boolean) => {
    preferenceComponent.value = showComponent;
  },
  // eslint-disable-next-line prettier/prettier
  createNoteComponent: (showComponent: boolean) => {
    createNoteComponent.value = showComponent;
  },
  // eslint-disable-next-line prettier/prettier
  completeDetailComponent: (showComponent: boolean) => {
    noteCompleteDetailsComponent.value = showComponent;
  },
  // eslint-disable-next-line prettier/prettier
  editNoteComponent: (showComponent: boolean) => {
    editNoteComponente.value = showComponent;
  },
  // eslint-disable-next-line prettier/prettier
  completeNoteDetailsComponente: (showComponent: boolean) => {
    noteCompleteDetailsComponent.value = showComponent;
  },
};

const defineComponentView = (componentToShow: string) => {
  for (let key in componentsAvailables) {
    if (key === componentToShow) {
      console.log(key === componentToShow);
      componentsAvailables[key](true);
    } else {
      componentsAvailables[key](false);
    }
  }
};
</script>

<style scoped lang="scss"></style>
