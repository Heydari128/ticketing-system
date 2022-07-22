<template>
  <field v-slot="slotProps">
    <!--    {{slotProps}}-->
    <slot>
      <component v-if="slots.default" :ref="slotProps.ref" :id="slotProps.id" @focus="slotProps.focus"
                 @blur="slotProps.blur" :is="tag"
                 v-on="inputEvents" v-bind="inputAttrs"/>
    </slot>
    <slot name="append"></slot>
    <slot name="prepend"></slot>
  </field>
</template>

<script setup>
import {ref, computed, useSlots, useAttrs} from "vue";
import fieldProps from "./field/FieldProps";

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])
const props = defineProps({
  ...fieldProps,
  modelValue: [String, Number],
  type: {
    type: String,
    default: 'text',
    validator: (value) => [
      'text',
      'textarea',
      'number',
      'email',
      'date',
      'combo'
    ].includes(value.toLowerCase())
  }
})
const slots = useSlots()
console.log('slots', slots)
// const attrs = useAttrs()
const tag = computed(() => props.type === 'textarea' ? 'textarea' : 'input')
const inputEvents = {
  // focus: () => emit('focus'),
  // blur: () => emit('blur'),
  input: ($event) => updateValue($event.target.value)
}
const inputAttrs = computed(() => ({
  type: props.type,
  class: 'w-full !bg-transparent !outline-none',
  autocomplete: 'off',
  style: '',
  value: props.modelValue,
  // id: uid.value,
}))
const updateValue = (value) => {
  switch (props.type) {
    case 'number':
      value = parseInt(value);
      break;
  }
  emit('update:modelValue', value)
}
</script>
<style lang="scss">
._control__outlined {
  border: 1px solid rgba(0, 0, 0, .3);
  background-color: #fff;
  border-radius: 7px;
  transition: .15s all ease-in;
  padding: 4px 8px;

  &._control__focus {
    border-color: rgba(0, 0, 0, .7);
    transition: .15s all ease-in;
  }

  &._control__hover {
    border-color: rgba(0, 0, 0, .6);
    transition: .15s all ease-in;
  }

  html.dark & {
    border-color: rgba(255, 255, 255, .3);
    background-color: #171f33;

    &._control__focus {
      border-color: rgba(255, 255, 255, .7);
    }

    &._control__hover {
      border-color: rgba(255, 255, 255, .6);
    }
  }

  .form-control {
    height: 100%;
  }
}
</style>