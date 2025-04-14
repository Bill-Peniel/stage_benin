<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-semibold text-gray-800 mb-6">Documents Requis</h2>
    
    <p class="text-gray-600 mb-6">
      Veuillez fournir les documents suivants au format PDF. Taille maximale: 5 Mo par fichier.
    </p>
    
    <div class="mb-8">
      <h3 class="text-lg font-medium text-gray-800 mb-2">
        Documents pour stage {{ internshipTypeLabel }}
      </h3>
      <p class="text-gray-600 mb-4">
        <span class="text-red-600">*</span> Tous les documents marqués d'une étoile sont obligatoires
      </p>
    </div>
    
    <form @submit.prevent="submitForm">
      <div class="space-y-6">
        <!-- CV -->
        <div class="form-group">
          <label for="cv" class="form-label">CV <span class="text-red-600">*</span></label>
          <div class="mt-1 flex items-center">
            <span v-if="documents.cv" class="text-green-800 mr-2">
              <i class="fas fa-check-circle"></i>
            </span>
            <label 
              class="relative cursor-pointer py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2"
              :class="{ 'border-red-500': v$.cv.$error }"
            >
              <span class="text-gray-700">
                {{ documents.cv ? documents.cv.name : 'Choisir un fichier' }}
              </span>
              <input 
                id="cv" 
                name="cv" 
                type="file" 
                accept=".pdf" 
                class="sr-only"
                @change="handleFileUpload($event, 'cv')"
                @blur="v$.cv.$touch()"
              />
            </label>
            <button 
              v-if="documents.cv"
              type="button" 
              @click="removeFile('cv')" 
              class="ml-2 text-red-600 hover:text-red-800"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <p v-if="v$.cv.$error" class="error-message">
            {{ v$.cv.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Cover Letter -->
        <div class="form-group">
          <label for="coverLetter" class="form-label">Lettre de motivation <span class="text-red-600">*</span></label>
          <div class="mt-1 flex items-center">
            <span v-if="documents.coverLetter" class="text-green-800 mr-2">
              <i class="fas fa-check-circle"></i>
            </span>
            <label 
              class="relative cursor-pointer py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2"
              :class="{ 'border-red-500': v$.coverLetter.$error }"
            >
              <span class="text-gray-700">
                {{ documents.coverLetter ? documents.coverLetter.name : 'Choisir un fichier' }}
              </span>
              <input 
                id="coverLetter" 
                name="coverLetter" 
                type="file" 
                accept=".pdf" 
                class="sr-only"
                @change="handleFileUpload($event, 'coverLetter')"
                @blur="v$.coverLetter.$touch()"
              />
            </label>
            <button 
              v-if="documents.coverLetter"
              type="button" 
              @click="removeFile('coverLetter')" 
              class="ml-2 text-red-600 hover:text-red-800"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <p v-if="v$.coverLetter.$error" class="error-message">
            {{ v$.coverLetter.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Identity Card -->
        <div class="form-group">
          <label for="identityCard" class="form-label">Pièce d'identité <span class="text-red-600">*</span></label>
          <div class="mt-1 flex items-center">
            <span v-if="documents.identityCard" class="text-green-800 mr-2">
              <i class="fas fa-check-circle"></i>
            </span>
            <label 
              class="relative cursor-pointer py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2"
              :class="{ 'border-red-500': v$.identityCard.$error }"
            >
              <span class="text-gray-700">
                {{ documents.identityCard ? documents.identityCard.name : 'Choisir un fichier' }}
              </span>
              <input 
                id="identityCard" 
                name="identityCard" 
                type="file" 
                accept=".pdf" 
                class="sr-only"
                @change="handleFileUpload($event, 'identityCard')"
                @blur="v$.identityCard.$touch()"
              />
            </label>
            <button 
              v-if="documents.identityCard"
              type="button" 
              @click="removeFile('identityCard')" 
              class="ml-2 text-red-600 hover:text-red-800"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <p v-if="v$.identityCard.$error" class="error-message">
            {{ v$.identityCard.$errors[0].$message }}
          </p>
        </div>
        
        <!-- University Enrollment (conditional based on internship type) -->
        <div v-if="['academic', 'research'].includes(internshipType)" class="form-group">
          <label for="universityEnrollment" class="form-label">
            Attestation d'inscription universitaire <span class="text-red-600">*</span>
          </label>
          <div class="mt-1 flex items-center">
            <span v-if="documents.universityEnrollment" class="text-green-800 mr-2">
              <i class="fas fa-check-circle"></i>
            </span>
            <label 
              class="relative cursor-pointer py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2"
              :class="{ 'border-red-500': v$.universityEnrollment.$error }"
            >
              <span class="text-gray-700">
                {{ documents.universityEnrollment ? documents.universityEnrollment.name : 'Choisir un fichier' }}
              </span>
              <input 
                id="universityEnrollment" 
                name="universityEnrollment" 
                type="file" 
                accept=".pdf" 
                class="sr-only"
                @change="handleFileUpload($event, 'universityEnrollment')"
                @blur="v$.universityEnrollment.$touch()"
              />
            </label>
            <button 
              v-if="documents.universityEnrollment"
              type="button" 
              @click="removeFile('universityEnrollment')" 
              class="ml-2 text-red-600 hover:text-red-800"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <p v-if="v$.universityEnrollment.$error" class="error-message">
            {{ v$.universityEnrollment.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Recommendation Letter (conditional based on internship type) -->
        <div v-if="['professional', 'research'].includes(internshipType)" class="form-group">
          <label for="recommendation" class="form-label">
            Lettre de recommandation <span class="text-red-600">*</span>
          </label>
          <div class="mt-1 flex items-center">
            <span v-if="documents.recommendation" class="text-green-800 mr-2">
              <i class="fas fa-check-circle"></i>
            </span>
            <label 
              class="relative cursor-pointer py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2"
              :class="{ 'border-red-500': v$.recommendation.$error }"
            >
              <span class="text-gray-700">
                {{ documents.recommendation ? documents.recommendation.name : 'Choisir un fichier' }}
              </span>
              <input 
                id="recommendation" 
                name="recommendation" 
                type="file" 
                accept=".pdf" 
                class="sr-only"
                @change="handleFileUpload($event, 'recommendation')"
                @blur="v$.recommendation.$touch()"
              />
            </label>
            <button 
              v-if="documents.recommendation"
              type="button" 
              @click="removeFile('recommendation')" 
              class="ml-2 text-red-600 hover:text-red-800"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <p v-if="v$.recommendation.$error" class="error-message">
            {{ v$.recommendation.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Other Documents (optional) -->
        <div class="form-group">
          <label class="form-label">Autres documents (facultatif)</label>
          <div class="mt-1">
            <div v-for="(doc, index) in documents.otherDocuments" :key="index" class="flex items-center mb-2">
              <span class="text-green-800 mr-2">
                <i class="fas fa-check-circle"></i>
              </span>
              <span class="text-gray-700">{{ doc.name }}</span>
              <button 
                type="button" 
                @click="removeOtherFile(index)" 
                class="ml-2 text-red-600 hover:text-red-800"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
            
            <label class="relative cursor-pointer py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2">
              <span class="text-gray-700">Ajouter un document (max 5 Mo)</span>
              <input 
                id="otherDocument" 
                name="otherDocument" 
                type="file" 
                accept=".pdf" 
                class="sr-only"
                @change="handleOtherFileUpload"
              />
            </label>
          </div>
          <p class="text-gray-500 text-sm mt-2">
            Vous pouvez ajouter jusqu'à 3 documents supplémentaires.
          </p>
        </div>
      </div>
      
      <div class="mt-8 flex justify-between">
        <button type="button" @click="previousStep" class="btn-outline">
          <i class="fas fa-arrow-left mr-2"></i> Précédent
        </button>
        <button type="submit" class="btn-primary">
          Suivant <i class="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

export default {
  name: 'DocumentUpload',
  setup() {
    const store = useStore()
    
    const documents = reactive({
      cv: store.state.applicationForm.documents.cv,
      coverLetter: store.state.applicationForm.documents.coverLetter,
      identityCard: store.state.applicationForm.documents.identityCard,
      universityEnrollment: store.state.applicationForm.documents.universityEnrollment,
      recommendation: store.state.applicationForm.documents.recommendation,
      otherDocuments: [...(store.state.applicationForm.documents.otherDocuments || [])]
    })
    
    const internshipType = computed(() => 
      store.state.applicationForm.internshipInfo.internshipType || ''
    )
    
    const internshipTypeLabel = computed(() => {
      const types = {
        'academic': 'académique',
        'professional': 'professionnel',
        'research': 'de recherche',
        'observation': 'd\'observation'
      }
      return types[internshipType.value] || ''
    })
    
    // Dynamic validation rules based on internship type
    const rules = computed(() => {
      const baseRules = {
        cv: { required: helpers.withMessage('Veuillez télécharger votre CV', required) },
        coverLetter: { required: helpers.withMessage('Veuillez télécharger votre lettre de motivation', required) },
        identityCard: { required: helpers.withMessage('Veuillez télécharger votre pièce d\'identité', required) }
      }
      
      // Add conditional rules based on internship type
      if (['academic', 'research'].includes(internshipType.value)) {
        baseRules.universityEnrollment = { 
          required: helpers.withMessage('Veuillez télécharger votre attestation d\'inscription universitaire', required) 
        }
      }
      
      if (['professional', 'research'].includes(internshipType.value)) {
        baseRules.recommendation = { 
          required: helpers.withMessage('Veuillez télécharger une lettre de recommandation', required) 
        }
      }
      
      return baseRules
    })
    
    const v$ = useVuelidate(rules, documents)
    
    const handleFileUpload = (event, fieldName) => {
      const file = event.target.files[0]
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          alert('Le fichier est trop volumineux. Taille maximale: 5 Mo.')
          event.target.value = null
          return
        }
        
        if (file.type !== 'application/pdf') {
          alert('Seuls les fichiers PDF sont acceptés.')
          event.target.value = null
          return
        }
        
        documents[fieldName] = file
        v$.value[fieldName].$touch()
      }
    }
    
    const handleOtherFileUpload = (event) => {
      const file = event.target.files[0]
      if (file) {
        if (documents.otherDocuments.length >= 3) {
          alert('Vous avez atteint le nombre maximum de documents supplémentaires (3).')
          event.target.value = null
          return
        }
        
        if (file.size > 5 * 1024 * 1024) {
          alert('Le fichier est trop volumineux. Taille maximale: 5 Mo.')
          event.target.value = null
          return
        }
        
        if (file.type !== 'application/pdf') {
          alert('Seuls les fichiers PDF sont acceptés.')
          event.target.value = null
          return
        }
        
        documents.otherDocuments.push(file)
        event.target.value = null
      }
    }
    
    const removeFile = (fieldName) => {
      documents[fieldName] = null
      v$.value[fieldName].$touch()
    }
    
    const removeOtherFile = (index) => {
      documents.otherDocuments.splice(index, 1)
    }
    
    const submitForm = async () => {
      const result = await v$.value.$validate()
      
      if (result) {
        // Update store with form data
        store.commit('updateDocuments', documents)
        
        // Move to next step
        store.commit('nextStep')
      }
    }
    
    const previousStep = () => {
      store.commit('previousStep')
    }
    
    return {
      documents,
      internshipType,
      internshipTypeLabel,
      v$,
      handleFileUpload,
      handleOtherFileUpload,
      removeFile,
      removeOtherFile,
      submitForm,
      previousStep
    }
  }
}
</script>
