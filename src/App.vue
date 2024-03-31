<script setup>
import { ref, provide, onMounted, defineAsyncComponent } from 'vue';
import GeneralConcepts from './components/GeneralConcepts.vue';
import StylingConcepts from './components/StylingConcepts.vue';
import EventsConcepts from './components/EventConcepts.vue';
import ExposeStateConcepts from './components/ExposeStateConcepts.vue';
import ComputedPropertyConcepts from './components/ComputedPropertyConcepts.vue';
import ConditionalRenderingConcepts from './components/ConditionalRenderingConcepts.vue';
import LoopingConcepts from './components/LoopingConcepts.vue';
import TwoWayDataBindingConcepts from './components/TwoWayDataBindingConcepts.vue';
import PropsConcepts from './components/PropsConcepts.vue';
import ComponentEventsConcepts from './components/ComponentEventsConcepts.vue';
import SlotConcepts from './components/SlotConcepts.vue';
import ProvideAndInjectConcepts from './components/ProvideAndInjectConcepts.vue';
import LifeCycleHooksConcepts from './components/LifeCycleHooksConcepts.vue';
import WatchersConcepts from './components/WatchersConcepts.vue';
import TemplateRefsConcepts from './components/TemplateRefsConcepts.vue';
import ComposableConcepts from './components/ComposableConcepts.vue';
import CustomDirectivesConcepts from './components/CustomDirectivesConcepts.vue';
import MainComponent from './components/DynamicComponentConcepts/MainComponent.vue';

const firstName = ref('Mayur');
const lastName = ref('Patel');

const counter = ref(0);

const submitFormHandler = (payload) => {
  console.log(payload);
  alert(payload.userName + ' ' + payload.email + ' ' + payload.password);
};

provide('loggedInUserName', 'Mayur Patel');
provide('loggedInUserType', 'Super Admin');

const showHideLifeCycleHook = ref(true);

const myComponentRef = ref('');

const toggleAsyncComponent = ref(false);

const AsyncComponentConcepts = defineAsyncComponent(() => {
  return import('./components/AsyncComponentConcepts.vue');
})

onMounted(() => {
  console.log(myComponentRef.value, 'ComponentRef');
});
</script>
<template>
  <!-- GeneralConcepts -->
  <GeneralConcepts />
  <hr />
  <!-- StylingConcepts -->
  <StylingConcepts />
  <hr />
  <!-- ReactivityConcepts -->
  <ExposeStateConcepts />
  <hr />
  <!-- EventsConcepts -->
  <EventsConcepts />
  <hr />
  <!-- ComputedPropertyConcepts -->
  <ComputedPropertyConcepts />
  <hr />
  <!-- ConditionalRenderingConcepts -->
  <ConditionalRenderingConcepts />
  <hr />
  <!-- LoopingConcepts -->
  <LoopingConcepts />
  <hr />
  <!-- TwoWayDataBindingConcepts -->
  <TwoWayDataBindingConcepts />
  <hr />
  <!-- PropsConcepts -->
  <PropsConcepts title="Props Concepts" :firstName="firstName" :lastName="lastName" :age="10" />
  <hr />
  <!-- ComponentEventsConcepts -->
  <div>
    <h4>Component Events</h4>
        <p>Children component can communicate with parent component with event emits</p>
        <p>Parent component can listen children component emitted events</p>
        <h4>Counter: {{ counter }}</h4>
        <ComponentEventsConcepts @incrementCounter="counter++" @submitForm="submitFormHandler" />
  </div>
  <hr />
  <!-- SlotConcepts -->
  <!-- Simple Slot -->
  <SlotConcepts>
    <div>
      <h4>Slot Component</h4>
      <h5>Content</h5>
    </div>
  </SlotConcepts>
  <!-- Fallback Slot -->
  <SlotConcepts></SlotConcepts>
  <!-- Named slot -->
  <SlotConcepts>
    <template v-slot:title>
      <h4>Named Slot Title </h4>
    </template>
    <template #content>
      <h4>Named Slot Content </h4>
    </template>
  </SlotConcepts>
  <!-- Default slot -->
  <SlotConcepts>
    <template #default>
      <h4>Default Slot Content </h4>
    </template>
  </SlotConcepts>
  <hr />
  <!-- Provide & Inject Concepts -->
  <ProvideAndInjectConcepts />
  <hr />
  <!-- Life Cycle Hooks Concepts -->
  <div>
    <h4>Life Cycle Hooks</h4>
    <LifeCycleHooksConcepts v-if="showHideLifeCycleHook" />
    <button @click="showHideLifeCycleHook = !showHideLifeCycleHook">Show/Hide</button>
  </div>  
  <hr />
  <!-- Watchers Concepts -->
  <WatchersConcepts />
  <hr />
  <!-- Template Refs Concepts -->
  <TemplateRefsConcepts ref="myComponentRef" />
  <hr />
  <!-- Async Component Concepts -->
  <div>
    <h4>Async Components</h4>
    <AsyncComponentConcepts v-if="toggleAsyncComponent" />
    <button @click="toggleAsyncComponent = !toggleAsyncComponent">Toggle Async Component</button>
  </div>
  <hr />
  <!-- Composable Concepts -->
  <ComposableConcepts />
  <hr />
  <!-- CustomDirectives Concepts -->
  <CustomDirectivesConcepts />
  <hr />
  <!-- Async Component Concepts -->
  <div>
    <h4>Dynamic Components</h4>
    <MainComponent  />
  </div>
  <hr />
</template>
<style scoped></style>