<template>
  <div class="p-6">
    <!-- En-tête du dashboard -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Tableau de bord administrateur</h1>
      <p class="text-gray-600">Vue d'ensemble des demandes de stage</p>
    </div>

    <!-- Cartes de statistiques -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Total des demandes -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600 mb-1">Total des demandes</p>
            <h3 class="text-2xl font-bold text-gray-800">{{ totalDemandes }}</h3>
          </div>
          <div class="bg-blue-100 p-3 rounded-full">
            <i class="fas fa-file-alt text-blue-500"></i>
          </div>
        </div>
        <div class="mt-4">
          <span class="text-green-500 text-sm">
            <i class="fas fa-arrow-up"></i> +{{ nouveauxAujourdhui }} aujourd'hui
          </span>
        </div>
      </div>

      <!-- Demandes acceptées -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600 mb-1">Demandes acceptées</p>
            <h3 class="text-2xl font-bold text-gray-800">{{ demandesAcceptees }}</h3>
          </div>
          <div class="bg-green-100 p-3 rounded-full">
            <i class="fas fa-check-circle text-green-500"></i>
          </div>
        </div>
        <div class="mt-4">
          <span class="text-green-500 text-sm">
            {{ tauxAcceptation }}% taux d'acceptation
          </span>
        </div>
      </div>

      <!-- Demandes refusées -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600 mb-1">Demandes refusées</p>
            <h3 class="text-2xl font-bold text-gray-800">{{ demandesRefusees }}</h3>
          </div>
          <div class="bg-red-100 p-3 rounded-full">
            <i class="fas fa-times-circle text-red-500"></i>
          </div>
        </div>
        <div class="mt-4">
          <span class="text-red-500 text-sm">
            {{ tauxRefus }}% taux de refus
          </span>
        </div>
      </div>

      <!-- Structures actives -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600 mb-1">Structures actives</p>
            <h3 class="text-2xl font-bold text-gray-800">{{ structuresActives }}</h3>
          </div>
          <div class="bg-purple-100 p-3 rounded-full">
            <i class="fas fa-building text-purple-500"></i>
          </div>
        </div>
        <div class="mt-4">
          <span class="text-purple-500 text-sm">
            {{ nouveauxPartenaires }} nouveaux partenaires
          </span>
        </div>
      </div>
    </div>

    <!-- Graphiques -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <!-- Évolution des demandes -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Évolution des demandes</h3>
        <canvas ref="evolutionChart"></canvas>
      </div>

      <!-- Répartition par statut -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Répartition par statut</h3>
        <canvas ref="statutChart"></canvas>
      </div>
    </div>

    <!-- Liste des dernières demandes -->
    <div class="bg-white rounded-lg shadow">
      <div class="p-6 border-b border-gray-200">
        <h3 class="text-lg font-semibold text-gray-800">Dernières demandes</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Étudiant</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Structure</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="demande in dernieresDemandes" :key="demande.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div>
                    <div class="text-sm font-medium text-gray-900">{{ demande.etudiant.nom }}</div>
                    <div class="text-sm text-gray-500">{{ demande.etudiant.email }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ demande.structure.nom }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ formatDate(demande.date) }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="getStatusClass(demande.statut)" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                  {{ demande.statut }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button @click="voirDetails(demande.id)" class="text-primary hover:text-primary-dark mr-3">
                  <i class="fas fa-eye"></i>
                </button>
                <button @click="traiterDemande(demande.id)" class="text-green-600 hover:text-green-900">
                  <i class="fas fa-check"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

export default {
  name: 'AdminDashboard',
  setup() {
    // Références pour les graphiques
    const evolutionChart = ref(null)
    const statutChart = ref(null)

    // Données simulées pour le dashboard
    const totalDemandes = ref(156)
    const nouveauxAujourdhui = ref(12)
    const demandesAcceptees = ref(95)
    const demandesRefusees = ref(16)
    const tauxAcceptation = ref(85)
    const tauxRefus = ref(15)
    const structuresActives = ref(34)
    const nouveauxPartenaires = ref(3)

    // Données simulées pour le tableau
    const dernieresDemandes = ref([
      {
        id: 1,
        etudiant: { nom: 'John Doe', email: 'john@example.com' },
        structure: { nom: 'Enterprise A' },
        date: new Date(),
        statut: 'En attente'
      },
      // Ajouter plus de données simulées ici
    ])

    onMounted(() => {
      // Initialisation du graphique d'évolution
      const evolution = new Chart(evolutionChart.value, {
        type: 'line',
        data: {
          labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
          datasets: [{
            label: 'Demandes de stage',
            data: [30, 45, 60, 70, 85, 100],
            borderColor: '#3B82F6',
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      })

      // Initialisation du graphique de répartition
      const statut = new Chart(statutChart.value, {
        type: 'doughnut',
        data: {
          labels: ['Acceptées', 'Refusées', 'En attente'],
          datasets: [{
            data: [95, 16, 45],
            backgroundColor: ['#34D399', '#EF4444', '#FCD34D']
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      })
    })

    // Méthodes utilitaires
    const formatDate = (date) => {
      return new Intl.DateTimeFormat('fr-FR').format(date)
    }

    const getStatusClass = (statut) => {
      const classes = {
        'En attente': 'bg-yellow-100 text-yellow-800',
        'Acceptée': 'bg-green-100 text-green-800',
        'Refusée': 'bg-red-100 text-red-800'
      }
      return classes[statut] || 'bg-gray-100 text-gray-800'
    }

    const voirDetails = (id) => {
      // Implémenter la navigation vers les détails
      console.log('Voir détails:', id)
    }

    const traiterDemande = (id) => {
      // Implémenter le traitement de la demande
      console.log('Traiter demande:', id)
    }

    return {
      totalDemandes,
      nouveauxAujourdhui,
      demandesAcceptees,
      demandesRefusees,
      tauxAcceptation,
      tauxRefus,
      structuresActives,
      nouveauxPartenaires,
      dernieresDemandes,
      evolutionChart,
      statutChart,
      formatDate,
      getStatusClass,
      voirDetails,
      traiterDemande
    }
  }
}
</script> 