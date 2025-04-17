<template>
  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-3">
        <!-- Logo and title -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <img src="../assets/finance-logo.png" alt="Logo du Ministère" class="h-12 w-auto" />
          </router-link>
        </div>
        
        <!-- Desktop navigation -->
        <nav class="hidden md:flex items-center space-x-6">
          <router-link to="/" class="text-gray-700 hover:text-green-800 transition duration-150">
            Accueil
          </router-link>
          <router-link to="/application" class="text-gray-700 hover:text-green-800 transition duration-150">
            Faire une demande
          </router-link>
          <router-link to="/contact" class="text-gray-700 hover:text-green-800 transition duration-150">
            Contact
          </router-link>
          <template v-if="!isAuthenticated">
            <router-link to="/login" class="btn-outline py-1.5 px-4">
              Se connecter
            </router-link>
            <router-link to="/register" class="btn-primary py-1.5 px-4">
              S'inscrire
            </router-link>
          </template>
          <div v-else class="relative" ref="profileMenu">
            <button 
              @click="toggleProfileMenu" 
              class="flex items-center text-gray-700 hover:text-green-800 focus:outline-none"
            >
              <span class="mr-1">{{ currentUser.name }}</span>
              <i class="fas fa-chevron-down text-xs"></i>
            </button>
            <div 
              v-show="showProfileMenu" 
              class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
            >
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Mon profil
              </a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Mes demandes
              </a>
              <button 
                @click="logout" 
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Se déconnecter
              </button>
            </div>
          </div>
        </nav>
        
        <!-- Mobile menu button -->
        <button @click="toggleMobileMenu" class="md:hidden flex items-center p-2 rounded-md text-gray-600 hover:text-green-800 hover:bg-gray-100 focus:outline-none">
          <span class="sr-only">Open main menu</span>
          <i :class="[mobileMenuOpen ? 'fa-times' : 'fa-bars', 'fas text-xl']"></i>
        </button>
      </div>
      
      <!-- Mobile menu -->
      <div class="md:hidden" v-show="mobileMenuOpen">
        <div class="pt-2 pb-4 space-y-1">
          <router-link to="/" class="block py-2 px-3 text-base font-medium rounded-md hover:bg-gray-50 hover:text-green-800">
            Accueil
          </router-link>
          <router-link to="/application" class="block py-2 px-3 text-base font-medium rounded-md hover:bg-gray-50 hover:text-green-800">
            Faire une demande
          </router-link>
          <router-link to="/contact" class="block py-2 px-3 text-base font-medium rounded-md hover:bg-gray-50 hover:text-green-800">
            Contact
          </router-link>
          <template v-if="!isAuthenticated">
            <router-link to="/login" class="block py-2 px-3 text-base font-medium rounded-md hover:bg-gray-50 hover:text-green-800">
              Se connecter
            </router-link>
            <router-link to="/register" class="block py-2 px-3 text-base font-medium rounded-md hover:bg-gray-50 hover:text-green-800">
              S'inscrire
            </router-link>
          </template>
          <div v-else class="border-t border-gray-200 pt-2">
            <div class="px-3 py-1 text-sm font-medium text-gray-500">
              {{ currentUser.name }}
            </div>
            <a href="#" class="block py-2 px-3 text-base font-medium rounded-md hover:bg-gray-50 hover:text-green-800">
              Mon profil
            </a>
            <a href="#" class="block py-2 px-3 text-base font-medium rounded-md hover:bg-gray-50 hover:text-green-800">
              Mes demandes
            </a>
            <button 
              @click="logout" 
              class="block w-full text-left py-2 px-3 text-base font-medium rounded-md hover:bg-gray-50 hover:text-green-800"
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Header',
  setup() {
    const store = useStore()
    const router = useRouter()
    const mobileMenuOpen = ref(false)
    const showProfileMenu = ref(false)
    const profileMenu = ref(null)
    
    const isAuthenticated = computed(() => store.getters.isAuthenticated)
    const currentUser = computed(() => store.getters.currentUser)
    
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }
    
    const toggleProfileMenu = () => {
      showProfileMenu.value = !showProfileMenu.value
    }
    
    const logout = async () => {
      await store.dispatch('logout')
      showProfileMenu.value = false
      router.push('/login')
    }
    
    const closeProfileMenu = (e) => {
      if (profileMenu.value && !profileMenu.value.contains(e.target)) {
        showProfileMenu.value = false
      }
    }
    
    onMounted(() => {
      document.addEventListener('click', closeProfileMenu)
    })
    
    onBeforeUnmount(() => {
      document.removeEventListener('click', closeProfileMenu)
    })
    
    return {
      mobileMenuOpen,
      toggleMobileMenu,
      showProfileMenu,
      toggleProfileMenu,
      profileMenu,
      isAuthenticated,
      currentUser,
      logout
    }
  }
}
</script>
