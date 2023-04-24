import { Vue } from 'vue-property-decorator'

declare module 'vue/types/vue' {

  interface Vue {
    $utils: any
  }

  interface VueConstructor {
    $utils: any
  }

}
