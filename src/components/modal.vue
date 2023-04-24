<template lang="pug">
  transition(name="fade")
    .modal(v-if="isShow")
      .close(@click="closeModal()")
        v-icon(name="x")
      .body
        v-lazy-image(:src="'/img/'+image.url")
        .body__author(v-if="image.author !== ''") {{ image.author }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {

  },
})
export default class Modal extends Vue {
  private isShow = false
  private image = {
    url: '',
    author: '',
    name: ''
  }

  created() {
    this.$bus.$on('openModal', (data: any) => {
      this.image = data
      this.isShow = true
    })
  }

  private closeModal(){
    this.isShow = false
    this.$utils.toggleClass('body', 'noscroll')
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