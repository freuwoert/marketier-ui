<template>
    <label class="mui-container" :class="classes__">
        <div class="border" v-if="!noBorder"></div>

        <div class="slot-wrapper slot-left" v-if="hasLeftSlot__">
            <slot v-if="$slots.left" name="left" class="slot left"></slot>
            <div v-else class="icon left">{{iconLeft__}}</div>
        </div>

        <div class="input-wrapper">
            <input ref="input" class="input"
                :pattern="pattern"
                :autocomplete="autocomplete"
                :spellcheck="spellcheck"
                :disabled="disabled"
                :required="required"
                :tabindex="tabindex__"
                :name="name"
                :title="computedTitle__"
                :type="computedType__"
                :min="min__"
                :max="max__"
                :minlength="min__"
                :maxlength="max__"
                v-model="value__"
                :aria-required="required"
                :aria-label="label"
                :aria-disabled="disabled"
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

            <div class="label" v-if="label">{{label}}</div>
            <div class="placeholder" v-if="placeholder">{{placeholder}}</div>
        </div>

        <button type="button" class="slot-wrapper slot-right slot-button" :disabled="disabled" @click="toggleObfuscation" v-if="type__ == 'password'">
            <slot v-if="$slots.right" name="right" class="slot right"></slot>
            <div v-else class="icon right">{{iconRight__}}</div>
        </button>

        <div class="slot-wrapper slot-right" v-else-if="hasRightSlot__">
            <slot v-if="$slots.right" name="right" class="slot right"></slot>
            <div v-else class="icon right">{{iconRight__}}</div>
        </div>

        <div class="bottom-bar" v-if="hasBottomBar__">
            <div class="helper-text" v-if="helperText__">{{helperText__}}</div>
            <div class="max-text" v-if="showMax__">{{value__.length}} / {{max__}}</div>
        </div>
    </label>
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

            title: {
                type: String,
            },

            errorText: {
                type: String,
            },

            iconLeft: {
                type: String,
            },

            iconRight: {
                type: String,
            },

            required: {
                type: Boolean,
                default: false,
            },

            disabled: {
                type: Boolean,
                default: false,
            },

            tabindex: {
                type: [Number, String],
                default: 0,
            },

            pattern: {
                type: String,
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
                score__: 0,
                errors: {},
            }
        },
        
        mounted() {
            this.instantValidation()
        },

        watch: {
            modelValue: {
                immediate: true,
                handler(newValue) {
                    this.value__ = newValue
                    this.instantValidation()
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

            computedTitle__() {
                if (this.title) return this.title
                else if (this.errorText && !this.valid__) return this.errorText
                else return ''
            },

            helperText__() {
                // Prefer error text (if invalid) over helper text over null
                return (!this.valid__ ? this.errorText : null) || this.helper || null
            },

            iconLeft__() {
                return this.iconLeft || null
            },

            iconRight__() {
                return this.iconRight || null
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
                    'left-slot-space': this.hasLeftSlot__,
                    'right-slot-space': this.hasRightSlot__,
                    'disabled': this.disabled,
                    'obfuscated': this.type__ === 'password' && this.obfuscated__,
                }
            },

            focusedOrFilled__() {
                return (this.value__.length > 0 || this.focus__)
            },

            showMax__() {
                if (this.hideMax) return false

                // Can't show max if there's no max set
                if (this.max__ === null) return false

                // Number inputs don't need a character counter
                if (this.type__ === 'number') return false

                return true
            },

            hasBottomBar__() {
                return this.helperText__ || this.showMax__
            },

            hasLeftSlot__() {
                return !!this.$slots.left || !!this.iconLeft__
            },

            hasRightSlot__() {
                return !!this.$slots.right || !!this.iconRight__
            },
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
                    case 'blur': this.focus__ = false; this.onBlurValidation(); break;
                }
            },

            toggleObfuscation() {
                this.obfuscated__ = !this.obfuscated__
            },

            onBlurValidation() {
                if (this.disabled || !this.$refs.input) return

                this.valid__ = this.validate(['badInput', 'patternMismatch', 'rangeOverflow', 'rangeUnderflow', 'stepMismatch', 'tooLong', 'tooShort', 'typeMismatch', 'valueMissing'])

                this.$emit('update:valid', this.valid__)
            },

            instantValidation() {
                if (this.disabled || !this.$refs.input) return

                this.valid__ = this.validate(['badInput', 'patternMismatch', 'tooLong'])

                this.$emit('update:valid', this.valid__)
            },

            validate(watch = []) {
                let validation = this.$refs.input.validity
                let relevantValidation = []

                for (const check of watch)
                {
                    if (validation[check] !== undefined) relevantValidation.push(validation[check])
                }

                return !relevantValidation.some(e => e === true)
            },
        },
    }
</script>

<style lang="sass" scoped>
    *
        box-sizing: border-box

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

        --mui-icon-font: 'Material Icons Round'
        --left-input-padding: 1em
        --right-input-padding: 1em

        height: 3rem
        background: var(--mui-background)
        border-radius: .325em
        position: relative
        display: flex
        align-items: center

        &.focused
            .border
                border-color: var(--mui-focused-border-color)

        &.filled
            .input-wrapper
                .placeholder
                    opacity: 0

        &.focused-or-filled
            .input-wrapper
                .progress-bar
                    transform: scaleY(1)

                .label
                    transform: translate(2px, -5px) scale(0.72)

        &.has-label
            .input-wrapper
                .input
                    padding-top: 1em !important

                .placeholder
                    padding-top: 1em !important

            &:not(.focused)
                .placeholder
                    opacity: 0

        &.bottom-bar-space
            margin-bottom: 1.3em

        &.left-slot-space
            --left-input-padding: 0

        &.right-slot-space
            --right-input-padding: 0

        &.disabled
            background: var(--mui-disabled-background)

            .border
                border-color: var(--mui-disabled-border-color)

        &:not(.obfuscated)
            .slot-button:after
                transform: rotate(45deg) scaleY(1) !important

        &.invalid
            .border
                border-color: var(--mui-invalid-border-color)

            .slot-wrapper
                color: var(--mui-invalid-color)

            .bottom-bar
                .max-text,
                .helper-text
                    color: var(--mui-invalid-color)

        .slot-wrapper
            aspect-ratio: 1
            height: 100%
            flex: none
            display: flex
            align-items: center
            justify-content: center
            color: var(--mui-color-light)

            &.slot-button
                border: none
                background: transparent
                border-radius: inherit
                font-family: inherit
                font-size: inherit
                position: relative

                &:after
                    content: ''
                    width: 0
                    height: 60%
                    position: absolute
                    right: 23%
                    top: 28%
                    transition: all 160ms
                    transform: rotate(45deg) scaleY(0)
                    transform-origin: center top
                    background: var(--mui-background)
                    border-left: 2px solid currentColor
                    border-right: 2px solid var(--mui-background)

            .icon
                font-family: var(--mui-icon-font)
                font-size: 1.25em
                color: inherit
                user-select: none

        .input-wrapper
            display: flex
            flex: 1
            align-items: center
            height: 100%
            width: 100%
            position: relative

            .input
                height: 100%
                width: 100%
                flex: 1
                padding-block: 0
                padding-left: var(--left-input-padding)
                padding-right: var(--right-input-padding)
                border: none
                background: none
                border-radius: inherit
                font-family: inherit
                font-size: inherit
                color: var(--mui-color)

                &:focus
                    outline: none

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
                padding-block: 0
                padding-left: var(--left-input-padding)
                padding-right: var(--right-input-padding)
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
                padding-block: 0
                padding-left: var(--left-input-padding)
                padding-right: var(--right-input-padding)
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
                text-align: left
                pointer-events: none
                transition: all 200ms
                color: var(--mui-color-light)
                transform-origin: top left

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

        .bottom-bar
            height: 1.3em
            width: 100%
            position: absolute
            top: 100%
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
                justify-self: flex-end
</style>