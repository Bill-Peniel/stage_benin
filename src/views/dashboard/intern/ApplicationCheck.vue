<template>
  <div>
    <div class="p-6 sm:p-8 border-b border-gray-200">
      <h1 class="text-2xl font-bold text-gray-900">Vérification de demande</h1>
      <p class="mt-1 text-sm text-gray-600">
        Vérifiez l'état de votre demande de stage avec votre code de référence.
      </p>
    </div>
    
    <div class="p-6 sm:p-8">
      <!-- Application Code Input Section -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="px-6 py-5 sm:px-8 border-b border-gray-200">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Entrez votre code de demande
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            Ce code vous a été fourni lors de la soumission de votre demande de stage.
          </p>
        </div>
        
        <div class="px-6 py-5 sm:p-8 bg-gray-50 space-y-6">
          <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label for="applicationCode" class="block text-sm font-medium text-gray-700">Code de référence</label>
              <div class="mt-1">
                <input 
                  type="text" 
                  name="applicationCode" 
                  id="applicationCode" 
                  v-model="codeInput"
                  class="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Exemple: APP-1234"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">Le code commence généralement par "APP-" suivi de chiffres</p>
            </div>
          </div>
          
          <div class="flex justify-end">
            <button
              type="button"
              @click="checkStatus"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              :disabled="isLoading || !codeInput"
            >
              <i v-if="isLoading" class="fas fa-spinner fa-spin mr-2"></i>
              <i v-else class="fas fa-search mr-2"></i>
              Vérifier la demande
            </button>
          </div>
        </div>
      </div>
      
      <!-- Application Status Result -->
      <div v-if="showResults" class="mt-8">
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <div class="px-6 py-5 sm:px-8 border-b border-gray-200 flex justify-between items-center">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Résultat de la recherche
            </h3>
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium" :class="statusBadgeClass">
              {{ statusBadgeText }}
            </span>
          </div>
          
          <div class="px-6 py-5 sm:p-8">
            <div v-if="error" class="rounded-md bg-red-50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <i class="fas fa-exclamation-circle text-red-400"></i>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-red-800">
                    {{ error }}
                  </p>
                </div>
              </div>
            </div>
            
            <div v-else-if="applicationStatus">
              <!-- Status Timeline -->
              <div class="relative pb-8">
                <span class="absolute top-0 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                
                <!-- Timeline Item: Submitted -->
                <div class="relative flex items-start space-x-3">
                  <div>
                    <div class="relative px-1">
                      <div class="h-8 w-8 bg-primary rounded-full flex items-center justify-center ring-8 ring-white">
                        <i class="fas fa-clipboard-check text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div class="min-w-0 flex-1 py-1.5">
                    <div class="text-sm text-gray-500">
                      <div class="font-medium text-gray-900">Demande soumise</div>
                      <span>Le {{ formattedSubmissionDate }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Timeline Item: Processing -->
                <div class="relative flex items-start space-x-3 mt-6">
                  <div>
                    <div class="relative px-1">
                      <div class="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center ring-8 ring-white">
                        <i class="fas fa-cogs text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div class="min-w-0 flex-1 py-1.5">
                    <div class="text-sm text-gray-500">
                      <div class="font-medium text-gray-900">Traitement par la DPAF</div>
                      <span>En cours d'analyse par notre équipe</span>
                    </div>
                  </div>
                </div>
                
                <!-- Timeline Item: Decision -->
                <div class="relative flex items-start space-x-3 mt-6">
                  <div>
                    <div class="relative px-1">
                      <div class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white" :class="decisionIconClass">
                        <i :class="decisionIcon" class="text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div class="min-w-0 flex-1 py-1.5">
                    <div class="text-sm text-gray-500">
                      <div class="font-medium text-gray-900">{{ decisionText }}</div>
                      <span v-if="applicationStatus.status === 'pending'">Décision en attente</span>
                      <span v-else-if="applicationStatus.status === 'approved'">Le {{ formattedApprovalDate }}</span>
                      <span v-else>Le {{ formattedDecisionDate }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Timeline Item: Assignment (only for approved) -->
                <div v-if="applicationStatus.status === 'approved'" class="relative flex items-start space-x-3 mt-6">
                  <div>
                    <div class="relative px-1">
                      <div class="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center ring-8 ring-white">
                        <i class="fas fa-user-tie text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div class="min-w-0 flex-1 py-1.5">
                    <div class="text-sm text-gray-500">
                      <div class="font-medium text-gray-900">Assignation du maître de stage</div>
                      <span>{{ applicationStatus.details.mentor }}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Additional Information -->
              <div class="mt-8 border-t border-gray-200 pt-8">
                <h4 class="text-base font-medium text-gray-900">Détails de la demande</h4>
                
                <dl class="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                  <div>
                    <dt class="text-sm font-medium text-gray-500">Code de référence</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ applicationStatus.code }}</dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-gray-500">Statut</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ statusText }}</dd>
                  </div>
                  <div v-if="applicationStatus.status === 'approved'">
                    <dt class="text-sm font-medium text-gray-500">Département</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ applicationStatus.details.department }}</dd>
                  </div>
                  <div v-if="applicationStatus.status === 'approved'">
                    <dt class="text-sm font-medium text-gray-500">Maître de stage</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ applicationStatus.details.mentor }}</dd>
                  </div>
                  <div v-if="applicationStatus.status === 'approved'">
                    <dt class="text-sm font-medium text-gray-500">Date de début</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ formattedStartDate }}</dd>
                  </div>
                  <div v-if="applicationStatus.status === 'approved'">
                    <dt class="text-sm font-medium text-gray-500">Date de fin</dt>
                    <dd class="mt-1 text-sm text-gray-900">{{ formattedEndDate }}</dd>
                  </div>
                </dl>
              </div>
              
              <!-- Action Buttons -->
              <div class="mt-8 flex justify-between items-center">
                <button 
                  type="button"
                  @click="refreshStatus"
                  class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <i class="fas fa-sync-alt mr-2"></i>
                  Actualiser
                </button>
                
                <div class="flex space-x-3">
                  <button 
                    v-if="applicationStatus.status === 'approved'"
                    type="button"
                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <i class="fas fa-download mr-2"></i>
                    Convention de stage
                  </button>
                  
                  <button 
                    type="button"
                    @click="saveToProfile"
                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                  >
                    <i class="fas fa-save mr-2"></i>
                    Sauvegarder
                  </button>
                </div>
              </div>
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
  name: 'ApplicationCheck',
  
  setup() {
    const store = useStore()
    
    const codeInput = ref('')
    const isLoading = ref(false)
    const error = ref('')
    const showResults = ref(false)
    
    const applicationStatus = computed(() => store.getters.internApplicationStatus)
    const savedApplicationCode = computed(() => store.getters.internApplicationCode)
    
    // Format dates
    const formattedSubmissionDate = computed(() => {
      // For this demo, just show a fixed date since we don't have that data
      return new Date('2025-03-25').toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    })
    
    const formattedApprovalDate = computed(() => {
      if (!applicationStatus.value?.details?.approvalDate) return '-'
      return new Date(applicationStatus.value.details.approvalDate).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    })
    
    const formattedDecisionDate = computed(() => {
      // Use approval date if available, otherwise use a fallback
      if (applicationStatus.value?.details?.approvalDate) {
        return formattedApprovalDate.value
      }
      return new Date('2025-04-01').toLocaleDateString('fr-FR', {
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
          return 'En attente de décision'
        case 'approved':
          return 'Demande approuvée'
        case 'rejected':
          return 'Demande rejetée'
        default:
          return 'Statut inconnu'
      }
    })
    
    const statusBadgeText = computed(() => {
      if (!applicationStatus.value) return ''
      
      switch (applicationStatus.value.status) {
        case 'pending':
          return 'En traitement'
        case 'approved':
          return 'Approuvée'
        case 'rejected':
          return 'Rejetée'
        default:
          return 'Inconnu'
      }
    })
    
    const statusBadgeClass = computed(() => {
      if (!applicationStatus.value) return ''
      
      switch (applicationStatus.value.status) {
        case 'pending':
          return 'bg-yellow-100 text-yellow-800'
        case 'approved':
          return 'bg-green-100 text-green-800'
        case 'rejected':
          return 'bg-red-100 text-red-800'
        default:
          return 'bg-gray-100 text-gray-800'
      }
    })
    
    const decisionText = computed(() => {
      if (!applicationStatus.value) return 'Décision'
      
      switch (applicationStatus.value.status) {
        case 'pending':
          return 'Décision en attente'
        case 'approved':
          return 'Demande approuvée'
        case 'rejected':
          return 'Demande rejetée'
        default:
          return 'Décision'
      }
    })
    
    const decisionIcon = computed(() => {
      if (!applicationStatus.value) return 'fas fa-question'
      
      switch (applicationStatus.value.status) {
        case 'pending':
          return 'fas fa-hourglass-half'
        case 'approved':
          return 'fas fa-check'
        case 'rejected':
          return 'fas fa-times'
        default:
          return 'fas fa-question'
      }
    })
    
    const decisionIconClass = computed(() => {
      if (!applicationStatus.value) return 'bg-gray-400'
      
      switch (applicationStatus.value.status) {
        case 'pending':
          return 'bg-yellow-500'
        case 'approved':
          return 'bg-green-500'
        case 'rejected':
          return 'bg-red-500'
        default:
          return 'bg-gray-400'
      }
    })
    
    // Check application status
    const checkStatus = async () => {
      if (!codeInput.value) return
      
      isLoading.value = true
      error.value = ''
      
      try {
        await store.dispatch('checkApplicationStatus', codeInput.value)
        showResults.value = true
      } catch (error) {
        error.value = 'Impossible de trouver une demande avec ce code. Veuillez vérifier et réessayer.'
      } finally {
        isLoading.value = false
      }
    }
    
    // Refresh status
    const refreshStatus = async () => {
      if (!applicationStatus.value?.code) return
      
      isLoading.value = true
      error.value = ''
      
      try {
        await store.dispatch('checkApplicationStatus', applicationStatus.value.code)
      } catch (error) {
        error.value = 'Erreur lors de l\'actualisation des données. Veuillez réessayer.'
      } finally {
        isLoading.value = false
      }
    }
    
    // Save application code to profile
    const saveToProfile = () => {
      if (applicationStatus.value?.code) {
        store.commit('setApplicationCode', applicationStatus.value.code)
        // Show a success message or notification here
      }
    }
    
    // Load application status if we have a saved code
    onMounted(() => {
      if (savedApplicationCode.value) {
        codeInput.value = savedApplicationCode.value
        checkStatus()
      }
    })
    
    return {
      codeInput,
      isLoading,
      error,
      showResults,
      applicationStatus,
      formattedSubmissionDate,
      formattedApprovalDate,
      formattedDecisionDate,
      formattedStartDate,
      formattedEndDate,
      statusText,
      statusBadgeText,
      statusBadgeClass,
      decisionText,
      decisionIcon,
      decisionIconClass,
      checkStatus,
      refreshStatus,
      saveToProfile
    }
  }
}
</script>