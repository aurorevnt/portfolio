const { createApp, ref } = Vue;

// Imports des composants
import App from "../App.js";
import Header from "../vue/Header.js";
import Footer from "../vue/Footer.js";
import About from "../vue/About.js";
import Experience from "../vue/Experience.js";
import Skills from "../vue/Skills.js";
import Projects from "../vue/Projects.js";

// Création des routes
const routes = [
    {path: '/', component: About},
    {path: '/experience', component: Experience},
    {path: '/skills', component: Skills},
    {path: '/projects', component: Projects}
]

// Création du router, qui prend nos routes
const router = VueRouter.createRouter({
    history: VueRouter.createMemoryHistory(),
    routes,
});

// Création de l'app dans App.js, qui utilise le router, comprend les composants header et footer et monte l'app
createApp(App)
.use(router)
.component('component-header', Header)
.component('component-footer', Footer)
.mount('#app')