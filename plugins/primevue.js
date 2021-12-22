import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import Panel from 'primevue/panel'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import PanelMenu from 'primevue/panelmenu'
import ScrollPanel from 'primevue/scrollpanel'
import Card from 'primevue/card'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Menubar', Menubar)
  nuxtApp.vueApp.component('Panel', Panel)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('Toast', Toast)
  nuxtApp.vueApp.component('TabView', TabView)
  nuxtApp.vueApp.component('TabPanel', TabPanel)
  nuxtApp.vueApp.component('Splitter', Splitter)
  nuxtApp.vueApp.component('SplitterPanel', SplitterPanel)
  nuxtApp.vueApp.component('DataTable', DataTable)
  nuxtApp.vueApp.component('Column', Column)
  nuxtApp.vueApp.component('PanelMenu', PanelMenu)
  nuxtApp.vueApp.component('ScrollPanel', ScrollPanel)
  nuxtApp.vueApp.component('Card', Card)
  //other components that you need
})
