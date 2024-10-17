import { create } from 'zustand';

// Step 1: Define the type for the store's state.
// This ensures that TypeScript knows the structure and types of the state values.
interface ProductStoreState {
  currency: string;  // A string that represents the selected category
  setCurrency: (category: string) => void;  // A function to update the category
}

// Step 2: Create the Zustand store and type it using the interface created in Step 1.
export const useProductStore = create<ProductStoreState>((set) => ({
  // Initial state with a default category value
  currency: 'INR',

  // setCategory function allows the category to be updated
  setCurrency: (currency: string) => set({ currency }),
}));


interface PaginationStoreState {
  page:number;
  setPage: (page:number) => void;
}

export const usePaginationStore = create<PaginationStoreState>((set)=>({
  page:1,
  setPage: (page:number)=> set({page})
}))