import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // css: [
    //     '~/bootstrap/dist/css/bootstrap.min.css',
    //     '~/bootstrap/dist/css/bootstrap.min.css.map',
    //     '~/bootstrap/dist/css/bootstrap.css',
    // ],
    meta: {
        link: [
            {
                rel: 'stylesheet',
                href: "/bootstrap/dist/css/bootstrap.min.css",
            },
            {
                rel: 'stylesheet',
                href: "/bootstrap/dist/css/bootstrap.css",
            }
        ]
    },
    // "type": [
    //     "@pinia/nuxt"
    // ],
    // modules:[
    //     "@pinia/nuxt",
    // ],
    // buildModules: [
    //     "@pinia/nuxt",
    // ],
})
