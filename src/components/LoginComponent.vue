<template>
  <div class="back">
    <div class="d-flex justify-center">
      <v-sheet
        class="d-flex justify-center align-center"
        :elevation="5"
        rounded
        width="500px"
        height="550px"
      >
        <div class="w-75">
          <V-form class="mt-13">
            <h3 class="pa-2">Iniciar Sesión</h3>
            <small class="pa-2">Bienvenido</small>
            <v-divider></v-divider>
            <v-text-field
              label="username"
              variant="solo"
              class="pa-2"
              v-model="username"
            ></v-text-field>
            <v-text-field
              label="password"
              variant="solo"
              class="pa-2"
              v-model="password"
            ></v-text-field>
            <div class="d-flex justify-end register">
              <small
                @click="$emit('showLoginComponent', 'loginComponent')"
                class="pa-2"
                >Registrarse</small
              >
            </div>
            <div class="d-flex justify-center">
              <v-btn
                variant="flat"
                rounded="sm"
                class="pa-2"
                size="large"
                color="#E3B024"
                @click="loginUser"
                >Ingresar</v-btn
              >
            </div>
          </V-form>
        </div>
      </v-sheet>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import MysqlUserRepository from "@/infrastructure/MysqlUserRepository";
import LoginUserUseCase from "@/domain/usesCases/loginUser";

const router = useRouter();
let username = ref("");
let password = ref("");

const loginUserUseCase = new LoginUserUseCase(new MysqlUserRepository());

const loginUser = async () => {
  const loginDto = { username: username.value, password: password.value };
  const success = await loginUserUseCase.login(loginDto);
  if (success) {
    router.push("/dashboard");
  }
};
</script>

<style lang="scss" scoped>
.register {
  color: $dark-title-app;
  text-decoration: underline;
}
</style>
