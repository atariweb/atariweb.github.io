import { withCtx, createVNode, defineComponent, mergeProps, unref, ref, computed, toDisplayString, createBlock, openBlock, Fragment, renderList, watch, watchEffect, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderSlot, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useHead, c as useSeoMeta, _ as _export_sfc, a as useI18n, b as useTheme } from './server.mjs';
import { _ as _imports_0$3 } from './logo-CiNKSEV8.mjs';
import { Doughnut } from 'vue-chartjs';
import { Chart, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { defineStore } from 'pinia';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay, Navigation, Mousewheel } from 'swiper/modules';
import { B as BlogPreview } from './BlogPreview-Dl8kamqU.mjs';
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
import './nuxt-link-CqyUuIPk.mjs';

const _imports_0$2 = "" + __buildAssetsURL("Background Shape.C0rynQVn.webp");
const _imports_1 = "" + __buildAssetsURL("Background Shape (1).kZ6quBqG.webp");
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    const { tm, locale } = useI18n();
    const suffixes = ref(tm("hero.typedSuffixes") || []);
    const typedText = ref("");
    watch(locale, () => {
      suffixes.value = tm("hero.typedSuffixes") || [];
      typedText.value = "";
    });
    watch(suffixes, (newSuffixes) => {
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full min-h-[600px] lg:h-[780px] flex items-center justify-center overflow-hidden relative" }, _attrs))} data-v-b79a90e0><div class="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-xl" data-v-b79a90e0></div><div class="absolute inset-0 bg-white/5 backdrop-blur-sm" data-v-b79a90e0></div><div class="relative z-10 flex flex-col items-center text-center px-4 lg:px-8 max-w-7xl mx-auto" data-v-b79a90e0><div class="relative" data-v-b79a90e0><div class="mx-auto w-full h-full" data-v-b79a90e0><img${ssrRenderAttr("src", _imports_0$2)} alt="Hero Center" class="hidden lg:block w-full h-full object-contain" data-v-b79a90e0><img${ssrRenderAttr("src", _imports_1)} alt="background" class="block lg:hidden w-full object-contain mt-20 z-10" data-v-b79a90e0><div class="absolute inset-0 flex flex-col items-center justify-center text-white p-4 lg:p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl" data-v-b79a90e0><h1 class="text-3xl lg:text-6xl font-bold mb-3 leading-tight text-center -mt-4" data-v-b79a90e0><span data-v-b79a90e0>${ssrInterpolate(_ctx.$t("hero.titlePrefix"))}</span><br data-v-b79a90e0><span class="text-blue-400 border-r-2 border-blue-400 animate-pulse" data-v-b79a90e0>${ssrInterpolate(typedText.value)}</span></h1><p class="text-lg lg:text-xl text-blue-100 max-w-xs lg:max-w-lg leading-relaxed text-center mt-3" data-v-b79a90e0>${ssrInterpolate(_ctx.$t("hero.description"))}</p><div class="flex flex-col lg:flex-row gap-3 lg:gap-6 justify-center items-center mb-6 lg:mb-10 mt-6 lg:mt-10" data-v-b79a90e0><button class="w-full lg:w-auto px-4 lg:px-8 py-2.5 lg:py-4 text-sm lg:text-lg font-semibold bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-xl border border-white/40 text-white rounded-lg flex items-center justify-center shadow-lg" data-v-b79a90e0><i class="mdi mdi-lightning-bolt mr-2 text-xl" data-v-b79a90e0></i> ${ssrInterpolate(_ctx.$t("hero.roadMap"))}</button><button class="w-full lg:w-auto px-4 lg:px-8 py-2.5 lg:py-4 text-sm lg:text-lg font-semibold bg-blue-600/80 hover:bg-blue-600 transition-all duration-300 hover:scale-105 backdrop-blur-xl border border-blue-400/60 text-white rounded-lg flex items-center justify-center shadow-lg" data-v-b79a90e0><i class="mdi mdi-help-circle mr-2 text-xl" data-v-b79a90e0></i> ${ssrInterpolate(_ctx.$t("hero.buy"))}</button></div></div></div></div><div class="absolute inset-0 pointer-events-none z-5" data-v-b79a90e0><div class="absolute top-1/4 left-4 lg:left-10 w-3 h-3 lg:w-4 lg:h-4 bg-yellow-400/60 rounded-full animate-bounce" data-v-b79a90e0></div><div class="absolute top-1/3 right-4 lg:right-16 w-2 h-2 lg:w-3 lg:h-3 bg-blue-400/60 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "0.5s" })}" data-v-b79a90e0></div><div class="absolute bottom-1/4 left-4 lg:left-20 w-4 h-4 lg:w-5 lg:h-5 bg-purple-400/60 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "1s" })}" data-v-b79a90e0></div><div class="absolute bottom-1/3 right-4 lg:right-8 w-3 h-3 lg:w-4 lg:h-4 bg-green-400/60 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "1.5s" })}" data-v-b79a90e0></div></div></div></section>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hero.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const hero = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$e, [["__scopeId", "data-v-b79a90e0"]]), { __name: "Hero" });
const _sfc_main$d = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full flex justify-center items-center py-8 lg:py-12 px-2" }, _attrs))} data-v-d55b187e><div class="bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-xl relative p-6 lg:p-10 xl:p-20 flex flex-col lg:flex-row-reverse items-center justify-between gap-6 lg:gap-8 xl:gap-20 w-full max-w-lg lg:max-w-7xl mx-auto" data-v-d55b187e><div class="absolute top-0 right-0 w-12 h-12 lg:w-16 xl:w-28 xl:h-28 opacity-60 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full" data-v-d55b187e><i class="mdi mdi-note-text text-lg lg:text-2xl xl:text-4xl text-blue-600 dark:text-blue-400" data-v-d55b187e></i></div><div class="absolute bottom-0 right-0 w-16 h-16 lg:w-20 xl:w-28 xl:h-28 opacity-60 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full" data-v-d55b187e><i class="mdi mdi-whatsapp text-xl lg:text-2xl xl:text-4xl text-green-600 dark:text-green-400" data-v-d55b187e></i></div><div class="absolute top-0 left-0 w-16 h-16 lg:w-20 xl:w-28 xl:h-28 opacity-60 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full" data-v-d55b187e><i class="mdi mdi-phone text-xl lg:text-2xl xl:text-4xl text-blue-600 dark:text-blue-400" data-v-d55b187e></i></div><div class="absolute bottom-0 left-0 w-16 h-16 lg:w-20 xl:w-28 xl:h-28 opacity-60 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full" data-v-d55b187e><i class="mdi mdi-image text-xl lg:text-2xl xl:text-4xl text-purple-600 dark:text-purple-400" data-v-d55b187e></i></div><div class="flex flex-col gap-3 relative z-10" data-v-d55b187e><h2 class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white" data-v-d55b187e>${ssrInterpolate(_ctx.$t("ezyTeam.whoAre.title"))}</h2><p class="text-sm lg:text-base text-gray-500 dark:text-gray-400" data-v-d55b187e>${ssrInterpolate(_ctx.$t("ezyTeam.whoAre.text"))}</p><button class="self-center lg:self-start inline-block py-2.5 lg:py-3 px-4 lg:px-6 bg-blue-600/80 backdrop-blur-xl hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 mb-6 lg:mb-0 text-sm lg:text-base border border-blue-400/50 shadow-lg" data-v-d55b187e>${ssrInterpolate(_ctx.$t("ezyTeam.whoAre.cta"))}</button></div></div></section>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EzyTeam/WhoAreEzyTeam.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const WhoAreEzyTeam = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-d55b187e"]]), { __name: "EzyTeamWhoAreEzyTeam" });
const _imports_0$1 = "" + __buildAssetsURL("innovation.CpXn-ElH.webp");
const _sfc_main$c = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-2 py-16" }, _attrs))} data-v-066f2f59><div class="lg:bg-white/10 lg:dark:bg-gray-800/10 lg:backdrop-blur-xl lg:rounded-3xl lg:border lg:border-white/20 lg:dark:border-gray-700/20 lg:shadow-2xl py-12 px-4 lg:p-12 section-fade-in" data-v-066f2f59><h2 class="font-bold text-4xl text-center mb-16 text-gray-900 dark:text-white" data-v-066f2f59>${ssrInterpolate(_ctx.$t("ezyTeam.why.title"))}</h2><div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center" data-v-066f2f59><div class="flex flex-col gap-6 order-1 lg:order-1" data-v-066f2f59><div class="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg p-8 section-slide-up section-delay-1 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300" data-v-066f2f59><h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white" data-v-066f2f59>${ssrInterpolate(_ctx.$t("ezyTeam.why.sections.0.title"))}</h3><p class="text-gray-600 dark:text-gray-300 leading-relaxed" data-v-066f2f59>${ssrInterpolate(_ctx.$t("ezyTeam.why.sections.0.text"))}</p></div><div class="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg p-8 section-slide-up section-delay-2 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300" data-v-066f2f59><h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white" data-v-066f2f59>${ssrInterpolate(_ctx.$t("ezyTeam.why.sections.1.title"))}</h3><p class="text-gray-600 dark:text-gray-300 leading-relaxed" data-v-066f2f59>${ssrInterpolate(_ctx.$t("ezyTeam.why.sections.1.text"))}</p></div></div><div class="flex justify-center items-center order-2 lg:order-2" data-v-066f2f59><div class="illustration-container section-scale-in section-delay-3" data-v-066f2f59><img${ssrRenderAttr("src", _imports_0$1)} alt="innovation" class="w-full h-auto max-w-md object-contain" data-v-066f2f59></div></div><div class="flex flex-col gap-6 order-3 lg:order-3" data-v-066f2f59><div class="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg p-8 section-slide-up section-delay-4 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300" data-v-066f2f59><h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white" data-v-066f2f59>${ssrInterpolate(_ctx.$t("ezyTeam.why.sections.2.title"))}</h3><p class="text-gray-600 dark:text-gray-300 leading-relaxed" data-v-066f2f59>${ssrInterpolate(_ctx.$t("ezyTeam.why.sections.2.text"))}</p></div><div class="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg p-8 section-slide-up section-delay-5 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300" data-v-066f2f59><h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white" data-v-066f2f59>${ssrInterpolate(_ctx.$t("ezyTeam.why.sections.3.title"))}</h3><p class="text-gray-600 dark:text-gray-300 leading-relaxed" data-v-066f2f59>${ssrInterpolate(_ctx.$t("ezyTeam.why.sections.3.text"))}</p></div></div></div></div></section>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EzyTeam/WhyEzyTeam.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const WhyEzyTeam = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-066f2f59"]]), { __name: "EzyTeamWhyEzyTeam" });
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TokenomicsCircle",
  __ssrInlineRender: true,
  setup(__props) {
    Chart.register(Title, Tooltip, Legend, ArcElement);
    const targetPercents = [78, 65, 50, 90];
    const values = [225e5, 235e5, 245e5, 255e5];
    const colors = ["#36A2EB", "#4BC0C0", "#4CAF50", "#FF6384"];
    const { t, tm } = useI18n({ useScope: "global" });
    const labels = computed(() => tm("tokenomics.labels"));
    const animatedPercents = ref([0, 0, 0, 0]);
    const normalizedTargets = computed(() => {
      const total = targetPercents.reduce((sum, p) => sum + p, 0);
      if (!total) return targetPercents;
      return targetPercents.map((p) => p / total * 100);
    });
    const chartData = ref({
      labels: labels.value,
      datasets: [
        {
          data: [0, 0, 0, 0],
          backgroundColor: colors,
          borderWidth: 12,
          borderRadius: 40
        }
      ]
    });
    watchEffect(() => {
      chartData.value.labels = labels.value;
    });
    const chartOptions = {
      cutout: "80%",
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      animation: false
    };
    function getPercent(index) {
      const v = animatedPercents.value[index] ?? 0;
      return Math.round(v);
    }
    function getValue(index) {
      return values[index] ?? 0;
    }
    function getColor(index) {
      return colors[index] ?? "#000000";
    }
    function getNormalized(index) {
      const v = normalizedTargets.value[index];
      return Math.round(v ?? 0);
    }
    function calculateOffset(index, radius = 110) {
      const circumference = 2 * Math.PI * radius;
      let offset = circumference;
      for (let i = 0; i < index; i++) {
        offset -= circumference * animatedPercents.value[i] / 100;
      }
      return offset;
    }
    function calculateDashArray(percent, radius = 110) {
      const circumference = 2 * Math.PI * radius;
      const filled = circumference * percent / 100;
      return `${filled} ${circumference - filled}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full py-8 px-2 lg:px-0" }, _attrs))}><div class="max-w-7xl mx-auto flex flex-col items-center bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl p-8"><h2 class="text-xl font-semibold mb-8">${ssrInterpolate(unref(t)("tokenomics.title"))}</h2><div class="block md:flex md:justify-center items-center gap-32"><div class="relative w-72 h-72 mx-auto md:mx-0">`);
      _push(ssrRenderComponent(unref(Doughnut), {
        data: chartData.value,
        options: chartOptions
      }, null, _parent));
      _push(`<svg class="absolute inset-0 w-full h-full rotate-[-90deg]"><circle r="110" cx="145" cy="145" class="text-gray-200 dark:text-gray-700" stroke="currentColor" stroke-width="12" fill="transparent"></circle><!--[-->`);
      ssrRenderList(animatedPercents.value, (percent, i) => {
        _push(`<circle${ssrRenderAttr("stroke", getColor(i))} stroke-width="12" fill="transparent" r="110" cx="145" cy="145" stroke-linecap="round"${ssrRenderAttr("stroke-dasharray", calculateDashArray(getPercent(i)))}${ssrRenderAttr("stroke-dashoffset", calculateOffset(i))} style="${ssrRenderStyle({ "transition": "stroke-dasharray 0.4s ease, stroke-dashoffset 0.4s ease" })}"></circle>`);
      });
      _push(`<!--]--></svg><div class="absolute inset-0 flex items-center justify-center"><img${ssrRenderAttr("src", _imports_0$3)} alt="logo" class="w-32 h-32 object-contain"></div></div><div class="flex flex-col md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-10 text-center md:text-left justify-items-center md:justify-items-start"><!--[-->`);
      ssrRenderList(targetPercents, (percent, i) => {
        _push(`<div class="flex flex-row items-start justify-center md:justify-start relative"><div class="relative w-20 h-20 flex items-center justify-center flex-shrink-0"><svg viewBox="0 0 100 100" class="absolute inset-0 w-full h-full"><defs><linearGradient${ssrRenderAttr("id", "grad" + i)} x1="0" y1="1" x2="0" y2="0"><stop offset="0%"${ssrRenderAttr("stop-color", getColor(i))} stop-opacity="0.35"></stop><stop offset="100%"${ssrRenderAttr("stop-color", getColor(i))} stop-opacity="0.95"></stop></linearGradient></defs><polygon points="50,0 93,25 93,75 50,100 7,75 7,25"${ssrRenderAttr("fill", "url(#grad" + i + ")")}></polygon><polygon points="50,0 93,25 93,75 50,100 7,75 7,25" class="text-gray-300 dark:text-gray-700" fill="none" stroke="currentColor" stroke-width="1.5"></polygon></svg><span class="font-bold text-sm">${ssrInterpolate(getPercent(i))}%</span></div><div class="flex flex-col flex-1"><span class="text-xl mb-2" style="${ssrRenderStyle({ color: getColor(i) })}">${ssrInterpolate(labels.value[i] || "")}</span><span class="text-gray-500 dark:text-gray-400 text-l mb-2">${ssrInterpolate(getValue(i).toLocaleString())}</span><span class="text-gray-600 dark:text-gray-300 text-l mb-2">${ssrInterpolate(getNormalized(i))}% </span></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TokenomicsCircle.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const TokenomicsCircle = Object.assign(_sfc_main$b, { __name: "TokenomicsCircle" });
const _sfc_main$a = {
  __name: "Features",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const isEn = computed(() => locale.value === "en");
    const features = [
      { icon: "mdi-lightning-bolt", alt: "Feature 1" },
      { icon: "mdi-shield-check", alt: "Feature 2" },
      { icon: "mdi-rocket-launch", alt: "Feature 3" },
      { icon: "mdi-cog", alt: "Feature 4" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-2 lg:px-8 py-8 lg:py-12" }, _attrs))} data-v-8291e403><div class="lg:bg-white/10 lg:dark:bg-gray-800/10 lg:backdrop-blur-xl lg:rounded-3xl lg:border lg:border-white/20 lg:dark:border-gray-700/20 lg:shadow-2xl p-4 lg:p-8 section-fade-in" data-v-8291e403><div class="flex justify-center mb-6 lg:mb-8" data-v-8291e403><h2 class="ribbon-title text-xl lg:text-2xl font-bold" data-v-8291e403>${ssrInterpolate(_ctx.$t("features.title"))}</h2></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8" data-v-8291e403><!--[-->`);
      ssrRenderList(features, (item, index) => {
        _push(`<div class="${ssrRenderClass([`section-delay-${index + 1}`, "bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg p-4 lg:p-6 gap-4 section-slide-up hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300"])}" data-v-8291e403><div class="flex flex-col lg:flex-row items-center gap-4" data-v-8291e403><div class="${ssrRenderClass(["flex justify-center lg:justify-start", isEn.value ? "lg:order-1" : "lg:order-2"])}" data-v-8291e403><div class="w-12 h-12 lg:w-16 lg:h-16 bg-blue-100/80 dark:bg-blue-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-200/50 dark:border-blue-700/50" data-v-8291e403><i class="${ssrRenderClass(["mdi", item.icon, "text-2xl lg:text-3xl text-blue-600 dark:text-blue-400"])}" data-v-8291e403></i></div></div><div class="${ssrRenderClass(["flex flex-col text-center", isEn.value ? "lg:order-2 lg:text-left" : "lg:order-1 lg:text-right"])}" data-v-8291e403><h3 class="text-lg lg:text-xl font-bold mb-2" data-v-8291e403>${ssrInterpolate(_ctx.$t(`features.items.${index}.title`))}</h3><p class="text-sm lg:text-base text-gray-600 dark:text-gray-400" data-v-8291e403>${ssrInterpolate(_ctx.$t(`features.items.${index}.description`))}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Features.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Features = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-8291e403"]]);
const _sfc_main$9 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-blue-600/80 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-center text-center p-6 gap-6 w-11/12 max-w-sm mx-auto sm:max-w-7xl md:w-full border border-blue-400/30 shadow-2xl" }, _attrs))}><span class="text-2xl md:text-3xl font-bold text-white">${ssrInterpolate(_ctx.$t("banner.title"))}</span><div class="flex flex-col md:flex-row gap-4"><a href="https://ston.fi" target="_blank" class="bg-white/20 backdrop-blur-lg text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:scale-105 transition-all duration-300 border border-white/30 shadow-lg"><i class="mdi mdi-currency-usd text-2xl"></i> ${ssrInterpolate(_ctx.$t("banner.ston"))}</a><a href="https://dedust.io" target="_blank" class="bg-white/20 backdrop-blur-lg text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:scale-105 transition-all duration-300 border border-white/30 shadow-lg"><i class="mdi mdi-swap-horizontal text-2xl"></i> ${ssrInterpolate(_ctx.$t("banner.dedust"))}</a><a href="https://swap.coffee" target="_blank" class="bg-white/20 backdrop-blur-lg text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:scale-105 transition-all duration-300 border border-white/30 shadow-lg"><i class="mdi mdi-coffee text-2xl"></i> ${ssrInterpolate(_ctx.$t("banner.swap"))}</a></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EzyTonBanner.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const EzyTonBanner = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender]]), { __name: "EzyTonBanner" });
const _imports_0 = "" + __buildAssetsURL("phone.CZ9Yvc9x.webp");
const frameImage = "" + __buildAssetsURL("Frame.YgCA_i0k.webp");
const _sfc_main$8 = {
  __name: "EzyNetwork",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n({ useScope: "global" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: [
          "max-w-7xl mx-auto px-2 lg:px-4 py-12",
          unref(locale) === "fa" ? "md:flex-row-reverse" : ""
        ]
      }, _attrs))}><div class="bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl p-8 section-fade-in"><div class="flex flex-col md:flex-row gap-6 items-start md:items-center"><div class="${ssrRenderClass([
        "flex-1 max-w-lg text-center md:text-left",
        unref(locale) === "fa" ? "md:text-right" : ""
      ])}"><h2 class="text-3xl font-semibold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("ezyNetwork.title"))} <span class="text-blue-600">${ssrInterpolate(unref(t)("ezyNetwork.titleHighlight"))}</span> ${ssrInterpolate(unref(t)("ezyNetwork.titleSuffix"))}</h2><p class="text-[#809FB3] dark:text-gray-400 mt-4 mb-4">${ssrInterpolate(unref(t)("ezyNetwork.description"))}</p><button class="bg-blue-600/80 backdrop-blur-xl text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 border border-blue-400/50 shadow-lg">${ssrInterpolate(unref(t)("ezyNetwork.cta"))}</button></div><div class="relative flex flex-col items-center w-full md:w-auto mx-auto md:mx-0"><!--[-->`);
      ssrRenderList(3, (item, index) => {
        _push(`<div style="${ssrRenderStyle({
          backgroundImage: `url(${unref(frameImage)})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: 10 - index,
          marginBottom: "20px"
        })}" class="${ssrRenderClass([[
          _ctx.$i18n.locale === "fa" ? index === 1 ? "lg:-translate-y-5 lg:-translate-x-36" : index === 2 ? "lg:-translate-y-10 lg:-translate-x-72" : "" : index === 1 ? "lg:-translate-y-5 lg:translate-x-36" : index === 2 ? "lg:-translate-y-10 lg:translate-x-72" : ""
        ], "max-w-[400px] w-full h-[134px] relative flex items-center gap-4 p-10 transition"])}"><img${ssrRenderAttr("src", _imports_0)} alt="phoneIcon" class="w-12 h-12 flex-shrink-0 bg-[#C4D1E4] p-1 rounded-xl"><div class="${ssrRenderClass([
          "flex flex-col",
          unref(locale) === "fa" ? "text-right" : "text-left",
          "text-white"
        ])}"><p class="font-bold text-sm">${ssrInterpolate(unref(t)("ezyNetwork.features.0.title"))}</p><p class="text-xs">${ssrInterpolate(unref(t)("ezyNetwork.features.0.description"))}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EzyNetwork.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "MenuDigital",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n({ useScope: "global" });
    const features = [
      { icon: "mdi-pot-steam-outline", text: t("menuDigital.features.0.text") },
      { icon: "mdi-deathly-hallows", text: t("menuDigital.features.1.text") },
      { icon: "mdi-notebook-outline", text: t("menuDigital.features.2.text") },
      { icon: "mdi-wallet-outline", text: t("menuDigital.features.3.text") },
      { icon: "mdi-barcode-scan", text: t("menuDigital.features.4.text") }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto mt-16 lg:mt-20 px-2 lg:px-0" }, _attrs))}><div class="text-lg lg:text-xl text-center px-4 lg:px-6"><h3 class="font-bold text-lg lg:text-xl">${ssrInterpolate(unref(t)("menuDigital.title"))}</h3><p class="mt-2 lg:mt-3 text-sm lg:text-base">${ssrInterpolate(unref(t)("menuDigital.description"))}</p></div><div class="flex flex-col-reverse lg:flex-row justify-around items-center mt-8 lg:mt-10 bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl p-6 lg:p-10"><div class="w-full lg:w-auto flex justify-center"><div class="w-[280px] lg:w-[405px] h-[450px] lg:h-[824px] bg-gradient-to-br from-blue-500/80 to-purple-600/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl flex items-center justify-center border border-blue-400/30 shadow-lg"><i class="mdi mdi-cellphone text-white text-[120px] lg:text-[300px] opacity-80"></i></div></div><div class="block lg:flex flex-col gap-4 w-full lg:w-auto items-center lg:items-start text-center lg:text-left"><h3 class="text-[#0047BE] text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">${ssrInterpolate(unref(t)("menuDigital.menuTitle"))}</h3><div class="flex flex-col gap-y-12 lg:gap-y-16"><!--[-->`);
      ssrRenderList(features, (feature, index) => {
        _push(`<div class="${ssrRenderClass([
          index !== features.length - 1 ? "border-b border-gray-300 pb-4" : "pb-4",
          "flex items-center gap-2"
        ])}"><i class="${ssrRenderClass(["mdi", feature.icon, "text-2xl"])}"></i><span class="text-center lg:text-left">${ssrInterpolate(feature.text)}</span></div>`);
      });
      _push(`<!--]--><div class="flex justify-center mb-5 lg:mb-0"><a href="#products" class="bg-blue-600/80 backdrop-blur-xl text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 inline-flex items-center gap-2 border border-blue-400/50 shadow-lg"><span>${ssrInterpolate(unref(t)("menuDigital.cta"))}</span><i class="mdi mdi-arrow-right-thin text-2xl"></i></a></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MenuDigital.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const useRoadmapStore = defineStore("roadmap", {
  state: () => ({
    items: [],
    loading: false,
    error: null
  }),
  getters: {
    getItemsByStatus: (state) => (status) => {
      return state.items.filter((item) => item.status === status);
    },
    getCompletedItems: (state) => {
      return state.items.filter((item) => item.status === "done");
    },
    getInProgressItems: (state) => {
      return state.items.filter((item) => item.status === "in-progress");
    },
    getPlannedItems: (state) => {
      return state.items.filter((item) => item.status === "planned");
    },
    getItemsByYear: (state) => (year) => {
      return state.items.filter((item) => item.publish === year);
    }
  },
  actions: {
    async fetchRoadmapItems() {
      this.loading = true;
      try {
        const response = await axios.get("https://api.ezyton.com/public/home");
        this.items = response.data.roadmap || this.getFakeData();
      } catch (error) {
        this.items = this.getFakeData();
      } finally {
        this.loading = false;
      }
    },
    getFakeData() {
      return [
        {
          _id: "1",
          title: "Preparation & Research",
          des: "With the launch of Ezyton.com, our digital identity was established. The whitepaper and tokenomics were introduced to ensure transparency and direction. Market research guides our strategy, and the EZY Token smart contract was developed and tested for security and efficiency.",
          status: "done",
          publish: 2023,
          voice: "https://api.ezyton.com/voice/preparation-research.mp3",
          createdAt: "2023-01-01T00:00:00Z",
          updatedAt: "2023-12-31T23:59:59Z"
        },
        {
          _id: "2",
          title: "Community Building",
          des: "Telegram, Discord, and social channels were launched. Initial awareness campaigns were carried out, and the first active user community started to grow.",
          status: "done",
          publish: 2024,
          voice: "https://api.ezyton.com/voice/community-building.mp3",
          createdAt: "2024-01-01T00:00:00Z",
          updatedAt: "2024-12-31T23:59:59Z"
        },
        {
          _id: "3",
          title: "Main Product: Menu",
          des: "Easy Shop is a shop building product that has a design similar to Instagram and is only used for products.",
          status: "in-progress",
          publish: 2025,
          voice: "https://api.ezyton.com/voice/main-product-menu.mp3",
          createdAt: "2025-01-01T00:00:00Z",
          updatedAt: "2025-01-15T12:00:00Z"
        },
        {
          _id: "4",
          title: "Ezy Charge",
          des: "Revolutionary charging solution for electric vehicles with smart grid integration and blockchain-based payment system.",
          status: "planned",
          publish: 2025,
          voice: "https://api.ezyton.com/voice/ezy-charge.mp3",
          createdAt: "2025-01-01T00:00:00Z",
          updatedAt: "2025-01-01T00:00:00Z"
        },
        {
          _id: "5",
          title: "Ezy Connect",
          des: "Advanced networking platform connecting businesses and individuals through secure, decentralized communication channels.",
          status: "planned",
          publish: 2025,
          voice: "https://api.ezyton.com/voice/ezy-connect.mp3",
          createdAt: "2025-01-01T00:00:00Z",
          updatedAt: "2025-01-01T00:00:00Z"
        },
        {
          _id: "6",
          title: "Ezy Pay",
          des: "Next-generation payment system with instant cross-border transactions and minimal fees using TON blockchain technology.",
          status: "planned",
          publish: 2025,
          voice: "https://api.ezyton.com/voice/ezy-pay.mp3",
          createdAt: "2025-01-01T00:00:00Z",
          updatedAt: "2025-01-01T00:00:00Z"
        },
        {
          _id: "7",
          title: "Ezy Market",
          des: "Decentralized marketplace for digital and physical goods with integrated smart contracts and automated escrow services.",
          status: "planned",
          publish: 2025,
          voice: "https://api.ezyton.com/voice/ezy-market.mp3",
          createdAt: "2025-01-01T00:00:00Z",
          updatedAt: "2025-01-01T00:00:00Z"
        },
        {
          _id: "8",
          title: "Global Expansion",
          des: "Strategic partnerships and market entry into key regions including Europe, Asia, and North America.",
          status: "planned",
          publish: 2025,
          voice: "https://api.ezyton.com/voice/global-expansion.mp3",
          createdAt: "2025-01-01T00:00:00Z",
          updatedAt: "2025-01-01T00:00:00Z"
        }
      ];
    }
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "RoadMap",
  __ssrInlineRender: true,
  setup(__props) {
    const roadmapStore = useRoadmapStore();
    const playingAudio = ref(null);
    ref(null);
    const completedItems = computed(() => roadmapStore.getCompletedItems);
    const inProgressItems = computed(() => roadmapStore.getInProgressItems);
    const plannedItems = computed(() => roadmapStore.getPlannedItems);
    const getRandomCountdown = () => {
      const countdowns = [
        "2h : 35m : 52s",
        "2w : 5d : 52m",
        "1d : 12h : 30m",
        "3w : 2d : 15h",
        "5d : 8h : 45m"
      ];
      return countdowns[Math.floor(Math.random() * countdowns.length)];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "roadmap-container relative min-h-screen bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-xl py-20 mt-10" }, _attrs))} data-v-745feb01><div class="absolute inset-0 opacity-10" data-v-745feb01><div class="absolute inset-0 bg-[url(&#39;data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&#39;)]" data-v-745feb01></div></div><div class="container mx-auto px-2 relative z-10" data-v-745feb01><div class="text-center mb-16" data-v-745feb01><h1 class="text-3xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4" data-v-745feb01> Road Map </h1><div class="flex gap-4 justify-center" data-v-745feb01><button${ssrIncludeBooleanAttr(unref(roadmapStore).loading) ? " disabled" : ""} class="bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-xl border border-blue-400/30 text-blue-300 px-4 lg:px-6 py-2 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-sm lg:text-base" data-v-745feb01>`);
      if (unref(roadmapStore).loading) {
        _push(`<i class="mdi mdi-loading mr-2 animate-spin text-lg" data-v-745feb01></i>`);
      } else {
        _push(`<i class="mdi mdi-refresh mr-2 text-lg" data-v-745feb01></i>`);
      }
      _push(` ${ssrInterpolate(unref(roadmapStore).loading ? "Loading..." : "Refresh API")}</button><button class="bg-green-500/20 hover:bg-green-500/30 backdrop-blur-xl border border-green-400/30 text-green-300 px-4 lg:px-6 py-2 rounded-lg transition-all duration-300 shadow-lg text-sm lg:text-base" data-v-745feb01><i class="mdi mdi-format-list-bulleted mr-2 text-lg" data-v-745feb01></i> Show Demo Data </button></div></div><div class="relative max-w-7xl mx-auto" data-v-745feb01><div class="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full" data-v-745feb01></div><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" data-v-745feb01><div class="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-xl rounded-full p-8 shadow-2xl border border-white/20" data-v-745feb01><h2 class="text-2xl lg:text-4xl font-bold text-white writing-mode-vertical text-center" data-v-745feb01> ROAD MAP </h2></div></div>`);
      if (unref(roadmapStore).loading) {
        _push(`<div class="flex justify-center items-center py-20" data-v-745feb01><div class="modern-clean-spinner" data-v-745feb01><div class="spinner-ring" data-v-745feb01></div><div class="spinner-ring" data-v-745feb01></div><div class="spinner-ring" data-v-745feb01></div></div></div>`);
      } else if (unref(roadmapStore).error) {
        _push(`<div class="flex justify-center items-center py-20" data-v-745feb01><div class="text-center" data-v-745feb01><div class="text-red-400 text-xl mb-4" data-v-745feb01>⚠️ Error loading roadmap data</div><p class="text-gray-300 mb-4" data-v-745feb01>${ssrInterpolate(unref(roadmapStore).error)}</p><button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors" data-v-745feb01> Retry </button></div></div>`);
      } else if (unref(roadmapStore).items.length === 0) {
        _push(`<div class="flex justify-center items-center py-20" data-v-745feb01><div class="text-center" data-v-745feb01><div class="text-gray-400 text-xl mb-4" data-v-745feb01>📋 No roadmap items available</div><p class="text-gray-300" data-v-745feb01>Check back later for updates!</p></div></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-8 relative" data-v-745feb01><div class="pr-8 lg:pr-16 mb-12 lg:mb-0" data-v-745feb01><!--[-->`);
        ssrRenderList(completedItems.value, (item, index) => {
          _push(`<div class="roadmap-item-left mb-8" style="${ssrRenderStyle({ animationDelay: `${index * 0.2 + 0.1}s` })}" data-v-745feb01><div class="flex items-start space-x-4 lg:space-x-6" data-v-745feb01><div class="flex-shrink-0" data-v-745feb01><div class="w-12 h-12 lg:w-16 lg:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg" data-v-745feb01><i class="mdi mdi-check text-2xl lg:text-3xl text-white" data-v-745feb01></i></div></div><div class="flex-1" data-v-745feb01><div class="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg" data-v-745feb01><div class="flex items-center justify-between mb-4" data-v-745feb01><span class="bg-green-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium" data-v-745feb01>Done</span><span class="text-gray-300 text-xs lg:text-sm" data-v-745feb01>${ssrInterpolate(item.publish)}</span></div><h3 class="text-lg lg:text-xl font-bold text-white mb-3" data-v-745feb01>${ssrInterpolate(item.title)}</h3><p class="text-sm lg:text-base text-gray-300 mb-4 leading-relaxed" data-v-745feb01>${ssrInterpolate(item.des)}</p><div class="flex items-center space-x-2 text-blue-400" data-v-745feb01><button${ssrIncludeBooleanAttr(playingAudio.value === item._id) ? " disabled" : ""} class="flex items-center space-x-2 hover:text-blue-300 transition-colors disabled:opacity-50" data-v-745feb01>`);
          if (playingAudio.value === item._id) {
            _push(`<i class="mdi mdi-volume-high text-lg animate-pulse" data-v-745feb01></i>`);
          } else {
            _push(`<i class="mdi mdi-volume-high text-lg" data-v-745feb01></i>`);
          }
          _push(`<span class="text-xs lg:text-sm" data-v-745feb01>${ssrInterpolate(playingAudio.value === item._id ? "Playing..." : "Listen")}</span></button></div></div></div></div></div>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(inProgressItems.value, (item, index) => {
          _push(`<div class="roadmap-item-left mb-8" style="${ssrRenderStyle({ animationDelay: `${(completedItems.value.length + index) * 0.2 + 0.1}s` })}" data-v-745feb01><div class="flex items-start space-x-4 lg:space-x-6" data-v-745feb01><div class="flex-shrink-0" data-v-745feb01><div class="w-12 h-12 lg:w-16 lg:h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse" data-v-745feb01><i class="mdi mdi-clock text-2xl lg:text-3xl text-white" data-v-745feb01></i></div></div><div class="flex-1" data-v-745feb01><div class="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg" data-v-745feb01><div class="flex items-center justify-between mb-4" data-v-745feb01><div class="flex items-center space-x-2" data-v-745feb01><i class="mdi mdi-clock text-lg text-blue-400" data-v-745feb01></i><span class="text-blue-400 font-mono text-xs lg:text-sm" data-v-745feb01>${ssrInterpolate(getRandomCountdown())}</span></div><span class="text-gray-300 text-xs lg:text-sm" data-v-745feb01>${ssrInterpolate(item.publish)}</span></div><h3 class="text-lg lg:text-xl font-bold text-white mb-3" data-v-745feb01>${ssrInterpolate(item.title)}</h3><p class="text-sm lg:text-base text-gray-300 mb-4 leading-relaxed" data-v-745feb01>${ssrInterpolate(item.des)}</p><div class="flex items-center space-x-2 text-blue-400" data-v-745feb01><button${ssrIncludeBooleanAttr(playingAudio.value === item._id) ? " disabled" : ""} class="flex items-center space-x-2 hover:text-blue-300 transition-colors disabled:opacity-50" data-v-745feb01>`);
          if (playingAudio.value === item._id) {
            _push(`<i class="mdi mdi-volume-high text-lg animate-pulse" data-v-745feb01></i>`);
          } else {
            _push(`<i class="mdi mdi-volume-high text-lg" data-v-745feb01></i>`);
          }
          _push(`<span class="text-xs lg:text-sm" data-v-745feb01>${ssrInterpolate(playingAudio.value === item._id ? "Playing..." : "Listen")}</span></button></div></div></div></div></div>`);
        });
        _push(`<!--]--></div><div class="pl-8 lg:pl-16" data-v-745feb01><!--[-->`);
        ssrRenderList(plannedItems.value, (item, index) => {
          _push(`<div class="roadmap-item-right mb-8" style="${ssrRenderStyle({ animationDelay: `${index * 0.2 + 0.2}s` })}" data-v-745feb01><div class="flex items-start space-x-4 lg:space-x-6" data-v-745feb01><div class="flex-1" data-v-745feb01><div class="bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg" data-v-745feb01><div class="flex items-center justify-between mb-4" data-v-745feb01><span class="bg-gray-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium" data-v-745feb01>Coming Soon</span><span class="text-gray-300 text-xs lg:text-sm" data-v-745feb01>${ssrInterpolate(item.publish)}</span></div><h3 class="text-lg lg:text-xl font-bold text-white mb-3" data-v-745feb01>${ssrInterpolate(item.title)}</h3><div class="flex items-center space-x-2 mb-4" data-v-745feb01><i class="mdi mdi-clock text-lg text-gray-400" data-v-745feb01></i><span class="text-gray-400 font-mono text-xs lg:text-sm" data-v-745feb01>${ssrInterpolate(getRandomCountdown())}</span></div><div class="flex items-center space-x-2 text-blue-400" data-v-745feb01><button${ssrIncludeBooleanAttr(playingAudio.value === item._id) ? " disabled" : ""} class="flex items-center space-x-2 hover:text-blue-300 transition-colors disabled:opacity-50" data-v-745feb01>`);
          if (playingAudio.value === item._id) {
            _push(`<i class="mdi mdi-volume-high text-lg animate-pulse" data-v-745feb01></i>`);
          } else {
            _push(`<i class="mdi mdi-volume-high text-lg" data-v-745feb01></i>`);
          }
          _push(`<span class="text-xs lg:text-sm" data-v-745feb01>${ssrInterpolate(playingAudio.value === item._id ? "Playing..." : "Listen (soon)")}</span></button></div></div></div><div class="flex-shrink-0" data-v-745feb01><div class="w-12 h-12 lg:w-16 lg:h-16 bg-gray-500 rounded-full flex items-center justify-center shadow-lg" data-v-745feb01><i class="mdi mdi-refresh text-2xl lg:text-3xl text-white" data-v-745feb01></i></div></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RoadMap.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const RoadMap = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["__scopeId", "data-v-745feb01"]]), { __name: "RoadMap" });
const useTeamStore = defineStore("team", {
  state: () => ({
    members: [],
    loading: false,
    error: null
  }),
  getters: {
    getMemberById: (state) => (id) => {
      return state.members.find((member) => member._id === id);
    },
    getFeaturedMembers: (state) => (limit = 5) => {
      return state.members.slice(0, limit);
    }
  },
  actions: {
    async fetchTeamMembers() {
      this.loading = true;
      try {
        this.members = this.getFakeData();
      } catch (error) {
        this.members = this.getFakeData();
      } finally {
        this.loading = false;
      }
    },
    getFakeData() {
      return [
        {
          _id: "1",
          name: "nirAbbas Borji",
          skill: "Ui,Ux Designer",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center",
          backgroundGradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
          createdAt: "2024-01-15T10:00:00Z",
          updatedAt: "2024-01-15T10:00:00Z"
        },
        {
          _id: "2",
          name: "AmirAbbas Borji",
          skill: "Ui,Ux Designer",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=center",
          backgroundGradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
          createdAt: "2024-01-10T10:00:00Z",
          updatedAt: "2024-01-10T10:00:00Z"
        },
        {
          _id: "3",
          name: "AmirAbbas Borji",
          skill: "Ui,Ux Designer",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=center",
          backgroundGradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #a8edea 100%)",
          createdAt: "2024-01-05T10:00:00Z",
          updatedAt: "2024-01-05T10:00:00Z"
        },
        {
          _id: "4",
          name: "AmirAbbas Borji",
          skill: "Ui,Ux Designer",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=center",
          backgroundGradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
          createdAt: "2024-01-01T10:00:00Z",
          updatedAt: "2024-01-01T10:00:00Z"
        },
        {
          _id: "5",
          name: "AmirAbbas",
          skill: "Ui,Ux Desig",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=center",
          backgroundGradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
          createdAt: "2023-12-25T10:00:00Z",
          updatedAt: "2023-12-25T10:00:00Z"
        }
      ];
    }
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "OurTeam",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Navigation, Pagination, Autoplay, Mousewheel];
    const { t } = useI18n();
    const teamStore = useTeamStore();
    const loading = computed(() => teamStore.loading);
    const swiperRef = ref(null);
    const baseTeamMembers = computed(() => {
      const members = teamStore.getFeaturedMembers(5);
      if (members.length === 0) {
        return [
          {
            _id: "1",
            name: "Sarah Johnson",
            skill: "UI/UX Designer",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=center",
            backgroundGradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
            createdAt: "2024-01-15T10:00:00Z",
            updatedAt: "2024-01-15T10:00:00Z"
          },
          {
            _id: "2",
            name: "Michael Chen",
            skill: "Frontend Developer",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=center",
            backgroundGradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            createdAt: "2024-01-10T10:00:00Z",
            updatedAt: "2024-01-10T10:00:00Z"
          },
          {
            _id: "3",
            name: "Emily Rodriguez",
            skill: "Product Manager",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center",
            backgroundGradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #a8edea 100%)",
            createdAt: "2024-01-05T10:00:00Z",
            updatedAt: "2024-01-05T10:00:00Z"
          },
          {
            _id: "4",
            name: "David Kim",
            skill: "Backend Developer",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=center",
            backgroundGradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
            createdAt: "2024-01-01T10:00:00Z",
            updatedAt: "2024-01-01T10:00:00Z"
          },
          {
            _id: "5",
            name: "Lisa Thompson",
            skill: "Marketing Director",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=center",
            backgroundGradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
            createdAt: "2023-12-25T10:00:00Z",
            updatedAt: "2023-12-25T10:00:00Z"
          },
          {
            _id: "6",
            name: "Alex Martinez",
            skill: "DevOps Engineer",
            avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=600&fit=crop&crop=center",
            backgroundGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            createdAt: "2023-12-20T10:00:00Z",
            updatedAt: "2023-12-20T10:00:00Z"
          },
          {
            _id: "7",
            name: "Jessica Wang",
            skill: "Data Scientist",
            avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop&crop=center",
            backgroundGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            createdAt: "2023-12-15T10:00:00Z",
            updatedAt: "2023-12-15T10:00:00Z"
          },
          {
            _id: "8",
            name: "Ryan O'Connor",
            skill: "Mobile Developer",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center",
            backgroundGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            createdAt: "2023-12-10T10:00:00Z",
            updatedAt: "2023-12-10T10:00:00Z"
          },
          {
            _id: "9",
            name: "Maria Garcia",
            skill: "QA Engineer",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=center",
            backgroundGradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            createdAt: "2023-12-05T10:00:00Z",
            updatedAt: "2023-12-05T10:00:00Z"
          },
          {
            _id: "10",
            name: "James Wilson",
            skill: "Tech Lead",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=center",
            backgroundGradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            createdAt: "2023-11-30T10:00:00Z",
            updatedAt: "2023-11-30T10:00:00Z"
          }
        ];
      }
      return members;
    });
    const handleImageError = (event) => {
      const img = event.target;
      img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(img.alt)}&background=random&color=fff&size=200`;
    };
    const onSwiper = (swiper) => {
      console.log("Swiper initialized:", swiper);
    };
    const onSlideChange = (swiper) => {
      console.log("Slide changed to:", swiper.activeIndex);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 py-16" }, _attrs))} data-v-6c4e6681><div class="bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl p-2 section-fade-in" data-v-6c4e6681><div class="flex justify-center mb-2" data-v-6c4e6681><h2 class="ribbon-title text-2xl font-bold" data-v-6c4e6681> Our Team </h2></div>`);
      if (loading.value) {
        _push(`<div class="text-center py-20" data-v-6c4e6681><div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" data-v-6c4e6681></div><p class="mt-4 text-gray-600 dark:text-gray-400" data-v-6c4e6681>Loading our amazing team...</p></div>`);
      } else {
        _push(`<div class="relative px-2" data-v-6c4e6681><div class="team-swiper w-full" data-v-6c4e6681>`);
        _push(ssrRenderComponent(unref(Swiper), {
          ref_key: "swiperRef",
          ref: swiperRef,
          modules,
          "space-between": 32,
          loop: true,
          autoplay: {
            delay: 5e3,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          },
          navigation: true,
          pagination: false,
          "simulate-touch": true,
          "allow-touch-move": true,
          "grab-cursor": true,
          mousewheel: {
            forceToAxis: true,
            sensitivity: 0.5,
            releaseOnEdges: true
          },
          speed: 800,
          effect: "slide",
          breakpoints: {
            0: {
              slidesPerView: 2,
              spaceBetween: 8
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            375: {
              slidesPerView: 2,
              spaceBetween: 12
            },
            414: {
              slidesPerView: 2,
              spaceBetween: 12
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 14
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 18
            },
            896: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 32
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 32
            }
          },
          class: "w-full",
          onSwiper,
          onSlideChange
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(baseTeamMembers.value, (member, index) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: member._id,
                  class: "flex justify-center"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="relative group flex-shrink-0 w-36 h-44 sm:w-40 sm:h-52 md:w-44 md:h-56 lg:w-48 lg:h-64 xl:w-56 xl:h-82 flex flex-col items-center justify-center" data-v-6c4e6681${_scopeId2}><div class="modern-card relative w-full h-[90%] rounded-2xl overflow-hidden transition-all duration-500 group-hover:z-50" data-v-6c4e6681${_scopeId2}><div class="w-full h-full" data-v-6c4e6681${_scopeId2}><img${ssrRenderAttr("src", member.avatar)}${ssrRenderAttr("alt", member.name)} class="absolute inset-0 w-full h-full object-cover" data-v-6c4e6681${_scopeId2}><div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" data-v-6c4e6681${_scopeId2}></div><div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm rounded-b-2xl p-2 sm:p-3 lg:p-4" data-v-6c4e6681${_scopeId2}><h3 class="text-white font-bold text-sm sm:text-base md:text-base lg:text-lg mb-1" data-v-6c4e6681${_scopeId2}>${ssrInterpolate(member.name)}</h3><p class="text-white/80 text-xs sm:text-sm md:text-sm lg:text-sm" data-v-6c4e6681${_scopeId2}>${ssrInterpolate(member.skill)}</p></div><div class="gradient-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100" data-v-6c4e6681${_scopeId2}></div></div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "relative group flex-shrink-0 w-36 h-44 sm:w-40 sm:h-52 md:w-44 md:h-56 lg:w-48 lg:h-64 xl:w-56 xl:h-82 flex flex-col items-center justify-center" }, [
                          createVNode("div", { class: "modern-card relative w-full h-[90%] rounded-2xl overflow-hidden transition-all duration-500 group-hover:z-50" }, [
                            createVNode("div", { class: "w-full h-full" }, [
                              createVNode("img", {
                                src: member.avatar,
                                alt: member.name,
                                class: "absolute inset-0 w-full h-full object-cover",
                                onError: handleImageError
                              }, null, 40, ["src", "alt"]),
                              createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
                              createVNode("div", { class: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm rounded-b-2xl p-2 sm:p-3 lg:p-4" }, [
                                createVNode("h3", { class: "text-white font-bold text-sm sm:text-base md:text-base lg:text-lg mb-1" }, toDisplayString(member.name), 1),
                                createVNode("p", { class: "text-white/80 text-xs sm:text-sm md:text-sm lg:text-sm" }, toDisplayString(member.skill), 1)
                              ]),
                              createVNode("div", { class: "gradient-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100" })
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(baseTeamMembers.value, (member, index) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: member._id,
                    class: "flex justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative group flex-shrink-0 w-36 h-44 sm:w-40 sm:h-52 md:w-44 md:h-56 lg:w-48 lg:h-64 xl:w-56 xl:h-82 flex flex-col items-center justify-center" }, [
                        createVNode("div", { class: "modern-card relative w-full h-[90%] rounded-2xl overflow-hidden transition-all duration-500 group-hover:z-50" }, [
                          createVNode("div", { class: "w-full h-full" }, [
                            createVNode("img", {
                              src: member.avatar,
                              alt: member.name,
                              class: "absolute inset-0 w-full h-full object-cover",
                              onError: handleImageError
                            }, null, 40, ["src", "alt"]),
                            createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
                            createVNode("div", { class: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm rounded-b-2xl p-2 sm:p-3 lg:p-4" }, [
                              createVNode("h3", { class: "text-white font-bold text-sm sm:text-base md:text-base lg:text-lg mb-1" }, toDisplayString(member.name), 1),
                              createVNode("p", { class: "text-white/80 text-xs sm:text-sm md:text-sm lg:text-sm" }, toDisplayString(member.skill), 1)
                            ]),
                            createVNode("div", { class: "gradient-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100" })
                          ])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EzyTeam/OurTeam.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const OurTeam = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-6c4e6681"]]), { __name: "EzyTeamOurTeam" });
const useCommentsStore = defineStore("comments", {
  state: () => ({
    comments: [],
    loading: false,
    error: null,
    submitting: false
  }),
  getters: {
    getRecentComments: (state) => (limit = 5) => {
      return state.comments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, limit);
    }
  },
  actions: {
    async fetchComments() {
      this.loading = true;
      try {
        const response = await axios.get("https://api.ezyton.com/public/home");
        const apiComments = response.data.comments || [];
        this.comments = apiComments.map((comment) => ({
          ...comment,
          avatar: this.processAvatarUrl(comment.avatar)
        }));
        if (this.comments.length === 0) {
          this.comments = this.getFakeData();
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
        this.comments = this.getFakeData();
      } finally {
        this.loading = false;
      }
    },
    processAvatarUrl(avatarUrl) {
      if (!avatarUrl) {
        return "https://ui-avatars.com/api/?name=User&background=6366f1&color=fff&size=200";
      }
      if (avatarUrl.startsWith("http://") || avatarUrl.startsWith("https://")) {
        return avatarUrl;
      }
      if (avatarUrl.startsWith("/")) {
        return `https://api.ezyton.com${avatarUrl}`;
      }
      return "https://ui-avatars.com/api/?name=User&background=6366f1&color=fff&size=200";
    },
    getFakeData() {
      return [
        {
          _id: "1",
          name: "احمد محمدی",
          message: "خدمات عالی و پشتیبانی سریع. منو دیجیتال خیلی کاربردی بود.",
          customerJob: "مدیر کافه",
          avatar: "https://ui-avatars.com/api/?name=احمد+محمدی&background=ff6b6b&color=fff&size=200",
          createdAt: "2024-01-15T10:00:00Z",
          updatedAt: "2024-01-15T10:00:00Z"
        },
        {
          _id: "2",
          name: "سارا احمدی",
          message: "طراحی زیبا و عملکرد عالی. مشتری‌ها خیلی راضی هستند.",
          customerJob: "صاحب رستوران",
          avatar: "https://ui-avatars.com/api/?name=سارا+احمدی&background=74b9ff&color=fff&size=200",
          createdAt: "2024-01-10T10:00:00Z",
          updatedAt: "2024-01-10T10:00:00Z"
        },
        {
          _id: "3",
          name: "علی رضایی",
          message: "راه‌اندازی سریع و آسان. پنل مدیریت خیلی کامل است.",
          customerJob: "مدیر فنی",
          avatar: "https://ui-avatars.com/api/?name=علی+رضایی&background=fd79a8&color=fff&size=200",
          createdAt: "2024-01-05T10:00:00Z",
          updatedAt: "2024-01-05T10:00:00Z"
        },
        {
          _id: "4",
          name: "فاطمه کریمی",
          message: "سیستم پرداخت خیلی امن و سریع است. پیشنهاد می‌کنم.",
          customerJob: "مالک کسب‌وکار",
          avatar: "https://ui-avatars.com/api/?name=فاطمه+کریمی&background=a29bfe&color=fff&size=200",
          createdAt: "2024-01-01T10:00:00Z",
          updatedAt: "2024-01-01T10:00:00Z"
        },
        {
          _id: "5",
          name: "محمد حسینی",
          message: "پشتیبانی ۲۴ ساعته عالی است. هر سوالی داشتم جواب دادند.",
          customerJob: "مدیر پروژه",
          avatar: "https://ui-avatars.com/api/?name=محمد+حسینی&background=00b894&color=fff&size=200",
          createdAt: "2023-12-25T10:00:00Z",
          updatedAt: "2023-12-25T10:00:00Z"
        }
      ];
    },
    async submitComment(commentData) {
      this.submitting = true;
      this.error = null;
      try {
        const newComment = {
          ...commentData,
          _id: Date.now().toString(),
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          updatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        this.comments.unshift(newComment);
        return newComment;
      } catch (error) {
        this.error = error.message || "Failed to submit comment";
        console.error("Error submitting comment:", error);
        throw error;
      } finally {
        this.submitting = false;
      }
    }
  }
});
const _sfc_main$4 = {
  __name: "Comment",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Pagination, Autoplay];
    const currentSlide = ref(0);
    const commentsStore = useCommentsStore();
    useTheme();
    const comments = computed(() => commentsStore.comments);
    const loading = computed(() => commentsStore.loading);
    const onSwiper = (swiper) => {
    };
    const onSlideChange = (swiper) => {
      currentSlide.value = swiper.realIndex;
    };
    const handleImageError = (event) => {
      const img = event.target;
      const name = img.alt || "User";
      img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&size=200`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-center px-2 py-4" }, _attrs))}><div class="lg:bg-white/10 lg:dark:bg-gray-800/10 lg:backdrop-blur-xl lg:rounded-3xl lg:border lg:border-white/20 lg:dark:border-gray-700/20 lg:shadow-2xl max-w-4xl w-full p-2 lg:p-8 section-fade-in"><h2 class="text-2xl font-semibold text-center mb-12 text-gray-800 dark:text-white">${ssrInterpolate(_ctx.$t("app.nav.comment"))}</h2>`);
      if (loading.value) {
        _push(`<div class="flex justify-center items-center py-20"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400"></div></div>`);
      } else if (comments.value.length > 0) {
        _push(`<div class="relative flex justify-center">`);
        _push(ssrRenderComponent(unref(Swiper), {
          modules,
          "slides-per-view": 1,
          "space-between": 0,
          loop: true,
          autoplay: {
            delay: 4e3,
            disableOnInteraction: false
          },
          pagination: { clickable: true },
          class: "max-w-4xl w-full py-5 [&_.swiper-pagination]:-bottom-10 [&_.swiper-pagination-bullet]:bg-gray-300 dark:[&_.swiper-pagination-bullet]:bg-gray-600 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:bg-blue-500 dark:[&_.swiper-pagination-bullet-active]:bg-blue-400 [&_.swiper-pagination-bullet-active]:scale-125 [&_.swiper-slide]:transition-all [&_.swiper-slide]:duration-300 [&_.swiper-wrapper]:items-center [&_.swiper-pagination-bullet:focus]:outline-2 [&_.swiper-pagination-bullet:focus]:outline-blue-500 [&_.swiper-pagination-bullet:focus]:outline-offset-2",
          onSwiper,
          onSlideChange
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(comments.value, (comment) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: comment._id,
                  class: "flex justify-center"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-3xl shadow-xl dark:shadow-2xl p-8 max-w-2xl w-full border border-white/30 dark:border-gray-700/30"${_scopeId2}><div class="flex items-center space-x-4 mb-6"${_scopeId2}><img${ssrRenderAttr("src", comment.avatar)}${ssrRenderAttr("alt", comment.name)} class="w-16 h-16 rounded-full object-cover border border-gray-200 dark:border-gray-600"${_scopeId2}><div${_scopeId2}><h3 class="font-bold text-lg text-gray-800 dark:text-white"${_scopeId2}>${ssrInterpolate(comment.name)}</h3><p class="text-sm text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(comment.customerJob)}</p></div></div><div class="relative"${_scopeId2}><div class="text-6xl text-gray-300 dark:text-gray-600 absolute -top-2 -left-2 font-serif"${_scopeId2}>&quot;</div><blockquote class="text-gray-700 dark:text-gray-300 leading-relaxed text-base pl-6 pt-4"${_scopeId2}>${ssrInterpolate(comment.message)}</blockquote><div class="text-6xl text-gray-300 dark:text-gray-600 absolute -bottom-8 -right-2 font-serif transform rotate-180"${_scopeId2}>&quot;</div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-3xl shadow-xl dark:shadow-2xl p-8 max-w-2xl w-full border border-white/30 dark:border-gray-700/30" }, [
                          createVNode("div", { class: "flex items-center space-x-4 mb-6" }, [
                            createVNode("img", {
                              src: comment.avatar,
                              alt: comment.name,
                              class: "w-16 h-16 rounded-full object-cover border border-gray-200 dark:border-gray-600",
                              onError: handleImageError
                            }, null, 40, ["src", "alt"]),
                            createVNode("div", null, [
                              createVNode("h3", { class: "font-bold text-lg text-gray-800 dark:text-white" }, toDisplayString(comment.name), 1),
                              createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(comment.customerJob), 1)
                            ])
                          ]),
                          createVNode("div", { class: "relative" }, [
                            createVNode("div", { class: "text-6xl text-gray-300 dark:text-gray-600 absolute -top-2 -left-2 font-serif" }, '"'),
                            createVNode("blockquote", { class: "text-gray-700 dark:text-gray-300 leading-relaxed text-base pl-6 pt-4" }, toDisplayString(comment.message), 1),
                            createVNode("div", { class: "text-6xl text-gray-300 dark:text-gray-600 absolute -bottom-8 -right-2 font-serif transform rotate-180" }, '"')
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(comments.value, (comment) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: comment._id,
                    class: "flex justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-3xl shadow-xl dark:shadow-2xl p-8 max-w-2xl w-full border border-white/30 dark:border-gray-700/30" }, [
                        createVNode("div", { class: "flex items-center space-x-4 mb-6" }, [
                          createVNode("img", {
                            src: comment.avatar,
                            alt: comment.name,
                            class: "w-16 h-16 rounded-full object-cover border border-gray-200 dark:border-gray-600",
                            onError: handleImageError
                          }, null, 40, ["src", "alt"]),
                          createVNode("div", null, [
                            createVNode("h3", { class: "font-bold text-lg text-gray-800 dark:text-white" }, toDisplayString(comment.name), 1),
                            createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(comment.customerJob), 1)
                          ])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode("div", { class: "text-6xl text-gray-300 dark:text-gray-600 absolute -top-2 -left-2 font-serif" }, '"'),
                          createVNode("blockquote", { class: "text-gray-700 dark:text-gray-300 leading-relaxed text-base pl-6 pt-4" }, toDisplayString(comment.message), 1),
                          createVNode("div", { class: "text-6xl text-gray-300 dark:text-gray-600 absolute -bottom-8 -right-2 font-serif transform rotate-180" }, '"')
                        ])
                      ])
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
      } else {
        _push(`<div class="text-center py-20"><p class="text-gray-500 dark:text-gray-400 text-lg">${ssrInterpolate(_ctx.$t("comments.noComments"))}</p></div>`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comment.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const xRochet = "data:image/webp;base64,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";
const TonkeeperLogo = "data:image/webp;base64,UklGRkIEAABXRUJQVlA4IDYEAACwHQCdASqsAKgAPpFIn0qlpKMhphQ5ULASCWNu3V7xkx+07kjm/qf6XwV8pV/mMZ+ht5j5iPPa9Mv+g9P/qRN5yyEC54qOcz/i8Cv7nWBNKjlDu7u7u7wqhXVg6C2xvrvu7u0qXR3f/4YK/8a6hs9iinhrcd0wTXHXMSvMvX+geEicy6uwmqG03VNuvqtCK0jM9R8EjwrCPrc+nr/+dB//2GKb+3PJdbrVfrbQL37uRQXeUf7pq1Giq2xvWtr17RiK9rkAa78eqqpcRa+BfzZWGtoz1StMzMzBsTx49KOCZKPh/zluSxd5RYskgxJcli7u7u7uqAAA/vi1TZdAj02LLCY2/AwO9Ty9TKCQ7WvWtCnRyQ/kj9zDdlBISyACCV0osJShWXK3lLa3C9TNeXgVk+lyJKoacmdt5gyPVAh4VZEsf53qIHwn7ujnpxenUEAsDLb+w5Ky37q2A2wLW+Arau9QN1qJ13dUUTDLVYty6i8n77/RdHW3NIcr18wPWZhDzXYlSwRupYBzDlsQj5YMduIm3WB8GyLZE241t/w79QagJnFqePj6Lre8urlGEDcfVeQ4qVkpwrWGvXxk3z/RfCXuHnTCBgVnqONWdSKtb9bp5s1Dy10AiWiVMdrp0nJIW9Rl0QHaT95AHnp1xFqHtSLBVMJwcE9+4i6NR+JFWa4SmnE54Z6tkGwnpW4obJJEC7aVs8GdltR4KZsM4xnUEfCDPhDGuHBs2eFm95wS34ONiGmah6ofjKIxo4ybtBX7rgiSjwqpfqTtGrHXDO9M+g+XlyoROcLE8PP6pCqVUKgJjyq6yCRfFipoKrxAqTbzhZiVYTM6M3VE7ZI4l4LaGEutkRCWPA2HDcr7eQ+Wzg0OETPqlvytUgmS3n5SWrwpRvTMsIRL7JsTJRdnT6viiO5UBgrHTScg3ncgEwhQMI+rV7FVFn/NOizfLL15KWvgqiTOo/6bZ+TIiMwDSULwo0q9ijVLYh754e5kiMSB7gEHN0kwCXi9fEQWTXnqSps1+f3E7XBtCq1d04BL6dJqEzs1KEbDtv5A1YcE8BoABareU/H7T+03p5xv7rnts+acGkAvL6OXo4XIrqYr/t8LGAQktaba8RCeA65iQefS9F5hCxxmUP4B/k0Wk3+aPnnKhfDa0XXceTijvw6mB8aadLf2s8PV+XlDzAAsepXdjbZmqBjgAofMfS4+ZJVMc+oNKf4Q1yEAJcDrtyZVSP1MdcnGEwcavoaIqu78rq3+zBvYoPPQ8UtbzaCg+PK83iRKmyK/7hwKy0sUgBlmfEhmigBTXnR63a6MDnJkizz8fQQtOEOMZB0Ldys0vubwa/EwTBLcswLQYuVXqewiPghwcqxZa/bcomkrBXYgCPepQCOs4hqjMBM5BCLgInirC2FK1qFbRUhhKmzET/mcFxqIqEAAAAAA";
const Tonviewer = "data:image/webp;base64,UklGRvYEAABXRUJQVlA4IOoEAADwIwCdASrIAMgAPpFInkulpKKhpJIIyLASCWVu4XHg/pb/7DYDvAcjj2T/d4R+5c9HzAP086W3mA85D0s+gB0nHPxeyf/fGqu7K5VjBDSOzM/G/qAdDf9m/YA/SsYIuz6gh9QQ+oIfUEPqCHWYLOC2eoIfUEPkIgzn3/HWI3d4DNYqWG/OiMnQpHZTwPNLHoPL9+spvIRy0r+EVBIRFQNs7axQCwMSFnoktscb9J3jroJho6ldhW+UZtsFnOyVnDc7HDn1pSzTVbSMXxyLLfEh/UTY/ycpxWLTxZxd7S+LXzUB5AP1YX2qUgnRGJsj75g3o4GYtWgZylKspooXi57T29OnDKCpvhNpmydi46aVoIeX2Fb7KtiHP06IydEZOiMnRGTojJ0RAAD+/xFgAAAzHwwyo9Sdb84p95dJ/GpkAnthU9uzsWXqnO6pprOtgBf7bPjjFzQJbpaL8re0qv+1rSCQDbx4kkwBXIAkS7QMfGzg87dAbYifq63wkK/KbxHl2PosmD1A+KorT/6oUKmRnyCg3VRfVr+qlN4Qnz//yum0+S5aZHsTJzM5giduh+9006N2NFsRmq3H3t7fUuZHqkvt4v4KAjX4RW2rFfQq2IB+ILk5jjQVtlIIgEsPX46ygMtuIJZmSKXgurvskSXPewonqpW7uMq9JugOC1R9TcdQ6g8Rkup0kIyb3EZ+1zX2VPPaYvYUGWcSc6WIeZkOMhH4/LabNc7k22hXYowTBq275qBCZR5AHXLY7y59idX+Se/GwhsP2pD15KTYvtC/J5vJBjQDt2ytIPKJlXG61gZvtAMaWZ3GXfXMnzdmCXawKLP496SPGhViMQKC1fyxKgveSwdsFL8sjAkEtphVrpy+tfxqAhxUeDBzOI4NDGXywKzww3yB4gg9boq6d5IrT7m1nkcp05dN8VfVvbtI3UNCvLZ/Nfrh6eOwY/VfpdZhndG12TqNpMwcyMyG9qwWZNpUUrKQXgPsI9IpkkHanLUzaQZkgyF1FW5N8Q3Kwd8pZJ5kCG6LOe/Z3Sjb3YA/9bN+Ur6bqi51MKYhY2NOLPR40zVPfxvOB0MhwgujGpzNVQDOpHA+QlvDZQ/HwoMk5L9c2nbNd482n93yZY/i7Fk/lNyuMpWO/Ow9CaR0Y5Zbt4RM/+4/1//DGCenbwCQrNE40jzwwGMHEBMap+wwa0fGA8Cttv5lqS7eEe5NEIbownikg/pn5gGrNDFmh4C6jxJTCgWLaeomB+P/eQIPvoLDKGsiyiIqS3kULuoQn6T3CY1Ehhe2A7w9GsSW00g7WWaPF/3QnJ0rB6tEuJ/ms0DduZN4f6d+ciCYc2za9jaTzqS+55oaOId18zd7HlADW5vLgxfyMCc0HByo19HSGEkToGlZ3heIJ/YLBxHnCIt402kYFq882yFTGx54PgFAMIl3/gt+PhcogSnOzib5l07O7hvjWDXwVROMm9LK7RLkl5zReMHMT1PkXHC5rPcOSgGHzP37aKdySaCJHvLERgNnVMc+WB+kPtTSISMLpLNf5juUZLIe8qcvvNdvOXd6Ddmvi3oAZVa9AlPdNyIT7MvUv5soRr+dfJAzYuUrN5OaeBRcSRoRR7HVrCRTrnyqOIQsiL38ENOk9tuFTx1XcBDAGJ26VRzpFCqpoA8YMvjLwVQoT5wAAAAA";
const DyorLogo = "data:image/webp;base64,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";
const StonLogo = "" + __buildAssetsURL("StonLogo.k1WIop9B.webp");
const DedustLogo = "data:image/webp;base64,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";
const GetgemsLogo = "data:image/webp;base64,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";
const AquaLogo = "data:image/webp;base64,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";
const _sfc_main$3 = {
  __name: "EzyPartner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto px-4 mt-10" }, _attrs))}><div class="lg:bg-white/10 lg:dark:bg-gray-800/10 lg:backdrop-blur-xl lg:rounded-3xl lg:border lg:border-white/20 lg:dark:border-gray-700/20 lg:shadow-2xl p-8"><h2 class="font-bold text-3xl text-center mb-5">${ssrInterpolate(_ctx.$t("ezyPartner.title"))}</h2><div class="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10"><div class="flex items-center gap-3"><img${ssrRenderAttr("src", unref(xRochet))} alt="xRochet" class="w-10 h-10"><span class="text-white font-medium text-sm lg:text-base">xRocket</span></div><div class="flex items-center gap-3"><img${ssrRenderAttr("src", unref(TonkeeperLogo))} alt="TonkeeperLogo" class="w-10 h-10"><span class="text-white font-medium text-sm lg:text-base">Tonkeeper</span></div><div class="flex items-center gap-3"><img${ssrRenderAttr("src", unref(Tonviewer))} alt="Tonviewer" class="w-10 h-10"><span class="text-white font-medium text-sm lg:text-base">Tonviewer</span></div><div class="flex items-center gap-3"><img${ssrRenderAttr("src", unref(DyorLogo))} alt="DyorLogo" class="w-10 h-10"><span class="text-white font-medium text-sm lg:text-base">DYOR.io</span></div><div class="flex items-center gap-3 lg:ml-32"><img${ssrRenderAttr("src", unref(StonLogo))} alt="StonLogo" class="w-10 h-10"><span class="text-white font-medium text-sm lg:text-base">STON.fi</span></div><div class="flex items-center gap-3 lg:ml-32"><img${ssrRenderAttr("src", unref(DedustLogo))} alt="DedustLogo" class="w-10 h-10"><span class="text-white font-medium text-sm lg:text-base">DeDust.io</span></div><div class="flex items-center gap-3 lg:ml-32"><img${ssrRenderAttr("src", unref(GetgemsLogo))} alt="GetgemsLogo" class="w-10 h-10"><span class="text-white font-medium text-sm lg:text-base">Getgems.io</span></div><div class="flex items-center gap-3 lg:ml-32"><img${ssrRenderAttr("src", unref(AquaLogo))} alt="AquaLogo" class="w-10 h-10"><span class="text-white font-medium text-sm lg:text-base">Aqua Protocol</span></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EzyPartner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FAQ",
  __ssrInlineRender: true,
  setup(__props) {
    const { tm } = useI18n();
    const faqs = computed(() => {
      return tm("faqs") || [];
    });
    const openIndex = ref(null);
    const isOpen = (index) => {
      return openIndex.value === index;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto my-16 lg:my-28 mb-16 lg:mb-32 px-2 lg:px-10 h-[800px] lg:h-[755px]" }, _attrs))} data-v-711510d4><div class="lg:bg-white/10 lg:dark:bg-gray-800/10 lg:backdrop-blur-xl lg:rounded-3xl lg:border lg:border-white/20 lg:dark:border-gray-700/20 lg:shadow-2xl p-4 lg:p-8" data-v-711510d4><h2 class="text-center font-bold text-xl lg:text-2xl mb-6 lg:mb-8" data-v-711510d4>${ssrInterpolate(_ctx.$t("faqSection.title"))}</h2><div class="space-y-4" data-v-711510d4><!--[-->`);
      ssrRenderList(faqs.value, (faq, index) => {
        _push(`<div class="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-lg border border-white/30 dark:border-gray-700/30 shadow-lg group py-4 lg:py-5 px-4 lg:px-5 transition-all duration-300 hover:shadow-xl hover:bg-white/30 dark:hover:bg-gray-800/30" data-v-711510d4><h3 class="flex justify-start items-center text-base lg:text-lg gap-2 lg:gap-3 cursor-pointer transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400" data-v-711510d4><i class="${ssrRenderClass([{
          "rotate-45 text-blue-600 dark:text-blue-400": isOpen(index),
          "text-gray-500 dark:text-gray-400": !isOpen(index)
        }, "mdi mdi-plus text-xl lg:text-2xl transition-all duration-300 ease-in-out"])}" data-v-711510d4></i><span class="${ssrRenderClass([{ "font-semibold": isOpen(index) }, "transition-all duration-300"])}" data-v-711510d4>${ssrInterpolate(faq.question)}</span></h3>`);
        if (isOpen(index)) {
          _push(`<div class="overflow-hidden" data-v-711510d4><div class="mt-3 lg:mt-4 p-3 lg:p-4 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg border-l-4 border-blue-500 border border-white/20 dark:border-gray-700/20" data-v-711510d4><p class="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed" data-v-711510d4>${ssrInterpolate(faq.answer)}</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FAQ.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FAQ = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-711510d4"]]), { __name: "FAQ" });
function useScrollAnimations() {
  const observer = ref(null);
  const observedElements = ref(/* @__PURE__ */ new Set());
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    animationType: "fadeIn",
    delay: 0,
    duration: 800,
    once: true
  };
  const createObserver = (options = {}) => {
    const config = { ...defaultOptions, ...options };
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            animateElement(element, config);
            if (config.once) {
              observer.value?.unobserve(element);
              observedElements.value.delete(element);
            }
          }
        });
      },
      {
        threshold: config.threshold,
        rootMargin: config.rootMargin
      }
    );
  };
  const animateElement = (element, options) => {
    element.classList.remove(
      "animate-fade-in",
      "animate-slide-up",
      "animate-slide-left",
      "animate-slide-right",
      "animate-scale-in",
      "animate-blur-in"
    );
    switch (options.animationType) {
      case "fadeIn":
        element.style.opacity = "0";
        break;
      case "slideUp":
        element.style.opacity = "0";
        element.style.transform = "translateY(50px)";
        break;
      case "slideLeft":
        element.style.opacity = "0";
        element.style.transform = "translateX(50px)";
        break;
      case "slideRight":
        element.style.opacity = "0";
        element.style.transform = "translateX(-50px)";
        break;
      case "scaleIn":
        element.style.opacity = "0";
        element.style.transform = "scale(0.9)";
        break;
      case "blurIn":
        element.style.opacity = "0";
        element.style.filter = "blur(10px)";
        break;
    }
    element.style.transition = `all ${options.duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    element.style.transitionDelay = `${options.delay}ms`;
    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0) translateX(0) scale(1)";
      element.style.filter = "blur(0px)";
      element.classList.add(`animate-${options.animationType}`);
    }, 50);
  };
  const observeElement = (element, options = {}) => {
    const el = "value" in element ? element.value : element;
    if (!el) return;
    if (!observer.value) {
      observer.value = createObserver(options);
    }
    observer.value.observe(el);
    observedElements.value.add(el);
  };
  const unobserveElement = (element) => {
    const el = "value" in element ? element.value : element;
    if (!el || !observer.value) return;
    observer.value.unobserve(el);
    observedElements.value.delete(el);
  };
  const observeMultiple = (elements, options = {}) => {
    elements.forEach((element, index) => {
      const elementOptions = {
        ...options,
        delay: options.delay ? options.delay + index * 100 : index * 100
      };
      observeElement(element, elementOptions);
    });
  };
  const destroyObserver = () => {
    if (observer.value) {
      observer.value.disconnect();
      observer.value = null;
      observedElements.value.clear();
    }
  };
  return {
    observeElement,
    unobserveElement,
    observeMultiple,
    destroyObserver
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LazySection",
  __ssrInlineRender: true,
  props: {
    animationType: { default: "fadeIn" },
    threshold: { default: 0.1 },
    rootMargin: { default: "0px 0px -50px 0px" },
    delay: { default: 0 },
    duration: { default: 800 },
    once: { type: Boolean, default: true },
    preload: { type: Boolean, default: false }
  },
  setup(__props) {
    const sectionRef = ref(null);
    const isLoaded = ref(false);
    useScrollAnimations();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: ["lazy-section", [
          `lazy-section--${_ctx.animationType}`,
          { "lazy-section--loaded": isLoaded.value }
        ]]
      }, _attrs))} data-v-a29f0726>`);
      if (!isLoaded.value) {
        _push(`<div class="lazy-section__placeholder" data-v-a29f0726><div class="lazy-section__skeleton" data-v-a29f0726><div class="skeleton-line skeleton-line--title" data-v-a29f0726></div><div class="skeleton-line skeleton-line--content" data-v-a29f0726></div><div class="skeleton-line skeleton-line--content" data-v-a29f0726></div><div class="skeleton-line skeleton-line--short" data-v-a29f0726></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoaded.value) {
        _push(`<div class="lazy-section__content" data-v-a29f0726>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LazySection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LazySection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-a29f0726"]]), { __name: "LazySection" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "EzyTon - Modern Landing Page",
      meta: [
        { name: "description", content: "EzyTon - A modern, smooth, and performant landing page with lazy loading and beautiful animations" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]
    });
    useSeoMeta({
      title: "EzyTon - Modern Landing Page",
      ogTitle: "EzyTon - Modern Landing Page",
      description: "EzyTon - A modern, smooth, and performant landing page with lazy loading and beautiful animations",
      ogDescription: "EzyTon - A modern, smooth, and performant landing page with lazy loading and beautiful animations",
      ogImage: "/images/logo.webp",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(LazySection, {
        "animation-type": "fadeIn",
        preload: true,
        class: "hero-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(hero, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(hero)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LazySection, {
        "animation-type": "slideUp",
        delay: 200,
        class: "team-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(WhoAreEzyTeam, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(WhoAreEzyTeam)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LazySection, {
        "animation-type": "slideLeft",
        delay: 300,
        class: "team-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(WhyEzyTeam, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(WhyEzyTeam)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LazySection, {
        "animation-type": "scaleIn",
        delay: 400,
        class: "tokenomics-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(TokenomicsCircle, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(TokenomicsCircle)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LazySection, {
        "animation-type": "slideUp",
        delay: 500,
        class: "features-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Features, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Features)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LazySection, {
        "animation-type": "blurIn",
        delay: 600,
        class: "banner-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(EzyTonBanner, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(EzyTonBanner)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LazySection, {
        "animation-type": "slideRight",
        delay: 700,
        class: "network-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$8)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LazySection, {
        "animation-type": "fadeIn",
        delay: 800,
        class: "menu-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$7, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$7)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LazySection, {
        "animation-type": "slideUp",
        delay: 900,
        class: "roadmap-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(RoadMap, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(RoadMap)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LazySection, {
        "animation-type": "scaleIn",
        delay: 1e3,
        class: "team-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(OurTeam, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(OurTeam)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LazySection, {
        "animation-type": "slideLeft",
        delay: 1100,
        class: "comments-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LazySection, {
        "animation-type": "blurIn",
        delay: 1200,
        class: "blog-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BlogPreview, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(BlogPreview)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LazySection, {
        "animation-type": "slideRight",
        delay: 1300,
        class: "partners-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(LazySection, {
        "animation-type": "fadeIn",
        delay: 1400,
        class: "faq-section"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(FAQ, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(FAQ)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cg98r_r4.mjs.map
