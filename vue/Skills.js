export default {
    template:
    `
    <section class="page">
        <div class="top-page">
            <h2 class="white-box">Mes compétences</h2>
            <p>Mon kit de compétences en développement mais aussi en design, affûté par la pratique et nourri par la curiosité !</p>
            <div class=legend>
                <div v-for="legend in legends">
                    <img :src="legend.path" :alt="legend.alt">
                    <span>{{legend.title}}</span>
                </div>
            </div>
        </div>
        <article class="skills-cat">
            <h3>LANGAGES</h3>
            <div class="skills-logos">
                <img v-for="language in languages" :src="language.path" :alt="language.alt" :class="language.class">
            </div>
        </article>
        <article class="skills-cat">
            <h3 class="title">OUTILS</h3>
            <div class="skills-logos">
                <img v-for="tool in tools" :src="tool.path" :alt="tool.alt" :class="tool.class">
            </div>
        </article>
        <article class="skills-cat">
            <h3>FRAMEWORKS</h3>
            <div class="skills-logos">
                <img v-for="framework in frameworks" :src="framework.path" :alt="framework.alt" :class="framework.class">
            </div>
        </article>
        <article class="skills-cat">   
            <h3>BASE DE DONNÉES</h3>
            <div class="skills-logos">
                <img v-for="database in databases" :src="database.path" :alt="database.alt" :class="database.class"
            </div>
        </article>
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
                    path: './img/skills/icon-average.svg',
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
                    path: './img/skills/logos-languages/html.svg',
                    alt: "Logo HTML"
                },
                {
                    path: './img/skills/logos-languages/css.svg',
                    alt: "Logo CSS"
                },
                {
                    path: './img/skills/logos-languages/js.svg',
                    alt: "Logo JavaScript"
                },
                {
                    path: './img/skills/logos-languages/php.svg',
                    alt: "Logo PHP"
                },
                {
                    path: './img/skills/logos-languages/python.svg',
                    alt: "Logo Python"
                },
                {
                    path: './img/skills/logos-languages/java.svg',
                    alt: "Logo Java"
                }

            ],
            tools: [
                {
                    path: './img/skills/logos-tools/figma.svg',
                    alt: "Logo Figma"
                },
                {
                    path: './img/skills/logos-tools/wordpress.svg',
                    alt: "Logo WordPress"
                },
                {
                    path: './img/skills/logos-tools/illustrator.svg',
                    alt: "Logo Illustrator"
                },
                {
                    path: './img/skills/logos-tools/indesign.svg',
                    alt: "Logo inDesign"
                },
                {
                    path: './img/skills/logos-tools/photoshop.svg',
                    alt: "Logo Photoshop"
                },
                {
                    path: './img/skills/logos-tools/blender.svg',
                    alt: 'Logo Blender'
                },
            ],
            frameworks: [
                {
                    path: './img/skills/logos-fw/vuejs.svg',
                    alt: "Logo Vue.js"
                },
                {
                    path: './img/skills/logos-fw/bootstrap.svg',
                    alt: "Logo Bootstrap"
                },
            ],
            databases: [
                {
                    path: './img/skills/logos-db/mysql.svg',
                    alt: "Logo MySQL"
                }
            ]
        }
    }
}