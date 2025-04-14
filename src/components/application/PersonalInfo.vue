<template>
  <div class="bg-white rounded-lg shadow-lg p-4 sm:p-6 border-t-4 border-primary animate__animated animate__fadeIn">
    <h2 class="text-xl sm:text-2xl font-bold text-primary-dark mb-6 relative pb-2">
      Informations Personnelles
      <span class="absolute bottom-0 left-0 w-16 h-1 bg-primary-light"></span>
    </h2>
    
    <form @submit.prevent="submitForm" class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <!-- First Name -->
        <div class="form-group">
          <label for="firstName" class="form-label flex items-center">
            <i class="fas fa-user text-primary-light mr-2"></i>
            Prénom <span class="text-red-600 ml-1">*</span>
          </label>
          <input
            id="firstName"
            v-model="form.firstName"
            type="text"
            class="input-field focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-30"
            :class="{ 'border-red-500 bg-red-50': v$.firstName.$error }"
            @blur="v$.firstName.$touch()"
            placeholder="Votre prénom"
          />
          <p v-if="v$.firstName.$error" class="error-message">
            <i class="fas fa-exclamation-circle mr-1"></i> {{ v$.firstName.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Last Name -->
        <div class="form-group">
          <label for="lastName" class="form-label flex items-center">
            <i class="fas fa-user text-primary-light mr-2"></i>
            Nom <span class="text-red-600 ml-1">*</span>
          </label>
          <input
            id="lastName"
            v-model="form.lastName"
            type="text"
            class="input-field focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-30"
            :class="{ 'border-red-500 bg-red-50': v$.lastName.$error }"
            @blur="v$.lastName.$touch()"
            placeholder="Votre nom"
          />
          <p v-if="v$.lastName.$error" class="error-message">
            <i class="fas fa-exclamation-circle mr-1"></i> {{ v$.lastName.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Email -->
        <div class="form-group">
          <label for="email" class="form-label flex items-center">
            <i class="fas fa-envelope text-primary-light mr-2"></i>
            Email <span class="text-red-600 ml-1">*</span>
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="input-field focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-30"
            :class="{ 'border-red-500 bg-red-50': v$.email.$error }"
            @blur="v$.email.$touch()"
            placeholder="votre.email@exemple.com"
          />
          <p v-if="v$.email.$error" class="error-message">
            <i class="fas fa-exclamation-circle mr-1"></i> {{ v$.email.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Phone -->
        <div class="form-group">
          <label for="phone" class="form-label flex items-center">
            <i class="fas fa-phone-alt text-primary-light mr-2"></i>
            Téléphone <span class="text-red-600 ml-1">*</span>
          </label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            class="input-field focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-30"
            :class="{ 'border-red-500 bg-red-50': v$.phone.$error }"
            @blur="v$.phone.$touch()"
            placeholder="+229 XX XX XX XX"
          />
          <p v-if="v$.phone.$error" class="error-message">
            <i class="fas fa-exclamation-circle mr-1"></i> {{ v$.phone.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Address -->
        <div class="form-group md:col-span-2">
          <label for="address" class="form-label flex items-center">
            <i class="fas fa-map-marker-alt text-primary-light mr-2"></i>
            Adresse <span class="text-red-600 ml-1">*</span>
          </label>
          <input
            id="address"
            v-model="form.address"
            type="text"
            class="input-field focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-30"
            :class="{ 'border-red-500 bg-red-50': v$.address.$error }"
            @blur="v$.address.$touch()"
            placeholder="Votre adresse complète"
          />
          <p v-if="v$.address.$error" class="error-message">
            <i class="fas fa-exclamation-circle mr-1"></i> {{ v$.address.$errors[0].$message }}
          </p>
        </div>
        
        <!-- City -->
        <div class="form-group">
          <label for="city" class="form-label flex items-center">
            <i class="fas fa-city text-primary-light mr-2"></i>
            Ville <span class="text-red-600 ml-1">*</span>
          </label>
          <input
            id="city"
            v-model="form.city"
            type="text"
            class="input-field focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-30"
            :class="{ 'border-red-500 bg-red-50': v$.city.$error }"
            @blur="v$.city.$touch()"
            placeholder="Votre ville"
          />
          <p v-if="v$.city.$error" class="error-message">
            <i class="fas fa-exclamation-circle mr-1"></i> {{ v$.city.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Date of Birth -->
        <div class="form-group">
          <label for="dateOfBirth" class="form-label flex items-center">
            <i class="fas fa-birthday-cake text-primary-light mr-2"></i>
            Date de naissance <span class="text-red-600 ml-1">*</span>
          </label>
          <input
            id="dateOfBirth"
            v-model="form.dateOfBirth"
            type="date"
            class="input-field focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-30"
            :class="{ 'border-red-500 bg-red-50': v$.dateOfBirth.$error }"
            @blur="v$.dateOfBirth.$touch()"
          />
          <p v-if="v$.dateOfBirth.$error" class="error-message">
            <i class="fas fa-exclamation-circle mr-1"></i> {{ v$.dateOfBirth.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Nationality -->
        <div class="form-group">
          <label for="nationality" class="form-label flex items-center">
            <i class="fas fa-flag text-primary-light mr-2"></i>
            Nationalité <span class="text-red-600 ml-1">*</span>
          </label>
          <input
            id="nationality"
            v-model="form.nationality"
            type="text"
            class="input-field focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-30"
            :class="{ 'border-red-500 bg-red-50': v$.nationality.$error }"
            @blur="v$.nationality.$touch()"
            placeholder="Votre nationalité"
          />
          <p v-if="v$.nationality.$error" class="error-message">
            <i class="fas fa-exclamation-circle mr-1"></i> {{ v$.nationality.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Gender -->
        <div class="form-group">
          <label class="form-label flex items-center mb-2">
            <i class="fas fa-venus-mars text-primary-light mr-2"></i>
            Genre <span class="text-red-600 ml-1">*</span>
          </label>
          <div class="flex flex-wrap gap-4">
            <label class="relative flex items-center p-3 rounded-md border border-gray-200 cursor-pointer hover:bg-gray-50 focus-within:ring-2 focus-within:ring-primary">
              <input
                type="radio"
                v-model="form.gender"
                value="male"
                class="h-5 w-5 text-primary focus:ring-primary-light border-gray-300 cursor-pointer"
                @change="v$.gender.$touch()"
              />
              <span class="ml-2 text-gray-700 font-medium">
                <i class="fas fa-male text-blue-500 mr-1"></i> Masculin
              </span>
            </label>
            <label class="relative flex items-center p-3 rounded-md border border-gray-200 cursor-pointer hover:bg-gray-50 focus-within:ring-2 focus-within:ring-primary">
              <input
                type="radio"
                v-model="form.gender"
                value="female"
                class="h-5 w-5 text-primary focus:ring-primary-light border-gray-300 cursor-pointer"
                @change="v$.gender.$touch()"
              />
              <span class="ml-2 text-gray-700 font-medium">
                <i class="fas fa-female text-pink-500 mr-1"></i> Féminin
              </span>
            </label>
          </div>
          <p v-if="v$.gender.$error" class="error-message mt-2">
            <i class="fas fa-exclamation-circle mr-1"></i> {{ v$.gender.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Education Level -->
        <div class="form-group">
          <label for="educationLevel" class="form-label flex items-center">
            <i class="fas fa-graduation-cap text-primary-light mr-2"></i>
            Niveau d'études <span class="text-red-600 ml-1">*</span>
          </label>
          <select
            id="educationLevel"
            v-model="form.educationLevel"
            class="input-field focus:border-primary focus:ring focus:ring-primary-light focus:ring-opacity-30"
            :class="{ 'border-red-500 bg-red-50': v$.educationLevel.$error }"
            @blur="v$.educationLevel.$touch()"
          >
            <option value="" disabled selected>Sélectionnez votre niveau</option>
            <option value="bac">Baccalauréat</option>
            <option value="bac+1">BAC+1</option>
            <option value="bac+2">BAC+2</option>
            <option value="bac+3">BAC+3 (Licence)</option>
            <option value="bac+4">BAC+4</option>
            <option value="bac+5">BAC+5 (Master)</option>
            <option value="doctorate">Doctorat</option>
          </select>
          <p v-if="v$.educationLevel.$error" class="error-message">
            <i class="fas fa-exclamation-circle mr-1"></i> {{ v$.educationLevel.$errors[0].$message }}
          </p>
        </div>
      </div>
      
      <!-- Form actions -->
      <div class="mt-8 flex flex-col sm:flex-row justify-between items-center">
        <p class="text-sm text-gray-500 mb-4 sm:mb-0 max-w-md">
          <i class="fas fa-info-circle mr-1 text-primary-light"></i>
          Tous les champs marqués d'un <span class="text-red-600">*</span> sont obligatoires
        </p>
        <button type="submit" class="btn-primary px-6 py-3 w-full sm:w-auto transform transition hover:scale-105">
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
import { required, email, helpers } from '@vuelidate/validators'

export default {
  name: 'PersonalInfo',
  setup(props, { emit }) {
    const store = useStore()
    
    const form = reactive({
      firstName: store.state.applicationForm.personalInfo.firstName,
      lastName: store.state.applicationForm.personalInfo.lastName,
      email: store.state.applicationForm.personalInfo.email,
      phone: store.state.applicationForm.personalInfo.phone,
      address: store.state.applicationForm.personalInfo.address,
      city: store.state.applicationForm.personalInfo.city,
      dateOfBirth: store.state.applicationForm.personalInfo.dateOfBirth,
      nationality: store.state.applicationForm.personalInfo.nationality,
      gender: store.state.applicationForm.personalInfo.gender,
      educationLevel: store.state.applicationForm.personalInfo.educationLevel
    })
    
    const rules = computed(() => ({
      firstName: { required: helpers.withMessage('Veuillez entrer votre prénom', required) },
      lastName: { required: helpers.withMessage('Veuillez entrer votre nom', required) },
      email: { 
        required: helpers.withMessage('Veuillez entrer votre email', required),
        email: helpers.withMessage('Veuillez entrer un email valide', email)
      },
      phone: { required: helpers.withMessage('Veuillez entrer votre numéro de téléphone', required) },
      address: { required: helpers.withMessage('Veuillez entrer votre adresse', required) },
      city: { required: helpers.withMessage('Veuillez entrer votre ville', required) },
      dateOfBirth: { required: helpers.withMessage('Veuillez entrer votre date de naissance', required) },
      nationality: { required: helpers.withMessage('Veuillez entrer votre nationalité', required) },
      gender: { required: helpers.withMessage('Veuillez sélectionner votre genre', required) },
      educationLevel: { required: helpers.withMessage('Veuillez sélectionner votre niveau d\'études', required) }
    }))
    
    const v$ = useVuelidate(rules, form)
    
    const submitForm = async () => {
      const result = await v$.value.$validate()
      
      if (result) {
        // Update store with form data
        store.commit('updatePersonalInfo', form)
        
        // Move to next step
        store.commit('nextStep')
      }
    }
    
    return {
      form,
      v$,
      submitForm
    }
  }
}
</script>
