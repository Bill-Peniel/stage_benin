<template>
  <div class="mb-8">
    <div class="flex justify-between">
      <div v-for="(step, index) in steps" :key="index" class="relative flex flex-col items-center">
        <div 
          class="w-10 h-10 flex items-center justify-center rounded-full border-2 z-10"
          :class="getStepClasses(index + 1)"
        >
          <span v-if="currentStep > index + 1"><i class="fas fa-check"></i></span>
          <span v-else>{{ index + 1 }}</span>
        </div>
        <p 
          class="mt-2 text-sm font-medium text-center"
          :class="currentStep >= index + 1 ? 'text-green-800' : 'text-gray-500'"
        >
          {{ step }}
        </p>
      </div>
    </div>
    
    <div class="relative flex items-center justify-between mt-4">
      <div class="absolute top-0 h-1 w-full bg-gray-200"></div>
      <div 
        class="absolute top-0 h-1 bg-green-700 transition-all duration-300"
        :style="{ width: `${progressPercentage}%` }"
      ></div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'StepIndicator',
  props: {
    steps: {
      type: Array,
      default: () => ['Informations personnelles', 'Informations sur le stage', 'Documents', 'Résumé']
    }
  },
  setup(props) {
    const store = useStore()
    
    const currentStep = computed(() => store.state.applicationForm.currentStep)
    
    const progressPercentage = computed(() => {
      return ((currentStep.value - 1) / (props.steps.length - 1)) * 100
    })
    
    const getStepClasses = (step) => {
      if (step < currentStep.value) {
        return 'border-green-800 bg-green-800 text-white'
      } else if (step === currentStep.value) {
        return 'border-green-800 text-green-800'
      } else {
        return 'border-gray-300 text-gray-500'
      }
    }
    
    return {
      currentStep,
      progressPercentage,
      getStepClasses
    }
  }
}
</script>
