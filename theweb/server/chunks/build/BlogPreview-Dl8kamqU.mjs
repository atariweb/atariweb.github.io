import { _ as __nuxt_component_0 } from './nuxt-link-CqyUuIPk.mjs';
import { computed, mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { _ as _export_sfc, a as useI18n } from './server.mjs';
import { defineStore } from 'pinia';
import axios from 'axios';

const useBlogStore = defineStore("blog", {
  state: () => ({
    blogs: [],
    currentBlog: null,
    loading: false
  }),
  getters: {
    getBlogById: (state) => (id) => {
      return state.blogs.find((blog) => blog.id === id);
    },
    getRelatedBlogs: (state) => (currentId, limit = 6) => {
      return state.blogs.filter((blog) => blog.id !== currentId).slice(0, limit);
    }
  },
  actions: {
    async fetchBlogs() {
      this.loading = true;
      try {
        const response = await axios.get("https://api.ezyton.com/public/home");
        console.log("API Response:", response.data);
        console.log("Blog data from API:", response.data.blog);
        const enhancedBlogs = (response.data.blog || []).map((blog) => ({
          ...blog,
          title: blog.name,
          // Use name as title
          description: blog.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo...",
          shortDescription: blog.shortDescription || "Learn more about this interesting topic.",
          fullContent: blog.fullContent || this.generateContentFromName(blog.name),
          category: blog.category || "Technology",
          author: blog.author || {
            name: "AminAbbas Doji",
            role: "Writer",
            // This will be overridden by i18n in components
            avatar: "https://picsum.photos/100/100?random=10",
            social: {
              twitter: "#",
              instagram: "#",
              linkedin: "#"
            }
          },
          tableOfContents: blog.tableOfContents || this.generateTableOfContents(blog.name)
        }));
        this.blogs = enhancedBlogs.length > 0 ? enhancedBlogs : this.getFakeData();
        console.log("Final enhanced blogs array:", this.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        this.blogs = this.getFakeData();
      } finally {
        this.loading = false;
      }
    },
    async fetchBlogById(id) {
      this.loading = true;
      console.log("🔍 fetchBlogById called with ID:", id);
      try {
        console.log("📚 Current blogs in store:", this.blogs);
        const localBlog = this.blogs.find((blog) => blog.id === id);
        console.log("🔎 Local blog found:", localBlog);
        if (localBlog) {
          this.currentBlog = localBlog;
          console.log("✅ Using local blog:", localBlog);
          return localBlog;
        }
        console.log("🌐 Fetching from API...");
        const response = await axios.get("https://api.ezyton.com/public/home");
        const apiBlogs = response.data.blog || [];
        console.log("📡 API blogs:", apiBlogs);
        const apiBlog = apiBlogs.find((blog) => blog.id === id);
        console.log("🎯 API blog found:", apiBlog);
        if (apiBlog) {
          const enhancedBlog = {
            ...apiBlog,
            title: apiBlog.name,
            // Use name as title
            description: apiBlog.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo...",
            shortDescription: apiBlog.shortDescription || "Learn more about this interesting topic.",
            fullContent: apiBlog.fullContent || this.generateContentFromName(apiBlog.name),
            category: apiBlog.category || "Technology",
            author: apiBlog.author || {
              name: "AminAbbas Doji",
              role: "Writer",
              // This will be overridden by i18n in components
              avatar: "https://picsum.photos/100/100?random=10",
              social: {
                twitter: "#",
                instagram: "#",
                linkedin: "#"
              }
            },
            tableOfContents: apiBlog.tableOfContents || this.generateTableOfContents(apiBlog.name)
          };
          this.currentBlog = enhancedBlog;
          console.log("✅ Using enhanced API blog:", enhancedBlog);
          return enhancedBlog;
        }
        const fakeBlog = this.getFakeData().find((b) => b.id === id);
        console.log("🎭 Fake blog found:", fakeBlog);
        if (fakeBlog) {
          this.currentBlog = fakeBlog;
          console.log("✅ Using fake blog:", fakeBlog);
          return fakeBlog;
        }
        this.currentBlog = apiBlogs[0] || this.getFakeData()[0] || null;
        console.log("🔄 Using fallback blog:", this.currentBlog);
        return this.currentBlog;
      } catch (error) {
        console.error("❌ Error fetching blog by ID:", error);
        const fakeBlog = this.getFakeData().find((b) => b.id === id);
        this.currentBlog = fakeBlog || this.getFakeData()[0] || null;
        console.log("🆘 Using error fallback blog:", this.currentBlog);
        return this.currentBlog;
      } finally {
        this.loading = false;
      }
    },
    getFakeData() {
      return [
        {
          id: "1",
          name: "How Can You Create A Good And Excellent Design In Easy Connect?",
          title: "How Can You Create A Good And Excellent Design In Easy Connect?",
          image: "https://picsum.photos/800/400?random=1",
          createdAt: "2024-01-15T10:00:00Z",
          date: "1408/08/04",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo...",
          shortDescription: "Learn how to create amazing designs with Easy Connect and transform your digital presence.",
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
          category: "Design",
          author: {
            name: "AminAbbas Doji",
            role: "Writer",
            avatar: "https://picsum.photos/100/100?random=10",
            social: {
              twitter: "#",
              instagram: "#",
              linkedin: "#"
            }
          },
          tableOfContents: [
            "Useful Tools For Design",
            "Creativity Is The Greatest Principle",
            "Designing With Easy Connect",
            "Ready-Made Templates",
            "Sample Menu And Business Card"
          ]
        },
        {
          id: "2",
          name: "مزایای استفاده از TON Blockchain",
          title: "مزایای استفاده از TON Blockchain",
          image: "https://picsum.photos/800/400?random=2",
          createdAt: "2024-01-10T10:00:00Z",
          date: "1408/08/03",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo...",
          shortDescription: "Discover the advantages of using TON Blockchain for your projects.",
          fullContent: `
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
            
            <h2>What is TON Blockchain?</h2>
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
            
            <h2>Key Benefits</h2>
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
          `,
          category: "Blockchain",
          author: {
            name: "John Doe",
            role: "Developer",
            avatar: "https://picsum.photos/100/100?random=11",
            social: {
              twitter: "#",
              instagram: "#",
              linkedin: "#"
            }
          },
          tableOfContents: [
            "What is TON Blockchain?",
            "Key Benefits",
            "Implementation Guide"
          ]
        },
        {
          id: "3",
          name: "آینده صنعت رستوران‌داری",
          title: "آینده صنعت رستوران‌داری",
          image: "https://picsum.photos/800/400?random=3",
          createdAt: "2024-01-05T10:00:00Z",
          date: "1408/08/02",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo...",
          shortDescription: "Explore the future of the restaurant industry with digital transformation.",
          fullContent: `
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
            
            <h2>Digital Transformation</h2>
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
            
            <h2>Technology Trends</h2>
            <p>Lorem ipsum is A Dummy Text Generated By The Printing Industry. Lorem ipsum is A Dummy Text Generated By The Printing Industry.</p>
          `,
          category: "Technology",
          author: {
            name: "Jane Smith",
            role: "Analyst",
            avatar: "https://picsum.photos/100/100?random=12",
            social: {
              twitter: "#",
              instagram: "#",
              linkedin: "#"
            }
          },
          tableOfContents: [
            "Digital Transformation",
            "Technology Trends",
            "Future Predictions"
          ]
        }
      ];
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    },
    generateContentFromName(name) {
      const topic = name.toLowerCase();
      if (topic.includes("blockchain") || topic.includes("block chain")) {
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
        `;
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
        `;
      }
    },
    generateTableOfContents(name) {
      const topic = name.toLowerCase();
      if (topic.includes("blockchain") || topic.includes("block chain")) {
        return [
          "What is Blockchain Technology?",
          "How Blockchain Works",
          "Benefits of Blockchain",
          "Real-World Applications",
          "Future of Blockchain"
        ];
      } else {
        return [
          "Introduction",
          "Key Concepts",
          "Best Practices",
          "Implementation Guide",
          "Conclusion"
        ];
      }
    }
  }
});
const _sfc_main = {
  __name: "BlogPreview",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Navigation, Pagination, Autoplay];
    const { locale } = useI18n();
    const currentLocale = computed(() => locale.value);
    const getLocalizedPath = (path) => {
      const currentLocaleValue = currentLocale.value;
      if (currentLocaleValue === "en") {
        return path;
      }
      return `/${currentLocaleValue}${path}`;
    };
    const blogStore = useBlogStore();
    const blogs = computed(() => {
      if (blogStore.blogs.length === 0) {
        return blogStore.getFakeData();
      }
      return blogStore.blogs;
    });
    const loading = computed(() => blogStore.loading);
    const formatDate = (dateString) => {
      if (blogStore) {
        return blogStore.formatDate(dateString);
      }
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const getImageUrl = (imagePath) => {
      if (!imagePath) {
        return "https://picsum.photos/800/400?random=1";
      }
      if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
        return imagePath;
      }
      if (imagePath.startsWith("/uploads/")) {
        return `https://api.ezyton.com${imagePath}`;
      }
      return imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
    };
    const handleImageError = (event) => {
      console.warn("Image failed to load:", event.target.src);
      event.target.src = "/images/hero/herobg.webp";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-section relative overflow-hidden" }, _attrs))} data-v-0f273f33><div class="absolute inset-0" data-v-0f273f33></div><div class="relative z-10 max-w-7xl mx-auto py-16 px-4" data-v-0f273f33><div class="lg:bg-white/10 lg:dark:bg-gray-800/10 lg:backdrop-blur-xl lg:rounded-3xl lg:border lg:border-white/20 lg:dark:border-gray-700/20 lg:shadow-2xl p-8" data-v-0f273f33><h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12" data-v-0f273f33>${ssrInterpolate(_ctx.$t("blog.title"))}</h2>`);
      if (loading.value) {
        _push(`<div class="text-center py-8" data-v-0f273f33><div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" data-v-0f273f33></div><p class="mt-2 text-gray-600 dark:text-gray-400" data-v-0f273f33>${ssrInterpolate(_ctx.$t("blog.loading"))}</p></div>`);
      } else {
        _push(`<div class="relative" data-v-0f273f33>`);
        _push(ssrRenderComponent(unref(Swiper), {
          modules,
          "slides-per-view": 4,
          "space-between": 24,
          loop: true,
          navigation: true,
          pagination: { clickable: true },
          autoplay: {
            delay: 4e3,
            disableOnInteraction: false
          },
          effect: "slide",
          speed: 800,
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 16
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24
            }
          },
          class: "blog-swiper"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(blogs.value, (blog, index) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: blog.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: getLocalizedPath(`/singleBlog/${blog.id}`),
                        class: "block",
                        onClick: () => console.log("🔗 Navigating to blog:", blog.id, "with locale:", currentLocale.value, "path:", getLocalizedPath(`/singleBlog/${blog.id}`))
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="blog-card group" data-v-0f273f33${_scopeId3}><div class="relative overflow-hidden rounded-2xl mb-4 shadow-lg" data-v-0f273f33${_scopeId3}><img${ssrRenderAttr("src", getImageUrl(blog.image))}${ssrRenderAttr("alt", blog.name)} class="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110" data-v-0f273f33${_scopeId3}><div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6" data-v-0f273f33${_scopeId3}><h3 class="text-white font-bold text-lg mb-2 line-clamp-2" data-v-0f273f33${_scopeId3}>${ssrInterpolate(blog.name || _ctx.$t("blog.defaultTitle"))}</h3><p class="text-gray-200 text-sm line-clamp-2 mb-4" data-v-0f273f33${_scopeId3}>${ssrInterpolate(blog.description || _ctx.$t("blog.defaultDescription"))}</p><div class="flex items-center text-gray-300 text-sm" data-v-0f273f33${_scopeId3}><div class="flex items-center space-x-1" data-v-0f273f33${_scopeId3}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-0f273f33${_scopeId3}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-v-0f273f33${_scopeId3}></path></svg><span data-v-0f273f33${_scopeId3}>${ssrInterpolate(formatDate(blog.createdAt) || "2025/05/02")}</span></div></div></div></div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "blog-card group" }, [
                                createVNode("div", { class: "relative overflow-hidden rounded-2xl mb-4 shadow-lg" }, [
                                  createVNode("img", {
                                    src: getImageUrl(blog.image),
                                    alt: blog.name,
                                    class: "w-full h-64 object-cover transition-all duration-500 group-hover:scale-110",
                                    onError: handleImageError
                                  }, null, 40, ["src", "alt"]),
                                  createVNode("div", { class: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6" }, [
                                    createVNode("h3", { class: "text-white font-bold text-lg mb-2 line-clamp-2" }, toDisplayString(blog.name || _ctx.$t("blog.defaultTitle")), 1),
                                    createVNode("p", { class: "text-gray-200 text-sm line-clamp-2 mb-4" }, toDisplayString(blog.description || _ctx.$t("blog.defaultDescription")), 1),
                                    createVNode("div", { class: "flex items-center text-gray-300 text-sm" }, [
                                      createVNode("div", { class: "flex items-center space-x-1" }, [
                                        (openBlock(), createBlock("svg", {
                                          class: "w-4 h-4",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                          })
                                        ])),
                                        createVNode("span", null, toDisplayString(formatDate(blog.createdAt) || "2025/05/02"), 1)
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtLink, {
                          to: getLocalizedPath(`/singleBlog/${blog.id}`),
                          class: "block",
                          onClick: () => console.log("🔗 Navigating to blog:", blog.id, "with locale:", currentLocale.value, "path:", getLocalizedPath(`/singleBlog/${blog.id}`))
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "blog-card group" }, [
                              createVNode("div", { class: "relative overflow-hidden rounded-2xl mb-4 shadow-lg" }, [
                                createVNode("img", {
                                  src: getImageUrl(blog.image),
                                  alt: blog.name,
                                  class: "w-full h-64 object-cover transition-all duration-500 group-hover:scale-110",
                                  onError: handleImageError
                                }, null, 40, ["src", "alt"]),
                                createVNode("div", { class: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6" }, [
                                  createVNode("h3", { class: "text-white font-bold text-lg mb-2 line-clamp-2" }, toDisplayString(blog.name || _ctx.$t("blog.defaultTitle")), 1),
                                  createVNode("p", { class: "text-gray-200 text-sm line-clamp-2 mb-4" }, toDisplayString(blog.description || _ctx.$t("blog.defaultDescription")), 1),
                                  createVNode("div", { class: "flex items-center text-gray-300 text-sm" }, [
                                    createVNode("div", { class: "flex items-center space-x-1" }, [
                                      (openBlock(), createBlock("svg", {
                                        class: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        })
                                      ])),
                                      createVNode("span", null, toDisplayString(formatDate(blog.createdAt) || "2025/05/02"), 1)
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to", "onClick"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(blogs.value, (blog, index) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: blog.id
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: getLocalizedPath(`/singleBlog/${blog.id}`),
                        class: "block",
                        onClick: () => console.log("🔗 Navigating to blog:", blog.id, "with locale:", currentLocale.value, "path:", getLocalizedPath(`/singleBlog/${blog.id}`))
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "blog-card group" }, [
                            createVNode("div", { class: "relative overflow-hidden rounded-2xl mb-4 shadow-lg" }, [
                              createVNode("img", {
                                src: getImageUrl(blog.image),
                                alt: blog.name,
                                class: "w-full h-64 object-cover transition-all duration-500 group-hover:scale-110",
                                onError: handleImageError
                              }, null, 40, ["src", "alt"]),
                              createVNode("div", { class: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6" }, [
                                createVNode("h3", { class: "text-white font-bold text-lg mb-2 line-clamp-2" }, toDisplayString(blog.name || _ctx.$t("blog.defaultTitle")), 1),
                                createVNode("p", { class: "text-gray-200 text-sm line-clamp-2 mb-4" }, toDisplayString(blog.description || _ctx.$t("blog.defaultDescription")), 1),
                                createVNode("div", { class: "flex items-center text-gray-300 text-sm" }, [
                                  createVNode("div", { class: "flex items-center space-x-1" }, [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-4 h-4",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24"
                                    }, [
                                      createVNode("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                      })
                                    ])),
                                    createVNode("span", null, toDisplayString(formatDate(blog.createdAt) || "2025/05/02"), 1)
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to", "onClick"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogPreview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogPreview = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-0f273f33"]]), { __name: "BlogPreview" });

export { BlogPreview as B };
//# sourceMappingURL=BlogPreview-Dl8kamqU.mjs.map
