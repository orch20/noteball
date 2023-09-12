<template>
    <nav
      class="navbar is-success"
      aria-label="main navigation"
      role="navigation"
    >
        <div class="container is-max-desktop px-2">
            <div class="navbar-brand">
            <div class="navbar-item is-size-4 is-family-monospace" >
              Noteball
            </div>

            <a
              @click.prevent="showMobileNav = !showMobileNav"
              :class="{'is-active': showMobileNav}"
              class="navbar-burger"
              aria-expanded="false"
              aria-label="menu"
              data-target="navbarBasicExample"
              role="button"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav }">
       

            <div class="navbar-end">
                <RouterLink to="/" class="navbar-item" active-class="is-active">
                    Notes
                    </RouterLink>
                <RouterLink to="/stats" class="navbar-item" active-class="is-active">
                    Stats
                </RouterLink>
             </div>
          </div>
        </div>
      
    </nav>
</template>

<script setup>
import {ref} from 'vue';

const showMobileNav = ref(false);


</script>

<style>
@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }

}

</style>