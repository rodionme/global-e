import {create} from 'zustand'
import {MAX_STEP, MIN_STEP} from "../constants";

interface FormState {
  currentStep: number;
  goBack: () => void;
  goForward: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  currentStep: 1,

  goBack: () => set((state) => {
    if (state.currentStep === MIN_STEP) return state;

    return ({currentStep: state.currentStep - 1});
  }),

  goForward: () => set((state) => {
    if (state.currentStep === MAX_STEP) return state;

    return ({currentStep: state.currentStep + 1});
  }),
}));
