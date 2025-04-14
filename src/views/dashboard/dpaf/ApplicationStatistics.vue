<template>
  <div>
    <div class="p-6 sm:p-8 border-b border-gray-200">
      <h1 class="text-2xl font-bold text-gray-900">Statistiques des demandes</h1>
      <p class="mt-1 text-sm text-gray-600">
        Analysez les tendances et statistiques des demandes de stage.
      </p>
    </div>
    
    <div class="p-6 sm:p-8">
      <!-- Chart Filters -->
      <div class="bg-white rounded-lg shadow mb-6">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Période et filtres
          </h3>
        </div>
        
        <div class="p-6">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label for="period-filter" class="block text-sm font-medium text-gray-700">Période</label>
              <select 
                id="period-filter" 
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              >
                <option value="year">Cette année</option>
                <option value="month-6">Derniers 6 mois</option>
                <option value="month-3">Derniers 3 mois</option>
                <option value="month">Ce mois</option>
              </select>
            </div>
            
            <div>
              <label for="chart-type" class="block text-sm font-medium text-gray-700">Type de graphique</label>
              <select 
                id="chart-type" 
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              >
                <option value="bar">Diagramme à barres</option>
                <option value="line">Graphique linéaire</option>
                <option value="pie">Diagramme circulaire</option>
                <option value="area">Graphique de zone</option>
              </select>
            </div>
            
            <div>
              <label for="grouping" class="block text-sm font-medium text-gray-700">Regroupement</label>
              <select 
                id="grouping" 
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              >
                <option value="month">Par mois</option>
                <option value="week">Par semaine</option>
                <option value="department">Par département</option>
                <option value="status">Par statut</option>
              </select>
            </div>
          </div>
          
          <div class="mt-4 flex justify-end space-x-3">
            <button 
              type="button"
              class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <i class="fas fa-file-export mr-2"></i>
              Exporter
            </button>
            
            <button 
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <i class="fas fa-filter mr-2"></i>
              Appliquer
            </button>
          </div>
        </div>
      </div>
      
      <!-- Main Charts Section -->
      <div class="grid grid-cols-1 gap-6">
        <!-- Applications by Month Chart -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <div class="px-6 py-5 border-b border-gray-200">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Demandes par mois
            </h3>
          </div>
          
          <div class="p-6">
            <div class="h-72 bg-gray-50 flex items-center justify-center rounded">
              <div class="text-center">
                <i class="fas fa-chart-bar text-gray-400 text-4xl mb-3"></i>
                <p class="text-gray-500">Graphique des demandes par mois</p>
                <p class="text-xs text-gray-400 mt-2">Ce graphique affichera les demandes de stage reçues par mois</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Applications by Status and Department -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Status Distribution Chart -->
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <div class="px-6 py-5 border-b border-gray-200">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Distribution par statut
              </h3>
            </div>
            
            <div class="p-6">
              <div class="h-72 bg-gray-50 flex items-center justify-center rounded">
                <div class="text-center">
                  <i class="fas fa-chart-pie text-gray-400 text-4xl mb-3"></i>
                  <p class="text-gray-500">Distribution des demandes par statut</p>
                  <p class="text-xs text-gray-400 mt-2">En attente, approuvées, rejetées</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Department Distribution Chart -->
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <div class="px-6 py-5 border-b border-gray-200">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Distribution par département
              </h3>
            </div>
            
            <div class="p-6">
              <div class="h-72 bg-gray-50 flex items-center justify-center rounded">
                <div class="text-center">
                  <i class="fas fa-chart-pie text-gray-400 text-4xl mb-3"></i>
                  <p class="text-gray-500">Distribution des demandes par département</p>
                  <p class="text-xs text-gray-400 mt-2">Comptabilité, Informatique, RH, etc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Key Metrics Cards -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <div class="px-6 py-5 border-b border-gray-200">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Indicateurs clés
            </h3>
          </div>
          
          <div class="p-6">
            <dl class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div class="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                <dt class="text-sm font-medium text-gray-500 truncate">
                  Total des demandes
                </dt>
                <dd class="mt-1 text-3xl font-semibold text-gray-900">
                  45
                </dd>
                <div class="mt-2 flex items-center text-sm text-green-600">
                  <i class="fas fa-arrow-up mr-1.5"></i>
                  <span class="font-medium">12%</span>
                  <span class="ml-1">vs. période précédente</span>
                </div>
              </div>
              
              <div class="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                <dt class="text-sm font-medium text-gray-500 truncate">
                  Taux d'approbation
                </dt>
                <dd class="mt-1 text-3xl font-semibold text-gray-900">
                  62%
                </dd>
                <div class="mt-2 flex items-center text-sm text-green-600">
                  <i class="fas fa-arrow-up mr-1.5"></i>
                  <span class="font-medium">4%</span>
                  <span class="ml-1">vs. période précédente</span>
                </div>
              </div>
              
              <div class="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                <dt class="text-sm font-medium text-gray-500 truncate">
                  Taux de rejet
                </dt>
                <dd class="mt-1 text-3xl font-semibold text-gray-900">
                  11%
                </dd>
                <div class="mt-2 flex items-center text-sm text-red-600">
                  <i class="fas fa-arrow-up mr-1.5"></i>
                  <span class="font-medium">2%</span>
                  <span class="ml-1">vs. période précédente</span>
                </div>
              </div>
              
              <div class="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                <dt class="text-sm font-medium text-gray-500 truncate">
                  Temps moyen de traitement
                </dt>
                <dd class="mt-1 text-3xl font-semibold text-gray-900">
                  3.2
                  <span class="text-lg font-normal">jours</span>
                </dd>
                <div class="mt-2 flex items-center text-sm text-green-600">
                  <i class="fas fa-arrow-down mr-1.5"></i>
                  <span class="font-medium">0.8</span>
                  <span class="ml-1">vs. période précédente</span>
                </div>
              </div>
            </dl>
          </div>
        </div>
        
        <!-- Data Table Summary -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <div class="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Résumé des données
            </h3>
            <button 
              type="button"
              class="text-sm font-medium text-primary hover:text-primary-dark"
            >
              <i class="fas fa-download mr-1"></i>
              Télécharger CSV
            </button>
          </div>
          
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mois
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total des demandes
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Approuvées
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rejetées
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    En attente
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Taux d'acceptation
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Janvier 2025
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    8
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    5
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    1
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    62.5%
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Février 2025
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    12
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    8
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    1
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    3
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    66.7%
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Mars 2025
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    15
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    9
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    3
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    3
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    60.0%
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Avril 2025
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    10
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    6
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    0
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    4
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    60.0%
                  </td>
                </tr>
              </tbody>
              <tfoot class="bg-gray-50">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Total
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    45
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    28
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    5
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    12
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    62.2%
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplicationStatistics'
}
</script>