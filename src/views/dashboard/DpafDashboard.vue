<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <header class="bg-primary shadow fixed top-0 w-full z-20">
      <div class="px-4 py-4 flex justify-between items-center">
        <div class="flex items-center gap-4">
          <img src="@/assets/ministry-logo.svg" alt="Logo du ministère" class="h-12 w-auto" />
          <h1 class="text-2xl font-bold text-white">Direction du Personnel - Gestion des Stages</h1>
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

      <div class="flex-1 md:ml-64 p-4 md:p-6">
        <!-- Statistiques -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8" data-aos="fade-up">
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">Nouvelles demandes</h3>
              <i class="fas fa-file-alt text-2xl text-primary"></i>
            </div>
            <p class="text-3xl font-bold text-primary mt-2">{{ stats.nouveaux }}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">En cours d'analyse</h3>
              <i class="fas fa-clock text-2xl text-warning"></i>
            </div>
            <p class="text-3xl font-bold text-warning mt-2">{{ stats.enCours }}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">Confirmés</h3>
              <i class="fas fa-check-circle text-2xl text-success"></i>
            </div>
            <p class="text-3xl font-bold text-success mt-2">{{ stats.confirmes }}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">Refusés</h3>
              <i class="fas fa-times-circle text-2xl text-danger"></i>
            </div>
            <p class="text-3xl font-bold text-danger mt-2">{{ stats.refuses }}</p>
          </div>
        </div>

        <!-- Filtres -->
        <div class="bg-white p-4 rounded-lg shadow mb-6">
          <div class="flex flex-wrap gap-4 items-center">
            <div class="flex-1">
              <input type="text" v-model="filters.search" placeholder="Rechercher un stagiaire..." 
                     class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            </div>
            <div class="flex gap-4">
              <select v-model="filters.status" class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Tous les statuts</option>
                <option value="nouveau">Nouveau</option>
                <option value="en_cours">En cours d'analyse</option>
                <option value="confirme">Confirmé</option>
                <option value="refuse">Refusé</option>
              </select>
              <select v-model="filters.structure" class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Toutes les structures</option>
                <option value="dsi">Direction des Systèmes d'Information</option>
                <option value="dgb">Direction Générale du Budget</option>
                <option value="dgid">Direction Générale des Impôts</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Liste des demandes -->
        <div class="bg-white shadow rounded-lg" data-aos="fade-up" data-aos-delay="200">
          <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h2 class="text-lg font-medium text-gray-900">Gestion des demandes de stages</h2>
          </div>
          <div class="overflow-x-auto -mx-4 sm:mx-0">
            <table class="min-w-full divide-y divide-gray-200 table-auto whitespace-nowrap md:whitespace-normal">
              <thead>
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase sm:table-cell">Stagiaire</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase sm:table-cell">Structure Demandée</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase sm:table-cell">Type de Stage</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase sm:table-cell">Date Soumission</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase sm:table-cell">Statut</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase sm:table-cell">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="demande in filteredDemandes" :key="demande.id" class="hover:bg-gray-50">
                  <td class="px-6 py-4 sm:table-cell">
                    <div class="text-sm text-gray-900">{{ demande.nom }}</div>
                    <div class="text-sm text-gray-500">{{ demande.email }}</div>
                  </td>
                  <td class="px-6 py-4 sm:table-cell">
                    <div class="text-sm text-gray-900">{{ demande.structure }}</div>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 sm:table-cell">{{ demande.typeStage }}</td>
                  <td class="px-6 py-4 text-sm text-gray-500 sm:table-cell">{{ formatDate(demande.dateSoumission) }}</td>
                  <td class="px-6 py-4 sm:table-cell">
                    <span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
                          :class="getStatusClass(demande.status)">
                      {{ getStatusLabel(demande.status) }}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-sm font-medium space-x-2 sm:table-cell">
                    <button @click="viewDetails(demande)" class="text-primary hover:text-primary-dark" title="Voir les détails">
                      <i class="fas fa-eye"></i>
                    </button>
                    <button v-if="canConfirm(demande)" @click="confirmDemande(demande)" 
                            class="text-success hover:text-green-700" title="Confirmer">
                      <i class="fas fa-check"></i>
                    </button>
                    <button v-if="canReject(demande)" @click="rejectDemande(demande)" 
                            class="text-danger hover:text-red-700" title="Refuser">
                      <i class="fas fa-times"></i>
                    </button>
                    <button v-if="canTransfer(demande)" @click="transferToStructure(demande)" 
                            class="text-blue-500 hover:text-blue-700" title="Transférer à la structure">
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
import { ref, computed } from 'vue'
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

    // Stats simulées
    const stats = ref({
      nouveaux: 12,
      enCours: 8,
      confirmes: 15,
      refuses: 5
    })

    // Filtres
    const filters = ref({
      search: '',
      status: '',
      structure: ''
    })

    // Données simulées
    const demandes = ref([
      {
        id: 1,
        nom: 'Jean Dupont',
        email: 'jean.dupont@email.com',
        structure: "Direction des Systèmes d'Information",
        typeStage: 'Stage académique',
        dateSoumission: '2024-03-15',
        status: 'nouveau'
      },
      // Ajoutez d'autres demandes simulées ici
    ])

    const filteredDemandes = computed(() => {
      return demandes.value.filter(demande => {
        const matchSearch = !filters.value.search || 
          demande.nom.toLowerCase().includes(filters.value.search.toLowerCase()) ||
          demande.email.toLowerCase().includes(filters.value.search.toLowerCase())

        const matchStatus = !filters.value.status || demande.status === filters.value.status
        const matchStructure = !filters.value.structure || demande.structure === filters.value.structure

        return matchSearch && matchStatus && matchStructure
      })
    })

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString('fr-FR')
    }

    const getStatusClass = (status) => {
      const classes = {
        nouveau: 'bg-blue-100 text-blue-800',
        en_cours: 'bg-yellow-100 text-yellow-800',
        confirme: 'bg-green-100 text-green-800',
        refuse: 'bg-red-100 text-red-800'
      }
      return classes[status] || ''
    }

    const getStatusLabel = (status) => {
      const labels = {
        nouveau: 'Nouveau',
        en_cours: 'En cours',
        confirme: 'Confirmé',
        refuse: 'Refusé'
      }
      return labels[status] || status
    }

    const canConfirm = (demande) => ['nouveau', 'en_cours'].includes(demande.status)
    const canReject = (demande) => ['nouveau', 'en_cours'].includes(demande.status)
    const canTransfer = (demande) => demande.status === 'confirme'

    const viewDetails = (demande) => {
      console.log('Voir détails:', demande.id)
    }

    const confirmDemande = (demande) => {
      console.log('Confirmer demande:', demande.id)
    }

    const rejectDemande = (demande) => {
      console.log('Refuser demande:', demande.id)
    }

    const transferToStructure = (demande) => {
      console.log('Transférer à la structure:', demande.id)
    }

    const logout = async () => {
      await store.dispatch('logout')
      router.push('/login')
    }

    return {
      store,
      stats,
      filters,
      filteredDemandes,
      formatDate,
      getStatusClass,
      getStatusLabel,
      canConfirm,
      canReject,
      canTransfer,
      viewDetails,
      confirmDemande,
      rejectDemande,
      transferToStructure,
      logout
    }
  }
}
</script>