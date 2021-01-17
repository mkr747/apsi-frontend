<template>
  <div class="d-flex vh-100 vw-100 justify-content-center align-items-center">
    <b-card class="shadow">
      <b-card-title>
        <Logo :style="{ width: '2rem', height: '2rem' }" />
        Core HR
      </b-card-title>
      <b-form @submit.prevent="onSubmit">
        <b-form-group label="Email:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="credentials.email"
            required
            placeholder="email"
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
import jwt_decode from 'jwt-decode'
const https = require('https')

export default Vue.extend({
  layout: 'other',
  data: () => ({
    credentials: {
      email: 'admin@admin.com',
      password: 'admin123'
    }
  }),
  methods: {
    onSubmit() {
        this.$router.push({ path: '/' })
    }
  }
})
</script>

<style>

</style>