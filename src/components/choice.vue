<template lang="pug">
  .choice
    .choice-item.choice-item-loli(@click="openHorny('loli')" @mouseleave="stop()" @mouseover="play(1, 'loli2.mp3', $event)")
      .choice-item__title {{ $t('choice.loli') }}
      #bars(:class="{ play: el === 1 }")
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
    .choice-item.choice-item-light(@click="openHorny('light')" @mouseleave="stop()" @mouseover="play(2, 'lie.mp3', $event)")
      .choice-item__title {{ $t('choice.light') }}
      #bars(:class="{ play: el === 2 }")
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
    .choice-item.choice-item-dark(@click="openHorny('dark')" @mouseleave="stop()" @mouseover="play(3, 'dark.mp3', $event)")
      .choice-item__title {{ $t('choice.dark') }}
      #bars(:class="{ play: el === 3 }")
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
        .bar
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

// Loli - 萝莉

@Component({
  components: {
  },
})
export default class Choice extends Vue {
  private isNowPlaying = false
  private audio: any = null
  private el: number | null = null

  private openHorny(mode: string){
    this.$bus.$emit('openHorny', mode)
    this.stop()
  }

  private async play(el: number, name: string, e: any){
    if(!this.isNowPlaying){
      this.el = el
      this.audio = new Audio()

      this.audio.src = `/audio/${name}`
      this.audio.preload = true
      this.audio.load()

      this.audio.oncanplay = () => {
        this.audio ? this.audio.play() : false
        this.isNowPlaying = true
      }

      this.audio.onended =()=>{
        this.isNowPlaying = false
        this.el = null
      }
    }
  }

  private stop(){
    this.isNowPlaying = false
    this.el = null
    if(this.audio){
      this.audio.pause()
    }
    this.audio = null
  }
}
</script>
