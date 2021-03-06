import MuiInput from "./components/MuiInput.vue"
import MuiButton from "./components/MuiButton.vue"
import MuiLoader from "./components/MuiLoader.vue"
import MuiToggle from "./components/MuiToggle.vue"
// import MuiColorpicker from "./components/MuiColorpicker.vue"
// import MuiDatepicker from "./components/MuiDatepicker.vue"

export default {
    install(Vue)
    {
        Vue.component("mui-input", MuiInput)
        Vue.component("mui-button", MuiButton)
        Vue.component("mui-loader", MuiLoader)
        Vue.component("mui-toggle", MuiToggle)
        // Vue.component("mui-colorpicker", MuiColorpicker)
        // Vue.component("mui-datepicker", MuiDatepicker)
    }
}