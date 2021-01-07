<template>
  <div class="p-4">
    <b-card
      class="w-100"
    >
      <template #header>
        <b-row>
          <b-col>
            <b-card-title>
              List of hierarchy relations
            </b-card-title>
          </b-col>
          <b-col cols="1" class="text-right">
            <b-button to="hierarchyrelation/create" variant="success">
              <font-awesome-icon icon="plus" />
            </b-button>
          </b-col>
        </b-row>
      </template>
      <b-card
        title="Filters"
        class="mb-4"
      >
        <div class="d-flex">
          <b-form-input v-for="field in filteredFields" :key="field" class="mt-2 mr-2" v-model="filters[field]" :style="{ width: '12rem' }" :placeholder="getPlaceholder(String(field))" />
        </div>
      </b-card>
      <b-row class="font-weight-bold border-bottom pb-2">
        <b-col>
          Manager
        </b-col>
        <b-col>
          Employee
        </b-col>
      </b-row>
      <b-row
        v-for="(item, index) in itemsFiltered()"
        :key="item.name"
        class="py-1 d-flex align-items-center"
        :class="{ 'bg-light': index % 2 }"
      >
        <b-col>
          {{ item.manager }}
        </b-col>
        <b-col>
          {{ item.employee }}
        </b-col>
        <b-col cols="2" class="text-right">
          <b-button size="sm" :to="`/hierarchyrelation/${item.id}`" variant="warning">
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
    filteredFields: ["manager", "employee"],
  }),
  async asyncData({ $axios }) {
    const { data: items } = await $axios.get('api/corehr/managers/')
    return { items: items.map((item) => ({
      id: item.id,
      manager: JSON.parse(item.manager).name,
      employee: JSON.parse(item.employee).name
    })) }
  },
  methods: {
    showModal(item: {
      id: Number,
    }) {
      this.$bvModal.msgBoxConfirm(`Do you want to delete ${item.id}?`, {
        okVariant: 'danger',
        okTitle: 'Confirm',
      })
      .then(() => {
        this.$axios.delete(`api/corehr/managers/${item.id}/`)
        .then(() => {
          this.$router.go(0)
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
