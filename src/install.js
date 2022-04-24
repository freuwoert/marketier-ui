import MuiInputComponent from "./components/MuiInput.vue"

const MuiInput = {
    install(Vue, options)
    {
        Vue.component("mui-input", MuiInputComponent)
    }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue)
{
    window.Vue.use(MuiInput)
}

export default MuiInput