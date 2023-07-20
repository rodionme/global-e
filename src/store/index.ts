import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { MAX_STEP, MIN_STEP } from '../constants';

interface FormState {
  currentStep: number;
  isSubmitted: boolean;
  setSubmitted: () => void;
  goBack: () => void;
  goForward: () => void;
}

export const useFormStore = create<FormState>()(
  devtools((set) => ({
    currentStep: 0,
    isSubmitted: false,

    setSubmitted: () => {
      set(() => ({ isSubmitted: true }));
    },

    goBack: () =>
      set((state) => {
        if (state.currentStep === MIN_STEP) return state;

        return { currentStep: state.currentStep - 1 };
      }),

    goForward: () =>
      set((state) => {
        if (state.currentStep === MAX_STEP) return state;

        return { currentStep: state.currentStep + 1 };
      }),
  })),
);
