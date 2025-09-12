import { defineStore } from 'pinia'
import axios from 'axios'

export interface RoadmapItem {
  _id: string
  title: string
  status: 'done' | 'in-progress' | 'planned'
  des: string
  publish: number
  voice: string
  createdAt: string
  updatedAt: string
}

export const useRoadmapStore = defineStore('roadmap', {
  state: () => ({
    items: [] as RoadmapItem[],
    loading: false,
    error: null as string | null
  }),

  getters: {
    getItemsByStatus: (state) => (status: RoadmapItem['status']) => {
      return state.items.filter(item => item.status === status)
    },
    
    getCompletedItems: (state) => {
      return state.items.filter(item => item.status === 'done')
    },
    
    getInProgressItems: (state) => {
      return state.items.filter(item => item.status === 'in-progress')
    },
    
    getPlannedItems: (state) => {
      return state.items.filter(item => item.status === 'planned')
    },
    
    getItemsByYear: (state) => (year: number) => {
      return state.items.filter(item => item.publish === year)
    }
  },

  actions: {
    async fetchRoadmapItems() {
      this.loading = true
      
      try {
        const response = await axios.get('https://api.ezyton.com/public/home')
        this.items = response.data.roadmap || this.getFakeData()
      } catch (error) {
        this.items = this.getFakeData()
      } finally {
        this.loading = false
      }
    },

    getFakeData() {
      return [
        {
          _id: '1',
          title: 'Preparation & Research',
          des: 'With the launch of Ezyton.com, our digital identity was established. The whitepaper and tokenomics were introduced to ensure transparency and direction. Market research guides our strategy, and the EZY Token smart contract was developed and tested for security and efficiency.',
          status: 'done',
          publish: 2023,
          voice: 'https://api.ezyton.com/voice/preparation-research.mp3',
          createdAt: '2023-01-01T00:00:00Z',
          updatedAt: '2023-12-31T23:59:59Z'
        },
        {
          _id: '2',
          title: 'Community Building',
          des: 'Telegram, Discord, and social channels were launched. Initial awareness campaigns were carried out, and the first active user community started to grow.',
          status: 'done',
          publish: 2024,
          voice: 'https://api.ezyton.com/voice/community-building.mp3',
          createdAt: '2024-01-01T00:00:00Z',
          updatedAt: '2024-12-31T23:59:59Z'
        },
        {
          _id: '3',
          title: 'Main Product: Menu',
          des: 'Easy Shop is a shop building product that has a design similar to Instagram and is only used for products.',
          status: 'in-progress',
          publish: 2025,
          voice: 'https://api.ezyton.com/voice/main-product-menu.mp3',
          createdAt: '2025-01-01T00:00:00Z',
          updatedAt: '2025-01-15T12:00:00Z'
        },
        {
          _id: '4',
          title: 'Ezy Charge',
          des: 'Revolutionary charging solution for electric vehicles with smart grid integration and blockchain-based payment system.',
          status: 'planned',
          publish: 2025,
          voice: 'https://api.ezyton.com/voice/ezy-charge.mp3',
          createdAt: '2025-01-01T00:00:00Z',
          updatedAt: '2025-01-01T00:00:00Z'
        },
        {
          _id: '5',
          title: 'Ezy Connect',
          des: 'Advanced networking platform connecting businesses and individuals through secure, decentralized communication channels.',
          status: 'planned',
          publish: 2025,
          voice: 'https://api.ezyton.com/voice/ezy-connect.mp3',
          createdAt: '2025-01-01T00:00:00Z',
          updatedAt: '2025-01-01T00:00:00Z'
        },
        {
          _id: '6',
          title: 'Ezy Pay',
          des: 'Next-generation payment system with instant cross-border transactions and minimal fees using TON blockchain technology.',
          status: 'planned',
          publish: 2025,
          voice: 'https://api.ezyton.com/voice/ezy-pay.mp3',
          createdAt: '2025-01-01T00:00:00Z',
          updatedAt: '2025-01-01T00:00:00Z'
        },
        {
          _id: '7',
          title: 'Ezy Market',
          des: 'Decentralized marketplace for digital and physical goods with integrated smart contracts and automated escrow services.',
          status: 'planned',
          publish: 2025,
          voice: 'https://api.ezyton.com/voice/ezy-market.mp3',
          createdAt: '2025-01-01T00:00:00Z',
          updatedAt: '2025-01-01T00:00:00Z'
        },
        {
          _id: '8',
          title: 'Global Expansion',
          des: 'Strategic partnerships and market entry into key regions including Europe, Asia, and North America.',
          status: 'planned',
          publish: 2025,
          voice: 'https://api.ezyton.com/voice/global-expansion.mp3',
          createdAt: '2025-01-01T00:00:00Z',
          updatedAt: '2025-01-01T00:00:00Z'
        }
      ]
    }
  }
})
