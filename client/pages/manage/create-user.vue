<template>
  <page-wrapper title="Create User" subtitle="My Test Sample 1">
    <div class="max-w-lg">
      <text-field v-model="userModel.name" label="Fullname:"/>
      <text-field v-model="userModel.domains" label="Domains:"/>
      <text-field v-model="userModel.username" label="Search">
        <template #after>
          <font-icon name="search" />
        </template>
        <template #before>
          <font-icon name="search" />
        </template>
        <template #prepend>
          Prepend
        </template>
        Default Control <select style="min-width: 200px"></select>
      </text-field>
      <text-field v-model="userModel.name" label="Fullname:"/>
      <text-field v-model="userModel.name" label="Fullname:"/>
      <text-field v-model="userModel.name" label="Fullname:"/>
      <text-field type="textarea" v-model="userModel.name" label="Address:" />
    </div>
    {{userModel}}
  </page-wrapper>
</template>
<script setup>
import {ref} from 'vue'

const userModel = ref({
  name: '', // joi.string().required().disallow(' '),
  domains: '', //joi.array().optional(),
  username: '', //joi.string().regex(/^[a-z0-9_.-]+$/i).required().disallow(' ').min(5).max(30),
  password: '', //joi.string().min(8).max(100).required(),
  role: '', //joi.string().valid(...ROLES).default(DEFAULT_ROLE).allow(''),
  address: '', //joi.string().allow(''),
  email: '', //joi.string().regex(/.+@.+\..+/i).lowercase().required(),
  whatsApp: '', //joi.string().allow(''),
  phoneNumber: '', //joi.string().allow(''),
  mobile: '', //joi.string().allow(''),
  settings: '', // joi.object().default(DEFAULT_USER_SETTINGS).optional(),
})
</script>