import { createFetch } from '@vueuse/core';
import { InjectionKey, inject } from 'vue';

export type Fetch = ReturnType<typeof createFetch>;
export const fetchKey: InjectionKey<Fetch> = Symbol('fetch-api');

export function useFetch() {
  const fetch = inject(fetchKey);
  if (!fetch) {
    throw 'fetch isn`t injected';
  }
  return fetch;
}
