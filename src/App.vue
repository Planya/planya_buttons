<template lang="pug">
  #app
    Menu
    Modal18
    Modal
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Modal18 from '@/components/modal18.vue'
import Modal from '@/components/modal.vue'
import Menu from '@/components/smenu.vue'

@Component({
  components: {
    Modal18,
    Modal,
    Menu
  },
})
export default class App extends Vue {
  created() {
    const locale = localStorage.getItem('lang')
    if(locale){
      this.$i18n.locale = locale
      this.$bus.$emit('localeChanged', locale)
    }
    window.onbeforeunload = function () {
      window.scrollTo(0, 0)
    }
    this.$utils.toggleClass('body', 'noscroll')
  }
}
</script>