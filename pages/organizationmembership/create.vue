<template>
  <div class="p-4">
    <b-card
      title="Create organization membership"
    >
      <b-form @submit.prevent="handleSubmit">
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Employee"
          label="Employee"
        >
          <b-form-select id="Employee" required v-model="item.member_employee" :options="getOptions(employees)" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Organization"
          label="Organization"
        >
          <b-form-select id="Organization" required v-model="item.organization" :options="getOptions(organizations)" />
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
      member_employee: null,
      organization: null
    },
  }),
  async asyncData({ $axios, store, redirect }) {
    if(!store.state.user.is_staff) {
      redirect('/')
    }
    const responses = await Promise.all([
      $axios.get('/api/users/employees/'),
      $axios.get('/api/corehr/organization/'),
    ])
    const { data: employees } = responses[0]
    const { data: organizations } = responses[1]
    return {
      employees,
      organizations,
    }
  },
  methods: {
    getOptions(values) {
      return values.map(v => ({
        value: v.id,
        text: v.name,
      }))
    },
    handleSubmit() {
      this.$axios.post(
        'api/corehr/organizationmembership/',
        this.item
      )
      .then(() => {
        this.$router.push({ path: "/organizationmembership" })
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