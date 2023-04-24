declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

interface Vue {
  $directus: any,
  $api: any
}

declare module 'vue-icon'
declare module 'v-lazy-image'
declare module 'vue-ripple-directive'

declare module "*.json" {
  const value: any;
  export default value;
}