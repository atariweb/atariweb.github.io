import { mergeProps, defineComponent, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import _sfc_main$2 from './AuthLayout-CfMkC8nB.mjs';
import Footer from './Footer-6g090y55.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-router';
import './logo-CiNKSEV8.mjs';
import './useLocale-BU49rBmi.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ScrollProgress",
  __ssrInlineRender: true,
  setup(__props) {
    const scrollProgress = ref(0);
    const isVisible = ref(false);
    const showScrollToTop = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["scroll-progress", { "scroll-progress--visible": isVisible.value }]
      }, _attrs))} data-v-6ba258cc><div class="scroll-progress__bar" data-v-6ba258cc><div class="scroll-progress__fill" style="${ssrRenderStyle({ width: `${scrollProgress.value}%` })}" data-v-6ba258cc></div></div>`);
      if (showScrollToTop.value) {
        _push(`<button class="${ssrRenderClass([{ "scroll-progress__button--visible": showScrollToTop.value }, "scroll-progress__button"])}" aria-label="Scroll to top" data-v-6ba258cc><svg class="scroll-progress__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-6ba258cc><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" data-v-6ba258cc></path></svg></button>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollProgress.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ScrollProgress = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-6ba258cc"]]), { __name: "ScrollProgress" });
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen relative overflow-hidden" }, _attrs))} data-v-2248cecc><div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none" data-v-2248cecc><div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-v-2248cecc></div><div class="absolute inset-0 bg-white/20 dark:bg-black/50 backdrop-blur-md" data-v-2248cecc></div><div class="absolute top-16 lg:top-20 left-4 lg:left-10 w-20 h-20 lg:w-32 lg:h-32 bg-blue-200 dark:bg-blue-800 opacity-20 animate-float-slow diamond-shape" data-v-2248cecc></div><div class="absolute top-32 lg:top-40 right-8 lg:right-20 w-16 h-16 lg:w-24 lg:h-24 bg-indigo-200 dark:bg-indigo-800 opacity-30 animate-float-medium diamond-shape" data-v-2248cecc></div><div class="absolute bottom-24 lg:bottom-32 left-1/4 w-24 h-24 lg:w-40 lg:h-40 bg-purple-200 dark:bg-purple-800 opacity-25 animate-float-fast diamond-shape" data-v-2248cecc></div><div class="absolute bottom-16 lg:bottom-20 right-1/3 w-20 h-20 lg:w-28 lg:h-28 bg-pink-200 dark:bg-pink-800 opacity-20 animate-float-slow diamond-shape" data-v-2248cecc></div><div class="absolute top-1/2 left-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-cyan-200 dark:bg-cyan-800 opacity-30 animate-float-medium diamond-shape transform -translate-x-1/2 -translate-y-1/2" data-v-2248cecc></div><div class="absolute top-1/3 right-1/4 w-24 h-24 lg:w-36 lg:h-36 bg-emerald-200 dark:bg-emerald-800 opacity-15 animate-float-slow diamond-shape" data-v-2248cecc></div><div class="absolute bottom-1/3 left-1/5 w-12 h-12 lg:w-16 lg:h-16 bg-rose-200 dark:bg-rose-800 opacity-25 animate-float-medium diamond-shape" data-v-2248cecc></div><div class="absolute top-24 lg:top-32 right-1/4 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-700 opacity-20 rotate-45 animate-spin-slow" data-v-2248cecc></div><div class="absolute bottom-32 lg:bottom-40 left-1/3 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-400 to-pink-500 dark:from-purple-600 dark:to-pink-700 opacity-25 rotate-12 animate-bounce-slow" data-v-2248cecc></div><div class="absolute top-1/4 left-1/6 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 opacity-15 rotate-90 animate-spin-slow" data-v-2248cecc></div><div class="absolute inset-0 opacity-5 dark:opacity-10" data-v-2248cecc><div class="grid-pattern" data-v-2248cecc></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<main class="flex-1 relative z-10" data-v-2248cecc>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(ssrRenderComponent(ScrollProgress, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2248cecc"]]);

export { _default as default };
//# sourceMappingURL=default-DMgth_tO.mjs.map
