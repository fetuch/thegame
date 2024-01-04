<template>
  <div class="mx-auto my-16 max-w-5xl space-y-6 px-6">
    <div class="flex">
      <div class="mr-4 flex-shrink-0">
        <svg
          class="h-40 w-40 border border-gray-300 bg-white text-gray-300"
          preserveAspectRatio="none"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <path
            vector-effect="non-scaling-stroke"
            stroke-width="1"
            d="M0 0l200 200M0 200L200 0"
          />
        </svg>
      </div>
      <div>
        <h4 class="text-lg font-bold">{{ hero.getName() }}</h4>
        <p class="mt-1">
          {{ hero.getDescription() }}
        </p>

        <p class="mt-1">
          {{ hero.getMaxMana() }}
        </p>
      </div>
    </div>

    <div class="w-1/6">
      <hero-attributes :attributes="hero.race?.attributes" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useOpenAIStore } from "@/stores/openAI";
import ActionButton from "@/components/Shared/ActionButton.vue";
import HeroAttributes from "@/components/HeroCard/HeroAttributes.vue";

import ElfDirector from "@/domain/hero/ElfDirector";
import DaggerDirector from "@/domain/item/DaggerDirector";

const hero = ElfDirector.construct();
const dagger = DaggerDirector.construct();

const openAIStore = useOpenAIStore();
const chat = openAIStore.CHAT;
</script>
