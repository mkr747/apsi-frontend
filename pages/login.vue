<template>
  <div class="d-flex vh-100 vw-100 justify-content-center align-items-center">
    <b-card class="shadow">
      <b-card-title>
        <Logo :style="{ width: '2rem', height: '2rem' }" />
        Core HR
      </b-card-title>
      <b-card-sub-title class="mb-2">
        Log In
      </b-card-sub-title>
      <b-form @submit="onSubmit">
        <b-form-group label="Login:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="credentials.login"
            required
            placeholder="Login"
          />
        </b-form-group>
        <b-form-group label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="credentials.password"
            type="password"
            required
          />
        </b-form-group>
        <div class="d-flex justify-content-center">
          <b-button class="px-5" type="submit">
            Log In
          </b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'other',
  data: () => ({
    credentials: {
      login: '',
      password: ''
    }
  }),
  methods: {
    onSubmit() {
      // TODO: Handle login / password retrieval
    }
  }
})
</script>

<style>

</style>