import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

export interface IConvertHistoryItem {
  date: string;
  fromCurrency: string;
  fromAmount: number;
  toCurrency: string;
  toAmount: number;
  id?: number;
}

export interface IConvertHistoryState {
  history: Array<IConvertHistoryItem>;
}

export interface IConvertHistoryActions {
  addToHistory: (conversion: IConvertHistoryItem) => void;
  clearHistory: () => void;
}

export interface ConvertHistoryStore
  extends IConvertHistoryState,
    IConvertHistoryActions {}

const defaultInitState: IConvertHistoryState = {
  history: [],
};

export const useConvertHistoryStore = create<ConvertHistoryStore>()(
  devtools(
    persist(
      (set) => ({
        ...defaultInitState,
        addToHistory: (conversion) =>
          set((state) => ({
            history: [
              { id: state.history.length + 1, ...conversion },
              ...state.history,
            ],
          })),
        clearHistory: () => set(() => ({ history: [] })),
      }),
      {
        name: "converterHistoryStore",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
