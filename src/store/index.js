import { createStore } from 'vuex'

export default createStore({
  state: {
    // User information
    user: null,
    
    // Application form data
    applicationForm: {
      // Step 1: Personal Information
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        dateOfBirth: '',
        nationality: '',
        gender: '',
        educationLevel: ''
      },
      
      // Step 2: Internship Information
      internshipInfo: {
        internshipType: '',
        department: '',
        startDate: '',
        endDate: '',
        motivation: '',
        skills: '',
        previousExperience: '',
        universityName: '',
        studyField: '',
        studyYear: ''
      },
      
      // Step 3: Document Upload
      documents: {
        cv: null,
        coverLetter: null,
        identityCard: null,
        universityEnrollment: null,
        recommendation: null,
        otherDocuments: []
      },
      
      // Current step in the application process (1-4)
      currentStep: 1,
      
      // Whether submission is in progress
      isSubmitting: false,
      
      // Submission result
      submissionResult: null
    }
  },
  
  mutations: {
    updatePersonalInfo(state, personalInfo) {
      state.applicationForm.personalInfo = {
        ...state.applicationForm.personalInfo,
        ...personalInfo
      }
    },
    
    updateInternshipInfo(state, internshipInfo) {
      state.applicationForm.internshipInfo = {
        ...state.applicationForm.internshipInfo,
        ...internshipInfo
      }
    },
    
    updateDocuments(state, documents) {
      state.applicationForm.documents = {
        ...state.applicationForm.documents,
        ...documents
      }
    },
    
    setCurrentStep(state, step) {
      state.applicationForm.currentStep = step
    },
    
    nextStep(state) {
      if (state.applicationForm.currentStep < 4) {
        state.applicationForm.currentStep++
      }
    },
    
    previousStep(state) {
      if (state.applicationForm.currentStep > 1) {
        state.applicationForm.currentStep--
      }
    },
    
    resetApplicationForm(state) {
      state.applicationForm = {
        personalInfo: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          dateOfBirth: '',
          nationality: '',
          gender: '',
          educationLevel: ''
        },
        internshipInfo: {
          internshipType: '',
          department: '',
          startDate: '',
          endDate: '',
          motivation: '',
          skills: '',
          previousExperience: '',
          universityName: '',
          studyField: '',
          studyYear: ''
        },
        documents: {
          cv: null,
          coverLetter: null,
          identityCard: null,
          universityEnrollment: null,
          recommendation: null,
          otherDocuments: []
        },
        currentStep: 1,
        isSubmitting: false,
        submissionResult: null
      }
    },
    
    setSubmitting(state, isSubmitting) {
      state.applicationForm.isSubmitting = isSubmitting
    },
    
    setSubmissionResult(state, result) {
      state.applicationForm.submissionResult = result
    },
    
    setUser(state, user) {
      state.user = user
    },
    
    clearUser(state) {
      state.user = null
    }
  },
  
  actions: {
    submitApplication({ commit, state }) {
      return new Promise((resolve) => {
        commit('setSubmitting', true)
        
        // In a real application, this would be an API call
        setTimeout(() => {
          // Simulate successful submission
          const result = {
            success: true,
            applicationId: 'APP-' + Math.floor(Math.random() * 10000),
            message: 'Votre demande de stage a été soumise avec succès.'
          }
          
          commit('setSubmissionResult', result)
          commit('setSubmitting', false)
          resolve(result)
        }, 1500)
      })
    },
    
    login({ commit }, credentials) {
      return new Promise((resolve) => {
        // In a real application, this would be an API call
        setTimeout(() => {
          // Simulate successful login
          const user = {
            id: 1,
            email: credentials.email,
            name: 'Utilisateur Test',
            role: 'student'
          }
          
          commit('setUser', user)
          resolve(user)
        }, 800)
      })
    },
    
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('clearUser')
        resolve()
      })
    },
    
    register({ commit }, userData) {
      return new Promise((resolve) => {
        // In a real application, this would be an API call
        setTimeout(() => {
          // Simulate successful registration
          const user = {
            id: Math.floor(Math.random() * 1000),
            email: userData.email,
            name: `${userData.firstName} ${userData.lastName}`,
            role: 'student'
          }
          
          commit('setUser', user)
          resolve(user)
        }, 800)
      })
    }
  },
  
  getters: {
    isAuthenticated: state => !!state.user,
    currentUser: state => state.user,
    applicationProgress: state => {
      const steps = 4
      return (state.applicationForm.currentStep / steps) * 100
    }
  }
})
