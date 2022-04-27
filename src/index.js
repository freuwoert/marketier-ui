import MuiInput from "./components/MuiInput.vue"

export default {
    install(Vue)
    {
        Vue.component("mui-input", MuiInput)
    }
}

// Automatic installation if Vue has been added to the global scope.
// if (typeof window !== 'undefined' && window.Vue)
// {
//     window.Vue.use(MuiInput)
// }