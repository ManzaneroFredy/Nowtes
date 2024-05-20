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
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

export const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#121212",
    surface: "#121212",
    primary: "#ff9100",
    "primary-darken-1": "#FFFFFF",
    secondary: "#ff9100",
    "secondary-darken-1": "#018786",
    error: "#e54545",
    info: "#ff9100",
    success: "#6290C8",
    warning: "#E8AAEC",
    title: "#E3B024",
    whiteText: "#FFFFFF",
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
