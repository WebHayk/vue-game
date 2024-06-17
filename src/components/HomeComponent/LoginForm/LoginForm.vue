<script setup>
import {computed, reactive, defineProps} from "vue";
import useVuelidate from "@vuelidate/core";
import {LOGIN_FORM_RULES} from "@/core/vuelidate/rules/index.js";

const props = defineProps(["handleSubmit"])

const form = reactive({
  email: "",
  password: "",
});

const rules = computed(() => {
  return LOGIN_FORM_RULES;
});

const v$ = useVuelidate(rules, form);

const handleFormSubmit = async () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    props.handleSubmit();
  }
};
</script>

<template>
  <v-form>
    <v-row>
      <v-col cols="12">
        <v-text-field
            v-model="form.email"
            label="Email address"
            :error-messages="v$?.email?.$errors?.map(error => {
            if (error.$validator === 'required') return 'Email is required';
            if (error.$validator === 'email') return 'Must be a valid email';
            return '';
          })"
            hide-details="auto"
            @blur="v$?.value?.email?.$touch()"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
            v-model="form.password"
            label="Password"
            type="password"
            :error-messages="v$?.password?.$errors?.map(error => {
            if (error.$validator === 'required') return 'Password is required';
            if (error.$validator === 'minLength') return 'Password must be at least 6 characters';
            return '';
          })"
            hide-details="auto"
            @blur="v$?.value?.password?.$touch()"
        />
      </v-col>
      <v-col cols="12">
        <v-btn color="primary" @click="handleFormSubmit">
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<style scoped>
</style>
