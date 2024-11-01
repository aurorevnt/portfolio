export default {
    template: 
    `
    <section id="projects">
        <h2 class="white-box">Mes projets</h2>
        <p>Depuis le début de mon aventure dans le web design, j'accumule des projets qui évoluent avec moi !</p>
        <div id="legend-projects">
            <div>
                <img src="./img/icons/proj-school.svg" class="icon">
                <span>Scolaire</span>
            </div>
            <div>
                <img src="./img/icons/proj-client.svg" class="icon">
                <span>Client</span>
            </div>
        </div>
        <section class="project-cat">
            <div class="project-cat-title">
                <img src="./img/icons/chevron-h3.svg">
                <h3>Développement web</h3>
            </div>
            <article v-for="project in projects_dev">
                <h4>{{project.title}}</h4>
                <div class="img-date">
                    <a v-if="project.link != ''" :href="project.link" target="_blank">
                        <img :src="project.path" :alt="project.alt" class="img-illu">
                    </a>
                    <img v-else :src="project.path" :alt="project.alt" class="img-illu">
                    <span class="light">{{project.date}}</span>
                </div>
                <ul>
                    <li class="bold">
                        {{project.subtitle}}
                    </li>
                    <li>
                        {{project.mission}}
                    </li>
                    <li>
                        {{project.type}}
                    </li>
                    <li>
                        <img v-for="tool in project.tools" :src="tool">
                    </li>
                    </li>
                </ul>
            </article>
        </section>
        <section class="project-cat">
            <div class="project-cat-title">
                <img src="./img/icons/chevron-h3.svg">
                <h3>Design</h3>
            </div>
            <article v-for="project in projects_design">
                <h4>{{project.title}}</h4>
                <div class="img-date">
                    <a v-if="project.link != ''" :href="project.link" target="_blank">
                        <img :src="project.path" :alt="project.alt" class="img-illu">
                    </a>
                    <img v-else :src="project.path" :alt="project.alt" class="img-illu">
                    <span class="light">{{project.date}}</span>
                </div>
                <ul>
                    <li class="bold">
                        {{project.subtitle}}
                    </li>
                    <li>
                        {{project.mission}}
                    </li>
                    <li>
                        {{project.type}}
                    </li>
                    <li>
                        <img v-for="tool in project.tools" :src="tool">
                    </li>
                    </li>
                </ul>
            </article>
        </section>
    </section>
    `,
    props: ['link', 'path', 'alt', 'title', 'date', 'subtitle', 'mission', 'type', 'tools'],
    data() {
        return {
            projects_dev: [
                {
                    link: '',
                    path: './img/projects/loeuilly.svg',
                    alt: 'Accueil application Base nautique de Loeuilly',
                    title: 'LOEUILLY',
                    date: 'mars 2024',
                    subtitle: "[PIC] Développement d'un site web installable (PWA)",
                    mission: "Développer une application qui permet l'inscription des clients sur des tablettes en physique",
                    type: "Projet d'équipe",
                    tools: [
                        './img/projects/logo-tools/vuejs.svg',
                        './img/projects/logo-tools/js.svg',
                        './img/projects/logo-tools/html.svg',
                        './img/projects/logo-tools/css.svg',
                        './img/projects/logo-tools/figma.svg'
                    ]
                },
                {
                    link: 'https://auroreo.github.io/ranking_of_films/',
                    path: './img/projects/ranking.svg',
                    alt: 'Logo Ranking of Films',
                    title: 'RANKING',
                    date: 'février 2024',
                    subtitle: "Création de Ranking of Films, une application de vote interactive pour des films",
                    mission: "Utiliser l'API de TMDb",
                    type: "Projet de groupe",
                    tools: [
                        './img/projects/logo-tools/vuejs.svg',
                        './img/projects/logo-tools/js.svg',
                        './img/projects/logo-tools/html.svg',
                        './img/projects/logo-tools/css.svg',
                        './img/projects/logo-tools/figma.svg'
                    ]
                },
                {
                    link: 'https://auroreo.github.io/shifumi_overwatch/',
                    path: './img/projects/shifumi.svg',
                    alt: 'Page accueil Shifumi Overwatch',
                    title: 'SHIFUMI',
                    date: 'décembre 2023',
                    subtitle: "Création d'un Shifumi sur la thématique Overwatch",
                    mission: "Imaginer un nouveau concept du jeu Pierre/Feuille/Ciseaux",
                    type: "Projet individuel",
                    tools: [
                        './img/projects/logo-tools/js.svg',
                        './img/projects/logo-tools/html.svg',
                        './img/projects/logo-tools/css.svg',
                        './img/projects/logo-tools/figma.svg'
                    ]
                }
            ],
            projects_design: [
                {
                    link: 'https://www.amienstapissier.fr/',
                    path: './img/projects/bouchendhomme.svg',
                    alt: 'Logo MAISON BOUCHENDHOMME',
                    title: 'MAISON',
                    date: 'mai 2024',
                    subtitle: "[Stage] Refonte du site vitrine et création de contenus",
                    mission: "Créer une nouvelle identité visuelle, mettre à jour les informations en ligne, améliorer le référencement et créer du contenu pour les réseaux sociaux",
                    type: "Projet individuel",
                    tools: [
                        './img/projects/logo-tools/jimdo.svg',
                        './img/projects/logo-tools/css.svg',
                        './img/projects/logo-tools/figma.svg'
                    ]
                },
                {
                    link: '',
                    path: './img/projects/frenchdoudou.svg',
                    alt: 'Logo Ranking of Films',
                    title: 'RANKING',
                    date: 'février 2024',
                    subtitle: "Création de Ranking of Films, une application de vote interactive pour des films",
                    mission: "Utiliser l'API de TMDb",
                    type: "Projet de groupe",
                    tools: [
                        './img/projects/logo-tools/vuejs.svg',
                        './img/projects/logo-tools/js.svg',
                        './img/projects/logo-tools/html.svg',
                        './img/projects/logo-tools/css.svg',
                        './img/projects/logo-tools/figma.svg'
                    ]
                },
                {
                    link: '',
                    path: './img/projects/charrettes.svg',
                    alt: 'Page accueil Shifumi Overwatch',
                    title: 'SHIFUMI',
                    date: 'décembre 2023',
                    subtitle: "Création d'un Shifumi sur la thématique Overwatch",
                    mission: "Imaginer un nouveau concept du jeu Pierre/Feuille/Ciseaux",
                    type: "Projet individuel",
                    tools: [
                        './img/projects/logo-tools/js.svg',
                        './img/projects/logo-tools/html.svg',
                        './img/projects/logo-tools/css.svg',
                        './img/projects/logo-tools/figma.svg'
                    ]
                }
            ]
        }
    }
}