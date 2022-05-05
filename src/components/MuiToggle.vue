<template>
    <label class="mui-container" :class="classes__">
        <input class="input" type="checkbox" v-if="dataType__ === 'boolean'" @click="toggle()" :name="name" :value="value__" :checked="internalValue__">
        <input class="input" type="hidden" v-else @click="toggle()" :name="name" :value="value__">
        
        <div class="label" v-if="$slots.leftLabel">
            <slot name="leftLabel"></slot>
        </div>
        
        <div class="box">
            <svg class="checkmark" viewBox="0 0 24 24">
                <path fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="blue" d="M3,12l6,6l12,-12"/>
            </svg>
        </div>

        <div class="label" v-if="$slots.rightLabel">
            <slot name="rightLabel"></slot>
        </div>

        <div class="border" v-if="hasBorder__"></div>
    </label>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: [Boolean, String, Number],
                default: false,
            },

            type: {
                type: String,
                default: 'checkbox',
            },

            label: {
                type: String,
                default: '',
            },

            prependValue: {
                type: [Boolean, String, Number],
                default: false,
            },
            
            appendValue: {
                type: [Boolean, String, Number],
                default: true,
            },

            name: {
                type: String,
                default: '',
            },

            noBorder: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                internalValue__: false,
            }
        },

        watch: {
            modelValue: {
                immediate: true,
                handler(newValue) {
                    this.internalValue__ = this.parseValue(newValue)
                },
            },
        },

        computed: {
            value__() {
                return this.internalValue__ ? this.appendValue : this.prependValue
            },

            classes__() {
                return {
                    'active': this.internalValue__,
                }
            },

            type__() {
                return ['checkbox', 'switch'].includes(this.type) ? this.type : 'checkbox'
            },

            dataType__() {
                return typeof this.prependValue !== 'boolean' || typeof this.appendValue !== 'boolean' ? 'string' : 'boolean'
            },

            hasBorder__() {
                return (this.$slots.leftLabel || this.$slots.rightLabel) && !this.noBorder
            },
        },

        methods: {
            parseValue(value) {
                if (value === this.prependValue) return false

                if (value === this.appendValue) return true
                
                if (typeof value === 'boolean') return value

                return false
            },

            toggle() {
                this.internalValue__ = !this.internalValue__
                this.$emit('update:modelValue', this.value__)
            },
        }
    }
</script>

<style lang="sass" scoped>
    .mui-container
        position: relative
        vertical-align: top
        display: inline-flex
        align-items: center
        gap: 0.6875rem
        padding: 0.6875rem
        cursor: pointer

        &.active
            .box
                background: var(--mui-background)
                border-color: var(--mui-background)

                .checkmark
                    color: white

        .box
            height: 1.25rem
            width: 1.25rem
            border: 2px solid #666
            border-radius: 0.25rem
            position: relative
            user-select: none

            .checkmark
                height: 100%
                width: 100%
                position: absolute
                top: 0
                left: 0
                text-align: center
                color: #666

        .input
            display: none
        
        .label
            font-size: 0.875rem
            line-height: 1.125rem
            user-select: none
            flex: 1

        .border
            height: 100%
            width: 100%
            position: absolute
            top: 0
            left: 0
            border-radius: .325rem
            border: var(--input-border)
            pointer-events: none
</style>