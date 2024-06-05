import { useAuthStore } from "./store.ts";

const { setState } = useAuthStore;

export const changeAuthStatus = async (value: any) => {
  setState(() => ({
    authData: value,
  }));
};
