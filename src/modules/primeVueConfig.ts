import PrimeVue from 'primevue/config';
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
export const primeVueConfig = {
  theme: {
    preset: definePreset(Aura, {}),
    options: {
      darkModeSelector: 'system'
    }
  }
};

export default PrimeVue;
