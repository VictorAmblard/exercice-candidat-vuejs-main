<template lang='pug'>
  div
    h1 Exercice#one : Lister les sociétés
    p Find me in @/src/views/One.vue
    ExoDisclaimer
    h2 Exo 1.1 : Afficher du texte
    p Afficher une suite de chiffres de 1 à 100
    p Réponse:
    //- Affichage réponse Exo 1.1 ici %>
    h2 Exo 1.2 : lister les sociétés
    p Ici, lister toutes les sociétés inclues dans la base de données:
    p L'api à utiliser est disponible sur <a href='http://localhost:3000/api/companies'>http://localhost:3000/api/companies</a> (300? dépendant de votre environnement)
    p Exemple attendu:
    ul
      li Société 1
      li ...
      li Société N
    p Autre réponse acceptable en utilisant <u>en utilisant bootstrap</u>:
    img(src='@/assets/simple-array.png')
    br
    p Réponse:
    //- Affichage réponse Exo 1.2 ici
    h2 Exo 1.3 : appliquer un style différent par société
    .alert.alert-info Meme s'il n'est pas obligatoire de s'en servir, le framework CSS bootstrap est utilisable sur ce projet, et les langage SASS/SCSS sont disponibles. Possibilité de gagner du temps avec les classes contextuelles de boostrap?
    p
      | Reprendre le résultat de l'exercice 1.2, et changer la couleur du texte en fonction du nom de la société selon les regles suivantes:
      ul
        li Si la première lettre du nom de la société commence par un s (pas de sensibilité à la casse), afficher le nom de la société en jaune
        li Sinon si le le nombre de lettre dans le nom de la société est pair, afficher le nom de la société en rouge
        li Sinon si le le nombre de lettre dans le nom de la société est impair, afficher le nom de la société en bleu
    p Réponse:
    //- Affichage réponse Exo 1.3 ici
</template>

<script lang="ts">
import Vue from 'vue'
import ExoDisclaimer from '../components/ExoDisclaimer.vue'

export default Vue.extend({
  name: 'App',
  components: {
    ExoDisclaimer
  }
})
</script>

<style lang="scss">
</style>
