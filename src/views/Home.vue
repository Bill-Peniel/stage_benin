<template>
  <div class="page-container">
    <!-- Hero Section -->
    <section class="relative bg-gray-50 rounded-xl overflow-hidden mb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-6 md:px-12">
        <div class="flex flex-col justify-center">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Programme de Stages du Ministère de l'Économie et des Finances
          </h1>
          <p class="text-lg text-gray-600 mb-6">
            Découvrez les opportunités de stage au sein du Ministère de l'Économie et des Finances du Bénin 
            et développez vos compétences professionnelles.
          </p>
          <div class="flex flex-wrap gap-4">
            <router-link to="/application" class="btn-primary text-center">
              Faire une demande
            </router-link>
            <a href="#about" class="btn-outline text-center">
              En savoir plus
            </a>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="relative h-64 w-full md:h-80 overflow-hidden rounded-lg">
            <div class="absolute inset-0 bg-gradient-to-r from-green-800 to-blue-900 opacity-90"></div>
            <div class="relative z-10 h-full flex flex-col justify-center items-center text-white text-center p-6">
              <i class="fas fa-graduation-cap text-5xl mb-4"></i>
              <h2 class="text-2xl font-bold mb-2">Investissez dans votre avenir</h2>
              <p class="mb-4">Rejoignez une institution gouvernementale de premier plan</p>
              <div class="grid grid-cols-3 gap-4 w-full max-w-xs">
                <div class="text-center">
                  <div class="text-xl font-bold">+50</div>
                  <div class="text-sm">Stages</div>
                </div>
                <div class="text-center">
                  <div class="text-xl font-bold">8</div>
                  <div class="text-sm">Départements</div>
                </div>
                <div class="text-center">
                  <div class="text-xl font-bold">+500</div>
                  <div class="text-sm">Stagiaires</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- About Section -->
    <section id="about" class="mb-12">
      <h2 class="section-title">À propos du programme de stages</h2>
      <div class="bg-white rounded-lg shadow-md p-6">
        <p class="text-gray-600 mb-4">
          Le programme de stages du Ministère de l'Économie et des Finances du Bénin offre aux étudiants 
          et jeunes diplômés l'opportunité d'acquérir une expérience professionnelle enrichissante 
          au sein d'une institution gouvernementale de premier plan.
        </p>
        <p class="text-gray-600 mb-4">
          Nos stages sont conçus pour vous permettre de:
        </p>
        <ul class="list-disc pl-5 mb-6 text-gray-600 space-y-2">
          <li>Mettre en pratique vos connaissances théoriques dans un environnement professionnel</li>
          <li>Développer de nouvelles compétences techniques et transversales</li>
          <li>Comprendre le fonctionnement des finances publiques et de l'économie nationale</li>
          <li>Travailler sur des projets concrets et impactants pour le développement du Bénin</li>
          <li>Créer un réseau professionnel dans le secteur public</li>
        </ul>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-lg font-semibold text-green-800 mb-2">Types de stages proposés</h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <i class="fas fa-graduation-cap text-green-700 mt-1 mr-2"></i>
                <div>
                  <span class="font-medium">Stage académique</span> - Pour les étudiants dans le cadre de leur cursus
                </div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-briefcase text-green-700 mt-1 mr-2"></i>
                <div>
                  <span class="font-medium">Stage professionnel</span> - Pour les jeunes diplômés souhaitant acquérir de l'expérience
                </div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-search text-green-700 mt-1 mr-2"></i>
                <div>
                  <span class="font-medium">Stage de recherche</span> - Pour les étudiants en master ou doctorat
                </div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-eye text-green-700 mt-1 mr-2"></i>
                <div>
                  <span class="font-medium">Stage d'observation</span> - Stages courts de découverte du ministère
                </div>
              </li>
            </ul>
          </div>
          <div class="bg-gray-50 rounded-md p-4">
            <h3 class="text-lg font-semibold text-blue-900 mb-2">Départements d'accueil</h3>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-start">
                <i class="fas fa-chart-pie text-blue-800 mt-1 mr-2"></i>
                <div>Direction Générale du Budget</div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-money-bill-wave text-blue-800 mt-1 mr-2"></i>
                <div>Direction Générale du Trésor</div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-calculator text-blue-800 mt-1 mr-2"></i>
                <div>Direction Générale des Impôts</div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-ship text-blue-800 mt-1 mr-2"></i>
                <div>Direction Générale des Douanes</div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-file-contract text-blue-800 mt-1 mr-2"></i>
                <div>Direction des Marchés Publics</div>
              </li>
              <li class="flex items-start">
                <i class="fas fa-desktop text-blue-800 mt-1 mr-2"></i>
                <div>Direction des Systèmes d'Information</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Process Section -->
    <section class="mb-12">
      <h2 class="section-title">Processus de candidature</h2>
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="bg-gray-50 rounded-md p-4 text-center">
            <div class="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <i class="fas fa-user-edit"></i>
            </div>
            <h3 class="font-semibold mb-2">1. Inscription</h3>
            <p class="text-sm text-gray-600">
              Créez un compte et remplissez vos informations personnelles
            </p>
          </div>
          <div class="bg-gray-50 rounded-md p-4 text-center">
            <div class="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <i class="fas fa-file-alt"></i>
            </div>
            <h3 class="font-semibold mb-2">2. Demande</h3>
            <p class="text-sm text-gray-600">
              Soumettez votre demande avec tous les documents requis
            </p>
          </div>
          <div class="bg-gray-50 rounded-md p-4 text-center">
            <div class="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <i class="fas fa-clipboard-check"></i>
            </div>
            <h3 class="font-semibold mb-2">3. Examen</h3>
            <p class="text-sm text-gray-600">
              Votre dossier est examiné par les services compétents
            </p>
          </div>
          <div class="bg-gray-50 rounded-md p-4 text-center">
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <i class="fas fa-envelope-open-text"></i>
            </div>
            <h3 class="font-semibold mb-2">4. Réponse</h3>
            <p class="text-sm text-gray-600">
              Vous recevez une réponse par email dans les meilleurs délais
            </p>
          </div>
        </div>
        <div class="mt-8 text-center">
          <router-link to="/application" class="btn-primary">
            Commencer ma demande
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="mb-12">
      <h2 class="section-title">Témoignages d'anciens stagiaires</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <i class="fas fa-user text-green-800"></i>
            </div>
            <div class="ml-4">
              <h3 class="font-semibold">Kofi Mensah</h3>
              <p class="text-sm text-gray-600">Stage à la Direction Générale du Budget</p>
            </div>
          </div>
          <p class="text-gray-600">
            "Mon stage au sein de la Direction Générale du Budget a été une expérience très enrichissante. 
            J'ai pu mettre en pratique mes connaissances en finances publiques et comprendre les mécanismes 
            d'élaboration du budget national."
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <i class="fas fa-user text-blue-800"></i>
            </div>
            <div class="ml-4">
              <h3 class="font-semibold">Aminata Diallo</h3>
              <p class="text-sm text-gray-600">Stage à la Direction des Systèmes d'Information</p>
            </div>
          </div>
          <p class="text-gray-600">
            "J'ai eu l'opportunité de participer à la digitalisation des services du ministère. 
            Ce stage m'a permis d'acquérir des compétences techniques et de comprendre les enjeux 
            de la transformation numérique dans l'administration publique."
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <i class="fas fa-user text-green-800"></i>
            </div>
            <div class="ml-4">
              <h3 class="font-semibold">David Adjovi</h3>
              <p class="text-sm text-gray-600">Stage à la Direction Générale des Impôts</p>
            </div>
          </div>
          <p class="text-gray-600">
            "Ce stage m'a ouvert les portes du monde professionnel. J'ai approfondi mes connaissances 
            en fiscalité et j'ai pu travailler sur des dossiers concrets. Cette expérience a été 
            déterminante pour mon orientation professionnelle."
          </p>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="mb-12">
      <h2 class="section-title">Questions fréquentes</h2>
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="space-y-4">
          <div class="border-b border-gray-200 pb-4">
            <button 
              @click="toggleFaq(1)" 
              class="flex justify-between items-center w-full text-left font-semibold"
            >
              <span>Quelles sont les conditions pour postuler à un stage ?</span>
              <i :class="[openFaq === 1 ? 'fa-chevron-up' : 'fa-chevron-down', 'fas']"></i>
            </button>
            <div v-show="openFaq === 1" class="mt-2 text-gray-600">
              <p>
                Pour postuler à un stage au Ministère de l'Économie et des Finances, vous devez :
              </p>
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Être étudiant ou jeune diplômé</li>
                <li>Avoir un niveau minimum de baccalauréat</li>
                <li>Fournir tous les documents demandés</li>
                <li>Pour les stages académiques, être inscrit dans un établissement d'enseignement</li>
              </ul>
            </div>
          </div>
          
          <div class="border-b border-gray-200 pb-4">
            <button 
              @click="toggleFaq(2)" 
              class="flex justify-between items-center w-full text-left font-semibold"
            >
              <span>Quelle est la durée des stages ?</span>
              <i :class="[openFaq === 2 ? 'fa-chevron-up' : 'fa-chevron-down', 'fas']"></i>
            </button>
            <div v-show="openFaq === 2" class="mt-2 text-gray-600">
              <p>
                La durée des stages varie selon le type :
              </p>
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Stage académique : 1 à 6 mois</li>
                <li>Stage professionnel : 3 à 12 mois</li>
                <li>Stage de recherche : 3 à 6 mois</li>
                <li>Stage d'observation : 2 semaines à 1 mois</li>
              </ul>
            </div>
          </div>
          
          <div class="border-b border-gray-200 pb-4">
            <button 
              @click="toggleFaq(3)" 
              class="flex justify-between items-center w-full text-left font-semibold"
            >
              <span>Les stages sont-ils rémunérés ?</span>
              <i :class="[openFaq === 3 ? 'fa-chevron-up' : 'fa-chevron-down', 'fas']"></i>
            </button>
            <div v-show="openFaq === 3" class="mt-2 text-gray-600">
              <p>
                La rémunération dépend du type et de la durée du stage :
              </p>
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Les stages académiques obligatoires de moins de 2 mois ne sont généralement pas rémunérés</li>
                <li>Les stages de plus de 2 mois peuvent bénéficier d'une gratification</li>
                <li>Les stages professionnels de longue durée sont généralement rémunérés</li>
                <li>Les conditions exactes sont précisées dans la convention de stage</li>
              </ul>
            </div>
          </div>
          
          <div class="border-b border-gray-200 pb-4">
            <button 
              @click="toggleFaq(4)" 
              class="flex justify-between items-center w-full text-left font-semibold"
            >
              <span>Comment puis-je suivre l'état de ma demande ?</span>
              <i :class="[openFaq === 4 ? 'fa-chevron-up' : 'fa-chevron-down', 'fas']"></i>
            </button>
            <div v-show="openFaq === 4" class="mt-2 text-gray-600">
              <p>
                Après avoir soumis votre demande, vous recevrez un email de confirmation avec un numéro de référence.
                Vous pourrez suivre l'état de votre demande en vous connectant à votre compte sur la plateforme.
                Vous serez également notifié par email à chaque étape importante du processus.
              </p>
            </div>
          </div>
          
          <div class="border-b border-gray-200 pb-4">
            <button 
              @click="toggleFaq(5)" 
              class="flex justify-between items-center w-full text-left font-semibold"
            >
              <span>Quels sont les documents requis pour postuler ?</span>
              <i :class="[openFaq === 5 ? 'fa-chevron-up' : 'fa-chevron-down', 'fas']"></i>
            </button>
            <div v-show="openFaq === 5" class="mt-2 text-gray-600">
              <p>
                Les documents à fournir dépendent du type de stage, mais généralement vous devrez préparer :
              </p>
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Un CV à jour</li>
                <li>Une lettre de motivation</li>
                <li>Une pièce d'identité</li>
                <li>Pour les stages académiques : une attestation d'inscription universitaire</li>
                <li>Pour les stages professionnels et de recherche : une lettre de recommandation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="mb-12">
      <div class="bg-gradient-to-r from-green-800 to-blue-900 rounded-lg shadow-md p-8 text-white text-center">
        <h2 class="text-2xl font-bold mb-4">Prêt à lancer votre carrière ?</h2>
        <p class="text-lg mb-6">
          Rejoignez le Ministère de l'Économie et des Finances pour une expérience enrichissante
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/application" class="bg-white text-green-800 hover:bg-gray-100 py-2 px-6 rounded-md font-medium transition duration-200">
            Postuler maintenant
          </router-link>
          <router-link to="/contact" class="border border-white text-white hover:bg-white hover:text-green-800 py-2 px-6 rounded-md font-medium transition duration-200">
            Nous contacter
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    const openFaq = ref(null)
    
    const toggleFaq = (index) => {
      if (openFaq.value === index) {
        openFaq.value = null
      } else {
        openFaq.value = index
      }
    }
    
    return {
      openFaq,
      toggleFaq
    }
  }
}
</script>
