export * from './components';
export * from './composables';
export * from './types';

// src/types/index.ts
export interface ToastOptions {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  showIcon?: boolean;
  pauseOnHover?: boolean;
}

// src/components/index.ts
export * from './Toast.vue';

// src/composables/index.ts
export * from './useToast';