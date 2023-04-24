<template lang="pug">
  transition(name="fade")
    .modal18(v-if="isShow")
      .close(@click="isShow = false")
        v-icon(name="x")
      .body <b>{{ $t('alert.sounds') }}</b> {{ $t('alert.arr[0]') }} <b>{{ $t('alert.arr[1]') }}</b>, {{ $t('alert.arr[2]') }}. {{ $t('alert.arr[3]') }}...
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {

  },
})
export default class Modal18 extends Vue {
  private isShow = true
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