<template lang="pug">
  header.header
    a.logo(href="/") #ПланяЭтоТочноНеХорни
    .planya(@click="openChoice()") {{ $t('choice.change') }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {

  },
})
export default class Header extends Vue {
  private openHorny(mode: string){
    this.$bus.$emit('openHorny', mode)
  }

  private openChoice(){
    this.$bus.$emit('openChoice')
  }
}
</script>