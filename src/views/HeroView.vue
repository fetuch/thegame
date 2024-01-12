<template>
  <div class="mx-auto my-16 max-w-5xl space-y-10 px-6">
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
        <h4 class="text-lg font-bold">
          {{ hero.getName() }}, {{ hero.getRace() }}
        </h4>

        <p class="mt-1">
          {{ hero.getDescription() }}
        </p>
      </div>
    </div>

    <div class="flex space-x-10 align-baseline">
      <div class="w-1/6">
        <hero-attributes :attributes="hero.getAttributes()" />
      </div>

      <div class="w-1/6">
        <hero-info
          :max-h-p="hero.getMaxHP()"
          :current-h-p="hero.getCurrentHP()"
          :max-mana="hero.getMaxMana()"
          :attack="hero.getAttack()"
          :defence="hero.getDefence()"
        />
      </div>

      <div class="w-2/3">
        <hero-equipment :equipment="hero.getEquipment()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeroAttributes from "@/components/HeroCard/HeroAttributes.vue";
import HeroInfo from "@/components/HeroCard/HeroInfo.vue";
import HeroEquipment from "@/components/HeroCard/HeroEquipment.vue";
import ElfDirector from "@/domain/hero/ElfDirector";

const hero = ElfDirector.construct();

hero.decreaseCurrentHP(23);
// q: what is the effect of hero.useSkill(heal, hero)?
// a: hero.useSkill(heal, hero) will heal the hero by 10 HP
//   and the hero's current HP will be 87
//   and the hero's max HP will be 100
//

//hero.useSkill(heal, hero);
</script>
