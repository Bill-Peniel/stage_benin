<template>
  <div class="page-container py-12">
    <div class="max-w-md mx-auto">
      <div class="text-center mb-8">
        <img src="../assets/logo.svg" alt="Logo" class="h-20 mx-auto mb-4">
        <h1 class="text-3xl font-bold text-gray-900">Connexion</h1>
        <p class="text-gray-600 mt-2">
          Accédez à votre compte pour gérer vos demandes de stage
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
        
        <form @submit.prevent="login">
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
              placeholder="Entrez votre adresse email"
              autocomplete="email"
            />
            <p v-if="v$.email.$error" class="error-message">
              {{ v$.email.$errors[0].$message }}
            </p>
          </div>
          
          <!-- Password -->
          <div class="form-group">
            <div class="flex justify-between">
              <label for="password" class="form-label">Mot de passe <span class="text-red-600">*</span></label>
              <a href="#" class="text-sm text-green-800 hover:text-green-700">Mot de passe oublié?</a>
            </div>
            <div class="relative">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                class="input-field pr-10"
                :class="{ 'border-red-500': v$.password.$error }"
                @blur="v$.password.$touch()"
                placeholder="Entrez votre mot de passe"
                autocomplete="current-password"
              />
              <button 
                type="button" 
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                @click="togglePassword"
              >
                <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </button>
            </div>
            <p v-if="v$.password.$error" class="error-message">
              {{ v$.password.$errors[0].$message }}
            </p>
          </div>
          
          <!-- Remember me -->
          <div class="flex items-center mb-6">
            <input
              id="remember"
              v-model="form.remember"
              type="checkbox"
              class="h-4 w-4 text-green-800 focus:ring-green-500 border-gray-300 rounded"
            />
            <label for="remember" class="ml-2 block text-sm text-gray-700">
              Se souvenir de moi
            </label>
          </div>
          
          <button 
            type="submit" 
            class="btn-primary w-full"
            :disabled="isSubmitting"
            :class="{ 'opacity-70 cursor-not-allowed': isSubmitting }"
          >
            <span v-if="isSubmitting">
              <i class="fas fa-spinner fa-spin mr-2"></i> Connexion en cours...
            </span>
            <span v-else>
              <i class="fas fa-sign-in-alt mr-2"></i> Se connecter
            </span>
          </button>
        </form>
        
        <div class="mt-6 text-center">
          <p class="text-gray-600">
            Vous n'avez pas de compte?
            <router-link to="/register" class="text-green-800 hover:text-green-700 font-medium">
              S'inscrire
            </router-link>
          </p>
        </div>
        
        <div class="mt-8">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-4 bg-white text-gray-500">Ou continuer avec</span>
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
import { required, email, helpers, minLength } from '@vuelidate/validators'

export default {
  name: 'Login',
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const form = reactive({
      email: '',
      password: '',
      remember: false
    })
    
    const isSubmitting = ref(false)
    const error = ref('')
    const showPassword = ref(false)
    
    const rules = {
      email: { 
        required: helpers.withMessage('Veuillez entrer votre adresse email', required),
        email: helpers.withMessage('Veuillez entrer une adresse email valide', email)
      },
      password: { 
        required: helpers.withMessage('Veuillez entrer votre mot de passe', required),
        minLength: helpers.withMessage('Le mot de passe doit contenir au moins 6 caractères', minLength(6))
      }
    }
    
    const v$ = useVuelidate(rules, form)
    
    const togglePassword = () => {
      showPassword.value = !showPassword.value
    }
    
    const login = async () => {
      const result = await v$.value.$validate()
      
      if (result) {
        isSubmitting.value = true
        error.value = ''
        
        try {
          await store.dispatch('login', {
            email: form.email,
            password: form.password
          })
          
          // Redirect to home page or dashboard
          router.push('/')
        } catch (err) {
          error.value = 'Identifiants incorrects. Veuillez réessayer.'
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
      togglePassword,
      login
    }
  }
}
</script>
