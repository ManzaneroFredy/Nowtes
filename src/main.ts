import { createApp } from "vue";
import App from "./App.vue";
import "vuetify/styles";
import { ThemeDefinition, createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import router from "./router";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "reflect-metadata";

export const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF", // $light-menu-bg: #ffffff; White
    surface: "#829CBC", // $light-bg: #829CBC; Lighter blue
    primary: "#F5DF53", // $light-mid-status: #F5DF53; yellow
    "primary-darken-1": "#3700B3",
    secondary: "#F5DF53", // $light-mid-status: #F5DF53; yellow
    "secondary-darken-1": "#018786",
    error: "#E21A1A", // $light-high-status: #E21A1A; Red
    info: "#F5DF53", // $light-mid-status: #F5DF53; yellow
    success: "#99D4AC", // Light green
    warning: "#99D4AC", // $light-high-status: #E21A1A; Red
    nowtesLogo: "#FFFFFF",
    nowtesLogoBg: "#6290C8", // $light-header-panel: #6290C8;
    nowte: "#FFFFFF",
    nowteText: "#1F487E",
    settingDataBtn: "#F5DF53",
    settingCloseBtn: "#E21A1A",
  },
};

export const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#121212", // $dark-bg: #121212; Black light
    surface: "#000000", // $dark-header-panel: #000000; Black
    primary: "#ff9100", // $dark-mid-status: #ff9100; Orange
    "primary-darken-1": "#FFFFFF", // White
    secondary: "#ff9100", // $dark-mid-status: #ff9100; Orange
    "secondary-darken-1": "#018786",
    error: "#e54545", // $dark-high-status: #e54545; Red
    info: "#ff9100", // $dark-mid-status: #ff9100; Orange
    success: "#6290C8", // Light Blue
    warning: "#E8AAEC", // $dark-low-status: #E8AAEC; Pink
    title: "#E3B024", // $dark-title-app: #E3B024; Gold
    whiteText: "#FFFFFF", // White
    nowteText: "#FFFFFF",
    nowte: "#202020",
    settingDataBtn: "#ff9100",
    settingCloseBtn: "#E8AAEC",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "myCustomDarkTheme",
    variations: {
      colors: ["primary", "secondary"],
      lighten: 1,
      darken: 2,
    },
    themes: {
      myCustomDarkTheme,
      myCustomLightTheme,
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
