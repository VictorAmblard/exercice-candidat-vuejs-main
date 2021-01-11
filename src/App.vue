<template lang='pug'>
  #app
    .container
      nav.navbar.navbar-expand-lg.navbar-light.bg-light(id='#nav')
        ul.navbar-nav
          li.nav-item
            router-link.nav-link(to="/") Accueil
          li.nav-item
            router-link.nav-link(to="/one") Exo1
          li.nav-item
            router-link.nav-link(to="/two") Exo2
          li.nav-item
            router-link.nav-link(to="/three") Exo3

      router-view
</template>

<style lang="scss">
</style>
