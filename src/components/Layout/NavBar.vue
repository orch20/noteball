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
              ref="ignoreElRef"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div v-on-click-outside="onClickOutsideHandler" id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav }">
       
            <div class="navbar-start">
              <button v-if="storeAuth.user.id" @click="logout" class="button is-small is-info mt-3 ml-3">
                Log Out {{ storeAuth.user.email }}
              </button>
            </div>
            <div class="navbar-end">
                <RouterLink @click="showMobileNav=false" to="/" class="navbar-item" active-class="is-active">
                    Notes
                    </RouterLink>
                <RouterLink @click="showMobileNav=false" to="/stats" class="navbar-item" active-class="is-active">
                    Stats
                </RouterLink>
             </div>
          </div>
        </div>
      
    </nav>
</template>

<script setup>
import {ref} from 'vue';
import { vOnClickOutside } from '@vueuse/components'
import { useStoreAuth } from '@/stores/storeAuth'

const storeAuth = useStoreAuth()

const showMobileNav = ref(false);
const ignoreElRef = ref(null);

const onClickOutsideHandler =  [
  () => {
    showMobileNav.value = false
  },
  { ignore: [ignoreElRef] }
]

const logout = () => {
  storeAuth.logoutUser()
  showMobileNav.value = false    
}

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