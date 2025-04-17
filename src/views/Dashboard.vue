
<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Header fixe -->
    <header class="bg-primary shadow fixed top-0 w-full z-20">
      <div class="px-4 py-4 flex justify-between items-center">
        <div class="flex items-center gap-4">
          <img src="@/assets/finance-logo1.png" alt="Logo du ministère" class="h-12 w-auto" />
          <h1 class="text-2xl font-bold text-white">Tableau de bord administratif</h1>
        </div>
        <div class="flex items-center space-x-4">
          <span class="text-white">{{ store.getters.roleDisplay }}</span>
          <button @click="logout" class="text-white hover:text-accent-yellow">
            <i class="fas fa-sign-out-alt"></i> Déconnexion
          </button>
        </div>
      </div>
    </header>

    <!-- Container principal -->
    <div class="flex pt-16"> <!-- pt-16 pour compenser le header fixe -->
      <Sidebar class="fixed left-0 top-16 h-[calc(100vh-4rem)] z-10" /> <!-- top-16 pour le positionner sous le header -->
      
      <!-- Contenu principal -->
      <div class="flex-1 ml-64 p-6 pb-24"> <!-- pb-24 pour éviter que le contenu ne soit caché par le footer -->
        <!-- Statistiques -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div class="bg-white p-6 rounded-lg shadow transform hover:scale-105 transition-transform duration-300 hover:shadow-lg"
               data-aos="fade-up" data-aos-delay="100">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">Demandes en attente</h3>
              <i class="fas fa-clock text-2xl text-primary"></i>
            </div>
            <p class="text-3xl font-bold text-primary mt-2">12</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow transform hover:scale-105 transition-transform duration-300 hover:shadow-lg"
               data-aos="fade-up" data-aos-delay="200">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">Stages en cours</h3>
              <i class="fas fa-user-graduate text-2xl text-secondary"></i>
            </div>
            <p class="text-3xl font-bold text-secondary mt-2">45</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">Structures actives</h3>
              <i class="fas fa-building text-2xl text-accent-yellow"></i>
            </div>
            <p class="text-3xl font-bold text-accent-yellow mt-2">8</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">Tuteurs actifs</h3>
              <i class="fas fa-user-tie text-2xl text-success"></i>
            </div>
            <p class="text-3xl font-bold text-success mt-2">15</p>
          </div>
        </div>

        <!-- Liste des demandes récentes -->
        <div class="bg-white shadow rounded-lg transform transition-all duration-300 hover:shadow-xl"
             data-aos="fade-up" data-aos-delay="400">
          <div class="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
            <h2 class="text-lg font-medium text-gray-900">Demandes récentes</h2>
            <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
              <i class="fas fa-filter mr-2"></i> Filtrer
            </button>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stagiaire</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Structure</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="n in 5" :key="n" 
                    class="transform transition-all duration-200 hover:bg-gray-50 hover:shadow">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">Jean Dupont</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">Stage académique</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">Direction des Systèmes d'Information</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">2024-03-15</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      En attente
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button class="text-primary hover:text-primary-dark mr-3" title="Voir les détails">
                      <i class="fas fa-eye"></i>
                    </button>
                    <button class="text-success hover:text-green-700 mr-3" title="Approuver">
                      <i class="fas fa-check"></i>
                    </button>
                    <button class="text-danger hover:text-red-700" title="Refuser">
                      <i class="fas fa-times"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Dashboard',
  components: {
    Sidebar
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const logout = async () => {
      await store.dispatch('logout')
      router.push('/login')
    }

    return {
      store,
      logout
    }
  }
}
</script>
