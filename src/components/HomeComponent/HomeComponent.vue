<script setup>

import LoginForm from "@/components/HomeComponent/LoginForm/LoginForm.vue";
import { useRouter } from 'vue-router';
import {ROUTES} from "@/core/variables/index.js";

const router = useRouter();

const handleLoginSubmit = () => {
  router.push(ROUTES.GAME);
};
</script>

<template>
  <v-container class="h-100">
    <v-row class="h-100 justify-center">
      <v-col
          cols="12"
          md="6"
          class="flex-grow-1 d-flex align-center justify-center"
      >
          <v-card class="text-center pa-5 w-100">
              <LoginForm
                  :handleSubmit="handleLoginSubmit"
              />
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
