// src/components/ColoredLink.vue
<template>
  <a 
    :href="href" 
    target="_blank" 
    class="text-orange-500 underline flex items-end"
    :class="className"
  >
    <slot></slot>
    <ArrowUpRight 
      :stroke-width="2.5" 
      class="h-5 w-5" 
    />
  </a>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

defineProps<{
  href: string
  className?: string
}>()
</script>