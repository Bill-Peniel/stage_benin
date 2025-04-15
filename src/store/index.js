import { createStore } from 'vuex'

export default createStore({
  state: {
    // User information
    user: null,
    
    // Utilisateurs prédéfinis pour le test (simulation de base de données)
    predefinedUsers: [
      {
        id: 'admin-1',
        email: 'admin@admin.com',
        password: 'admin2025',
        name: 'Administrateur',
        role: 'admin'
      },
      {
        id: 'dpaf-1',
        email: 'dpaf@dpaf.com',
        password: 'dpaf2025',
        name: 'Direction du Personnel Administratif et Financier',
        role: 'dpaf'
      },
      {
        id: 'strc-1',
        email: 'strc@strc.com',
        password: 'strc2025',
        name: 'Structure de Stage',
        role: 'structure'
      },
      {
        id: 'tuteur-1',
        email: 'tuteur@tuteur.com',
        password: 'tuteur2025',
        name: 'Tuteur de Stage',
        role: 'tuteur'
      },
      {
        id: 'stg-1',
        email: 'stg@stg.com',
        password: 'stg2025',
        name: 'Stagiaire Test',
        role: 'stagiaire'
      }
    ],
    
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
    
    login({ commit, state }, credentials) {
      return new Promise((resolve, reject) => {
        // Simuler un délai d'authentification (comme avec une API)
        setTimeout(() => {
          // Vérifier d'abord les utilisateurs prédéfinis
          const predefinedUser = state.predefinedUsers.find(
            u => u.email === credentials.email && u.password === credentials.password
          )
          
          if (predefinedUser) {
            // Créer un objet utilisateur sans exposer le mot de passe
            const userToStore = {
              id: predefinedUser.id,
              email: predefinedUser.email,
              name: predefinedUser.name,
              role: predefinedUser.role
            }
            
            commit('setUser', userToStore)
            resolve(userToStore)
          } else {
            // Vérifier si c'est le compte de test stagiaire
            if (credentials.email === 'stg@stg.com' && credentials.password === 'stg2025') {
              const testUser = {
                id: 'stg-1',
                email: 'stg@stg.com',
                name: 'Stagiaire Test',
                role: 'stagiaire'
              }
              commit('setUser', testUser)
              resolve(testUser)
            } else {
              // Identifiants incorrects
              reject(new Error('Identifiants incorrects. Veuillez réessayer.'))
            }
          }
        }, 800)
      })
    },
    
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('clearUser')
        // Simuler la déconnexion d'une API
        setTimeout(() => {
          resolve()
        }, 300)
      })
    },
    
    register({ commit }, userData) {
      return new Promise((resolve) => {
        // Simuler un délai d'enregistrement (comme avec une API)
        setTimeout(() => {
          // Créer un nouvel utilisateur avec le rôle stagiaire
          const newUser = {
            id: 'stg-' + Math.floor(Math.random() * 1000),
            email: userData.email,
            name: `${userData.firstName} ${userData.lastName}`,
            role: 'stagiaire'
          }
          
          commit('setUser', newUser)
          resolve(newUser)
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
    },
    // Getters pour vérifier le rôle de l'utilisateur
    isAdmin: state => state.user && state.user.role === 'admin',
    isDpaf: state => state.user && state.user.role === 'dpaf',
    isStructure: state => state.user && state.user.role === 'structure',
    isTuteur: state => state.user && state.user.role === 'tuteur',
    isStagiaire: state => state.user && state.user.role === 'stagiaire',
    // Permet de vérifier si l'utilisateur a accès à un tableau de bord administratif
    hasAdminAccess: state => {
      if (!state.user) return false;
      return ['admin', 'dpaf', 'structure', 'tuteur'].includes(state.user.role);
    },
    // Retourne le nom du rôle en français pour l'affichage
    roleDisplay: state => {
      if (!state.user) return '';
      
      const roleMap = {
        'admin': 'Administrateur',
        'dpaf': 'Direction du Personnel',
        'structure': 'Structure de Stage',
        'tuteur': 'Tuteur de Stage',
        'stagiaire': 'Stagiaire'
      };
      
      return roleMap[state.user.role] || state.user.role;
    }
  }
})
