
<template>
  <div class="min-h-screen bg-gray-100 flex">
    <Sidebar />
    <div class="flex-1 ml-64">
      <header class="bg-primary shadow">
        <div class="px-4 py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold text-white">Gestion des tuteurs</h1>
          <button @click="showAddModal = true" class="bg-white text-primary px-4 py-2 rounded hover:bg-gray-100">
            <i class="fas fa-plus mr-2"></i> Ajouter un tuteur
          </button>
        </div>
      </header>

      <main class="p-6">
        <div class="bg-white shadow rounded-lg">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Structure</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Téléphone</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stagiaires</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="n in 5" :key="n">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">M. Koffi JOHNSON</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">Direction des Systèmes d'Information</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">k.johnson@mef.bj</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">+229 97000000</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">2</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button @click="editTuteur(n)" class="text-primary hover:text-primary-dark mr-3" title="Modifier">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button @click="deleteTuteur(n)" class="text-danger hover:text-red-700" title="Supprimer">
                      <i class="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../../components/Sidebar.vue'

export default {
  name: 'Tuteurs',
  components: { Sidebar },
  setup() {
    const showAddModal = ref(false)

    const editTuteur = (id) => {
      // Logique de modification
    }

    const deleteTuteur = (id) => {
      // Logique de suppression
    }

    return {
      showAddModal,
      editTuteur,
      deleteTuteur
    }
  }
}
</script>
