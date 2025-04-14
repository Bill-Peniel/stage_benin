<template>
  <div class="page-container py-12">
    <div class="max-w-xl mx-auto">
      <div class="text-center mb-8">
        <img src="../assets/logo.svg" alt="Logo" class="h-20 mx-auto mb-4">
        <h1 class="text-3xl font-bold text-gray-900">Créer un compte</h1>
        <p class="text-gray-600 mt-2">
          Inscrivez-vous pour soumettre votre demande de stage
        </p>
      </div>
      
      <div class="bg-white rounded-lg shadow-md p-8">
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <i class="fas fa-exclamation-circle text-red-600"></i>
            </div>
            <div class="ml-3">
              <p>{{ error }}</p>
            </div>
          </div>
        </div>
        
        <form @submit.prevent="register">
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
                placeholder="Entrez votre prénom"
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
                placeholder="Entrez votre nom"
              />
              <p v-if="v$.lastName.$error" class="error-message">
                {{ v$.lastName.$errors[0].$message }}
              </p>
            </div>
            
            <!-- Email -->
            <div class="form-group md:col-span-2">
              <label for="email" class="form-label">Email <span class="text-red-600">*</span></label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="input-field"
                :class="{ 'border-red-500': v$.email.$error }"
                @blur="v$.email.$touch()"
                placeholder="Entrez votre adresse email"
                autocomplete="email"
              />
              <p v-if="v$.email.$error" class="error-message">
                {{ v$.email.$errors[0].$message }}
              </p>
            </div>
            
            <!-- Phone -->
            <div class="form-group md:col-span-2">
              <label for="phone" class="form-label">Téléphone <span class="text-red-600">*</span></label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="input-field"
                :class="{ 'border-red-500': v$.phone.$error }"
                @blur="v$.phone.$touch()"
                placeholder="Entrez votre numéro de téléphone"
                autocomplete="tel"
              />
              <p v-if="v$.phone.$error" class="error-message">
                {{ v$.phone.$errors[0].$message }}
              </p>
            </div>
            
            <!-- Password -->
            <div class="form-group">
              <label for="password" class="form-label">Mot de passe <span class="text-red-600">*</span></label>
              <div class="relative">
                <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  class="input-field pr-10"
                  :class="{ 'border-red-500': v$.password.$error }"
                  @blur="v$.password.$touch()"
                  placeholder="Créez un mot de passe"
                  autocomplete="new-password"
                />
                <button 
                  type="button" 
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                  @click="togglePassword('password')"
                >
                  <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </button>
              </div>
              <p v-if="v$.password.$error" class="error-message">
                {{ v$.password.$errors[0].$message }}
              </p>
              <p class="text-xs text-gray-500 mt-1">
                Le mot de passe doit contenir au moins 8 caractères, incluant une lettre majuscule, une lettre minuscule et un chiffre.
              </p>
            </div>
            
            <!-- Confirm Password -->
            <div class="form-group">
              <label for="confirmPassword" class="form-label">Confirmer le mot de passe <span class="text-red-600">*</span></label>
              <div class="relative">
                <input
                  id="confirmPassword"
                  v-model="form.confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  class="input-field pr-10"
                  :class="{ 'border-red-500': v$.confirmPassword.$error }"
                  @blur="v$.confirmPassword.$touch()"
                  placeholder="Confirmez votre mot de passe"
                  autocomplete="new-password"
                />
                <button 
                  type="button" 
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                  @click="togglePassword('confirm')"
                >
                  <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </button>
              </div>
              <p v-if="v$.confirmPassword.$error" class="error-message">
                {{ v$.confirmPassword.$errors[0].$message }}
              </p>
            </div>
          </div>
          
          <!-- Terms and Conditions -->
          <div class="form-group mt-6">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  v-model="form.terms"
                  type="checkbox"
                  class="h-4 w-4 text-green-800 focus:ring-green-500 border-gray-300 rounded"
                  @change="v$.terms.$touch()"
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-medium text-gray-700">J'accepte les conditions</label>
                <p class="text-gray-500">
                  En créant un compte, j'accepte les 
                  <a href="#" class="text-green-800 underline hover:text-green-700">termes et conditions</a>
                  et la <a href="#" class="text-green-800 underline hover:text-green-700">politique de confidentialité</a>.
                </p>
              </div>
            </div>
            <p v-if="v$.terms.$error" class="error-message">
              {{ v$.terms.$errors[0].$message }}
            </p>
          </div>
          
          <div class="mt-8">
            <button 
              type="submit" 
              class="btn-primary w-full"
              :disabled="isSubmitting"
              :class="{ 'opacity-70 cursor-not-allowed': isSubmitting }"
            >
              <span v-if="isSubmitting">
                <i class="fas fa-spinner fa-spin mr-2"></i> Inscription en cours...
              </span>
              <span v-else>
                <i class="fas fa-user-plus mr-2"></i> Créer un compte
              </span>
            </button>
          </div>
        </form>
        
        <div class="mt-6 text-center">
          <p class="text-gray-600">
            Vous avez déjà un compte?
            <router-link to="/login" class="text-green-800 hover:text-green-700 font-medium">
              Se connecter
            </router-link>
          </p>
        </div>
        
        <div class="mt-8">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-4 bg-white text-gray-500">Ou s'inscrire avec</span>
            </div>
          </div>
          
          <div class="mt-6 grid grid-cols-2 gap-4">
            <button 
              type="button" 
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <i class="fab fa-google text-red-600 mr-2"></i> Google
            </button>
            <button 
              type="button" 
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <i class="fab fa-facebook-f text-blue-600 mr-2"></i> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, minLength, sameAs } from '@vuelidate/validators'

export default {
  name: 'Register',
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const form = reactive({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      terms: false
    })
    
    const isSubmitting = ref(false)
    const error = ref('')
    const showPassword = ref(false)
    const showConfirmPassword = ref(false)
    
    // Custom password validator to check for complexity
    const passwordValidator = (value) => {
      const hasUpperCase = /[A-Z]/.test(value)
      const hasLowerCase = /[a-z]/.test(value)
      const hasNumbers = /\d/.test(value)
      return hasUpperCase && hasLowerCase && hasNumbers
    }
    
    const rules = {
      firstName: { 
        required: helpers.withMessage('Veuillez entrer votre prénom', required)
      },
      lastName: { 
        required: helpers.withMessage('Veuillez entrer votre nom', required)
      },
      email: { 
        required: helpers.withMessage('Veuillez entrer votre adresse email', required),
        email: helpers.withMessage('Veuillez entrer une adresse email valide', email)
      },
      phone: { 
        required: helpers.withMessage('Veuillez entrer votre numéro de téléphone', required)
      },
      password: { 
        required: helpers.withMessage('Veuillez créer un mot de passe', required),
        minLength: helpers.withMessage('Le mot de passe doit contenir au moins 8 caractères', minLength(8)),
        complex: helpers.withMessage('Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre', passwordValidator)
      },
      confirmPassword: { 
        required: helpers.withMessage('Veuillez confirmer votre mot de passe', required),
        sameAsPassword: helpers.withMessage('Les mots de passe ne correspondent pas', sameAs(form.password))
      },
      terms: { 
        sameAs: helpers.withMessage('Vous devez accepter les termes et conditions', sameAs(true))
      }
    }
    
    const v$ = useVuelidate(rules, form)
    
    const togglePassword = (field) => {
      if (field === 'password') {
        showPassword.value = !showPassword.value
      } else {
        showConfirmPassword.value = !showConfirmPassword.value
      }
    }
    
    const register = async () => {
      const result = await v$.value.$validate()
      
      if (result) {
        isSubmitting.value = true
        error.value = ''
        
        try {
          await store.dispatch('register', {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            password: form.password
          })
          
          // Redirect to home page or dashboard
          router.push('/')
        } catch (err) {
          error.value = 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.'
        } finally {
          isSubmitting.value = false
        }
      }
    }
    
    return {
      form,
      v$,
      isSubmitting,
      error,
      showPassword,
      showConfirmPassword,
      togglePassword,
      register
    }
  }
}
</script>
