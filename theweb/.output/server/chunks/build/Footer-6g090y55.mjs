import { ref, computed, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-CiNKSEV8.mjs';
import { _ as _export_sfc, a as useI18n, b as useTheme } from './server.mjs';
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
import 'vue-router';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'pinia';

const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales } = useI18n();
    useLocale();
    const { theme } = useTheme();
    const currentLocale = ref("en");
    const currentDir = computed(() => {
      const list = locales.value || [];
      const match = list.find((l) => l && typeof l === "object" && "code" in l ? l.code === locale.value : l === locale.value);
      const dir = match && typeof match === "object" && "dir" in match ? match.dir : null;
      return dir || (locale.value === "fa" ? "rtl" : "ltr");
    });
    watch(() => locale.value, (newLocale) => {
      currentLocale.value = newLocale;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        dir: currentDir.value,
        class: "text-white transition-all duration-500 ease-in-out bg-[#0F2540] dark:bg-[#0F2540] rounded-t-3xl"
      }, _attrs))} data-v-f66bc6f9><div class="container mx-auto px-4 lg:px-6 py-4 lg:py-5" data-v-f66bc6f9><div class="${ssrRenderClass([
        "grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 text-center",
        currentLocale.value === "fa" ? "lg:text-right" : "lg:text-left"
      ])}" data-v-f66bc6f9><div class="space-y-3" data-v-f66bc6f9><div class="flex items-center justify-center lg:justify-start space-x-2" data-v-f66bc6f9><div data-v-f66bc6f9><img${ssrRenderAttr("src", _imports_0)} alt="logo" class="w-auto h-6 lg:h-8" data-v-f66bc6f9></div><span class="text-xl lg:text-2xl font-bold text-[#3b82f6]" data-v-f66bc6f9>${ssrInterpolate(_ctx.$t("app.name"))}</span></div><p class="text-xs lg:text-sm text-[#6B88AB] dark:text-gray-400" data-v-f66bc6f9>${ssrInterpolate(_ctx.$t("footer.tagline"))}</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 text-center" data-v-f66bc6f9><div class="space-y-2 lg:space-y-3" data-v-f66bc6f9><a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white" data-v-f66bc6f9>${ssrInterpolate(_ctx.$t("app.nav.about"))}</a><a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white" data-v-f66bc6f9>${ssrInterpolate(_ctx.$t("app.nav.whyEzyTeam"))}</a><a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white" data-v-f66bc6f9>${ssrInterpolate(_ctx.$t("app.nav.products"))}</a><a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white" data-v-f66bc6f9>${ssrInterpolate(_ctx.$t("app.nav.roadMap"))}</a><a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white" data-v-f66bc6f9>${ssrInterpolate(_ctx.$t("app.nav.comment"))}</a></div><div class="space-y-2 lg:space-y-3" data-v-f66bc6f9><a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white" data-v-f66bc6f9>${ssrInterpolate(_ctx.$t("app.nav.ezyTon"))}</a><a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white" data-v-f66bc6f9>${ssrInterpolate(_ctx.$t("app.nav.tokenomics"))}</a><a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white" data-v-f66bc6f9>${ssrInterpolate(_ctx.$t("app.nav.plans"))}</a><a href="#" class="block text-sm lg:text-base text-gray-300 dark:text-gray-400 hover:text-white" data-v-f66bc6f9>${ssrInterpolate(_ctx.$t("app.nav.blog"))}</a></div></div><div class="space-y-3" data-v-f66bc6f9><h3 class="text-gray-300 dark:text-gray-400 text-xs lg:text-sm font-medium" data-v-f66bc6f9>${ssrInterpolate(_ctx.$t("footer.signUpTitle"))}</h3><div class="${ssrRenderClass([
        "flex",
        currentLocale.value === "fa" ? "flex-row-reverse" : "flex-row",
        currentLocale.value === "fa" ? "justify-center lg:justify-start" : "justify-center lg:justify-end"
      ])}" data-v-f66bc6f9><input type="email"${ssrRenderAttr("placeholder", _ctx.$t("footer.emailPlaceholder"))} class="flex-1 px-3 lg:px-4 py-2 lg:py-3 bg-gray-700 dark:bg-gray-800 text-white placeholder-gray-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm lg:text-base" data-v-f66bc6f9><button class="px-3 lg:px-4 py-2 lg:py-3 bg-blue-500 hover:bg-blue-600 rounded-r-lg transition-all duration-300" data-v-f66bc6f9><i class="mdi mdi-navigation transform rotate-90 inline-block text-sm lg:text-base" data-v-f66bc6f9></i></button></div></div></div></div><div class="border-t border-gray-700 dark:border-gray-600 bg-[#0F2540] dark:bg-[#1a1a1a] transition-all duration-500 ease-in-out" data-v-f66bc6f9><div class="container mx-auto px-4 lg:px-6 py-3 lg:py-4 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0" data-v-f66bc6f9><div class="flex space-x-3 lg:space-x-4 justify-center lg:justify-start" data-v-f66bc6f9><a href="#" class="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors" data-v-f66bc6f9><i class="mdi mdi-whatsapp text-lg lg:text-2xl" data-v-f66bc6f9></i></a><a href="#" class="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" data-v-f66bc6f9><i class="mdi mdi-instagram text-lg lg:text-2xl" data-v-f66bc6f9></i></a><a href="#" class="w-8 h-8 lg:w-10 lg:h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors" data-v-f66bc6f9><i class="mdi mdi-telegram text-lg lg:text-2xl" data-v-f66bc6f9></i></a><a href="#" class="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors" data-v-f66bc6f9><i class="mdi mdi-linkedin text-lg lg:text-2xl" data-v-f66bc6f9></i></a></div><p class="text-gray-300 dark:text-gray-400 text-xs lg:text-sm text-center" data-v-f66bc6f9>${ssrInterpolate(_ctx.$t("footer.copyright"))}</p><div class="flex items-center space-x-3 lg:space-x-4 justify-center lg:justify-start" data-v-f66bc6f9><button class="text-gray-300 dark:text-gray-400 hover:text-white font-medium text-sm lg:text-base" data-v-f66bc6f9>${ssrInterpolate(currentLocale.value === "en" ? "EN" : "FA")}</button><div class="w-px h-4 lg:h-6 bg-gray-600 dark:bg-gray-500" data-v-f66bc6f9></div><button class="text-gray-300 dark:text-gray-400 hover:text-white"${ssrRenderAttr("title", unref(theme) === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode")} data-v-f66bc6f9>`);
      if (unref(theme) === "dark") {
        _push(`<i class="mdi mdi-weather-sunny text-lg lg:text-xl" data-v-f66bc6f9></i>`);
      } else {
        _push(`<i class="mdi mdi-weather-night text-lg lg:text-xl" data-v-f66bc6f9></i>`);
      }
      _push(`</button></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f66bc6f9"]]);

export { Footer as default };
//# sourceMappingURL=Footer-6g090y55.mjs.map
