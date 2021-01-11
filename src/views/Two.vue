<template lang='pug'>
  div
    h1 Exercice#two : Listes de travail
    p Find me in @/src/views/Two.vue
    ExoDisclaimer
    h2 Exo 2.1 : créer deux Listes
    p Le but est, en ré-utilisant le travail réalisé dans l'exercice précédent, de créer deux listes A et B ressemblant à l'image suivante:
    img(src='@/assets/two-lists-empty.png')
    p La liste A représente toutes les sociétés de la base de données. La liste B représente pour l'instant une liste vide.
    p Réponse:
    //- Affichage réponse Exo 2.1 ici

    h2 Exo 2.2 : Interaction entre les deux listes
    p Ajouter un bouton écrire l'interaction suivante: Quand l'utilisateur clique sur le bouton, le dernier élément de la liste A disparait de celle-ci, et est rajouté dans la liste B.
    p Réponse:
    //- Affichage réponse Exo 2.2 ici

    h2 Exo 2.3 : Utilisation de VueX
    p Si l'utilisation de VueX n'a pas été effectuée dans les exercices précédents, il faut que l'état des deux listes A et B soit enregistré dans le store VueX.
    p VueX est initialisé ici @/src/store/index.ts
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
