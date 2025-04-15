
<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <header class="bg-primary shadow fixed top-0 w-full z-20">
      <div class="px-4 py-4 flex justify-between items-center">
        <div class="flex items-center gap-4">
          <img src="@/assets/ministry-logo.svg" alt="Logo du ministère" class="h-12 w-auto" />
          <h1 class="text-2xl font-bold text-white">Dashboard DPAF</h1>
        </div>
        <div class="flex items-center space-x-4">
          <span class="text-white">{{ store.getters.roleDisplay }}</span>
          <button @click="logout" class="text-white hover:text-accent-yellow">
            <i class="fas fa-sign-out-alt"></i> Déconnexion
          </button>
        </div>
      </div>
    </header>

    <div class="flex pt-16">
      <Sidebar class="fixed left-0 top-16 h-[calc(100vh-4rem)] z-10" />
      
      <div class="flex-1 ml-64 p-6">
        <!-- Statistiques -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-aos="fade-up">
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">Total des demandes</h3>
              <i class="fas fa-file-alt text-2xl text-primary"></i>
            </div>
            <p class="text-3xl font-bold text-primary mt-2">24</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">En attente</h3>
              <i class="fas fa-clock text-2xl text-warning"></i>
            </div>
            <p class="text-3xl font-bold text-warning mt-2">8</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">Traités</h3>
              <i class="fas fa-check-circle text-2xl text-success"></i>
            </div>
            <p class="text-3xl font-bold text-success mt-2">16</p>
          </div>
        </div>

        <!-- Liste des demandes -->
        <div class="bg-white shadow rounded-lg" data-aos="fade-up" data-aos-delay="200">
          <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h2 class="text-lg font-medium text-gray-900">Demandes de stages</h2>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stagiaire</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Structure</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="n in 5" :key="n" class="hover:bg-gray-50">
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">Jean Dupont</div>
                    <div class="text-sm text-gray-500">jean.dupont@email.com</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">Direction des Systèmes d'Information</div>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">2024-03-15</td>
                  <td class="px-6 py-4">
                    <span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
                          :class="{
                            'bg-yellow-100 text-yellow-800': n % 3 === 0,
                            'bg-green-100 text-green-800': n % 3 === 1,
                            'bg-red-100 text-red-800': n % 3 === 2
                          }">
                      {{ n % 3 === 0 ? 'En attente' : n % 3 === 1 ? 'Approuvé' : 'Refusé' }}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-sm font-medium space-x-2">
                    <button class="text-primary hover:text-primary-dark" title="Voir les détails">
                      <i class="fas fa-eye"></i>
                    </button>
                    <button class="text-success hover:text-green-700" title="Approuver" @click="approveRequest(n)">
                      <i class="fas fa-check"></i>
                    </button>
                    <button class="text-danger hover:text-red-700" title="Refuser" @click="rejectRequest(n)">
                      <i class="fas fa-times"></i>
                    </button>
                    <button class="text-blue-500 hover:text-blue-700" title="Transférer" @click="transferRequest(n)">
                      <i class="fas fa-share"></i>
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
import Sidebar from '../../components/Sidebar.vue'

export default {
  name: 'DpafDashboard',
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

    const approveRequest = (id) => {
      console.log('Approuver demande:', id)
    }

    const rejectRequest = (id) => {
      console.log('Refuser demande:', id)
    }

    const transferRequest = (id) => {
      console.log('Transférer demande:', id)
    }

    return {
      store,
      logout,
      approveRequest,
      rejectRequest,
      transferRequest
    }
  }
}
</script>
