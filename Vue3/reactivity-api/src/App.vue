<template>
  <template-ref-c></template-ref-c>
</template>

<script>
import ReactiveC from './components/ReactiveC.vue';
import RefC from './components/RefC.vue';
import WatchEffectC from './components/WatchEffectC.vue';
import WatchC from './components/WatchC.vue';
import WatchMulC from './components/WatchMulC.vue';
import ToRefC from './components/ToRefC.vue';
import ToRefsC from './components/toRefsC.vue';
import TemplateRefFather from './components/TemplateRefFather.vue';
import TemplateRefC from './components/TemplateRefC.vue';

export default {
  name: 'App',
  components: {
    ReactiveC,
    RefC,
    WatchEffectC,
    WatchC,
    WatchMulC,
    ToRefC,
    ToRefsC,
    TemplateRefFather,
    TemplateRefC
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
