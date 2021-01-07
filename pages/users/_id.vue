<template>
  <div class="p-4">
    <b-card
      title="Edit user"
    >
      <b-form @submit.prevent="handleSubmit">
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Name"
          label="Name"
        >
          <b-form-input id="Name" required v-model="user.name" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Surname"
          label="Surname"
        >
          <b-form-input id="Surname" required v-model="user.surname" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Password"
          label="Password"
        >
          <b-form-input id="Password" type="password" required v-model="user.password" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Email"
          label="Email"
        >
          <b-form-input id="Email" type="email" v-model="user.email" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Phone"
          label="Phone"
        >
          <b-form-input id="Phone" type="tel" v-model="user.phone_number" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Birthdate"
          label="Birthdate"
        >
          <b-calendar v-model="user.birthdate" locale="en-US" />
        </b-form-group>
        <div class="d-flex justify-content-end">
          <b-button class="mr-2" type="submit" variant="success">
            Submit
          </b-button>
          <b-button @click="handleCancel" variant="danger">
            Cancel
          </b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      id: '',
      name: '',
      surname: '',
      password: '',
      email: '',
      phone_number: '',
      birthdate: '',
    },
  }),
  async asyncData({ $axios, params }) {
    const { data: user } = await $axios.get(`api/users/employees/${params.id}/`)
    return {
      user
    }
  },
  methods: {
    handleSubmit() {
      this.$axios.put(
        `api/users/employees/${this.user.id}/`,
        this.user
      )
      .then(() => {
        this.$router.push({ path: "/users" })
      })
    },
    handleCancel() {
      this.$router.back()
    }
  }
}
</script>

<style>

</style>