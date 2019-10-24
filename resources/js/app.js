
require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
Vue.use(VueRouter);


//vform
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard').default },
    { path: '/profile', component: require('./components/Profile').default },
    { path: '/user', component: require('./components/User').default }
];



Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const router = new VueRouter({
    mode :'history',
    routes // short for `routes: routes`
});



const app = new Vue({
    el: '#app',
    router
});
