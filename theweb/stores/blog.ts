import { defineStore } from 'pinia'
import axios from 'axios'

export interface BlogItem {
  id: string
  name: string
  title?: string
  image: string
  createdAt: string
  date?: string
  description?: string
  shortDescription?: string
  fullContent?: string
  content?: string
  category?: string
  author?: {
    name: string
    role: string
    avatar?: string
    social?: {
      twitter?: string
      instagram?: string
      linkedin?: string
    }
  }
  tableOfContents?: string[]
}

export const useBlogStore = defineStore('blog', {
  state: () => ({
    blogs: [] as BlogItem[],
    currentBlog: null as BlogItem | null,
    loading: false
  }),

  getters: {
    getBlogById: (state) => (id: string) => {
      return state.blogs.find(blog => blog.id === id)
    },
    
    getRelatedBlogs: (state) => (currentId: string, limit: number = 6) => {
      return state.blogs.filter(blog => blog.id !== currentId).slice(0, limit)
    }
  },

  actions: {
    async fetchBlogs() {
      this.loading = true
      
      try {
        const response = await axios.get('https://api.ezyton.com/public/home')
        console.log('API Response:', response.data)
        console.log('Blog data from API:', response.data.blog)
        
        // Enhance API data with additional fields
        const enhancedBlogs = (response.data.blog || []).map((blog: any) => ({
          ...blog,
          title: blog.name, // Use name as title
          description: blog.description || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo...',
          shortDescription: blog.shortDescription || 'Learn more about this interesting topic.',
          fullContent: blog.fullContent || this.generateContentFromName(blog.name),
          category: blog.category || 'Technology',
          author: blog.author || {
            name: 'AminAbbas Doji',
            role: 'Writer', // This will be overridden by i18n in components
            avatar: 'https://picsum.photos/100/100?random=10',
            social: {
              twitter: '#',
              instagram: '#',
              linkedin: '#'
            }
          },
          tableOfContents: blog.tableOfContents || this.generateTableOfContents(blog.name)
        }))
        
        this.blogs = enhancedBlogs.length > 0 ? enhancedBlogs : this.getFakeData()
        console.log('Final enhanced blogs array:', this.blogs)
      } catch (error) {
        console.error('Error fetching blogs:', error)
        this.blogs = this.getFakeData()
      } finally {
        this.loading = false
      }
    },

    async fetchBlogById(id: string) {
      this.loading = true
      console.log('🔍 fetchBlogById called with ID:', id)
      
      try {
        // First check if we already have the blog in our local data
        console.log('📚 Current blogs in store:', this.blogs)
        const localBlog = this.blogs.find(blog => blog.id === id)
        console.log('🔎 Local blog found:', localBlog)
        
        if (localBlog) {
          this.currentBlog = localBlog
          console.log('✅ Using local blog:', localBlog)
          return localBlog
        }
        
        // If not found locally, fetch from API
        console.log('🌐 Fetching from API...')
        const response = await axios.get('https://api.ezyton.com/public/home')
        const apiBlogs = response.data.blog || []
        console.log('📡 API blogs:', apiBlogs)
        
        // Look for the blog in API data
        const apiBlog = apiBlogs.find((blog: any) => blog.id === id)
        console.log('🎯 API blog found:', apiBlog)
        
        if (apiBlog) {
          // Enhance the API blog with additional fields
          const enhancedBlog = {
            ...apiBlog,
            title: apiBlog.name, // Use name as title
            description: apiBlog.description || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo...',
            shortDescription: apiBlog.shortDescription || 'Learn more about this interesting topic.',
            fullContent: apiBlog.fullContent || this.generateContentFromName(apiBlog.name),
            category: apiBlog.category || 'Technology',
            author: apiBlog.author || {
              name: 'AminAbbas Doji',
              role: 'Writer', // This will be overridden by i18n in components
              avatar: 'https://picsum.photos/100/100?random=10',
              social: {
                twitter: '#',
                instagram: '#',
                linkedin: '#'
              }
            },
            tableOfContents: apiBlog.tableOfContents || this.generateTableOfContents(apiBlog.name)
          }
          
          this.currentBlog = enhancedBlog
          console.log('✅ Using enhanced API blog:', enhancedBlog)
          return enhancedBlog
        }
        
        // If not found in API, try to find in fake data as fallback
        const fakeBlog = this.getFakeData().find(b => b.id === id)
        console.log('🎭 Fake blog found:', fakeBlog)
        
        if (fakeBlog) {
          this.currentBlog = fakeBlog
          console.log('✅ Using fake blog:', fakeBlog)
          return fakeBlog
        }
        
        // If still not found, use the first available blog or create a default
        this.currentBlog = apiBlogs[0] || this.getFakeData()[0] || null
        console.log('🔄 Using fallback blog:', this.currentBlog)
        return this.currentBlog
      } catch (error) {
        console.error('❌ Error fetching blog by ID:', error)
        // Fallback to fake data
        const fakeBlog = this.getFakeData().find(b => b.id === id)
        this.currentBlog = fakeBlog || this.getFakeData()[0] || null
        console.log('🆘 Using error fallback blog:', this.currentBlog)
        return this.currentBlog
      } finally {
        this.loading = false
      }
    },

    getFakeData() {
      return [
        {
          id: '1',
          name: 'How Can You Create A Good And Excellent Design In Easy Connect?',
          title: 'How Can You Create A Good And Excellent Design In Easy Connect?',
          image: 'https://picsum.photos/800/400?random=1',
          createdAt: '2024-01-15T10:00:00Z',
          date: '1408/08/04',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo...',
          shortDescription: 'Learn how to create amazing designs with Easy Connect and transform your digital presence.',
          fullContent: `
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
            
            <h2>Practical Tools For Design</h2>
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
            
            <h2>Creativity Is The Greatest Principle</h2>
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
            
            <h2>Designing With Easy Connect</h2>
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
            
            <h2>Ready-Made Templates</h2>
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
            
            <h2>Sample Menu And Business Card</h2>
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
          `,
          category: 'Design',
          author: {
            name: 'AminAbbas Doji',
            role: 'Writer',
            avatar: 'https://picsum.photos/100/100?random=10',
            social: {
              twitter: '#',
              instagram: '#',
              linkedin: '#'
            }
          },
          tableOfContents: [
            'Useful Tools For Design',
            'Creativity Is The Greatest Principle',
            'Designing With Easy Connect',
            'Ready-Made Templates',
            'Sample Menu And Business Card'
          ]
        },
        {
          id: '2',
          name: 'مزایای استفاده از TON Blockchain',
          title: 'مزایای استفاده از TON Blockchain',
          image: 'https://picsum.photos/800/400?random=2',
          createdAt: '2024-01-10T10:00:00Z',
          date: '1408/08/03',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo...',
          shortDescription: 'Discover the advantages of using TON Blockchain for your projects.',
          fullContent: `
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
            
            <h2>What is TON Blockchain?</h2>
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
            
            <h2>Key Benefits</h2>
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
          `,
          category: 'Blockchain',
          author: {
            name: 'John Doe',
            role: 'Developer',
            avatar: 'https://picsum.photos/100/100?random=11',
            social: {
              twitter: '#',
              instagram: '#',
              linkedin: '#'
            }
          },
          tableOfContents: [
            'What is TON Blockchain?',
            'Key Benefits',
            'Implementation Guide'
          ]
        },
        {
          id: '3',
          name: 'آینده صنعت رستوران‌داری',
          title: 'آینده صنعت رستوران‌داری',
          image: 'https://picsum.photos/800/400?random=3',
          createdAt: '2024-01-05T10:00:00Z',
          date: '1408/08/02',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo...',
          shortDescription: 'Explore the future of the restaurant industry with digital transformation.',
          fullContent: `
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
            
            <h2>Digital Transformation</h2>
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
            
            <h2>Technology Trends</h2>
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
          `,
          category: 'Technology',
          author: {
            name: 'Jane Smith',
            role: 'Analyst',
            avatar: 'https://picsum.photos/100/100?random=12',
            social: {
              twitter: '#',
              instagram: '#',
              linkedin: '#'
            }
          },
          tableOfContents: [
            'Digital Transformation',
            'Technology Trends',
            'Future Predictions'
          ]
        }
      ]
    },

    formatDate(dateString: string) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },

    generateContentFromName(name: string) {
      const topic = name.toLowerCase()
      if (topic.includes('blockchain') || topic.includes('block chain')) {
        return `
          <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
          
          <h2>What is Blockchain Technology?</h2>
          <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
          
          <h2>How Blockchain Works</h2>
          <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
          
          <h2>Benefits of Blockchain</h2>
          <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
          
          <h2>Real-World Applications</h2>
          <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
        `
      } else {
        return `
          <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
          
          <h2>Introduction</h2>
          <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
          
          <h2>Key Concepts</h2>
          <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
          
          <h2>Best Practices</h2>
          <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
          
          <h2>Conclusion</h2>
          <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
        `
      }
    },

    generateTableOfContents(name: string) {
      const topic = name.toLowerCase()
      if (topic.includes('blockchain') || topic.includes('block chain')) {
        return [
          'What is Blockchain Technology?',
          'How Blockchain Works',
          'Benefits of Blockchain',
          'Real-World Applications',
          'Future of Blockchain'
        ]
      } else {
        return [
          'Introduction',
          'Key Concepts',
          'Best Practices',
          'Implementation Guide',
          'Conclusion'
        ]
      }
    }
  }
})
