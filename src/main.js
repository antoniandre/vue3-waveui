import { createApp, reactive } from 'vue'
import App from './App.vue'
// import WaveUI from 'wave-ui/src/wave-ui'

// Customizable: a la carte & tree-shakeable.
// --------------------------------------------------------
import WaveUI from 'wave-ui/src/wave-ui/core'
import { WApp, WButton, WIcon } from 'wave-ui/src/wave-ui/components'

const app = createApp(App)

app.use(WaveUI, {
  components: { WApp, WButton, WIcon }
})
// --------------------------------------------------------

// eslint-disable-next-line no-new
const waveUI = new WaveUI(app, {
  // Some Wave UI options.
})

app
  .provide('wave-ui', reactive(waveUI))
  .mount('#app')
