import { boot } from 'quasar/wrappers';
import { fetchKey, Fetch } from 'src/composables/fetch';
import { createFetch } from '@vueuse/core';
import { useAppStore } from 'src/stores/app';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly fetch: Fetch;
  }
}

declare module '@vueuse/core' {
  export interface RequestInit {
    headers: Record<string, unknown>;
  }
}

export default boot(async ({ app, store }) => {
  const fetch = createFetch({
    baseUrl: process.env.API_URL,
    options: {
      beforeFetch({ options }) {
        if (appStore.token) {
          options.headers ||= {};
          options.headers.Authorization = `Bearer ${appStore.token}`;
        }
      },
    },
  });

  app.provide(fetchKey, fetch);
  store.use(() => ({ fetch }));

  const appStore = useAppStore(store);
});
