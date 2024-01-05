<template>
  <div class="mb-3 px-4 sm:px-0">
    <h3 class="text-base font-semibold leading-7 text-gray-900">Info</h3>
  </div>

  <div class="space-y-2 border-t border-gray-100">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-semibold uppercase leading-6 text-gray-900">
          Attack
        </dt>
        <dd
          class="mt-1 text-right text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
        >
          {{ attack }}
        </dd>
      </div>
    </dl>
  </div>

  <div class="space-y-2 border-t border-gray-100">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-semibold uppercase leading-6 text-gray-900">
          Defence
        </dt>
        <dd
          class="mt-1 text-right text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
        >
          {{ defence }}
        </dd>
      </div>
    </dl>
  </div>
  <div class="space-y-2 border-t border-gray-100">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-semibold uppercase leading-6 text-gray-900">
          HP
        </dt>
        <dd
          class="mt-1 text-right text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
        >
          {{ maxHP }}
        </dd>
      </div>
    </dl>
  </div>

  <div class="space-y-2 border-t border-gray-100">
    <dl class="divide-y divide-gray-100">
      <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-semibold uppercase leading-6 text-gray-900">
          Mana
        </dt>
        <dd
          class="mt-1 text-right text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
        >
          {{ maxMana }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  maxHP: {
    type: Number,
    required: true,
  },
  maxMana: {
    type: Number,
    required: true,
  },
  attack: {
    type: Number,
    required: true,
  },
  defence: {
    type: Number,
    required: true,
  },
});
</script>
