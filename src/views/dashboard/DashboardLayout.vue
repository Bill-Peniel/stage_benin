<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Top Navigation -->
    <header class="bg-primary text-white shadow-lg z-10">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-3">
          <div class="flex items-center">
            <img src="../../assets/logo.svg" alt="Logo" class="h-12 mr-3">
            <span class="text-xl font-bold">MEF Stages</span>
          </div>
          
          <div class="hidden md:flex space-x-6 items-center">
            <router-link to="/" class="text-white hover:text-primary-light transition">Accueil</router-link>
            <router-link to="/contact" class="text-white hover:text-primary-light transition">Contact</router-link>
            
            <!-- User dropdown -->
            <div class="relative">
              <button 
                @click="isUserMenuOpen = !isUserMenuOpen" 
                class="flex items-center text-sm focus:outline-none"
              >
                <div class="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center mr-2">
                  <span class="font-bold">{{ userInitials }}</span>
                </div>
                <span>{{ user.name }}</span>
                <svg class="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </button>
              
              <div v-if="isUserMenuOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 text-gray-800">
                <router-link 
                  :to="userProfileLink" 
                  class="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  <i class="fas fa-user mr-2"></i> Profil
                </router-link>
                <a 
                  href="#" 
                  @click.prevent="logout" 
                  class="block px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
                >
                  <i class="fas fa-sign-out-alt mr-2"></i> Déconnexion
                </a>
              </div>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden text-white focus:outline-none"
          >
            <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-xl"></i>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden bg-primary-dark py-3 px-4">
        <div class="flex flex-col space-y-3 text-white">
          <router-link to="/" class="py-2 hover:text-primary-light transition">Accueil</router-link>
          <router-link to="/contact" class="py-2 hover:text-primary-light transition">Contact</router-link>
          <div class="py-2">
            <div class="border-t border-primary-light pt-2 mt-2">
              <router-link :to="userProfileLink" class="block py-2 hover:text-primary-light">
                <i class="fas fa-user mr-2"></i> Profil
              </router-link>
              <a href="#" @click.prevent="logout" class="block py-2 text-red-300 hover:text-red-200">
                <i class="fas fa-sign-out-alt mr-2"></i> Déconnexion
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="hidden lg:block w-64 bg-white shadow-lg">
        <div class="p-4 border-b border-gray-200">
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
              <span class="font-bold text-white">{{ userInitials }}</span>
            </div>
            <div>
              <div class="text-gray-800 font-medium">{{ user.name }}</div>
              <div class="text-xs text-gray-500">{{ userRoleLabel }}</div>
            </div>
          </div>
        </div>
        
        <!-- Sidebar navigation -->
        <div class="p-4">
          <p class="text-xs uppercase font-semibold text-gray-500 mb-4">Navigation</p>
          
          <!-- Render navigation based on role -->
          <template v-if="userRole === 'student'">
            <sidebar-link to="/dashboard/intern" icon="fas fa-tachometer-alt">
              Tableau de bord
            </sidebar-link>
            <sidebar-link to="/dashboard/intern/application-check" icon="fas fa-clipboard-check">
              Statut de ma demande
            </sidebar-link>
            <sidebar-link to="/dashboard/intern/profile" icon="fas fa-user-edit">
              Mon profil
            </sidebar-link>
          </template>
          
          <template v-else-if="userRole === 'admin'">
            <sidebar-link to="/dashboard/admin" icon="fas fa-tachometer-alt">
              Tableau de bord
            </sidebar-link>
            <sidebar-link to="/dashboard/admin/structures" icon="fas fa-building">
              Gestion des structures
            </sidebar-link>
            <sidebar-link to="/dashboard/admin/agents" icon="fas fa-users">
              Gestion des agents
            </sidebar-link>
          </template>
          
          <template v-else-if="userRole === 'dpaf'">
            <sidebar-link to="/dashboard/dpaf" icon="fas fa-tachometer-alt">
              Tableau de bord
            </sidebar-link>
            <sidebar-link to="/dashboard/dpaf/review" icon="fas fa-tasks">
              Revue des demandes
            </sidebar-link>
            <sidebar-link to="/dashboard/dpaf/statistics" icon="fas fa-chart-bar">
              Statistiques
            </sidebar-link>
          </template>
          
          <div class="mt-6 pt-4 border-t border-gray-200">
            <p class="text-xs uppercase font-semibold text-gray-500 mb-4">Actions</p>
            <sidebar-link to="/" icon="fas fa-home">
              Retour au site
            </sidebar-link>
            <a 
              href="#" 
              @click.prevent="logout" 
              class="flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
            >
              <i class="fas fa-sign-out-alt w-5 mr-2"></i>
              Déconnexion
            </a>
          </div>
        </div>
      </aside>
      
      <!-- Mobile Sidebar Drawer -->
      <div v-if="isSidebarOpen" class="lg:hidden fixed inset-0 z-20 flex">
        <!-- Overlay -->
        <div 
          @click="isSidebarOpen = false"
          class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
          aria-hidden="true"
        ></div>
        
        <!-- Sidebar -->
        <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl">
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button 
              @click="isSidebarOpen = false"
              class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Fermer le menu</span>
              <i class="fas fa-times text-white"></i>
            </button>
          </div>
          
          <div class="p-4 border-b border-gray-200">
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                <span class="font-bold text-white">{{ userInitials }}</span>
              </div>
              <div>
                <div class="text-gray-800 font-medium">{{ user.name }}</div>
                <div class="text-xs text-gray-500">{{ userRoleLabel }}</div>
              </div>
            </div>
          </div>
          
          <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div class="p-4">
              <p class="text-xs uppercase font-semibold text-gray-500 mb-4">Navigation</p>
              
              <!-- Render navigation based on role - Mobile -->
              <template v-if="userRole === 'student'">
                <sidebar-link to="/dashboard/intern" icon="fas fa-tachometer-alt" @click="isSidebarOpen = false">
                  Tableau de bord
                </sidebar-link>
                <sidebar-link to="/dashboard/intern/application-check" icon="fas fa-clipboard-check" @click="isSidebarOpen = false">
                  Statut de ma demande
                </sidebar-link>
                <sidebar-link to="/dashboard/intern/profile" icon="fas fa-user-edit" @click="isSidebarOpen = false">
                  Mon profil
                </sidebar-link>
              </template>
              
              <template v-else-if="userRole === 'admin'">
                <sidebar-link to="/dashboard/admin" icon="fas fa-tachometer-alt" @click="isSidebarOpen = false">
                  Tableau de bord
                </sidebar-link>
                <sidebar-link to="/dashboard/admin/structures" icon="fas fa-building" @click="isSidebarOpen = false">
                  Gestion des structures
                </sidebar-link>
                <sidebar-link to="/dashboard/admin/agents" icon="fas fa-users" @click="isSidebarOpen = false">
                  Gestion des agents
                </sidebar-link>
              </template>
              
              <template v-else-if="userRole === 'dpaf'">
                <sidebar-link to="/dashboard/dpaf" icon="fas fa-tachometer-alt" @click="isSidebarOpen = false">
                  Tableau de bord
                </sidebar-link>
                <sidebar-link to="/dashboard/dpaf/review" icon="fas fa-tasks" @click="isSidebarOpen = false">
                  Revue des demandes
                </sidebar-link>
                <sidebar-link to="/dashboard/dpaf/statistics" icon="fas fa-chart-bar" @click="isSidebarOpen = false">
                  Statistiques
                </sidebar-link>
              </template>
              
              <div class="mt-6 pt-4 border-t border-gray-200">
                <p class="text-xs uppercase font-semibold text-gray-500 mb-4">Actions</p>
                <sidebar-link to="/" icon="fas fa-home" @click="isSidebarOpen = false">
                  Retour au site
                </sidebar-link>
                <a 
                  href="#" 
                  @click.prevent="() => { logout(); isSidebarOpen = false; }"
                  class="flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
                >
                  <i class="fas fa-sign-out-alt w-5 mr-2"></i>
                  Déconnexion
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Main Content -->
      <main class="flex-1 overflow-y-auto p-4 lg:p-8">
        <div class="container mx-auto">
          <!-- Mobile sidebar toggle button -->
          <div class="lg:hidden mb-4">
            <button 
              @click="isSidebarOpen = true"
              class="flex items-center px-4 py-2 bg-white shadow rounded-md text-primary"
            >
              <i class="fas fa-bars mr-2"></i>
              Menu
            </button>
          </div>
          
          <!-- Breadcrumbs -->
          <div class="flex items-center text-sm text-gray-500 mb-6">
            <router-link to="/" class="hover:text-primary">
              <i class="fas fa-home"></i>
            </router-link>
            <i class="fas fa-chevron-right mx-2 text-xs text-gray-400"></i>
            <router-link to="/dashboard" class="hover:text-primary">
              Tableau de bord
            </router-link>
            <template v-if="$route.name !== 'DashboardHome'">
              <i class="fas fa-chevron-right mx-2 text-xs text-gray-400"></i>
              <span class="text-gray-800">{{ $route.name }}</span>
            </template>
          </div>
          
          <!-- Render page content -->
          <div class="bg-white shadow rounded-lg">
            <router-view></router-view>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'DashboardLayout',
  
  components: {
    SidebarLink: {
      props: {
        to: { type: String, required: true },
        icon: { type: String, required: true }
      },
      template: `
        <router-link :to="to" 
          class="flex items-center px-3 py-2 text-sm text-gray-800 hover:bg-secondary hover:bg-opacity-10 hover:text-secondary rounded-md transition-colors mb-1"
          :class="{ 'bg-secondary bg-opacity-10 text-secondary': isActive }"
          v-bind="$attrs"
        >
          <i :class="icon" class="w-5 mr-2"></i>
          <slot></slot>
        </router-link>
      `,
      computed: {
        isActive() {
          return this.$route.path.startsWith(this.to)
        }
      }
    }
  },
  
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const isUserMenuOpen = ref(false)
    const isMobileMenuOpen = ref(false)
    const isSidebarOpen = ref(false)
    
    const user = computed(() => store.getters.currentUser || {})
    const userRole = computed(() => store.getters.userRole)
    
    const userRoleLabel = computed(() => {
      switch (userRole.value) {
        case 'admin':
          return 'Administrateur'
        case 'dpaf':
          return 'Agent DPAF'
        case 'mentor':
          return 'Maître de stage'
        case 'student':
          return 'Stagiaire'
        default:
          return 'Utilisateur'
      }
    })
    
    const userInitials = computed(() => {
      if (!user.value?.name) return '?'
      
      return user.value.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2)
    })
    
    const userProfileLink = computed(() => {
      if (userRole.value === 'student') {
        return '/dashboard/intern/profile'
      } else if (userRole.value === 'admin') {
        return '/dashboard/admin'
      } else if (userRole.value === 'dpaf') {
        return '/dashboard/dpaf'
      } else {
        return '/dashboard'
      }
    })
    
    const logout = async () => {
      try {
        await store.dispatch('logout')
        router.push('/login')
      } catch (error) {
        console.error('Logout error:', error)
      }
    }
    
    // Close menus when clicking outside
    window.addEventListener('click', (event) => {
      // Check if click is outside the user menu
      if (isUserMenuOpen.value && !event.target.closest('.user-menu')) {
        isUserMenuOpen.value = false
      }
    })
    
    return {
      user,
      userRole,
      userRoleLabel,
      userInitials,
      userProfileLink,
      isUserMenuOpen,
      isMobileMenuOpen,
      isSidebarOpen,
      logout
    }
  }
}
</script>