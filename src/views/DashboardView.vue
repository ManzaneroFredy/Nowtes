<template>
  <div class="dashboard-container">
    <DashboardHeaderComponent></DashboardHeaderComponent>
    <div class="d-flex flex-row">
      <DashboardSideBarComponent></DashboardSideBarComponent>
      <!-- <SettingsCommponent></SettingsCommponent> -->
      <HomePageComponent></HomePageComponent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DashboardSideBarComponent from "@/components/DashboardSideBarComponent.vue";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent.vue";
import SettingsCommponent from "@/components/SettingsComponent.vue";
import HomePageComponent from "@/components/HomePageComponent.vue";
</script>

<style scoped lang="scss">
.dashboard-container {
  background-color: $light-bg;
}
</style>
