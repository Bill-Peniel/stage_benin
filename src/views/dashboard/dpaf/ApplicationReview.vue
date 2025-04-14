<template>
  <div>
    <div class="p-6 sm:p-8 border-b border-gray-200">
      <h1 class="text-2xl font-bold text-gray-900">Révision des demandes</h1>
      <p class="mt-1 text-sm text-gray-600">
        Examinez et traitez les demandes de stage en attente.
      </p>
    </div>
    
    <div class="p-6 sm:p-8">
      <!-- Filters Section -->
      <div class="bg-white rounded-lg shadow mb-6">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Filtres
          </h3>
        </div>
        
        <div class="p-6">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label for="status-filter" class="block text-sm font-medium text-gray-700">Statut</label>
              <select 
                id="status-filter" 
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              >
                <option value="all">Tous les statuts</option>
                <option value="pending">En attente</option>
                <option value="approved">Approuvés</option>
                <option value="rejected">Rejetés</option>
              </select>
            </div>
            
            <div>
              <label for="department-filter" class="block text-sm font-medium text-gray-700">Département</label>
              <select 
                id="department-filter" 
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              >
                <option value="all">Tous les départements</option>
                <option value="accounting">Comptabilité</option>
                <option value="it">Informatique</option>
                <option value="hr">Ressources humaines</option>
                <option value="finance">Finances</option>
                <option value="audit">Audit</option>
              </select>
            </div>
            
            <div>
              <label for="date-filter" class="block text-sm font-medium text-gray-700">Date de soumission</label>
              <select 
                id="date-filter" 
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              >
                <option value="all">Toutes les dates</option>
                <option value="today">Aujourd'hui</option>
                <option value="week">Cette semaine</option>
                <option value="month">Ce mois</option>
                <option value="month-3">Derniers 3 mois</option>
              </select>
            </div>
          </div>
          
          <div class="mt-4 flex justify-end">
            <button 
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <i class="fas fa-filter mr-2"></i>
              Appliquer les filtres
            </button>
          </div>
        </div>
      </div>
      
      <!-- Applications Table -->
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <div class="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Liste des demandes
          </h3>
          <div class="flex space-x-3">
            <div class="relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-search text-gray-400"></i>
              </div>
              <input 
                type="text" 
                name="search" 
                id="search" 
                class="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md" 
                placeholder="Rechercher..."
              />
            </div>
            
            <button 
              type="button"
              class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <i class="fas fa-file-export mr-2"></i>
              Exporter
            </button>
          </div>
        </div>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div class="flex items-center">
                    Référence
                    <button class="ml-1 text-gray-400 hover:text-gray-600">
                      <i class="fas fa-sort"></i>
                    </button>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div class="flex items-center">
                    Nom du candidat
                    <button class="ml-1 text-gray-400 hover:text-gray-600">
                      <i class="fas fa-sort"></i>
                    </button>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div class="flex items-center">
                    Date de soumission
                    <button class="ml-1 text-gray-400 hover:text-gray-600">
                      <i class="fas fa-sort"></i>
                    </button>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div class="flex items-center">
                    Département
                    <button class="ml-1 text-gray-400 hover:text-gray-600">
                      <i class="fas fa-sort"></i>
                    </button>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div class="flex items-center">
                    Durée
                    <button class="ml-1 text-gray-400 hover:text-gray-600">
                      <i class="fas fa-sort"></i>
                    </button>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div class="flex items-center">
                    Statut
                    <button class="ml-1 text-gray-400 hover:text-gray-600">
                      <i class="fas fa-sort"></i>
                    </button>
                  </div>
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <!-- Row 1 -->
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
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  3 mois
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    En attente
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div class="flex justify-end space-x-2">
                    <button class="text-green-600 hover:text-green-900 focus:outline-none">
                      <i class="fas fa-check"></i>
                    </button>
                    <button class="text-red-600 hover:text-red-900 focus:outline-none">
                      <i class="fas fa-times"></i>
                    </button>
                    <button class="text-primary hover:text-primary-dark focus:outline-none">
                      <i class="fas fa-eye"></i>
                    </button>
                  </div>
                </td>
              </tr>
              
              <!-- Row 2 -->
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
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  6 mois
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    En attente
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div class="flex justify-end space-x-2">
                    <button class="text-green-600 hover:text-green-900 focus:outline-none">
                      <i class="fas fa-check"></i>
                    </button>
                    <button class="text-red-600 hover:text-red-900 focus:outline-none">
                      <i class="fas fa-times"></i>
                    </button>
                    <button class="text-primary hover:text-primary-dark focus:outline-none">
                      <i class="fas fa-eye"></i>
                    </button>
                  </div>
                </td>
              </tr>
              
              <!-- Row 3 -->
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
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  4 mois
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Approuvé
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div class="flex justify-end">
                    <button class="text-primary hover:text-primary-dark focus:outline-none">
                      <i class="fas fa-eye"></i>
                    </button>
                  </div>
                </td>
              </tr>
              
              <!-- Row 4 -->
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  APP-3456
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Sophie Tremblay
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  5 mars 2025
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Finances
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2 mois
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Rejeté
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div class="flex justify-end">
                    <button class="text-primary hover:text-primary-dark focus:outline-none">
                      <i class="fas fa-eye"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- Pagination -->
        <div class="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div class="flex-1 flex justify-between sm:hidden">
            <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Précédent
            </button>
            <button class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Suivant
            </button>
          </div>
          <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p class="text-sm text-gray-700">
                Affichage de <span class="font-medium">1</span> à <span class="font-medium">10</span> sur <span class="font-medium">45</span> résultats
              </p>
            </div>
            <div>
              <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span class="sr-only">Précédent</span>
                  <i class="fas fa-chevron-left"></i>
                </button>
                <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </button>
                <button class="relative inline-flex items-center px-4 py-2 border border-primary bg-primary text-sm font-medium text-white">
                  2
                </button>
                <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  5
                </button>
                <button class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span class="sr-only">Suivant</span>
                  <i class="fas fa-chevron-right"></i>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplicationReview'
}
</script>