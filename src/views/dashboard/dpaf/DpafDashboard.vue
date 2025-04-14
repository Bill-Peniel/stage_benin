<template>
  <div>
    <div class="p-6 sm:p-8 border-b border-gray-200">
      <h1 class="text-2xl font-bold text-gray-900">Tableau de bord DPAF</h1>
      <p class="mt-1 text-sm text-gray-600">
        Gérez les demandes de stage et suivez les statistiques.
      </p>
    </div>
    
    <div class="p-6 sm:p-8">
      <!-- Overview Cards -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <!-- Pending Applications Card -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                <i class="fas fa-hourglass-half text-white"></i>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Demandes en attente</dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">12</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3">
            <div class="text-sm">
              <router-link to="/dashboard/dpaf/review" class="font-medium text-primary hover:text-primary-dark">
                Voir toutes les demandes
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Approved Applications Card -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-green-500 rounded-md p-3">
                <i class="fas fa-check-circle text-white"></i>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Demandes approuvées</dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">28</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3">
            <div class="text-sm">
              <router-link to="/dashboard/dpaf/review?status=approved" class="font-medium text-primary hover:text-primary-dark">
                Voir les demandes approuvées
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Rejected Applications Card -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-red-500 rounded-md p-3">
                <i class="fas fa-times-circle text-white"></i>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Demandes rejetées</dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">5</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3">
            <div class="text-sm">
              <router-link to="/dashboard/dpaf/review?status=rejected" class="font-medium text-primary hover:text-primary-dark">
                Voir les demandes rejetées
              </router-link>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Recent Applications -->
      <div class="bg-white shadow rounded-lg mb-8">
        <div class="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Demandes récentes
          </h3>
          <router-link 
            to="/dashboard/dpaf/review" 
            class="text-sm font-medium text-primary hover:text-primary-dark"
          >
            Voir toutes les demandes
          </router-link>
        </div>
        
        <div class="p-6">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Référence
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nom du candidat
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date de soumission
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Département
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <!-- Sample application rows -->
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    APP-1234
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Jean Dupont
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    1 mars 2025
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Comptabilité
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      En attente
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-primary hover:text-primary-dark">Examiner</a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    APP-5678
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Marie Lafleur
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    10 mars 2025
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Informatique
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      En attente
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-primary hover:text-primary-dark">Examiner</a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    APP-9012
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Paul Martin
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    15 mars 2025
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Ressources humaines
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Approuvé
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-primary hover:text-primary-dark">Voir</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <!-- Monthly Stats Chart Placeholder -->
      <div class="bg-white shadow rounded-lg">
        <div class="px-6 py-5 border-b border-gray-200">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Statistiques mensuelles
          </h3>
        </div>
        
        <div class="p-6">
          <div class="h-64 bg-gray-50 flex items-center justify-center rounded">
            <div class="text-center">
              <i class="fas fa-chart-bar text-gray-400 text-4xl mb-3"></i>
              <p class="text-gray-500">Graphique des statistiques mensuelles</p>
              <router-link 
                to="/dashboard/dpaf/statistics" 
                class="mt-2 inline-block text-sm font-medium text-primary hover:text-primary-dark"
              >
                Voir les statistiques détaillées
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DpafDashboard'
}
</script>