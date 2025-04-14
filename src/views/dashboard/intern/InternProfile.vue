<template>
  <div>
    <div class="p-6 sm:p-8 border-b border-gray-200">
      <h1 class="text-2xl font-bold text-gray-900">Mon profil</h1>
      <p class="mt-1 text-sm text-gray-600">
        Gérez vos informations personnelles et votre dossier de stage.
      </p>
    </div>
    
    <div class="p-6 sm:p-8">
      <!-- Profile Overview Card -->
      <div class="bg-white overflow-hidden shadow-lg rounded-lg mb-8">
        <div class="px-6 py-5 sm:px-8 border-b border-gray-200">
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Aperçu du profil
            </h3>
            <div class="mt-2 sm:mt-0">
              <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <i class="fas fa-check-circle mr-1"></i> Profil actif
              </span>
            </div>
          </div>
        </div>
        
        <div class="px-6 py-6 sm:px-8">
          <div class="flex flex-col md:flex-row items-start">
            <!-- Profile Picture -->
            <div class="flex-shrink-0 mr-6 mb-4 md:mb-0">
              <div class="relative">
                <div class="w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-white text-3xl font-bold">
                  {{ userInitials }}
                </div>
                <button class="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1 shadow-md hover:bg-primary-dark transition">
                  <i class="fas fa-camera"></i>
                </button>
              </div>
            </div>
            
            <!-- Profile Info -->
            <div class="flex-1">
              <h4 class="text-xl font-bold text-gray-900">{{ user.name }}</h4>
              <div class="text-sm text-gray-500 mt-1">{{ user.email }}</div>
              
              <dl class="mt-4 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Téléphone</dt>
                  <dd class="mt-1 text-sm text-gray-900">+229 97 12 34 56</dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Niveau d'études</dt>
                  <dd class="mt-1 text-sm text-gray-900">Licence 3</dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Établissement</dt>
                  <dd class="mt-1 text-sm text-gray-900">Université d'Abomey-Calavi</dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">Filière</dt>
                  <dd class="mt-1 text-sm text-gray-900">Économie et Finances</dd>
                </div>
              </dl>
              
              <div class="mt-4">
                <button 
                  type="button"
                  @click="editSection = 'personalInfo'"
                  class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <i class="fas fa-pencil-alt mr-2"></i>
                  Modifier les informations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Current Internship Card -->
      <div v-if="applicationStatus && applicationStatus.status === 'approved'" class="bg-white overflow-hidden shadow-lg rounded-lg mb-8">
        <div class="px-6 py-5 sm:px-8 border-b border-gray-200">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Stage en cours
          </h3>
        </div>
        
        <div class="px-6 py-6 sm:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div>
              <h4 class="text-lg font-medium text-gray-900">{{ applicationStatus.details.department }}</h4>
              <div class="mt-1 flex items-center text-sm text-gray-500">
                <i class="fas fa-building mr-1.5 text-gray-400"></i>
                Ministère de l'Économie et des Finances
              </div>
              <div class="mt-1 flex items-center text-sm text-gray-500">
                <i class="fas fa-calendar-alt mr-1.5 text-gray-400"></i>
                {{ formattedStartDate }} - {{ formattedEndDate }}
              </div>
              <div class="mt-1 flex items-center text-sm text-gray-500">
                <i class="fas fa-user-tie mr-1.5 text-gray-400"></i>
                Maître de stage: {{ applicationStatus.details.mentor }}
              </div>
            </div>
            <div class="mt-4 sm:mt-0">
              <span class="inline-flex rounded-md shadow-sm">
                <button 
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <i class="fas fa-file-download mr-2"></i>
                  Convention de stage
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Account Settings Card -->
      <div class="bg-white overflow-hidden shadow-lg rounded-lg">
        <div class="px-6 py-5 sm:px-8 border-b border-gray-200">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Paramètres du compte
          </h3>
        </div>
        
        <div class="px-6 py-5 sm:px-8">
          <!-- Edit Personal Information Form -->
          <div v-if="editSection === 'personalInfo'" class="space-y-6">
            <h4 class="text-base font-medium text-gray-900">Informations personnelles</h4>
            
            <form @submit.prevent="savePersonalInfo" class="mt-4 space-y-5">
              <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="firstName" class="block text-sm font-medium text-gray-700">Prénom</label>
                  <div class="mt-1">
                    <input 
                      type="text" 
                      name="firstName" 
                      id="firstName" 
                      v-model="form.firstName"
                      class="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div class="sm:col-span-3">
                  <label for="lastName" class="block text-sm font-medium text-gray-700">Nom</label>
                  <div class="mt-1">
                    <input 
                      type="text" 
                      name="lastName" 
                      id="lastName" 
                      v-model="form.lastName"
                      class="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div class="sm:col-span-4">
                  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                  <div class="mt-1">
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      v-model="form.email"
                      class="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div class="sm:col-span-4">
                  <label for="phone" class="block text-sm font-medium text-gray-700">Téléphone</label>
                  <div class="mt-1">
                    <input 
                      type="tel" 
                      name="phone" 
                      id="phone" 
                      v-model="form.phone"
                      class="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div class="sm:col-span-3">
                  <label for="educationLevel" class="block text-sm font-medium text-gray-700">Niveau d'études</label>
                  <div class="mt-1">
                    <select 
                      id="educationLevel" 
                      name="educationLevel" 
                      v-model="form.educationLevel"
                      class="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                      <option>Licence 1</option>
                      <option>Licence 2</option>
                      <option>Licence 3</option>
                      <option>Master 1</option>
                      <option>Master 2</option>
                      <option>Doctorat</option>
                    </select>
                  </div>
                </div>
                
                <div class="sm:col-span-6">
                  <label for="university" class="block text-sm font-medium text-gray-700">Établissement</label>
                  <div class="mt-1">
                    <input 
                      type="text" 
                      name="university" 
                      id="university" 
                      v-model="form.university"
                      class="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div class="sm:col-span-6">
                  <label for="studyField" class="block text-sm font-medium text-gray-700">Filière</label>
                  <div class="mt-1">
                    <input 
                      type="text" 
                      name="studyField" 
                      id="studyField" 
                      v-model="form.studyField"
                      class="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              
              <div class="flex justify-end space-x-3">
                <button 
                  type="button"
                  @click="cancelEdit"
                  class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Annuler
                </button>
                
                <button 
                  type="submit"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <i class="fas fa-save mr-2"></i>
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
          
          <!-- Settings Menu -->
          <div v-else class="divide-y divide-gray-200">
            <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium text-gray-500 flex items-center">
                <i class="fas fa-shield-alt text-secondary mr-3"></i>
                Sécurité
              </dt>
              <dd class="mt-1 flex justify-between items-center text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span>Changer de mot de passe, activer la double authentification</span>
                <button 
                  type="button"
                  @click="editSection = 'security'"
                  class="ml-4 text-primary hover:text-primary-dark font-medium"
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </dd>
            </div>
            
            <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium text-gray-500 flex items-center">
                <i class="fas fa-bell text-secondary mr-3"></i>
                Notifications
              </dt>
              <dd class="mt-1 flex justify-between items-center text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span>Gérer les préférences de notification par email et SMS</span>
                <button 
                  type="button"
                  @click="editSection = 'notifications'"
                  class="ml-4 text-primary hover:text-primary-dark font-medium"
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </dd>
            </div>
            
            <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium text-gray-500 flex items-center">
                <i class="fas fa-language text-secondary mr-3"></i>
                Langue et région
              </dt>
              <dd class="mt-1 flex justify-between items-center text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span>Français (Bénin)</span>
                <button 
                  type="button"
                  @click="editSection = 'language'"
                  class="ml-4 text-primary hover:text-primary-dark font-medium"
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </dd>
            </div>
            
            <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium text-gray-500 flex items-center">
                <i class="fas fa-history text-secondary mr-3"></i>
                Historique de connexion
              </dt>
              <dd class="mt-1 flex justify-between items-center text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span>Voir les appareils connectés et l'historique de connexion</span>
                <button 
                  type="button"
                  @click="editSection = 'loginHistory'"
                  class="ml-4 text-primary hover:text-primary-dark font-medium"
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </dd>
            </div>
            
            <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium text-gray-500 flex items-center">
                <i class="fas fa-trash-alt text-red-500 mr-3"></i>
                Supprimer le compte
              </dt>
              <dd class="mt-1 flex justify-between items-center text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <span class="text-red-600">Cette action est irréversible</span>
                <button 
                  type="button"
                  @click="confirmDelete = true"
                  class="ml-4 text-red-600 hover:text-red-800 font-medium"
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Delete Account Confirmation Modal -->
    <div v-if="confirmDelete" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="confirmDelete = false"></div>

        <!-- Modal panel -->
        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <i class="fas fa-exclamation-triangle text-red-600"></i>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Supprimer votre compte
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Êtes-vous sûr de vouloir supprimer votre compte ? Toutes vos données seront définitivement supprimées. Cette action est irréversible.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
              Supprimer le compte
            </button>
            <button type="button" @click="confirmDelete = false" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:w-auto sm:text-sm">
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, reactive } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'InternProfile',
  
  setup() {
    const store = useStore()
    
    const user = computed(() => store.getters.currentUser)
    const applicationStatus = computed(() => store.getters.internApplicationStatus)
    
    const userInitials = computed(() => {
      if (!user.value?.name) return '?'
      
      return user.value.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2)
    })
    
    // Format dates
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
    
    // Form editing
    const editSection = ref('')
    const confirmDelete = ref(false)
    
    // Form data
    const form = reactive({
      firstName: user.value?.name?.split(' ')[0] || '',
      lastName: user.value?.name?.split(' ')[1] || '',
      email: user.value?.email || '',
      phone: '+229 97 12 34 56',
      educationLevel: 'Licence 3',
      university: 'Université d\'Abomey-Calavi',
      studyField: 'Économie et Finances'
    })
    
    // Form actions
    const savePersonalInfo = () => {
      // Here you would call an API to update the user's profile
      // For now, we'll just update the user in the store
      const updatedUser = {
        ...user.value,
        name: `${form.firstName} ${form.lastName}`,
        email: form.email
      }
      
      store.commit('setUser', updatedUser)
      editSection.value = ''
      
      // Show success message
      alert('Profil mis à jour avec succès')
    }
    
    const cancelEdit = () => {
      // Reset form to original values
      form.firstName = user.value?.name?.split(' ')[0] || ''
      form.lastName = user.value?.name?.split(' ')[1] || ''
      form.email = user.value?.email || ''
      
      // Close edit section
      editSection.value = ''
    }
    
    return {
      user,
      applicationStatus,
      userInitials,
      formattedStartDate,
      formattedEndDate,
      editSection,
      confirmDelete,
      form,
      savePersonalInfo,
      cancelEdit
    }
  }
}
</script>