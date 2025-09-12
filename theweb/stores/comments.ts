import { defineStore } from 'pinia'
import axios from 'axios'

export interface Comment {
  _id: string
  name: string
  message: string
  customerJob: string
  avatar: string
  createdAt: string
  updatedAt: string
}

export const useCommentsStore = defineStore('comments', {
  state: () => ({
    comments: [] as Comment[],
    loading: false,
    error: null as string | null,
    submitting: false
  }),

  getters: {
    getRecentComments: (state) => (limit: number = 5) => {
      return state.comments
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, limit)
    }
  },

  actions: {
    async fetchComments() {
      this.loading = true
      
      try {
        const response = await axios.get('https://api.ezyton.com/public/home')
        const apiComments = response.data.comments || []
        
        // Process comments to ensure avatar URLs are full URLs
        this.comments = apiComments.map((comment: any) => ({
          ...comment,
          avatar: this.processAvatarUrl(comment.avatar)
        }))
        
        // If no comments from API, use fake data
        if (this.comments.length === 0) {
          this.comments = this.getFakeData()
        }
      } catch (error) {
        console.error('Error fetching comments:', error)
        this.comments = this.getFakeData()
      } finally {
        this.loading = false
      }
    },

    processAvatarUrl(avatarUrl: string) {
      if (!avatarUrl) {
        return 'https://ui-avatars.com/api/?name=User&background=6366f1&color=fff&size=200'
      }
      
      // If it's already a full URL, return as is
      if (avatarUrl.startsWith('http://') || avatarUrl.startsWith('https://')) {
        return avatarUrl
      }
      
      // If it's a relative path, convert to full URL
      if (avatarUrl.startsWith('/')) {
        return `https://api.ezyton.com${avatarUrl}`
      }
      
      // Default fallback
      return 'https://ui-avatars.com/api/?name=User&background=6366f1&color=fff&size=200'
    },

    getFakeData() {
      return [
        {
          _id: '1',
          name: 'احمد محمدی',
          message: 'خدمات عالی و پشتیبانی سریع. منو دیجیتال خیلی کاربردی بود.',
          customerJob: 'مدیر کافه',
          avatar: 'https://ui-avatars.com/api/?name=احمد+محمدی&background=ff6b6b&color=fff&size=200',
          createdAt: '2024-01-15T10:00:00Z',
          updatedAt: '2024-01-15T10:00:00Z'
        },
        {
          _id: '2',
          name: 'سارا احمدی',
          message: 'طراحی زیبا و عملکرد عالی. مشتری‌ها خیلی راضی هستند.',
          customerJob: 'صاحب رستوران',
          avatar: 'https://ui-avatars.com/api/?name=سارا+احمدی&background=74b9ff&color=fff&size=200',
          createdAt: '2024-01-10T10:00:00Z',
          updatedAt: '2024-01-10T10:00:00Z'
        },
        {
          _id: '3',
          name: 'علی رضایی',
          message: 'راه‌اندازی سریع و آسان. پنل مدیریت خیلی کامل است.',
          customerJob: 'مدیر فنی',
          avatar: 'https://ui-avatars.com/api/?name=علی+رضایی&background=fd79a8&color=fff&size=200',
          createdAt: '2024-01-05T10:00:00Z',
          updatedAt: '2024-01-05T10:00:00Z'
        },
        {
          _id: '4',
          name: 'فاطمه کریمی',
          message: 'سیستم پرداخت خیلی امن و سریع است. پیشنهاد می‌کنم.',
          customerJob: 'مالک کسب‌وکار',
          avatar: 'https://ui-avatars.com/api/?name=فاطمه+کریمی&background=a29bfe&color=fff&size=200',
          createdAt: '2024-01-01T10:00:00Z',
          updatedAt: '2024-01-01T10:00:00Z'
        },
        {
          _id: '5',
          name: 'محمد حسینی',
          message: 'پشتیبانی ۲۴ ساعته عالی است. هر سوالی داشتم جواب دادند.',
          customerJob: 'مدیر پروژه',
          avatar: 'https://ui-avatars.com/api/?name=محمد+حسینی&background=00b894&color=fff&size=200',
          createdAt: '2023-12-25T10:00:00Z',
          updatedAt: '2023-12-25T10:00:00Z'
        }
      ]
    },

    async submitComment(commentData: Omit<Comment, '_id' | 'createdAt' | 'updatedAt'>) {
      this.submitting = true
      this.error = null
      
      try {
        // In a real app, you would POST to an API endpoint
        // For now, we'll simulate adding to local state
        const newComment: Comment = {
          ...commentData,
          _id: Date.now().toString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
        
        this.comments.unshift(newComment)
        return newComment
      } catch (error: any) {
        this.error = error.message || 'Failed to submit comment'
        console.error('Error submitting comment:', error)
        throw error
      } finally {
        this.submitting = false
      }
    }
  }
})
