import { create } from 'zustand'

interface FormState {
  currentStep: number;
  goBack: () => void;
  goForward: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  currentStep: 1,
  goBack: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  goForward: () => set((state) => ({ currentStep: state.currentStep + 1 })),
}));
