// Header comprend les RouterLink qui correspondent aux routes

export default {
    template: `
    <nav>
        <div>
            <img src="./img/logo_av.svg" alt="Logo Aurore Vernet Portfolio">
            <span class="white-box">
                <img src="./img/icons/note.svg" class="icon">
                <p>En recherche d'un <span class="bold">stage de 3-4 mois en développement web</span> (à partir du 28 avril 2025)</p>
            </span>
        </div>
       <ul>
           <li>
               <RouterLink to="/">À propos de moi</RouterLink>
           </li>
           <li>
               <RouterLink to="/experience">Parcours</RouterLink>
           </li>
           <li>
               <RouterLink to="/skills">Compétences</RouterLink>
           </li>
           <li>
               <RouterLink to="/projects">Projets</RouterLink>
           </li>
       </ul>
   </nav>
   `,
   props: ['slug', 'title'],
}