export default {
    template: 
    `
    <section id="projects">
        <article v-for="project in projects">
            <a :href="project.link" target="_blank">
                <div class="container-img">
                    <img :src="project.path" :alt="project.alt">
                </div>
                <h3>{{project.title}}</h3>
                <span><em>{{project.date}}</em></span>
                <span><strong>{{project.subtitle}}</strong></span>
                <ul>
                    <li v-for="mission in project.missions">
                    {{mission}}
                    </li>
                </ul>
            </a>
        </article>
    </section>
    `,
    props: ['link', 'path', 'alt', 'title', 'date', 'subtitle', 'mission'],
    data() {
        return {
            projects: [
                {
                    link: '',
                    path: './img/projects/logo-frenchdoudou.png',
                    alt: 'Logo French Doudou',
                    title: 'FRENCH DOUDOU',
                    date: 'février 2024',
                    subtitle: "Projet individuel de conception d'une boutique e-commerce avec WordPress",
                    missions: [
                        'Mission : Créer le site internet de French Doudou, une boutique spécialisée dans la vente de doudous éco-responsables et fabriqués en France',
                        '- WordPress, WooCommerce',
                        '- Conception (wireframe, charte graphique, maquettage) avec Figma',
                        '- Gestion du SEO',
                        '- Revue de projet/présentation client'
                    ]
                },
                {
                    link: '',
                    path: 'img/projects/logo-JFLMQMP.png',
                    alt: 'Logo Je filme le métier qui me plaît',
                    title: 'OPÉRATION WEB',
                    date: 'novembre 2023 - janvier 2024',
                    subtitle: 'Participation de notre promotion au concours "Je filme le métier qui me plaît"',
                    missions: [
                        'Mission : Réaliser une vidéo sur un métier auquel forme notre formation en incluant un préjugé sur celui-ci',
                        '- Brainstorming, scénario, script, séquençage, storyboard avec Figma',
                        '- Montage avec Adobe Premiere Pro'
                    ]
                },
                {
                    link: 'https://auroreo.github.io/ranking_of_films/',
                    path: 'img/projects/logo-ranking.svg',
                    alt: 'Logo Ranking of Films',
                    title: 'RANKING OF FILMS',
                    date: 'janvier 2024', 
                    subtitle: 'Projet de groupe en Vue.js',
                    missions: [
                        'Mission : Développer une application de vote interactive pour des films',
                        "- Utilisation de l'API de TMDb",
                        '- Revue de projet/présentation client'
                    ]
                },
                {
                    link: 'https://auroreo.github.io/shifumi_overwatch/',
                    path: '',
                    alt: 'Logo Shifumi Overwatch',
                    title: 'SHIFUMI - VERSION OVERWATCH',
                    date: 'décembre 2023',
                    subtitle: 'Premier projet personnel en JavaScript',
                    missions: [
                        '',
                    ]
                },
                {
                    link: '',
                    path: './img/projects/logo-vieillescharrettes.svg',
                    alt: 'Logo Les Vieilles Charrettes',
                    title: 'LES VIEILLES CHARRETTES',
                    date: 'novembre 2023',
                    subtitle: 'Premier travail étudiant personnel en CMS',
                    missions: [
                        'Mission : Réaliser le site vitrine d\'un festival sous WordPress',
                        '- WordPress',
                        '- Conception (wireframe, charte graphique, maquettage) avec Figma',
                        '- Gestion du SEO',
                        '- Revue de projet/présentation client'
                    ]
                },
                {
                    link: 'https://auroreo.github.io/projet-bonappetit/',
                    path: './img/projects/logo-bonappetit.svg',
                    alt: 'Logo Bon Appétit',
                    title: 'BON APPÉTIT',
                    date: 'octobre 2023', 
                    subtitle: 'Premier projet d\'études d\'intégration web en groupe',
                    missions: [
                        'Mission : Développer le site internet d\'un restaurant',
                        '- HTML/CSS',
                        '- Collaboration entre les membres via GitHub',
                        '- Organisation du projet avec Trello',
                        '- Revue de projet/présentation client'
                    ]
                }
            ]
        }
    }
}