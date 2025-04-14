<template>
  <div>
    <!-- Dashboard Header -->
    <div class="p-6 sm:p-8 border-b border-gray-200">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Tableau de bord du stagiaire</h1>
          <p class="mt-1 text-sm text-gray-600">
            Bienvenue {{ user.name }}, consultez votre demande et suivez vos démarches administratives.
          </p>
        </div>
        
        <div class="mt-4 lg:mt-0 flex space-x-3">
          <button 
            @click="refreshData"
            class="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <i class="fas fa-sync-alt mr-2"></i>
            Actualiser
          </button>
          
          <router-link 
            to="/dashboard/intern/application-check"
            class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <i class="fas fa-search mr-2"></i>
            Vérifier ma demande
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- Main Dashboard Content -->
    <div class="p-6 sm:p-8">
      <!-- Status Card -->
      <div class="mb-8">
        <div class="bg-white overflow-hidden shadow-lg rounded-lg">
          <div class="px-6 py-5 sm:px-8 border-b border-gray-200">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              État de votre candidature
            </h3>
          </div>
          
          <div class="px-6 sm:px-8 py-5">
            <div v-if="applicationStatus">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <span class="inline-flex items-center justify-center h-12 w-12 rounded-full" :class="statusIconClass">
                    <i :class="statusIcon"></i>
                  </span>
                </div>
                
                <div class="ml-4">
                  <h4 class="text-lg font-semibold" :class="statusTextClass">
                    {{ statusText }}
                  </h4>
                  <p class="mt-1 text-sm text-gray-600">
                    Dernière mise à jour: {{ formattedDate }}
                  </p>
                  <div class="mt-3">
                    <p class="text-sm text-gray-600">
                      <span class="font-medium">Code de demande:</span> {{ applicationCode }}
                    </p>
                    <template v-if="applicationStatus.status === 'approved'">
                      <div class="mt-2 text-sm text-gray-600">
                        <div class="flex flex-col sm:flex-row sm:gap-x-8 gap-y-2">
                          <p><span class="font-medium">Date de début:</span> {{ formattedStartDate }}</p>
                          <p><span class="font-medium">Date de fin:</span> {{ formattedEndDate }}</p>
                        </div>
                        <p class="mt-2"><span class="font-medium">Service:</span> {{ applicationStatus.details.department }}</p>
                        <p class="mt-2"><span class="font-medium">Maître de stage:</span> {{ applicationStatus.details.mentor }}</p>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
              
              <!-- Progress steps (only for pending and approved) -->
              <div v-if="['pending', 'approved'].includes(applicationStatus.status)" class="mt-8">
                <div class="relative">
                  <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full h-0.5 bg-gray-200"></div>
                  </div>
                  <ol class="relative flex justify-between md:justify-around">
                    <li class="flex items-center">
                      <span class="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                        <i class="fas fa-clipboard-check text-sm"></i>
                        <span class="sr-only">Demande soumise</span>
                      </span>
                      <span class="ml-2 text-xs md:text-sm text-gray-500 absolute -bottom-6 md:static md:ml-3">Demande soumise</span>
                    </li>
                    <li class="flex items-center">
                      <span class="relative flex h-8 w-8 items-center justify-center rounded-full" 
                        :class="applicationStatus.status === 'pending' ? 'bg-gray-300' : 'bg-primary text-white'">
                        <i class="fas fa-clipboard-list text-sm"></i>
                        <span class="sr-only">Demande approuvée</span>
                      </span>
                      <span class="ml-2 text-xs md:text-sm text-gray-500 absolute -bottom-6 md:static md:ml-3">Demande approuvée</span>
                    </li>
                    <li class="flex items-center">
                      <span class="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
                        <i class="fas fa-user-graduate text-sm"></i>
                        <span class="sr-only">Stage en cours</span>
                      </span>
                      <span class="ml-2 text-xs md:text-sm text-gray-500 absolute -bottom-6 md:static md:ml-3">Stage en cours</span>
                    </li>
                    <li class="flex items-center">
                      <span class="relative flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
                        <i class="fas fa-certificate text-sm"></i>
                        <span class="sr-only">Stage terminé</span>
                      </span>
                      <span class="ml-2 text-xs md:text-sm text-gray-500 absolute -bottom-6 md:static md:ml-3">Stage terminé</span>
                    </li>
                  </ol>
                </div>
              </div>
              
              <!-- Actions -->
              <div v-if="applicationStatus.status === 'approved'" class="mt-10 flex flex-col sm:flex-row gap-3">
                <button 
                  class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <i class="fas fa-download mr-2"></i>
                  Télécharger la convention
                </button>
                <button 
                  class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <i class="fas fa-envelope mr-2"></i>
                  Contacter mon maître de stage
                </button>
              </div>
              
              <!-- Rejected message -->
              <div v-if="applicationStatus.status === 'rejected'" class="mt-5 p-4 bg-red-50 rounded-md">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <i class="fas fa-exclamation-circle text-red-400 text-lg"></i>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-red-800">Demande rejetée</h3>
                    <div class="mt-2 text-sm text-red-700">
                      <p>
                        Votre demande de stage a été examinée mais n'a malheureusement pas pu être acceptée.
                        Pour plus d'informations, vous pouvez contacter le service des stages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Application Code Check Form -->
            <div v-else class="bg-gray-50 p-4 rounded-lg">
              <h4 class="text-lg font-medium text-gray-900 mb-3">Vérifier l'état de votre demande</h4>
              <div class="max-w-md">
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input
                    v-model="codeInput"
                    type="text"
                    name="applicationCode"
                    id="applicationCode"
                    class="focus:ring-primary focus:border-primary flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                    placeholder="APP-XXXX"
                  />
                  <button
                    type="button"
                    @click="checkStatus"
                    class="relative inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    :disabled="isLoading"
                  >
                    <i v-if="isLoading" class="fas fa-spinner fa-spin mr-2"></i>
                    <i v-else class="fas fa-search mr-2"></i>
                    Vérifier
                  </button>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Entrez le code de demande fourni lors de votre candidature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Additional Information Cards Grid -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-3">
        <!-- Documents Card -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5 border-b border-gray-200">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-blue-500 rounded-md p-3">
                <i class="fas fa-file-alt text-white"></i>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Documents à fournir</dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">2 Documents</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="px-5 pt-3 pb-4">
            <div class="mt-1 text-sm">
              <ul class="divide-y divide-gray-200">
                <li class="py-2 flex items-center justify-between">
                  <div class="flex items-center">
                    <i class="fas fa-file-pdf text-red-500 mr-2"></i>
                    <span>Convention de stage</span>
                  </div>
                  <span class="text-red-500 font-medium">À soumettre</span>
                </li>
                <li class="py-2 flex items-center justify-between">
                  <div class="flex items-center">
                    <i class="fas fa-file-signature text-yellow-500 mr-2"></i>
                    <span>Attestation d'assurance</span>
                  </div>
                  <span class="text-yellow-500 font-medium">En attente</span>
                </li>
              </ul>
            </div>
            <div class="mt-4">
              <button 
                type="button"
                class="inline-flex items-center px-4 py-2 w-full justify-center border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <i class="fas fa-upload mr-2"></i>
                Soumettre des documents
              </button>
            </div>
          </div>
        </div>
        
        <!-- Upcoming Deadlines Card -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5 border-b border-gray-200">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-green-500 rounded-md p-3">
                <i class="fas fa-calendar-alt text-white"></i>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Prochaines échéances</dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">3 Échéances</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="px-5 pt-3 pb-4">
            <div class="mt-1 text-sm">
              <ul class="divide-y divide-gray-200">
                <li class="py-2 flex items-center justify-between">
                  <div class="flex items-center">
                    <i class="fas fa-file-contract text-purple-500 mr-2"></i>
                    <span>Soumission convention</span>
                  </div>
                  <span class="text-gray-500">15 avril 2025</span>
                </li>
                <li class="py-2 flex items-center justify-between">
                  <div class="flex items-center">
                    <i class="fas fa-hourglass-start text-blue-500 mr-2"></i>
                    <span>Début du stage</span>
                  </div>
                  <span class="text-gray-500">1 mai 2025</span>
                </li>
                <li class="py-2 flex items-center justify-between">
                  <div class="flex items-center">
                    <i class="fas fa-clipboard-list text-orange-500 mr-2"></i>
                    <span>Rapport mi-parcours</span>
                  </div>
                  <span class="text-gray-500">15 juin 2025</span>
                </li>
              </ul>
            </div>
            <div class="mt-4">
              <button 
                type="button"
                class="inline-flex items-center px-4 py-2 w-full justify-center border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <i class="fas fa-calendar-week mr-2"></i>
                Voir le calendrier
              </button>
            </div>
          </div>
        </div>
        
        <!-- Resources Card -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5 border-b border-gray-200">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-purple-500 rounded-md p-3">
                <i class="fas fa-book text-white"></i>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Ressources</dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">5 Documents</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="px-5 pt-3 pb-4">
            <div class="mt-1 text-sm">
              <ul class="divide-y divide-gray-200">
                <li class="py-2 flex items-center">
                  <i class="fas fa-file-pdf text-red-500 mr-2"></i>
                  <a href="#" class="text-primary hover:text-primary-dark">Guide du stagiaire</a>
                </li>
                <li class="py-2 flex items-center">
                  <i class="fas fa-file-word text-blue-500 mr-2"></i>
                  <a href="#" class="text-primary hover:text-primary-dark">Modèle de rapport</a>
                </li>
                <li class="py-2 flex items-center">
                  <i class="fas fa-file-excel text-green-500 mr-2"></i>
                  <a href="#" class="text-primary hover:text-primary-dark">Fiche d'évaluation</a>
                </li>
              </ul>
            </div>
            <div class="mt-4">
              <button 
                type="button"
                class="inline-flex items-center px-4 py-2 w-full justify-center border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <i class="fas fa-download mr-2"></i>
                Toutes les ressources
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'InternDashboard',
  
  setup() {
    const store = useStore()
    
    const user = computed(() => store.getters.currentUser)
    const applicationStatus = computed(() => store.getters.internApplicationStatus)
    const applicationCode = computed(() => store.getters.internApplicationCode)
    
    const codeInput = ref('')
    const isLoading = ref(false)
    
    // Format dates
    const formattedDate = computed(() => {
      if (!applicationStatus.value) return ''
      return new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    })
    
    const formattedStartDate = computed(() => {
      if (!applicationStatus.value?.details?.startDate) return '-'
      return new Date(applicationStatus.value.details.startDate).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    })
    
    const formattedEndDate = computed(() => {
      if (!applicationStatus.value?.details?.endDate) return '-'
      return new Date(applicationStatus.value.details.endDate).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    })
    
    // Status styling
    const statusText = computed(() => {
      if (!applicationStatus.value) return ''
      
      switch (applicationStatus.value.status) {
        case 'pending':
          return 'Demande en cours d\'examen'
        case 'approved':
          return 'Demande approuvée'
        case 'rejected':
          return 'Demande rejetée'
        default:
          return 'Statut inconnu'
      }
    })
    
    const statusIcon = computed(() => {
      if (!applicationStatus.value) return ''
      
      switch (applicationStatus.value.status) {
        case 'pending':
          return 'fas fa-hourglass-half'
        case 'approved':
          return 'fas fa-check-circle'
        case 'rejected':
          return 'fas fa-times-circle'
        default:
          return 'fas fa-question-circle'
      }
    })
    
    const statusIconClass = computed(() => {
      if (!applicationStatus.value) return ''
      
      switch (applicationStatus.value.status) {
        case 'pending':
          return 'bg-yellow-100 text-yellow-600'
        case 'approved':
          return 'bg-green-100 text-green-600'
        case 'rejected':
          return 'bg-red-100 text-red-600'
        default:
          return 'bg-gray-100 text-gray-600'
      }
    })
    
    const statusTextClass = computed(() => {
      if (!applicationStatus.value) return ''
      
      switch (applicationStatus.value.status) {
        case 'pending':
          return 'text-yellow-600'
        case 'approved':
          return 'text-green-600'
        case 'rejected':
          return 'text-red-600'
        default:
          return 'text-gray-600'
      }
    })
    
    // Check application status
    const checkStatus = async () => {
      if (!codeInput.value) return
      
      isLoading.value = true
      
      try {
        await store.dispatch('checkApplicationStatus', codeInput.value)
      } catch (error) {
        console.error('Error checking application status:', error)
      } finally {
        isLoading.value = false
      }
    }
    
    // Refresh dashboard data
    const refreshData = async () => {
      if (!applicationCode.value) return
      
      isLoading.value = true
      
      try {
        await store.dispatch('checkApplicationStatus', applicationCode.value)
      } catch (error) {
        console.error('Error refreshing data:', error)
      } finally {
        isLoading.value = false
      }
    }
    
    // Load application status if we have a code
    onMounted(() => {
      if (applicationCode.value) {
        refreshData()
      }
    })
    
    return {
      user,
      applicationStatus,
      applicationCode,
      codeInput,
      isLoading,
      formattedDate,
      formattedStartDate,
      formattedEndDate,
      statusText,
      statusIcon,
      statusIconClass,
      statusTextClass,
      checkStatus,
      refreshData
    }
  }
}
</script>