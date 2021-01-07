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
    getPlaceholder(field) {
      return field.charAt(0).toUpperCase() + field.slice(1).replace("_", " ");
    },
    itemsFiltered() {
      return this.filteredFields.reduce((acc, field) => {
        return this.filters[field] !== '' ? acc.filter(u => String(u[field]).toLowerCase().match(RegExp(String(this.filters[field]).toLowerCase()))) : acc
      }, this.items)
    },
  }
}
