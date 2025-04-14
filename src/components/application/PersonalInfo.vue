<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-semibold text-gray-800 mb-6">Informations Personnelles</h2>
    
    <form @submit.prevent="submitForm">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- First Name -->
        <div class="form-group">
          <label for="firstName" class="form-label">Prénom <span class="text-red-600">*</span></label>
          <input
            id="firstName"
            v-model="form.firstName"
            type="text"
            class="input-field"
            :class="{ 'border-red-500': v$.firstName.$error }"
            @blur="v$.firstName.$touch()"
          />
          <p v-if="v$.firstName.$error" class="error-message">
            {{ v$.firstName.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Last Name -->
        <div class="form-group">
          <label for="lastName" class="form-label">Nom <span class="text-red-600">*</span></label>
          <input
            id="lastName"
            v-model="form.lastName"
            type="text"
            class="input-field"
            :class="{ 'border-red-500': v$.lastName.$error }"
            @blur="v$.lastName.$touch()"
          />
          <p v-if="v$.lastName.$error" class="error-message">
            {{ v$.lastName.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Email -->
        <div class="form-group">
          <label for="email" class="form-label">Email <span class="text-red-600">*</span></label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="input-field"
            :class="{ 'border-red-500': v$.email.$error }"
            @blur="v$.email.$touch()"
          />
          <p v-if="v$.email.$error" class="error-message">
            {{ v$.email.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Phone -->
        <div class="form-group">
          <label for="phone" class="form-label">Téléphone <span class="text-red-600">*</span></label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            class="input-field"
            :class="{ 'border-red-500': v$.phone.$error }"
            @blur="v$.phone.$touch()"
          />
          <p v-if="v$.phone.$error" class="error-message">
            {{ v$.phone.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Address -->
        <div class="form-group md:col-span-2">
          <label for="address" class="form-label">Adresse <span class="text-red-600">*</span></label>
          <input
            id="address"
            v-model="form.address"
            type="text"
            class="input-field"
            :class="{ 'border-red-500': v$.address.$error }"
            @blur="v$.address.$touch()"
          />
          <p v-if="v$.address.$error" class="error-message">
            {{ v$.address.$errors[0].$message }}
          </p>
        </div>
        
        <!-- City -->
        <div class="form-group">
          <label for="city" class="form-label">Ville <span class="text-red-600">*</span></label>
          <input
            id="city"
            v-model="form.city"
            type="text"
            class="input-field"
            :class="{ 'border-red-500': v$.city.$error }"
            @blur="v$.city.$touch()"
          />
          <p v-if="v$.city.$error" class="error-message">
            {{ v$.city.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Date of Birth -->
        <div class="form-group">
          <label for="dateOfBirth" class="form-label">Date de naissance <span class="text-red-600">*</span></label>
          <input
            id="dateOfBirth"
            v-model="form.dateOfBirth"
            type="date"
            class="input-field"
            :class="{ 'border-red-500': v$.dateOfBirth.$error }"
            @blur="v$.dateOfBirth.$touch()"
          />
          <p v-if="v$.dateOfBirth.$error" class="error-message">
            {{ v$.dateOfBirth.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Nationality -->
        <div class="form-group">
          <label for="nationality" class="form-label">Nationalité <span class="text-red-600">*</span></label>
          <input
            id="nationality"
            v-model="form.nationality"
            type="text"
            class="input-field"
            :class="{ 'border-red-500': v$.nationality.$error }"
            @blur="v$.nationality.$touch()"
          />
          <p v-if="v$.nationality.$error" class="error-message">
            {{ v$.nationality.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Gender -->
        <div class="form-group">
          <label class="form-label">Genre <span class="text-red-600">*</span></label>
          <div class="mt-2 space-x-6 flex">
            <label class="inline-flex items-center">
              <input
                type="radio"
                v-model="form.gender"
                value="male"
                class="h-4 w-4 text-green-800 focus:ring-green-500 border-gray-300"
                @change="v$.gender.$touch()"
              />
              <span class="ml-2 text-gray-700">Masculin</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                v-model="form.gender"
                value="female"
                class="h-4 w-4 text-green-800 focus:ring-green-500 border-gray-300"
                @change="v$.gender.$touch()"
              />
              <span class="ml-2 text-gray-700">Féminin</span>
            </label>
          </div>
          <p v-if="v$.gender.$error" class="error-message">
            {{ v$.gender.$errors[0].$message }}
          </p>
        </div>
        
        <!-- Education Level -->
        <div class="form-group">
          <label for="educationLevel" class="form-label">Niveau d'études <span class="text-red-600">*</span></label>
          <select
            id="educationLevel"
            v-model="form.educationLevel"
            class="input-field"
            :class="{ 'border-red-500': v$.educationLevel.$error }"
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
            {{ v$.educationLevel.$errors[0].$message }}
          </p>
        </div>
      </div>
      
      <div class="mt-8 flex justify-end">
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
