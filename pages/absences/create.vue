<template>
  <div class="p-4">
    <b-card
      title="Create contract"
    >
      <b-form @submit.prevent="handleSubmit">
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Date From"
          label="Date From"
        >
          <b-calendar v-model="item.date_from" locale="en-US" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Date To"
          label="Date To"
        >
          <b-calendar v-model="item.date_to" locale="en-US" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Employee"
          label="Employee"
        >
          <b-form-select id="Employee" required :disabled="!isStaff" v-model="item.employee" :options="getOptions(employees)" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Absence type"
          label="Absence type"
        >
          <b-form-select id="Absence type" required v-model="item.absence_type" :options="getOptions(absence_types)" />
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
      date_from: '',
      date_to: '',
      absence_type: null,
      employee: null,
    },
  }),
  async asyncData({ $axios, store }) {
    const responses = await Promise.all([
      $axios.get('/api/users/employees/'),
      $axios.get('/api/corehr/absencetype/'),
    ])
    const { data: employees } = responses[0]
    const { data: absence_types } = responses[1]
    return {
      employees,
      absence_types,
      isStaff: store.state.user.is_staff,
      item: {
        employee: store.state.user.user_id,
        date_from: '',
        date_to: '',
        absence_type: null,
      },
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
        'api/corehr/absence/',
        this.item
      )
      .then(() => {
        this.$router.push({ path: "/absences" })
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