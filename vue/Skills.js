export default {
    template:
    `
    <section id="skills">
        <div id=legend>
            <div v-for="legend in legends">
                <img :src="legend.path" :alt="legend.alt">
                <span>{{legend.title}}</span>
            </div>
        </div>
        <section id="skills-items">
            <article id="skills-languages">
                <h3 class="title">LANGAGES</h3>
                <div>
                    <span v-for="language in languages">
                        <a :href="language.link" target="_blank">
                            <img :src="language.path" :alt="language.alt" :class="language.class">
                        </a>
                    </span>
                </div>
            </article>
            <article id="skills-tools">
                <h3 class="title">OUTILS</h3>
                <div>
                    <span v-for="tool in tools">
                        <img :src="tool.path" :alt="tool.alt" :class="tool.class">
                    </span>
                </div>
            </article>
            <article id="skills-frameworks">
                <h3 class="title">FRAMEWORKS</h3>
                <div>
                    <span v-for="framework in frameworks">
                        <a :href="framework.link" target="u_blank">
                            <img :src="framework.path" :alt="framework.alt" :class="framework.class">
                        </a>
                    </span>
                </div>
            </article>
            <article class="skills-db">   
                <h3 class="title">BASE DE DONNÉES</h3>
                <div>
                    <span v-for="database in databases">
                        <img :src="database.path" :alt="database.alt" :class="database.class"
                    </span>
                </div>
            </article>
        </section>
    </section>
    `,
    props: ['path', 'alt', 'title', 'class'],
    data() {
        return {
            legends: [
                {
                    path: './img/skills/icon-beginner.svg',
                    alt: 'Icône niveau débutant',
                    title: 'Débutant'
                },
                {
                    path: './img/skills/icon-mid.svg',
                    alt: 'Icône niveau intermédiaire',
                    title: 'Intermédiaire'
                },
                {
                    path: './img/skills/icon-master.svg',
                    alt: 'Icône niveau maîtrise',
                    title: 'Maîtrise'
                },
            ],
            languages: [
                {
                    path: './img/skills/logo-html.svg',
                    alt: 'Logo HTML',
                    link: 'https://auroreo.github.io/projet-bonappetit/',
                    class: 'small-logo'
                },
                {
                    path: './img/skills/logo-css.svg',
                    alt: 'Logo CSS',
                    class: 'small-logo'
                },
                {
                    path: './img/skills/logo-python.svg',
                    alt: 'Logo Python',
                    class: 'small-logo'
                },
                {
                    path: './img/skills/logo-js.svg',
                    alt: 'Logo JS',
                    link: 'https://auroreo.github.io/shifumi_overwatch/',
                    class: 'small-logo'
                },
                {
                    path: './img/skills/logo-php.svg',
                    alt: 'Logo PHP',
                    class: 'small-logo'
                }
            ],
            tools: [
                {
                    path: './img/skills/logo-figma.svg',
                    alt: 'Logo Figma',
                    class: 'small-logo'
                },
                {
                    path: './img/skills/logo-illustrator.svg',
                    alt: 'Logo Illustrator',
                    class: 'small-logo'
                },
                {
                    path: './img/skills/logo-premierepro.svg',
                    alt: 'Logo Premiere Pro',
                    class: 'small-logo'
                },
                {
                    path: './img/skills/logo-vscode.svg',
                    alt: 'Logo VSCode',
                    class: 'small-logo'
                },
                {
                    path: './img/skills/logo-wordpress.svg',
                    alt: 'Logo WordPress',
                    class: 'small-logo'
                },
                {
                    path: './img/skills/logo-photoshop.svg',
                    alt: 'Logo Photoshop',
                    class: 'small-logo'
                },
                {
                    path: './img/skills/logo-indesign.svg',
                    alt: 'Logo inDesign',
                    class: 'small-logo'
                },
                {
                    path: './img/skills/logo-trello.svg',
                    alt: 'Logo Trello',
                    class: 'small-logo'
                },
                {
                    path: './img/skills/logo-phpmyadmin.svg',
                    alt: 'Logo phMyAdmin',
                    class: 'big-logo'
                },
            ],
            frameworks: [
                {
                    path: './img/skills/logo-vuejs.svg',
                    alt: 'Logo Vue.js',
                    link: 'https://auroreo.github.io/ranking_of_films/',
                    class: 'small-logo'
                },
                {
                    path: './img/skills/logo-bootstrap.svg',
                    alt: 'Logo Bootstrap',
                    class: 'small-logo'
                },
            ],
            databases: [
                {
                    path: './img/skills/logo-mysql.svg',
                    alt: 'Logo MySQL',
                    class: 'big-logo'
                }
            ]
        }
    }
}