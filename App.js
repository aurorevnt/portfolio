// Fichier js principal qui comprend les composants header et footer ainsi que RouterView
// The RouterView or router-view component is used to display the component or template that corresponds to the current route.

export default {
    template:`
    <header>
        <component-header></component-header>
    </header>
    <main>
        <RouterView />
    </main>
    <footer>
        <component-footer></component-footer>
    </footer>`
}