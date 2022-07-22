import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'ticketing system',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,200,0,200'
            }],
        bodyAttrs: {
            class: 'w-full h-full antialiased text-gray-500 dark:text-gray-400 dark:bg-slate-900'
        },
        htmlAttrs: {
            class: 'dark'
        }
    },
    css: ['~/assets/css/app.scss'],
    components: [{path: '~/components/common', extensions: ['vue']}],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },
    analyze: true,
    publicRuntimeConfig: {
        axios: {
            browserBaseURL: process.env.BROWSER_BASE_URL
        }
    },
    privateRuntimeConfig: {
        axios: {
            baseURL: process.env.BASE_URL
        }
    },
})