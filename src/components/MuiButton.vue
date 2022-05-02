<template>
    <button class="mui-container"
        :type="type__"
        :disabled="disabled"
        :area-disabled="disabled"
        :class="classes__"
        @click="click()">

        <div class="icon" v-if="iconLeft">{{iconLeft}}</div>
        <span class="content">
            <slot></slot>
        </span>
        <div class="icon" v-if="iconRight">{{iconRight}}</div>

        <mui-loader type="spinner" class="spinner" color="var(--mui-disabled-color__)" />

        <div class="border" v-if="border"></div>
        <div class="background"></div>
        <div class="overlay"></div>
    </button>
</template>

<script>
    import MuiLoader from './MuiLoader.vue'

    export default {
        props: {
            type: {
                type: String,
                default: 'button',
            },

            variant: {
                type: String,
                default: 'filled',
            },

            color: {
                type: String,
                default: 'primary',
            },

            iconLeft: {
                type: String,
            },

            iconRight: {
                type: String,
            },

            size: {
                type: String,
                default: 'normal',
            },

            border: {
                type: Boolean,
                default: false,
            },

            loading: {
                type: Boolean,
                default: false,
            },

            disabled: {
                type: Boolean,
                default: false,
            },
        },

        computed: {
            type__() {
                return ['submit', 'reset', 'button', 'link'].includes(this.type) ? this.type : 'button'
            },

            DOMType__() {
                return this.type__ === 'link' ? 'a' : 'button'
            },

            variant__() {
                return ['filled', 'contained', 'text'].includes(this.variant) ? this.variant : 'filled'
            },

            classes__() {
                return [
                    `button-type-${this.type__}`,
                    `button-size-${this.size__}`,
                    `button-variant-${this.variant__}`,
                    `button-color-${this.presetColor__}`,
                    {
                        'disabled': this.disabled,
                        'loading': this.loading,
                    }
                ]
            },

            size__() {
                return ['small', 'normal', 'large'].includes(this.size) ? this.size : 'normal'
            },

            presetColor__() {
                return ['primary', 'secondary', 'success', 'info', 'warning', 'error'].includes(this.color) ? this.color : 'custom'
            },
        },

        methods: {
            click() {
                if (this.loading) return false
                this.$emit('click')
            },
        },

        components: {
            MuiLoader,
        },
    }
</script>

<style lang="sass" scoped>
    *
        box-sizing: border-box

    .mui-container
        font-size: 1rem

        --mui-background__: var(--mui-background, #650db4)
        --mui-color__: var(--mui-color, #fff)

        --mui-disabled-background__: var(--mui-disabled-background, #f0f0f0)
        --mui-disabled-color__: var(--mui-disabled-color, #777)

        --mui-icon-font__: var(--mui-icon-font, 'Material Icons')

        display: inline-flex
        align-items: center
        justify-content: center
        gap: 1em
        text-align: center
        letter-spacing: .05em
        font-family: inherit
        font-weight: 500
        border-radius: .325em
        border: none
        cursor: pointer
        user-select: none
        vertical-align: top
        position: relative
        background: transparent
        color: var(--mui-color__)

        &:hover
            .overlay
                opacity: 0.1

        &:focus
            .overlay
                opacity: 0.17



        &.button-color-primary
            --mui-background__: var(--primary, #650db4)
            --mui-color__: var(--primary-contrast, #fff)

        &.button-color-secondary
            --mui-background__: var(--secondary, #22a6b3)
            --mui-color__: var(--secondary-contrast, #fff)

        &.button-color-success
            --mui-background__: var(--success, #4caf50)
            --mui-color__: var(--success-contrast, #fff)

        &.button-color-info
            --mui-background__: var(--info, #2196f3)
            --mui-color__: var(--info-contrast, #fff)

        &.button-color-warning
            --mui-background__: var(--warning, #ff9800)
            --mui-color__: var(--warning-contrast, #fff)

        &.button-color-error
            --mui-background__: var(--error, #f44336)
            --mui-color__: var(--error-contrast, #fff)



        &.button-variant-filled
            .background
                opacity: 1

        &.button-variant-contained
            --mui-color__: var(--mui-background__)

            .background
                opacity: .15

        &.button-variant-text
            --mui-color__: var(--mui-background__)

            .background
                opacity: 0



        &.button-size-small
            height: 2em
            padding: 0 .9em
            gap: .9em

        &.button-size-normal
            height: 2.5em
            padding: 0 1em
            gap: 1em

        &.button-size-large
            height: 3em
            padding: 0 1.75em
            gap: 1.75em



        &.disabled,
        &.loading,
        &:disabled
            --mui-background__: var(--mui-disabled-background__)
            --mui-color__: var(--mui-disabled-color__)
            cursor: initial

            .overlay
                display: none



        &.loading
            .spinner
                opacity: 1

            .icon,
            .content
                opacity: 0



        .overlay,
        .background
            height: 100%
            width: 100%
            position: absolute
            top: 0
            left: 0
            border-radius: inherit
            opacity: 0
            transition: opacity 100ms
            pointer-events: none

            &.overlay
                background: currentcolor

            &.background
                background: var(--mui-background__)

        .content
            font-size: .75rem
            font-weight: inherit
            text-transform: uppercase
            letter-spacing: inherit
            position: relative
            z-index: 1

        .icon
            color: inherit
            font-size: 1em
            letter-spacing: 0
            font-weight: normal
            pointer-events: none
            vertical-align: top
            text-transform: lowercase
            font-family: var(--mui-icon-font__)
            position: relative
            z-index: 1

        .spinner
            position: absolute
            z-index: 1
            opacity: 0
            height: 1.25em
            width: 1.25em
            top: calc(50% - .625em)
            left: calc(50% - .625em)

        .border
            height: 100%
            width: 100%
            position: absolute
            top: 0
            left: 0
            z-index: 2
            border-radius: inherit
            border: 1px solid var(--mui-color__)
            pointer-events: none
</style>