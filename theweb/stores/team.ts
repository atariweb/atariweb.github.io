import { defineStore } from 'pinia'
import axios from 'axios'

export interface TeamMember {
  _id: string
  name: string
  skill: string
  avatar: string
  backgroundGradient?: string
  createdAt: string
  updatedAt: string
}

export const useTeamStore = defineStore('team', {
  state: () => ({
    members: [] as TeamMember[],
    loading: false,
    error: null as string | null
  }),

  getters: {
    getMemberById: (state) => (id: string) => {
      return state.members.find(member => member._id === id)
    },
    
    getFeaturedMembers: (state) => (limit: number = 5) => {
      return state.members.slice(0, limit)
    }
  },

  actions: {
    async fetchTeamMembers() {
      this.loading = true
      
      try {
        // For testing, always use fake data
        this.members = this.getFakeData()
        
        // Uncomment below to use real API
        // const response = await axios.get('https://api.ezyton.com/public/home')
        // this.members = response.data.teams || this.getFakeData()
      } catch (error) {
        this.members = this.getFakeData()
      } finally {
        this.loading = false
      }
    },

    getFakeData() {
      return [
        {
          _id: '1',
          name: 'nirAbbas Borji',
          skill: 'Ui,Ux Designer',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center',
          backgroundGradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
          createdAt: '2024-01-15T10:00:00Z',
          updatedAt: '2024-01-15T10:00:00Z'
        },
        {
          _id: '2',
          name: 'AmirAbbas Borji',
          skill: 'Ui,Ux Designer',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=center',
          backgroundGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
          createdAt: '2024-01-10T10:00:00Z',
          updatedAt: '2024-01-10T10:00:00Z'
        },
        {
          _id: '3',
          name: 'AmirAbbas Borji',
          skill: 'Ui,Ux Designer',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=center',
          backgroundGradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #a8edea 100%)',
          createdAt: '2024-01-05T10:00:00Z',
          updatedAt: '2024-01-05T10:00:00Z'
        },
        {
          _id: '4',
          name: 'AmirAbbas Borji',
          skill: 'Ui,Ux Designer',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=center',
          backgroundGradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
          createdAt: '2024-01-01T10:00:00Z',
          updatedAt: '2024-01-01T10:00:00Z'
        },
        {
          _id: '5',
          name: 'AmirAbbas',
          skill: 'Ui,Ux Desig',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=center',
          backgroundGradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
          createdAt: '2023-12-25T10:00:00Z',
          updatedAt: '2023-12-25T10:00:00Z'
        }
      ]
    }
  }
})
