<template>
  <div class="mb-3 px-4 sm:px-0">
    <h3 class="text-base font-semibold leading-7 text-gray-900">Attributes</h3>
  </div>

  <div
    v-for="(attribute, index) in attributes"
    :key="index"
    class="space-y-2 border-t border-gray-100"
  >
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-semibold uppercase leading-6 text-gray-900">
          {{ index.substring(0, 3) }}
        </dt>
        <dd
          class="mt-1 text-right text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
        >
          {{ attribute }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { Attributes } from "@/domain/race/Race";

defineProps({
  attributes: {
    type: Object as PropType<Attributes>,
    required: true,
  },
});
</script>
