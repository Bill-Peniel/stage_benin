
<template>
  <div class="min-h-screen bg-gray-100">
    <!-- En-tête du dashboard -->
    <header class="bg-primary shadow">
      <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-white">Tableau de bord administratif</h1>
        <div class="flex items-center space-x-4">
          <span class="text-white">{{ store.getters.roleDisplay }}</span>
          <button @click="logout" class="text-white hover:text-accent-yellow">
            <i class="fas fa-sign-out-alt"></i> Déconnexion
          </button>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Statistiques -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-lg shadow">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-semibold text-gray-800">Demandes en attente</h3>
            <i class="fas fa-clock text-2xl text-primary"></i>
          </div>
          <p class="text-3xl font-bold text-primary mt-2">12</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-semibold text-gray-800">Stages en cours</h3>
            <i class="fas fa-user-graduate text-2xl text-secondary"></i>
          </div>
          <p class="text-3xl font-bold text-secondary mt-2">45</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-semibold text-gray-800">Stages terminés</h3>
            <i class="fas fa-check-circle text-2xl text-success"></i>
          </div>
          <p class="text-3xl font-bold text-success mt-2">78</p>
        </div>
      </div>

      <!-- Liste des demandes -->
      <div class="bg-white shadow rounded-lg">
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h2 class="text-lg font-medium text-gray-900">Demandes récentes</h2>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stagiaire</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="n in 5" :key="n">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="text-sm font-medium text-gray-900">Jean Dupont</div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">Stage académique</div>
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
                  <button class="text-primary hover:text-primary-dark mr-3">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button class="text-success hover:text-green-700 mr-3">
                    <i class="fas fa-check"></i>
                  </button>
                  <button class="text-danger hover:text-red-700">
                    <i class="fas fa-times"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Dashboard',
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
