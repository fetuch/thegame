<template>
  <div class="mb-3 px-4 sm:px-0">
    <h3 class="text-base font-semibold leading-7 text-gray-900">Equipment</h3>
  </div>

  <div
    v-for="(item, slot) in equipment"
    :key="slot"
    class="space-y-2 border-t border-gray-100"
  >
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-semibold uppercase leading-6 text-gray-900">
          {{ slot }}
        </dt>
        <dd
          class="mt-1 text-right text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
        >
          <template v-if="item">
            {{ item?.getName() }}
            <div v-for="effect in item.getEffects()" :key="effect.name">
              +{{ effect.value }} {{ effect.name }}
            </div>
          </template>

          <span v-else>Empty Slot</span>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { HeroEquipment } from "@/domain/hero/Hero";

defineProps({
  equipment: {
    type: Object as PropType<HeroEquipment>,
    required: true,
  },
});
</script>
