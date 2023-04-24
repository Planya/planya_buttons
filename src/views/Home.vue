<template lang="pug">
  .home
    transition(name="fade")
      Choice(v-if="showChoice")
    Header
    main
      Btns
      Images
    footer.footer
      p <b>18+</b> {{ $t('footer.p') }} <span>{{ $t('footer.span') }}</span>
    .fire
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Images from '../components/images.vue'
import Header from '../components/header.vue'
import Modal18 from '../components/modal18.vue'
import Btns from '../components/btns.vue'
import Choice from '../components/choice.vue'

@Component({
  components: {
    Images,
    Header,
    Modal18,
    Btns,
    Choice
  },
})
export default class Home extends Vue {
  private showChoice = true

  created() {
    this.$bus.$on('openHorny', (mode: string) => {
      this.showChoice = false
      this.$utils.toggleClass('body', 'noscroll')
    })

    this.$bus.$on('openChoice', () => {
      window.scrollTo(0, 0)
      this.showChoice = true
      this.$utils.toggleClass('body', 'noscroll')
    })
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>