<template>
  <div class="p-4">
    <b-card
      title="Create organization"
    >
      <b-form @submit.prevent="handleSubmit">
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Name"
          label="Name"
        >
          <b-form-input id="Name" required v-model="item.name" />
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
    item: {
      name: '',
    },
  }),
  async asyncData({ store, redirect }) {
    if(!store.state.user.is_staff) {
      redirect('/')
    }
  },
  methods: {
    handleSubmit() {
      this.$axios.post(
        'api/corehr/organization/',
        this.item
      )
      .then(() => {
        this.$router.push({ path: "/organizations" })
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