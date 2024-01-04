<template>
  <div class="mb-3 px-4 sm:px-0">
    <h3 class="text-base font-semibold leading-7 text-gray-900">Attributes</h3>
  </div>

  <div
    v-for="attribute in attributes"
    :key="attribute.name"
    class="space-y-2 border-t border-gray-100"
  >
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-uppercase text-sm font-medium leading-6 text-gray-900">
          {{ attribute.name }}
        </dt>
        <dd
          class="mt-1 text-right text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
        >
          {{ attribute.value }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { iAttribute } from "@/domain/race/Race";

defineProps({
  attributes: {
    type: Array as PropType<Array<iAttribute>>,
    required: true,
  },
});
</script>
