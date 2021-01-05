<template>
  <div class="p-4">
    <b-card
      class="w-100"
    >
      <template #header>
        <b-row>
          <b-col>
            <b-card-title>
              List of users
            </b-card-title>
          </b-col>
          <b-col cols="1" class="text-right">
            <b-button to="users/create" variant="success">
              <font-awesome-icon icon="plus" />
            </b-button>
          </b-col>
        </b-row>
      </template>
      <b-card
        title="Filters"
        class="mb-4"
      >
        <b-form @submit="handleFilter">
          <div class="d-flex">
            <b-form-input class="mr-2" v-model="filters.username" :style="{ width: '12rem' }" placeholder="username"></b-form-input>
            <b-form-input class="mr-2" v-model="filters.email" :style="{ width: '12rem' }" placeholder="email"></b-form-input>
          </div>
        </b-form>
      </b-card>
      <b-row class="font-weight-bold border-bottom pb-2">
        <b-col cols="3">
          Username
        </b-col>
        <b-col>
          Email
        </b-col>
        <b-col cols="2" class="text-right">
          Actions
        </b-col>
      </b-row>
      <b-row
        v-for="(user, index) in users"
        :key="user.email"
        class="py-1 d-flex align-items-center"
        :class="{ 'bg-light': index % 2 }"
      >
        <b-col cols="3">
          {{ user.username }}
        </b-col>
        <b-col>
          {{ user.email }}
        </b-col>
        <b-col cols="2" class="text-right">
          <b-button size="sm" :to="`/users/${user.id}`" variant="warning">
            <font-awesome-icon icon="edit" />
          </b-button>
          <b-button size="sm" @click="showModal(user)" variant="danger">
            <font-awesome-icon icon="trash-alt" />
          </b-button>
        </b-col>
      </b-row>
      <b-pagination
        class="mt-4"
        v-model="currentPage"
        :total-rows="15"
        :per-page="perPage"
      />
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    users: [
      {
        id: 1,
        username: 'John Snow',
        email: 'john@snow.com'
      },
      {
        id: 2,
        username: 'James Bond',
        email: 'james@bond.com'
      }
    ],
    filters: [
      {
        username: ''
      }
    ]
  }),
  methods: {
    handleFilter(evt) {
      evt.preventDefault()
      // send GET request with filtering
    },
    showModal(user: {
      id: Number,
      username: String,
      email: String,
    }) {
      this.$bvModal.msgBoxConfirm(`Do you want to delete user ${user.username}?`, {
        okVariant: 'danger',
        okTitle: 'Confirm',
      })
      .then((val) => {
        // send delete request with id 
      })
      .catch(err => {
        //
      })
    }
  }
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
