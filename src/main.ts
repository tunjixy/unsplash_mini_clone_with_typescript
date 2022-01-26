import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())

import VueSvgInlinePlugin from 'vue-svg-inline-plugin'
app.use(VueSvgInlinePlugin, {
  attributes: {
    add: [
      {
        name: 'tabindex',
        value: '',
      },
    ],
    data: ['src'],
    remove: ['alt'],
  },
})

app.mount('#app')
