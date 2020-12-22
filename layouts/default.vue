<template>
  <div class="d-flex flex-column vh-100 overflow-hidden">
    <div
      class="d-flex py-2 px-4 border-bottom align-items-center justify-content-start"
      :style="{ height: '4rem' }"
    >
      <Logo :style="{ width: '2rem', height: '2rem' }" />
      <span class="lead flex-grow-1 ml-4" v-text="$config.projectTitle" />
      <div>
        <b-dropdown
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template #button-content>
            <b-avatar
              variant="primary"
            />
          </template>
          <b-dropdown-item to="login" >
            <font-awesome-icon icon="sign-out-alt" class="mr-2" />
            Logout
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div
      class="d-flex"
      :style="{ height: 'calc(100% - 4rem)' }"
    >
      <b-nav
        class="pt-2 border-right shadow"
        :style="{ width: '16rem' }"
        vertical
      >
        <b-nav-item
          v-for="item in navigation"
          :to="toPath(item.slug)"
          :key="item.order"
          :active="isActive(item)"
          :disabled="!!item.disabled"
        >
          <div class="d-inline mr-2" :style="{ width: '4rem' }">
            <font-awesome-icon
              :icon="item.icon || 'users'"
              :style="{ opacity: item.icon ? 1 : 0 }"
            />
          </div>
          <span v-text="item.title" />
        </b-nav-item>
      </b-nav>
      <div class="flex-grow-1 overflow-auto">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    navigation: [
      {
        title: 'Dashboard',
        slug: '.',
        icon: 'solar-panel'
      },
      {
        title: 'Users',
        slug: 'users',
        icon: 'users',
      }
    ]
  }),
  mounted () {
    console.log(this.$route)
  },
  methods: {
    isActive (item: { slug: string }): boolean {
      return this.$route.path === this.toPath(item.slug)
    },
    toPath (slug: string): string {
      return slug.replace(/\./g, '/')
    }
  }
})
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
