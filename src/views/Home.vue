<template lang='pug'>
  div
    h1 Accueil
    ExoDisclaimer
    h2 Introduction
    p Ce test est destiné à un développeur full-stack à majorité frontend
    p Les exercices 1 et 2 sont d'un niveau de complexité simple et vous permettent de dérouler rapidement vos connaissances en développement web et en consommation d'API.
    p L'exercice 3 est plus libre nous permet d'analyser vos connaissances algorithmiques, mais aussi vos connaissances en terme de conception face à un cahier des charges.
    h2 Disclaimer
    p Ce projet est un boilerplate contenant toutes les technologies qui vous serviront à la bonne réalisation du test. Il est dedié à vous faire gagner du temps. Si vous souhaitez changer la stack technique (Par exemple, si vous pensez que vous serez plus à l'aise avec React), libre à vous, mais à vos risques et péril. ;)
    h2 Stack technique utilisée
    ul
      li <strong>Projet VueJS construit avec vue-cli</strong>
      li <strong>VueJS 2.6.X</strong>
      li <strong>VueRouter</strong>
      li <strong>VueX</strong>
      li <strong>axios et vue-axios</strong> https://github.com/imcvampire/vue-axios#readme
      li Mocking d'une micro-api basée sur <strong>Express (NodeJS)</strong>
      li <strong>Pug</strong> en langage de templating. Nous l'utilisons en interne pour simplifier nos développements et améliorer la lisibilité du code. Fermer une balise html ? So 2010 ! Vous pouvez utiliser le HTML dans cet exercice si vous le souhaitez.
      li <strong>Langage: TypeScript</strong>. Si vous n'etes pas familier de TypeScript, sachez que TypeScript est un sucre syntaxique de Javascript, et ne vous bloquera en rien.
      li Styling language : <strong>SCSS/SASS</strong>
      li Styling framework : <strong> Bootstrap</strong>
      li Convention de code
      ul
        li La convention de de nommage <a href='https://standardjs.com/'>https://standardjs.com</a> est appliquée et forcée via <a>ESLint</a>
        li Indentation forcée en espace, une indentation = 2 espaces
    h2 Mode de rendu
    ul
      li Veuillez rendre cet exercice sur un repository git, hebergé sur github (accès privé ou publique). Il serait intéressant que chaque commit soit lié à une sous-partie d'exercice.
      li Une revue de code sera dans tous les cas effectuée avec le responsable technique.
</template>

<script>
import ExoDisclaimer from '../components/ExoDisclaimer.vue'
export default {
  name: 'Home',
  components: {
    ExoDisclaimer
  }
}
</script>
