<template>
  <div class="p-4">
    <b-card
      title="Edit hierarchy relation"
    >
      <b-form @submit.prevent="handleSubmit">
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Manager"
          label="Manager"
        >
          <b-form-select id="Manager" required v-model="item.manager" :options="getOptions(employees)" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Employee"
          label="Employee"
        >
          <b-form-select id="Employee" required v-model="item.employee" :options="getOptions(employees)" />
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
      manager: null,
      employee: null
    },
  }),
  async asyncData({ $axios, params, store, redirect }) {
    if(!store.state.user.is_staff) {
      redirect('/')
    }
    const responses = await Promise.all([
      $axios.get('/api/users/employees/'),
      $axios.get(`api/corehr/managers/${params.id}/`)
    ])
    const { data: employees } = responses[0]
    const { data: item } = responses[1]
    return {
      employees,
      item: {
        id: item.id,
        manager: Number(JSON.parse(item.manager).id),
        employee: Number(JSON.parse(item.employee).id)
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
        `api/corehr/managers/${this.item.id}/`,
        this.item
      )
      .then(() => {
        this.$router.push({ path: "/hierarchyrelation" })
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