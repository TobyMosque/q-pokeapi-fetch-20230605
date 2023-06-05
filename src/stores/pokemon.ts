import { defineStore } from 'pinia';
import { useDiStore } from './di';
import { PokemonList } from 'src/types/pokemon';
import { computed, ref } from 'vue';

export const usePokemonStore = defineStore('pokemon', () => {
  const di = useDiStore();
  const offset = ref(0);
  const limit = ref(20);
  const url = computed(
    () => `pokemon?offset=${offset.value}&limit=${limit.value}`
  );

  const { data, isFetching, execute } = di
    .fetch(url, {
      immediate: false,
      refetch: true,
    })
    .json<PokemonList>();

  return {
    offset,
    limit,
    data,
    isFetching,
    execute,
  };
});
