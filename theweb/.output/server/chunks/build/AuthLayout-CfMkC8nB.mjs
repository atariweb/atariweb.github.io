import { computed, ref, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { a as useI18n, b as useTheme, k as useLocalePath, _ as _export_sfc } from './server.mjs';
import { _ as _imports_0 } from './logo-CiNKSEV8.mjs';
import { u as useLocale } from './useLocale-BU49rBmi.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@intlify/utils';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';

const _sfc_main$1 = {
  __name: "WaterfallSidebar",
  __ssrInlineRender: true,
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    navItems: {
      type: Array,
      default: () => []
    },
    isDark: {
      type: Boolean,
      default: false
    },
    isClient: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "close",
    "item-click",
    "toggle-locale",
    "toggle-theme"
  ],
  setup(__props, { emit: __emit }) {
    const { t, locale } = useI18n();
    const currentLocale = computed(() => locale.value);
    const getItemIcon = (key) => {
      const icons = {
        about: "mdi-information-outline",
        whyEzyTeam: "mdi-account-group-outline",
        ezyTon: "mdi-star-outline",
        tokenomics: "mdi-chart-line",
        products: "mdi-package-variant",
        roadMap: "mdi-map-outline",
        plans: "mdi-clipboard-text-outline",
        blog: "mdi-newspaper-outline",
        comment: "mdi-comment-outline"
      };
      return icons[key] || "mdi-star-outline";
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-40 lg:hidden" }, _attrs))} data-v-069b2cf8><div class="absolute inset-0 bg-black/60 backdrop-blur-xl transition-all duration-500 ease-out" data-v-069b2cf8></div><div class="${ssrRenderClass([[
          __props.isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        ], "absolute top-16 lg:top-20 left-1/2 transform -translate-x-1/2 w-[94%] lg:w-[92%] h-full overflow-hidden transition-all duration-500 ease-out"])}" data-v-069b2cf8><div class="relative w-full h-full bg-[#1A2B3C] rounded-t-3xl shadow-2xl border border-white/10 overflow-hidden" data-v-069b2cf8><div class="relative z-10 flex items-center justify-between p-4 lg:p-6" data-v-069b2cf8><div class="flex items-center gap-2 lg:gap-3" data-v-069b2cf8><div class="flex items-center justify-center" data-v-069b2cf8><img${ssrRenderAttr("src", _imports_0)} alt="EzyTon Logo" class="h-6 lg:h-7 w-auto object-contain transition-all duration-300 hover:scale-110" data-v-069b2cf8></div><h2 class="text-lg lg:text-xl font-bold text-white uppercase tracking-wide" data-v-069b2cf8>${ssrInterpolate(_ctx.$t("app.name"))}</h2></div><button class="p-2 text-white hover:text-gray-300 transition-all duration-300 hover:scale-110" data-v-069b2cf8><i class="mdi mdi-close text-xl lg:text-2xl" data-v-069b2cf8></i></button></div><div class="relative z-10 px-4 lg:px-6 pb-3 lg:pb-4" data-v-069b2cf8><div class="flex items-center gap-3 lg:gap-4" data-v-069b2cf8><button class="flex items-center gap-2 text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-105" data-v-069b2cf8><i class="mdi mdi-chevron-down text-base lg:text-lg" data-v-069b2cf8></i><span class="font-medium text-sm lg:text-base" data-v-069b2cf8>${ssrInterpolate(currentLocale.value === "fa" ? "FA" : "EN")}</span></button></div></div><nav class="${ssrRenderClass([[
          __props.isOpen ? "animate-slider-section" : ""
        ], "relative z-10 px-4 lg:px-6 flex-1 overflow-y-auto"])}" style="${ssrRenderStyle({
          animationDelay: __props.isOpen ? "0.6s" : "0s",
          animationFillMode: "both"
        })}" data-v-069b2cf8><div class="space-y-1" data-v-069b2cf8><!--[-->`);
        ssrRenderList(__props.navItems, (item, index) => {
          _push(`<a href="#" class="flex items-center gap-2 lg:gap-3 py-2 lg:py-3 text-white hover:text-gray-300 transition-colors duration-200 font-medium text-sm lg:text-base" style="${ssrRenderStyle({
            animationDelay: __props.isOpen ? `${0.7 + index * 0.08}s` : "0s",
            animation: __props.isOpen ? "waterfallSlideIn 0.6s ease-out forwards" : "none",
            opacity: __props.isOpen ? 1 : 0,
            transform: __props.isOpen ? "translateY(0)" : "translateY(20px)"
          })}" data-v-069b2cf8><i class="${ssrRenderClass(["mdi", getItemIcon(item.key), "text-base lg:text-lg"])}" data-v-069b2cf8></i> ${ssrInterpolate(_ctx.$t(item.label))}</a>`);
        });
        _push(`<!--]--></div></nav><div class="absolute left-0 w-full mt-5 opacity-10" data-v-069b2cf8><div class="flex items-center justify-center" data-v-069b2cf8><img${ssrRenderAttr("src", _imports_0)} alt="EzyTon Logo" class="w-full h-full" data-v-069b2cf8></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WaterfallSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WaterfallSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-069b2cf8"]]);
const _sfc_main = {
  __name: "AuthLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const navItems = [
      { key: "about", label: "app.nav.about", target: "about" },
      { key: "whyEzyTeam", label: "app.nav.whyEzyTeam", target: "why-ezy-team" },
      { key: "ezyTon", label: "app.nav.ezyTon", target: "ezy-ton" },
      { key: "tokenomics", label: "app.nav.tokenomics", target: "tokenomics" },
      { key: "products", label: "app.nav.products", target: "products" },
      { key: "roadMap", label: "app.nav.roadMap", target: "road-map" },
      { key: "plans", label: "app.nav.plans", target: "plans" },
      { key: "blog", label: "app.nav.blog", target: "blog" },
      { key: "comment", label: "app.nav.comment", target: "comment" }
    ];
    const { locale, locales } = useI18n();
    const { toggleLocale } = useLocale();
    const { theme, toggleTheme } = useTheme();
    const currentLocale = computed(() => locale.value);
    const currentDir = computed(() => {
      const list = locales.value || [];
      const match = list.find((l) => l && typeof l === "object" && "code" in l ? l.code === locale.value : l === locale.value);
      const dir = match && typeof match === "object" && "dir" in match ? match.dir : null;
      return dir || (locale.value === "fa" ? "rtl" : "ltr");
    });
    useRoute();
    useLocalePath();
    const isDark = computed(() => theme.value === "dark");
    const isClient = ref(false);
    const isMobileMenuOpen = ref(false);
    function goToSection(sectionId) {
      const el = (void 0).getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      isMobileMenuOpen.value = false;
    }
    function toggleMobileMenu() {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header${ssrRenderAttr("dir", currentDir.value)} class="w-full mx-auto px-6 lg:px-10 py-3 lg:py-4 hidden lg:flex items-center justify-between bg-[#324D6E] rounded-b-3xl fixed top-0 left-1/2 transform -translate-x-1/2 z-50"><div class="flex items-center gap-3"><img${ssrRenderAttr("src", unref(_imports_0))}${ssrRenderAttr("alt", _ctx.$t("app.name"))} class="h-6 lg:h-8 w-auto"><span class="text-[#3b82f6] font-bold text-base lg:text-lg">${ssrInterpolate(_ctx.$t("app.name"))}</span><nav class="flex items-center gap-6 lg:gap-10 text-xs lg:text-sm text-white px-6 lg:px-10"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<a href="#" class="hover:text-[#3b82f6] transition-colors flex items-center">${ssrInterpolate(_ctx.$t(item.label))}</a>`);
      });
      _push(`<!--]--></nav></div><div class="flex items-center gap-3 lg:gap-4"><div class="flex items-center gap-1 cursor-pointer"><i class="mdi mdi-chevron-down text-xs text-[#3b82f6]"></i><span class="text-[#3b82f6] font-medium text-sm lg:text-base">${ssrInterpolate(currentLocale.value === "fa" ? "FA" : "EN")}</span></div>`);
      if (isClient.value) {
        _push(`<div class="cursor-pointer text-white"><i class="${ssrRenderClass([isDark.value ? "mdi mdi-weather-night" : "mdi mdi-weather-sunny", "text-lg lg:text-xl"])}"></i></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header><header${ssrRenderAttr("dir", currentDir.value)} class="w-full lg:hidden flex items-center justify-between bg-[#1A2B3C] rounded-full fixed px-4 lg:px-5 py-2 lg:py-3 mt-2 lg:mt-3 z-[60]"><div class="flex items-center">`);
      if (isClient.value) {
        _push(`<div class="cursor-pointer text-white"><i class="${ssrRenderClass([isDark.value ? "mdi mdi-weather-night" : "mdi mdi-weather-sunny", "text-lg lg:text-xl"])}"></i></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="text-white p-1"><i class="${ssrRenderClass([isMobileMenuOpen.value ? "mdi mdi-close" : "mdi mdi-menu", "text-lg lg:text-xl"])}"></i></button></div><div class="flex items-center gap-2"><span class="text-[#3b82f6] font-bold text-sm lg:text-base">${ssrInterpolate(_ctx.$t("app.name"))}</span><img${ssrRenderAttr("src", unref(_imports_0))}${ssrRenderAttr("alt", _ctx.$t("app.name"))} class="h-6 lg:h-7 w-auto object-contain"></div></header>`);
      _push(ssrRenderComponent(WaterfallSidebar, {
        "is-open": isMobileMenuOpen.value,
        "nav-items": navItems,
        "is-dark": isDark.value,
        "is-client": isClient.value,
        onClose: toggleMobileMenu,
        onItemClick: goToSection,
        onToggleLocale: unref(toggleLocale),
        onToggleTheme: unref(toggleTheme)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/AuthLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AuthLayout-CfMkC8nB.mjs.map
