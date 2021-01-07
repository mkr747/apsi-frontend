<template>
  <div class="p-4">
    <b-card
      title="Edit organization membership"
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
      id: '',
      member_employee: null,
      organization: null
    },
  }),
  async asyncData({ $axios, params }) {
    const responses = await Promise.all([
      $axios.get('/api/users/employees/'),
      $axios.get('/api/corehr/organization/'),
      $axios.get(`api/corehr/organizationmembership/${params.id}/`)
    ])
    const { data: employees } = responses[0]
    const { data: organizations } = responses[1]
    const { data: item } = responses[2]
    return {
      employees,
      organizations,
      item: {
        id: item.id,
        member_employee: Number(JSON.parse(item.member_employee).id),
        organization: Number(JSON.parse(item.organization).id)
      }
    }
  },
  methods: {
    getOptions(values) {
      return values.map(v => ({
        value: Number(v.id),
        text: v.name,
      }))
    },
    handleSubmit() {
      this.$axios.put(
        `api/corehr/organizationmembership/${this.item.id}/`,
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