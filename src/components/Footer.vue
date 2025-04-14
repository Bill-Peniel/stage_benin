<template>
  <footer class="bg-gray-100 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Ministry Information -->
        <div>
          <div class="flex items-center mb-4">
            <img src="../assets/ministry-logo.svg" alt="Logo du Ministère" class="h-10 w-auto" />
            <h3 class="ml-2 text-lg font-semibold text-gray-900">MEF Bénin</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Ministère de l'Économie et des Finances<br>
            République du Bénin<br>
            01 BP 302 Cotonou<br>
            Tél: +229 21 30 10 20
          </p>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Liens Rapides</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link to="/" class="text-gray-600 hover:text-green-800 transition duration-150">
                Accueil
              </router-link>
            </li>
            <li>
              <router-link to="/application" class="text-gray-600 hover:text-green-800 transition duration-150">
                Faire une demande
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-600 hover:text-green-800 transition duration-150">
                Contact
              </router-link>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-green-800 transition duration-150">
                À propos du ministère
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-green-800 transition duration-150">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Connect with us -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Suivez-nous</h3>
          <div class="flex space-x-4 mb-4">
            <a href="#" class="text-gray-600 hover:text-blue-600 transition duration-150">
              <i class="fab fa-facebook-f text-xl"></i>
              <span class="sr-only">Facebook</span>
            </a>
            <a href="#" class="text-gray-600 hover:text-blue-400 transition duration-150">
              <i class="fab fa-twitter text-xl"></i>
              <span class="sr-only">Twitter</span>
            </a>
            <a href="#" class="text-gray-600 hover:text-red-600 transition duration-150">
              <i class="fab fa-youtube text-xl"></i>
              <span class="sr-only">YouTube</span>
            </a>
            <a href="#" class="text-gray-600 hover:text-purple-600 transition duration-150">
              <i class="fab fa-instagram text-xl"></i>
              <span class="sr-only">Instagram</span>
            </a>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Newsletter</h3>
          <div class="flex">
            <input 
              type="email" 
              placeholder="Votre email" 
              class="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            >
            <button class="bg-green-800 text-white px-4 py-2 rounded-r-md hover:bg-green-700 focus:outline-none">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-200 mt-8 pt-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 text-sm">
            © {{ currentYear }} Ministère de l'Économie et des Finances du Bénin. Tous droits réservés.
          </p>
          <div class="mt-4 md:mt-0">
            <ul class="flex space-x-4 text-sm">
              <li>
                <a href="#" class="text-gray-600 hover:text-green-800 transition duration-150">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-green-800 transition duration-150">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-green-800 transition duration-150">
                  Accessibilité
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Footer',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())
    
    return {
      currentYear
    }
  }
}
</script>
