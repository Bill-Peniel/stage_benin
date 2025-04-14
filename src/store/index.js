import { createStore } from 'vuex'

export default createStore({
  state: {
    // User information
    user: null,
    
    // Dashboard data
    adminDashboard: {
      structures: [],
      agents: [],
      pendingRequests: 0
    },
    
    dpafDashboard: {
      pendingApplications: [],
      approvedApplications: [],
      rejectedApplications: []
    },
    
    internDashboard: {
      applicationStatus: null,
      applicationCode: '',
      assignedMentor: null,
      startDate: null,
      endDate: null,
      evaluations: []
    },
    
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
    },
    
    // Admin Dashboard mutations
    addStructure(state, structure) {
      state.adminDashboard.structures.push(structure)
    },
    
    removeStructure(state, structureId) {
      state.adminDashboard.structures = state.adminDashboard.structures.filter(
        s => s.id !== structureId
      )
    },
    
    addAgent(state, agent) {
      state.adminDashboard.agents.push(agent)
    },
    
    removeAgent(state, agentId) {
      state.adminDashboard.agents = state.adminDashboard.agents.filter(
        a => a.id !== agentId
      )
    },
    
    // DPAF Dashboard mutations
    setPendingApplications(state, applications) {
      state.dpafDashboard.pendingApplications = applications
    },
    
    approveApplication(state, applicationId) {
      // Find application in pending
      const application = state.dpafDashboard.pendingApplications.find(
        a => a.id === applicationId
      )
      
      if (application) {
        // Move to approved
        state.dpafDashboard.approvedApplications.push(application)
        
        // Remove from pending
        state.dpafDashboard.pendingApplications = state.dpafDashboard.pendingApplications.filter(
          a => a.id !== applicationId
        )
      }
    },
    
    rejectApplication(state, applicationId) {
      // Find application in pending
      const application = state.dpafDashboard.pendingApplications.find(
        a => a.id === applicationId
      )
      
      if (application) {
        // Move to rejected
        state.dpafDashboard.rejectedApplications.push(application)
        
        // Remove from pending
        state.dpafDashboard.pendingApplications = state.dpafDashboard.pendingApplications.filter(
          a => a.id !== applicationId
        )
      }
    },
    
    // Intern Dashboard mutations
    setApplicationCode(state, code) {
      state.internDashboard.applicationCode = code
    },
    
    setApplicationStatus(state, status) {
      state.internDashboard.applicationStatus = status
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
    },
    
    // Admin Dashboard actions
    createStructure({ commit }, structureData) {
      return new Promise((resolve) => {
        // In a real application, this would be an API call
        setTimeout(() => {
          const newStructure = {
            id: Math.floor(Math.random() * 10000),
            name: structureData.name,
            description: structureData.description,
            createdAt: new Date().toISOString()
          }
          
          commit('addStructure', newStructure)
          resolve(newStructure)
        }, 500)
      })
    },
    
    createAgent({ commit }, agentData) {
      return new Promise((resolve) => {
        // In a real application, this would be an API call
        setTimeout(() => {
          const newAgent = {
            id: Math.floor(Math.random() * 10000),
            name: `${agentData.firstName} ${agentData.lastName}`,
            email: agentData.email,
            structure: agentData.structure,
            position: agentData.position,
            createdAt: new Date().toISOString()
          }
          
          commit('addAgent', newAgent)
          resolve(newAgent)
        }, 500)
      })
    },
    
    // DPAF Dashboard actions
    fetchPendingApplications({ commit }) {
      return new Promise((resolve) => {
        // In a real application, this would be an API call
        setTimeout(() => {
          const applications = [
            {
              id: 'APP-1234',
              applicantName: 'Jean Dupont',
              submissionDate: '2025-03-01',
              department: 'Comptabilité',
              duration: '3 mois',
              status: 'pending'
            },
            {
              id: 'APP-5678',
              applicantName: 'Marie Lafleur',
              submissionDate: '2025-03-10',
              department: 'Informatique',
              duration: '6 mois',
              status: 'pending'
            }
          ]
          
          commit('setPendingApplications', applications)
          resolve(applications)
        }, 700)
      })
    },
    
    processApplication({ commit }, { applicationId, decision }) {
      return new Promise((resolve) => {
        // In a real application, this would be an API call
        setTimeout(() => {
          if (decision === 'approve') {
            commit('approveApplication', applicationId)
          } else {
            commit('rejectApplication', applicationId)
          }
          resolve(true)
        }, 500)
      })
    },
    
    // Intern Dashboard actions
    checkApplicationStatus({ commit }, applicationCode) {
      return new Promise((resolve) => {
        // In a real application, this would be an API call
        setTimeout(() => {
          // Simulate application status check
          const status = {
            code: applicationCode,
            status: 'approved', // or 'pending', 'rejected'
            details: {
              approvalDate: '2025-04-15',
              startDate: '2025-05-01',
              endDate: '2025-08-01',
              department: 'Comptabilité',
              mentor: 'Laurent Dubois'
            }
          }
          
          commit('setApplicationCode', applicationCode)
          commit('setApplicationStatus', status)
          resolve(status)
        }, 600)
      })
    }
  },
  
  getters: {
    isAuthenticated: state => !!state.user,
    currentUser: state => state.user,
    userRole: state => state.user ? state.user.role : null,
    isAdmin: state => state.user && state.user.role === 'admin',
    isDpaf: state => state.user && state.user.role === 'dpaf',
    isIntern: state => state.user && state.user.role === 'student',
    isMentor: state => state.user && state.user.role === 'mentor',
    
    // Application form getters
    applicationProgress: state => {
      const steps = 4
      return (state.applicationForm.currentStep / steps) * 100
    },
    applicationId: state => state.applicationForm.submissionResult ? 
      state.applicationForm.submissionResult.applicationId : null,
    
    // Admin Dashboard getters
    structures: state => state.adminDashboard.structures,
    agents: state => state.adminDashboard.agents,
    pendingRequestsCount: state => state.adminDashboard.pendingRequests,
    
    // DPAF Dashboard getters
    pendingApplications: state => state.dpafDashboard.pendingApplications,
    approvedApplications: state => state.dpafDashboard.approvedApplications,
    rejectedApplications: state => state.dpafDashboard.rejectedApplications,
    totalApplications: state => 
      state.dpafDashboard.pendingApplications.length + 
      state.dpafDashboard.approvedApplications.length + 
      state.dpafDashboard.rejectedApplications.length,
    
    // Intern Dashboard getters
    internApplicationStatus: state => state.internDashboard.applicationStatus,
    internApplicationCode: state => state.internDashboard.applicationCode,
    internAssignedMentor: state => state.internDashboard.assignedMentor,
    internInternshipDates: state => ({
      startDate: state.internDashboard.startDate,
      endDate: state.internDashboard.endDate
    }),
    internEvaluations: state => state.internDashboard.evaluations
  }
})
