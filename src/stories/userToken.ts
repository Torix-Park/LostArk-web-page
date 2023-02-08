import { atom, selector } from "recoil";

const userTokenAtom = atom<string>({
  key: "userTokenAtom",
  default: window.localStorage.getItem("token") ?? "",
});

export const userTokenSelector = selector({
  key: "userTokenSelector",
  get: ({ get }) => {
    return get(userTokenAtom);
  },
  set: ({ set }, value) => {
    set(userTokenAtom, value);
  },
});
