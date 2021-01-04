<template>
  <div class="p-4">
    <b-card
      class="w-100"
      title="User's profile"
    >
      <b-row>
        <b-col class="font-weight-bold text-right" cols="3">
          Username
        </b-col>
        <b-col cols="9">
          {{ username }}
        </b-col>
      </b-row>
      <b-row>
        <b-col class="font-weight-bold text-right" cols="3">
          Email
        </b-col>
        <b-col cols="9">
          {{ email }}
        </b-col>
      </b-row>
      <b-row>
        <b-col class="font-weight-bold text-right" cols="3">
          Phone
        </b-col>
        <b-col cols="9">
          {{ phone }}
        </b-col>
      </b-row>
      <b-row>
        <b-col class="font-weight-bold text-right" cols="3">
          Address
        </b-col>
        <b-col cols="9">
          {{ address }}
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    username: 'John Snow',
    email: 'john@snow.com',
    phone: '420420420',
    address: '1217 Walkers Ridge Way, 07717 New Jersey'
  }),
})
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
