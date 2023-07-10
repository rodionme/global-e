import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import {MAX_STEP, MIN_STEP} from "../constants";

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  username: string;
  password: string;
};

interface FormState {
  userData: UserData;
  currentStep: number;
  changeUserData: (field: keyof UserData, value: string) => void;
  goBack: () => void;
  goForward: () => void;
}

export const useFormStore = create<FormState>()(devtools((set) => ({
  userData: {
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    username: '',
    password: '',
  },

  currentStep: 1,

  changeUserData: (field: keyof UserData, value: string) => {
    set((state) => ({userData: {...state.userData, [field]: value}}));
  },

  goBack: () => set((state) => {
    if (state.currentStep === MIN_STEP) return state;

    return ({currentStep: state.currentStep - 1});
  }),

  goForward: () => set((state) => {
    if (state.currentStep === MAX_STEP) return state;

    return ({currentStep: state.currentStep + 1});
  }),
})));
