<template lang="pug">
  .images
    .images__item(v-for="(image, i) in images" :key="i" @click="openModal(image)")
      v-lazy-image(:src="'/img/'+image.url")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import imagesData from '../data.json'

@Component({
  components: {

  },
})
export default class Images extends Vue {
  private imagesDefault = imagesData
  private images = []

  created() {
    if(this.$route.query.horny && this.$route.query.horny === 'yes'){
      console.log('HORNY')
    } else {
      this.imagesDefault = this.imagesDefault.filter((f: any) => f.private === 'false')
    }

    this.$bus.$on('openHorny', (mode: string) => {
      if(mode === 'loli'){
        this.images = Object.assign([], this.imagesDefault).filter((f: any) => f.side === mode)
      } else{
        this.images = Object.assign([], this.imagesDefault).filter((f: any) => f.side === mode || f.side === 'any')
      }
    })
  }
  
  private openModal(image: any){
    this.$bus.$emit('openModal', image)
    this.$utils.toggleClass('body', 'noscroll')
  }
}
</script>

<style scoped>
.v-lazy-image {
  filter: blur(10px);
  transition: .4s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>