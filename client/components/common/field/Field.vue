<template>
  <div class="control-field core-comp" v-bind="wrapperAttrs" v-on="wrapperEvents">
    <div class="flex items-center w-full">
      <label v-if="$slots.label || props.label" class="mr-sm col-auto" :style="{minWidth: props.labelWidth}" :for="uid">
        <slot name="label">{{ props.label }}</slot>
      </label>
      <div class="flex-1 flex items-center" style="min-height: 26px">
        <div class="flex-none pr-sm" v-if="slots.prepend">
          <slot name="prepend"/>
        </div>
        <div class="flex flex-1 items-start form-control" :class="controlClasses">
          <div class="flex-none self-center leading-none" v-if="slots.before">
            <slot name="before"/>
          </div>
          <div class="form-control flex-1">
            <slot :ref="inputRef" :focus="()=> focused=true" :blur="()=> focused=false" :focused="focused" :id="uid"/>
          </div>
          <div class="flex-none flex items-center leading-none" v-if="slots.after">
            <slot name="after"/>
          </div>
          <div class="flex-none flex items-center leading-none">
            <font-icon name="close"/>
          </div>
        </div>
        <div class="flex-none pl-sm self-center" v-if="slots.append">
          <slot name="append"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, useSlots, useAttrs} from "vue";
import createUUID from '../../../utils/uuid'
import fieldProps from "./FieldProps";

const emit = defineEmits(['update:modelValue'])
const props = defineProps(fieldProps)
const slots = useSlots()
// const attrs = useAttrs()
// const tag = computed(() => props.type === 'textarea' ? 'textarea' : 'input')
const focused = ref(false)
const hovered = ref(false)
const inputRef = ref(null)
const uid = ref(createUUID())
const wrapperAttrs = ref({
  class: `${props.margin || ''}`
})
const wrapperEvents = {
  mouseover: () => hovered.value = true,
  mouseout: () => hovered.value = false,
}
const controlClasses = computed(() => {
  return ({
    '_control__focus': focused.value,
    '_control__hover': hovered.value,
    '_control__outlined': true
  })
})
// const updateValue = (value) => {
//   switch (props.type) {
//     case 'number':
//       value = parseInt(value);
//       break;
//   }
//   emit('update:modelValue', value)
// }
</script>
<style lang="scss">
.control-field {
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
}
</style>