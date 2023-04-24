<template lang="pug">
  .btns
    .btn(v-for="(sound, j) in sounds" :key="'sound-'+j" v-ripple @click.self="play(sound.url, $event)") 
      | {{ sound.name }}
      a(:src="`/audio/${sound.url}`" @click="dwn(`/audio/${sound.url}`)" target="_blank" download)
        v-icon(name="arrow-down")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import soundsData from '../sounds.json'

@Component({
  components: {
  },
})
export default class Btns extends Vue {
  private soundsDefault = soundsData
  private sounds = []
  private audioConfig = {
    volume: 100
  }

  created() {
    this.$bus.$on('openHorny', (mode: string) => {
      this.sounds = Object.assign([], this.soundsDefault).filter((f: any) => f.side === mode)
    })
  }

  private dwn(path: string){
    const a = document.createElement('a')
    a.href = path
    a.download = 'horny'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  private async play(name: string, e: any){
    const audio: any = new Audio()
    const target = e.currentTarget

    audio.src = `/audio/${name}`
    audio.preload = true
    audio.load()
    const node=document.createElement("span")

    audio.oncanplay = () => {
      const time = audio.duration
      node.style.animation= `wave ${time}s linear forwards`
      target.appendChild(node)
      audio.play()
    }

    audio.onended =()=>{
      const childs = target.childNodes
      target.removeChild(childs[2])
    }
  }
}
</script>
