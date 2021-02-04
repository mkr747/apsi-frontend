<template>
  <div class="p-4">
    <b-card
      title="Edit contract"
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
          label-for="Base Rate"
          label="Base Rate"
        >
          <b-form-input id="Base Rate" required v-model="item.base_rate" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Post Code"
          label="Post Code"
        >
          <b-form-input id="Post Code" required v-model="item.post_code" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="File Name"
          label="File Name"
        >
          <b-form-input id="File Name" required v-model="item.file_name" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Department"
          label="Department"
        >
          <b-form-select id="Department" required v-model="item.department" :options="getOptions(departments)" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Job Position"
          label="Job Position"
        >
          <b-form-select id="Job Position" required v-model="item.job_position" :options="getOptions(job_positions)" />
        </b-form-group>
        <b-form-group
          label-cols="3"
          label-align="right"
          label-class="font-weight-bold"
          label-for="Contract type"
          label="Contract type"
        >
          <b-form-select id="Contract type" required v-model="item.contract_type" :options="getOptions(contract_types)" />
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
      base_rate: '',
      post_code: '',
      file_name: '',
      job_position: null,
      contract_type: null,
      department: null,
    },
  }),
  async asyncData({ $axios, params }) {
    const responses = await Promise.all([
      $axios.get('/api/corehr/department/'),
      $axios.get('/api/corehr/jobposition/'),
      $axios.get('/api/corehr/contracttype/'),
      $axios.get(`api/corehr/contract/${params.id}/`),
    ])
    const { data: departments } = responses[0]
    const { data: job_positions } = responses[1]
    const { data: contract_types } = responses[2]
    const { data: item } = responses[3]
    return {
      departments,
      job_positions,
      contract_types,
      item: {
        id: item.id,
        date_from: item.date_from,
        date_to: item.date_to,
        base_rate: item.base_rate,
        post_code: item.post_code,
        file_name: item.file_name,
        job_position: JSON.parse(item.job_position).id,
        contract_type: JSON.parse(item.contract_type).id,
        department: JSON.parse(item.department).id,
      }
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
      this.$axios.put(
        `api/corehr/contract/${this.item.id}/`,
        this.item
      )
      .then(() => {
        this.$router.push({ path: "/contracts" })
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