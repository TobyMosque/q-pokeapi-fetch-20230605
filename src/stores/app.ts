import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { uid } from 'quasar';

export const useAppStore = defineStore('app', () => {
  const token = useLocalStorage('app-token', uid());

  return {
    token,
  };
});
