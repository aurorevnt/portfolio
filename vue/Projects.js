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
        <section class="project-cat">
            <div class="project-cat-title">
                <img src="./img/icons/chevron-h3.svg">
                <h3>Créations graphiques</h3>
            </div>
            <article v-for="project in projects_crea">
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
                    link: '',
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
            ],
            projects_crea: [
                {
                    link: '',
                    path: './img/projects/yoto.svg',
                    alt: 'Visu boîte à histoires Yoto',
                    title: 'YOTO',
                    date: 'octobre 2024',
                    subtitle: "Modélisation d'un produit et création de visuels",
                    mission: "Modéliser une boîte à histoires, produit phare de la marque Yoto, et créer des supports de communication",
                    type: "Projet individuel",
                    tools: [
                        './img/projects/logo-tools/blender.svg'
                    ]
                },
                {
                    link: '',
                    path: './img/projects/pulpit.svg',
                    alt: "Visu canettes Pulp'it",
                    title: "PULP'IT",
                    date: 'mars 2024',
                    subtitle: "Conception de packagings",
                    mission: "Créer l'identité d'une canette de soda, le visuel et l'habillage de son étiquette et de sa boîte",
                    type: "Projet individuel",
                    tools: [
                        './img/projects/logo-tools/photoshop.svg',
                        './img/projects/logo-tools/illustrator.svg',
                        './img/projects/logo-tools/indesign.svg'
                    ]
                },
                {
                    link: 'https://www.parcoursmetiers.tv/video/15996-hacking-chez-adaube',
                    path: './img/projects/concoursfilm.svg',
                    alt: "Logo Je filme le métier qui me plait 2024",
                    title: 'WEB',
                    date: "novembre 2023 - janvier 2024",
                    subtitle: 'Participation de ma promotion La Manu au concours "Je filme le métier qui me plaît" édition 2024',
                    mission: "Réaliser une vidéo sur un métier auquel forme ma formation en incluant un préjugé sur celui-ci",
                    type: "Projet d'équipe",
                    tools: [
                        './img/projects/logo-tools/premiere.svg',
                        './img/projects/logo-tools/figma.svg',
                    ]
                }
            ],
        }
    }
}