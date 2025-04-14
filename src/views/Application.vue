<template>
  <div class="page-container">
    <h1 class="page-title">Faire une demande de stage</h1>
    
    <StepIndicator />
    
    <transition name="fade" mode="out-in">
      <PersonalInfo v-if="currentStep === 1" />
      <InternshipInfo v-else-if="currentStep === 2" />
      <DocumentUpload v-else-if="currentStep === 3" />
      <Summary v-else-if="currentStep === 4" />
    </transition>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import StepIndicator from '../components/application/StepIndicator.vue'
import PersonalInfo from '../components/application/PersonalInfo.vue'
import InternshipInfo from '../components/application/InternshipInfo.vue'
import DocumentUpload from '../components/application/DocumentUpload.vue'
import Summary from '../components/application/Summary.vue'

export default {
  name: 'Application',
  components: {
    StepIndicator,
    PersonalInfo,
    InternshipInfo,
    DocumentUpload,
    Summary
  },
  setup() {
    const store = useStore()
    
    const currentStep = computed(() => store.state.applicationForm.currentStep)
    
    onMounted(() => {
      // Set the current step to 1 when the component is mounted
      // This ensures that the form always starts at the beginning when navigating to this page
      store.commit('setCurrentStep', 1)
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
    
    return {
      currentStep
    }
  }
}
</script>
