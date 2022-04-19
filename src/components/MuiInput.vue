<template>
    <div class="mui-container" :class="classes__">
        
        <input ref="input" class="input"
            :autocomplete="autocomplete"
            :spellcheck="spellcheck"
            :disabled="disabled"
            :tabindex="tabindex__"
            :name="name"
            :type="computedType__"
            v-model="value__"
            @input="input($event.target.value)"
            @focus="inputEvent('focus', $event)"
            @blur="inputEvent('blur', $event)"
            @keydown="inputEvent('keydown', $event)"
            @keyup="inputEvent('keyup', $event)"
            @keypress="inputEvent('keypress', $event)"
            @change="inputEvent('change', $event)"
            @keydown.esc="inputEvent('esc', $event)"
            @keydown.enter="inputEvent('enter', $event)"
            >

        <div class="border" v-if="!noBorder"></div>
        <div class="slot slot-left">
            <slot class="left"></slot>
        </div>
        <div class="slot slot-right">
            <slot class="right"></slot>
        </div>
        
        <div class="label" v-if="label">{{label}}</div>
        <div class="placeholder" v-if="placeholder">{{placeholder}}</div>

        <div class="bottom-bar" v-if="hasBottomBar__">
            <div class="helper-text" v-if="helper">{{helper}}</div>
            <div class="max-text" v-if="showMax__">{{value__.length}} / {{max__}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: [String, Number],
                default: '',
            },

            valid: {
                type: Boolean,
                default: true,
            },

            type: {
                type: String,
                default: 'text',
            },

            name: {
                type: String,
            },

            label: {
                type: String,
            },

            placeholder: {
                type: String,
            },

            helper: {
                type: String,
            },

            disabled: {
                type: Boolean,
                default: false,
            },

            tabindex: {
                type: [Number, String],
                default: 0,
            },

            autocomplete: {
                type: String,
                default: 'off',
            },

            spellcheck: {
                type: Boolean,
                default: false,
            },

            min: {
                type: [Number, String],
                default: null,
            },

            max: {
                type: [Number, String],
                default: null,
            },

            noBorder: {
                type: Boolean,
                default: false,
            },

            hideMax: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                value__: '',
                valid__: true,
                focus__: false,
                obfuscated__: true,
                score: 0,
                errors: {},
            }
        },
        
        mounted() {

        },

        watch: {
            modelValue: {
                immediate: true,
                handler(newValue) {
                    this.value__ = newValue
                },
            },
        },

        computed: {
            type__() {
                if (['text', 'email', 'number', 'url', 'password'].includes(this.type)) return this.type

                return 'text'
            },

            computedType__() {
                if (this.type__ === 'password') return this.obfuscated__ ? 'password' : 'text'

                return this.type__
            },

            tabindex__() {
                return Number(this.tabindex)
            },

            min__() {
                if (!isNaN(Number(this.min)) && this.min !== null) return Number(this.min)

                return null
            },

            max__() {
                if (!isNaN(Number(this.max)) && this.max !== null) return Number(this.max)

                return null
            },

            classes__() {
                return {
                    'focused': this.focus__,
                    'filled': this.value__.length > 0,
                    'focused-or-filled': this.focusedOrFilled__,
                    'invalid': !this.valid__,
                    'has-label': this.label,
                    'bottom-bar-space': this.hasBottomBar__,
                    'disabled': this.disabled,
                }
            },

            showMax__() {
                if (this.hideMax) return false

                if (this.max__ === null) return false

                return true
            },

            hasBottomBar__() {
                return this.helper || this.showMax__
            },

            focusedOrFilled__() {
                return (this.value__.length > 0 || this.focus__)
            }
        },

        methods: {
            input(value) {
                this.$emit('update:modelValue', value)
            },

            inputEvent(type, event) {
                this.$emit(type, event)

                switch (type)
                {
                    case 'focus': this.focus__ = true; break;
                    case 'blur': this.focus__ = false; break;
                }
            },

            toggleObfuscated() {
                this.obfuscated__ = !this.obfuscated__
            },

            validate() {
                this.$emit('update:valid', this.valid__)
            },
        },
    }
</script>

<style lang="sass" scoped>
    .mui-container
        font-size: 1rem
        --mui-background: #fff
        --mui-border-color: #888
        --mui-color: #000
        --mui-color-light: #666

        --mui-disabled-background: #fafafa
        --mui-disabled-border-color: #aaa

        --mui-focused-border-color: #222

        --mui-invalid-color: #f00
        --mui-invalid-border-color: #f00

        height: 3rem
        background: var(--mui-background)
        border-radius: .325em
        position: relative

        *
            box-sizing: border-box

        &.focused
            .border
                border-color: var(--mui-focused-border-color)

        &.filled
            .placeholder
                opacity: 0

        &.focused-or-filled
            .progress-bar
                transform: scaleY(1)

            .label
                transform: translate(4px, -5px) scale(0.72)

        &.has-label
            .input
                padding-top: 1rem !important

            .placeholder
                padding-top: 1rem !important

            &:not(.focused)
                .placeholder
                    opacity: 0

        &.bottom-bar-space
            margin-bottom: 1.3em

        &.disabled
            background: var(--mui-disabled-background)

            .border
                border-color: var(--mui-disabled-border-color)

        &.invalid
            .border
                border-color: var(--mui-invalid-border-color)
            .max-text,
            .helper-text
                color: var(--mui-invalid-color)

        .border
            height: 100%
            width: 100%
            position: absolute
            top: 0
            left: 0
            border-radius: inherit
            border-width: 1px
            border-style: solid
            border-color: var(--mui-border-color)
            pointer-events: none

        .label
            font-size: inherit
            height: 100%
            width: 100%
            line-height: 1.5
            position: absolute
            top: 0
            left: 0
            display: flex
            align-items: center
            padding: 0 1em
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            text-align: left
            pointer-events: none
            transition: all 200ms
            color: var(--mui-color-light)
            transform-origin: top left

        .placeholder
            font-size: inherit
            height: 100%
            width: 100%
            line-height: 1.5
            position: absolute
            top: 0
            left: 0
            display: flex
            align-items: center
            padding: 0 1em
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            text-align: left
            pointer-events: none
            transition: all 200ms
            color: var(--mui-color-light)
            transform-origin: top left

        .bottom-bar
            height: 1.3em
            width: 100%
            position: absolute
            bottom: -1.3em
            left: 0
            gap: 1em
            padding: 0 1em
            display: flex
            align-items: flex-end
            user-select: none
            pointer-events: none

            .helper-text
                font-size: .75em
                color: var(--mui-color)
                line-height: 1.5
                flex: 1
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis

            .max-text
                font-size: .75em
                color: var(--mui-color)
                line-height: 1.5
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis

        .input
            height: 100%
            width: 100%
            padding: 0 1em
            border: none
            background: none
            border-radius: inherit
            font-family: inherit
            font-size: inherit
            color: var(--mui-color)

            &:focus
                outline: none
</style>