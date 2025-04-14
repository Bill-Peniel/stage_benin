<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-semibold text-gray-800 mb-6">Résumé de votre demande</h2>
    
    <p class="text-gray-600 mb-8">
      Veuillez vérifier les informations ci-dessous avant de soumettre votre demande de stage.
    </p>
    
    <div v-if="submissionResult && submissionResult.success" 
         class="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
      <div class="flex">
        <div class="flex-shrink-0">
          <i class="fas fa-check-circle text-green-800 text-xl"></i>
        </div>
        <div class="ml-3">
          <h3 class="text-lg font-medium text-green-800">Demande soumise avec succès</h3>
          <div class="mt-2 text-sm text-green-700">
            <p>Votre demande de stage a été soumise avec succès. Numéro de référence: <strong>{{ submissionResult.applicationId }}</strong></p>
            <p class="mt-1">Nous vous contacterons bientôt par email pour vous informer de la suite du processus.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else>
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">Informations Personnelles</h3>
        <div class="bg-gray-50 rounded-md p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p class="text-gray-500 text-sm">Nom complet</p>
              <p class="font-medium">{{ personalInfo.firstName }} {{ personalInfo.lastName }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Email</p>
              <p class="font-medium">{{ personalInfo.email }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Téléphone</p>
              <p class="font-medium">{{ personalInfo.phone }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Date de naissance</p>
              <p class="font-medium">{{ formatDate(personalInfo.dateOfBirth) }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Adresse</p>
              <p class="font-medium">{{ personalInfo.address }}, {{ personalInfo.city }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Nationalité</p>
              <p class="font-medium">{{ personalInfo.nationality }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Genre</p>
              <p class="font-medium">{{ genderLabel }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Niveau d'études</p>
              <p class="font-medium">{{ educationLevelLabel }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">Informations sur le Stage</h3>
        <div class="bg-gray-50 rounded-md p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p class="text-gray-500 text-sm">Type de stage</p>
              <p class="font-medium">{{ internshipTypeLabel }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Département</p>
              <p class="font-medium">{{ departmentLabel }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Période</p>
              <p class="font-medium">Du {{ formatDate(internshipInfo.startDate) }} au {{ formatDate(internshipInfo.endDate) }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Établissement d'enseignement</p>
              <p class="font-medium">{{ internshipInfo.universityName }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Domaine d'études</p>
              <p class="font-medium">{{ internshipInfo.studyField }}</p>
            </div>
            <div>
              <p class="text-gray-500 text-sm">Année d'études</p>
              <p class="font-medium">{{ internshipInfo.studyYear }}</p>
            </div>
          </div>
          
          <div class="mt-4">
            <p class="text-gray-500 text-sm">Compétences</p>
            <p class="font-medium">{{ internshipInfo.skills }}</p>
          </div>
          
          <div class="mt-4">
            <p class="text-gray-500 text-sm">Motivation</p>
            <p class="font-medium">{{ internshipInfo.motivation }}</p>
          </div>
          
          <div v-if="internshipInfo.previousExperience" class="mt-4">
            <p class="text-gray-500 text-sm">Expérience précédente</p>
            <p class="font-medium">{{ internshipInfo.previousExperience }}</p>
          </div>
        </div>
      </div>
      
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-3">Documents Fournis</h3>
        <div class="bg-gray-50 rounded-md p-4">
          <ul class="space-y-2">
            <li class="flex items-center">
              <i class="fas fa-file-pdf text-red-600 mr-2"></i>
              <span>CV</span>
              <span class="text-green-800 ml-auto">
                <i class="fas fa-check-circle"></i>
              </span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-file-pdf text-red-600 mr-2"></i>
              <span>Lettre de motivation</span>
              <span class="text-green-800 ml-auto">
                <i class="fas fa-check-circle"></i>
              </span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-file-pdf text-red-600 mr-2"></i>
              <span>Pièce d'identité</span>
              <span class="text-green-800 ml-auto">
                <i class="fas fa-check-circle"></i>
              </span>
            </li>
            <li v-if="documents.universityEnrollment" class="flex items-center">
              <i class="fas fa-file-pdf text-red-600 mr-2"></i>
              <span>Attestation d'inscription universitaire</span>
              <span class="text-green-800 ml-auto">
                <i class="fas fa-check-circle"></i>
              </span>
            </li>
            <li v-if="documents.recommendation" class="flex items-center">
              <i class="fas fa-file-pdf text-red-600 mr-2"></i>
              <span>Lettre de recommandation</span>
              <span class="text-green-800 ml-auto">
                <i class="fas fa-check-circle"></i>
              </span>
            </li>
            <li v-for="(doc, index) in documents.otherDocuments" :key="index" class="flex items-center">
              <i class="fas fa-file-pdf text-red-600 mr-2"></i>
              <span>{{ doc.name }}</span>
              <span class="text-green-800 ml-auto">
                <i class="fas fa-check-circle"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="form-group">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="terms"
              v-model="termsAccepted"
              type="checkbox"
              class="h-4 w-4 text-green-800 border-gray-300 rounded focus:ring-green-500"
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="terms" class="font-medium text-gray-700">J'accepte les conditions</label>
            <p class="text-gray-500">
              Je certifie que les informations fournies sont exactes et j'accepte les 
              <a href="#" class="text-green-800 underline hover:text-green-700">termes et conditions</a>
              et la <a href="#" class="text-green-800 underline hover:text-green-700">politique de confidentialité</a>.
            </p>
          </div>
        </div>
        <p v-if="termsError" class="error-message">
          Vous devez accepter les conditions pour soumettre votre demande
        </p>
      </div>
      
      <div class="mt-8 flex justify-between">
        <button type="button" @click="previousStep" class="btn-outline">
          <i class="fas fa-arrow-left mr-2"></i> Précédent
        </button>
        <button 
          type="button" 
          @click="submitApplication" 
          class="btn-primary" 
          :disabled="isSubmitting || !termsAccepted"
          :class="{ 'opacity-70 cursor-not-allowed': isSubmitting || !termsAccepted }"
        >
          <span v-if="isSubmitting">
            <i class="fas fa-spinner fa-spin mr-2"></i> Envoi en cours...
          </span>
          <span v-else>
            Soumettre la demande
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'ApplicationSummary',
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const termsAccepted = ref(false)
    const termsError = ref(false)
    
    const personalInfo = computed(() => store.state.applicationForm.personalInfo)
    const internshipInfo = computed(() => store.state.applicationForm.internshipInfo)
    const documents = computed(() => store.state.applicationForm.documents)
    const isSubmitting = computed(() => store.state.applicationForm.isSubmitting)
    const submissionResult = computed(() => store.state.applicationForm.submissionResult)
    
    const genderLabel = computed(() => {
      const genders = {
        'male': 'Masculin',
        'female': 'Féminin'
      }
      return genders[personalInfo.value.gender] || ''
    })
    
    const educationLevelLabel = computed(() => {
      const levels = {
        'bac': 'Baccalauréat',
        'bac+1': 'BAC+1',
        'bac+2': 'BAC+2',
        'bac+3': 'BAC+3 (Licence)',
        'bac+4': 'BAC+4',
        'bac+5': 'BAC+5 (Master)',
        'doctorate': 'Doctorat'
      }
      return levels[personalInfo.value.educationLevel] || ''
    })
    
    const internshipTypeLabel = computed(() => {
      const types = {
        'academic': 'Stage académique',
        'professional': 'Stage professionnel',
        'research': 'Stage de recherche',
        'observation': 'Stage d\'observation'
      }
      return types[internshipInfo.value.internshipType] || ''
    })
    
    const departmentLabel = computed(() => {
      const departments = {
        'budget': 'Direction Générale du Budget',
        'tax': 'Direction Générale des Impôts',
        'treasury': 'Direction Générale du Trésor',
        'customs': 'Direction Générale des Douanes',
        'procurement': 'Direction des Marchés Publics',
        'planning': 'Direction de la Planification',
        'it': 'Direction des Systèmes d\'Information',
        'hr': 'Direction des Ressources Humaines'
      }
      return departments[internshipInfo.value.department] || ''
    })
    
    const formatDate = (dateString) => {
      if (!dateString) return ''
      
      const date = new Date(dateString)
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    }
    
    const previousStep = () => {
      store.commit('previousStep')
    }
    
    const submitApplication = async () => {
      if (!termsAccepted.value) {
        termsError.value = true
        return
      }
      
      termsError.value = false
      await store.dispatch('submitApplication')
      
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
      // If we wanted to redirect after a delay:
      // setTimeout(() => {
      //   router.push('/')
      // }, 5000)
    }
    
    return {
      personalInfo,
      internshipInfo,
      documents,
      isSubmitting,
      submissionResult,
      genderLabel,
      educationLevelLabel,
      internshipTypeLabel,
      departmentLabel,
      termsAccepted,
      termsError,
      formatDate,
      previousStep,
      submitApplication
    }
  }
}
</script>
