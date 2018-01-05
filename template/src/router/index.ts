import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/pages/FrontPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'frontpage',
            component: FrontPage
        },
        {
            path: '*',
            redirect: { name: '' }
        }
    ]
});
