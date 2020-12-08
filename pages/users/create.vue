<template>
  <div class="p-4">
    <b-card
      title="Create user"
    >
      <b-form @submit="createUser">
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Username"
          label="Username"
        >
          <b-form-input id="Username" required v-model="user.username" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
        >
          <b-form-checkbox id="generate_password" v-model="user.generate_password">
            Generate password
          </b-form-checkbox>
        </b-form-group>
        <b-form-group
          v-if="!user.generate_password"
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
          <b-form-input id="Phone" type="tel" v-model="user.phone" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Address"
          label="Address"
        >
          <b-form-input id="Address" v-model="user.address" />
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
      generate_password: true,
      username: '',
      password: '',
      email: '',
      phone: '',
      address: ''
    }
  }),
  methods: {
    createUser() {
      //TODO: send create user request
    },
    handleCancel() {
      this.$router.back()
    }
  }
}
</script>

<style>

</style>