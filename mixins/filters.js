export default {
  data: () => ({
    filters: {},
    items: [],
    filteredFields: [],
  }),
  created() {
    this.filters = this.filteredFields.reduce((acc, field) => {
      acc[field] = ""
      return acc
    }, {})
  },
  methods: {
    itemsFiltered() {
      return this.filteredFields.reduce((acc, field) => {
        return this.filters[field] !== '' ? acc.filter(u => u[field].toLowerCase().match(RegExp(this.filters[field].toLowerCase()))) : acc
      }, this.items)
    },
  }
}
