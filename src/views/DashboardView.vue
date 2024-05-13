<template>
  <div class="dashboard-container">
    <DashboardHeaderComponent></DashboardHeaderComponent>
    <div class="d-flex flex-row">
      <DashboardSideBarComponent
        @showInitComponent="
          (
            initComponentValue,
            historialComponentvalue,
            preferenceComponentValue
          ) =>
            defineComponentView(
              initComponentValue,
              historialComponentvalue,
              preferenceComponentValue
            )
        "
        @showHistorialComponent="
          (
            initComponentValue,
            historialComponentvalue,
            preferenceComponentValue
          ) =>
            defineComponentView(
              initComponentValue,
              historialComponentvalue,
              preferenceComponentValue
            )
        "
        @showPreferenceComponent="
          (
            initComponentValue,
            historialComponentvalue,
            preferenceComponentValue
          ) =>
            defineComponentView(
              initComponentValue,
              historialComponentvalue,
              preferenceComponentValue
            )
        "
      ></DashboardSideBarComponent>
      <SettingsCommponent v-if="preferenceComponent"></SettingsCommponent>
      <HomePageComponent v-if="initComponent"></HomePageComponent>
      <HistoryComponent v-if="historialComponent"></HistoryComponent>
      <!-- <NoteCompleteDetailsComponent></NoteCompleteDetailsComponent> -->
      <!-- <NewNoteComponent></NewNoteComponent> -->
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

let initComponent = ref(false);
let historialComponent = ref(false);
let preferenceComponent = ref(false);

const defineComponentView = (
  initComponentValue: boolean,
  historialComponentvalue: boolean,
  preferenceComponentValue: boolean
) => {
  initComponent.value = initComponentValue;
  historialComponent.value = historialComponentvalue;
  preferenceComponent.value = preferenceComponentValue;
};
</script>

<style scoped lang="scss">
.dashboard-container {
  background-color: $light-bg;
}
</style>
