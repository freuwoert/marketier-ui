<template>
    <div class="mui-container" @click.stop="toggle()">
        <div class="box" :class="{'active': value_}">
            <svg class="checkmark" viewBox="0 0 24 24">
                <path fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="blue" d="M3,12l6,6l12,-12"/>
            </svg>
            <div class="checkmark" v-show="value_"></div>
            <input class="input" type="checkbox" :name="name" :value="value_" :checked="value_">
        </div>

        <div class="label" v-if="$slots.default">
            <slot></slot>
        </div>

        <div class="border" v-if="hasBorder && $slots.default"></div>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'checkbox',
            },

            label: {
                type: String,
                default: '',
            },

            value: {
                type: [Boolean, String, Number],
                default: false,
            },
            
            alternateValue: {
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
                value_: false,
                hasBorder: true,
            }
        },
        mounted() {
            if (typeof this.noBorder !== 'undefined') this.hasBorder = false
            
            if( this.value === true || this.value === false )
            {
                this.value_ = this.value
            }
        },
        watch: {
            value() {
                if( this.value === true || this.value === false )
                {
                    this.value_ = this.value
                }
            }
        },
        methods: {
            toggle() {
                this.value_ = !this.value_
                this.$emit('input', this.value_)
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

        .box
            height: 1.25rem
            width: 1.25rem
            border: 2px solid #666
            border-radius: 0.25rem
            position: relative
            user-select: none
            
            &.active
                background: var(--primary)
                border-color: var(--primary)

                .checkmark
                    color: white

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