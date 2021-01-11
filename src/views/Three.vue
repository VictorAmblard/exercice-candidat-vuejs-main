<template lang='pug'>
  div
    h1 Exercice#three : Mine sweeper
    p Find me in @/src/views/Three.vue
    ExoDisclaimer
    h2 Exo 3.1 : Création d'un mini-jeu
    p L'objectif de cet exercice est d'analyser votre niveau de conception grace a la réalisation d'un mini-jeu original, inspiré du Démineur, se présentant ainsi:
    img(src='@/assets/mine-sweeper.png')
    h3 Regles du jeu
    ol
      li Derrière chaque case verte se cache soit une valeur entière entre [1,3] augmentant votre score, soit une bombe
      li L'objectif est d'atteindre les 45 points requis sans tomber sur une Bombe.
      li Découvrir une bombe revient à perdre la Partie.
      li Les cases roses sont informatives et n'affichent et aident le joueur dans ses choix. Elles affichent pour chaque ligne/colonne: <strong>somme des valeurs des cases valides / nombre de bombe</strong>
    h3 Regles techniques
    P Votre application doit contenir au minimum les composants suivants (fichiers pré-crées):
    ol
      li <b>BoardGame</b>: Composant englobant le mini-jeu.
      li <b>Grid</b>: Grille de jeu composée des cases cliquables (cases vertes) et des cases informatives (cases roses)
      li <b>Cell</b>: Case cliquable lorsque la partie est toujours en cours. La case a 2 états: caché et decouvert. Lorsqu'elle est découverte, la case dévoile sa valeur.
      li <b>SolverCell</b>: Case contenant: (somme des valeurs de la ligne/colonne) / (nombre de bombes de la ligne/colonne).
      li <b>Score</b>: Score en temps réel.
      li Des librairies utilitaires telles que lodash sont autorisées, de meme que les fonctions utilitaires native de Javascript (ES6).
    p Conception:
    ol
      li La grille de jeu doit etre generée aléatoirement, mais doit etre valide (Pas une map composée uniquement de bombes par exemple ou avec uniquement des valeurs = 1)
      li Si possible, utiliser VueX
      li Ne perdez pas de temps sur le CSS, ce n'est pas un critère d'évaluation
      li Optionnel: Affichez un tableau des meilleurs scores en ré-utilisant le composant réalisé aux exercices précédents
    h2 Exo 3.2 : Création d'un résolveur
    ol
      li L'utilisation de VueX est fortement conseillée
      li Aidez le joueur et indiquez lui (par exemple en colorant une/des case(s) en orange) le/les cases les plus intéressantes à jouer pour se rapprocher de la victoire.
      li Expliquez en commentaire votre choix de modèle dans un fichier modele.txt
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
