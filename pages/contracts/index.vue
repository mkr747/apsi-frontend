<template>
  <div class="p-4">
    <b-card
      class="w-100"
    >
      <template #header>
        <b-row>
          <b-col>
            <b-card-title>
              List of contracts
            </b-card-title>
          </b-col>
          <b-col cols="1" class="text-right">
            <b-button to="contracts/create" variant="success">
              <font-awesome-icon icon="plus" />
            </b-button>
          </b-col>
        </b-row>
      </template>
      <b-card
        title="Filters"
        class="mb-4"
      >
        <div class="d-flex flex-wrap">
          <b-form-input v-for="field in filteredFields" :key="field" class="mt-2 mr-2" v-model="filters[field]" :style="{ width: '12rem' }" :placeholder="getPlaceholder(String(field))" />
        </div>
      </b-card>
      <b-row class="font-weight-bold border-bottom pb-2">
        <b-col>
          Date from
        </b-col>
        <b-col>
          Date to
        </b-col>
        <b-col>
          Job position
        </b-col>
        <b-col>
          Department
        </b-col>
        <b-col>
          Contract type
        </b-col>
        <b-col cols="2" class="text-right">
          Actions
        </b-col>
      </b-row>
      <b-row
        v-for="(item, index) in itemsFiltered()"
        :key="JSON.stringify(item)"
        class="py-1 d-flex align-items-center"
        :class="{ 'bg-light': index % 2 }"
      >
        <b-col>
          {{ item.date_from }}
        </b-col>
        <b-col>
          {{ item.date_to }}
        </b-col>
        <b-col>
          {{ item.job_position }}
        </b-col>
        <b-col>
          {{ item.department }}
        </b-col>
        <b-col>
          {{ item.contract_type }}
        </b-col>
        <b-col cols="2" class="text-right">
          <b-button size="sm" :to="`/contracts/${item.id}`" variant="warning">
            <font-awesome-icon icon="edit" />
          </b-button>
          <b-button size="sm" @click="showModal(item)" variant="danger">
            <font-awesome-icon icon="trash-alt" />
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import filters from '~/mixins/filters'

export default Vue.extend({
  mixins: [filters],
  data: () => ({
    items: [],
    filteredFields: ["date_from", "date_to", "job_position", "department", "contract_type"]
  }),
  async asyncData({ $axios }) {
    const { data: items } = await $axios.get('api/corehr/contract/')
    return { items: items.map((item) => ({
      id: item.id,
      date_from: item.date_from,
      date_to: item.date_to,
      base_rate: item.base_rate,
      post_code: item.post_code,
      file_name: item.file_name,
      job_position: JSON.parse(item.job_position).name,
      department: JSON.parse(item.department).name,
      contract_type: JSON.parse(item.contract_type).name,
    })) }
  },
  methods: {
    showModal(item: {
      id: Number,
      date_from: String,
      date_to: String,
      base_rate: String,
      post_code: String,
      file_name: String,
      job_position: String,
      department: String,
      contract_type: String,
    }) {
      this.$bvModal.msgBoxConfirm(`Do you want to delete ${item.file_name}?`, {
        okVariant: 'danger',
        okTitle: 'Confirm',
      })
      .then(() => {
        this.$axios.delete(`api/corehr/contract/${item.id}/`)
        .then(() => {
          this.$router.go()
        })
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
