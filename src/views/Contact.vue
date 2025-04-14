<template>
  <div class="page-container">
    <h1 class="page-title">Contactez-nous</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Contact Form -->
      <div class="lg:col-span-2">
        <ContactForm />
      </div>
      
      <!-- Contact Information -->
      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Informations de contact</h2>
          
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="flex-shrink-0 bg-green-100 rounded-full p-2">
                <i class="fas fa-map-marker-alt text-green-800"></i>
              </div>
              <div class="ml-4">
                <p class="font-medium">Adresse</p>
                <p class="text-gray-600">
                  Ministère de l'Économie et des Finances<br>
                  Route de l'Aéroport<br>
                  01 BP 302 Cotonou, Bénin
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 bg-green-100 rounded-full p-2">
                <i class="fas fa-phone text-green-800"></i>
              </div>
              <div class="ml-4">
                <p class="font-medium">Téléphone</p>
                <p class="text-gray-600">+229 21 30 10 20</p>
                <p class="text-gray-600">+229 21 30 14 24</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 bg-green-100 rounded-full p-2">
                <i class="fas fa-envelope text-green-800"></i>
              </div>
              <div class="ml-4">
                <p class="font-medium">Email</p>
                <p class="text-gray-600">contact@finances.bj</p>
                <p class="text-gray-600">stages@finances.bj</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 bg-green-100 rounded-full p-2">
                <i class="fas fa-clock text-green-800"></i>
              </div>
              <div class="ml-4">
                <p class="font-medium">Heures d'ouverture</p>
                <p class="text-gray-600">Lundi - Vendredi: 8h00 - 17h00</p>
                <p class="text-gray-600">Fermé le week-end et les jours fériés</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Nous suivre</h2>
          
          <div class="flex space-x-4">
            <a href="#" class="bg-blue-900 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-blue-800 transition duration-200">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="bg-blue-500 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-blue-400 transition duration-200">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="bg-red-600 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-red-500 transition duration-200">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="#" class="bg-gradient-to-r from-purple-600 to-pink-500 text-white h-10 w-10 rounded-full flex items-center justify-center hover:from-purple-500 hover:to-pink-400 transition duration-200">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          
          <div class="mt-6">
            <h3 class="text-lg font-medium text-gray-800 mb-3">Liens utiles</h3>
            <ul class="space-y-2">
              <li>
                <a href="https://www.finances.bj" target="_blank" class="text-green-800 hover:underline flex items-center">
                  <i class="fas fa-external-link-alt mr-2"></i> Site officiel du Ministère
                </a>
              </li>
              <li>
                <a href="#" class="text-green-800 hover:underline flex items-center">
                  <i class="fas fa-question-circle mr-2"></i> Foire aux questions
                </a>
              </li>
              <li>
                <a href="#" class="text-green-800 hover:underline flex items-center">
                  <i class="fas fa-file-alt mr-2"></i> Guide du stagiaire
                </a>
              </li>
              <li>
                <a href="#" class="text-green-800 hover:underline flex items-center">
                  <i class="fas fa-users mr-2"></i> Témoignages
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Map Section -->
    <div class="mt-10">
      <h2 class="section-title">Nous localiser</h2>
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="h-96 bg-gray-200 rounded-md overflow-hidden">
          <!-- Placeholder for a map, in a real application this would be an actual map -->
          <div class="h-full flex items-center justify-center bg-gradient-to-r from-green-50 to-blue-50">
            <div class="text-center">
              <i class="fas fa-map-marked-alt text-6xl text-green-800 mb-4"></i>
              <h3 class="text-xl font-semibold mb-2">Ministère de l'Économie et des Finances</h3>
              <p class="text-gray-600">Route de l'Aéroport, Cotonou, Bénin</p>
              <a 
                href="https://maps.google.com/?q=Ministère+de+l'Économie+et+des+Finances+Bénin"
                target="_blank"
                class="inline-block mt-4 bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
              >
                <i class="fas fa-directions mr-2"></i> Obtenir l'itinéraire
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
  name: 'Contact',
  components: {
    ContactForm
  }
}
</script>
