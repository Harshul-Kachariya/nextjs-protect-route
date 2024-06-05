import { create } from "zustand";

export type Auth = {
  authStatus: boolean;
};

interface AuthProps {
  authData: Auth;
}

const initialState: AuthProps = {
  authData: true,
};

export const useAuthStore = create<AuthProps>(() => ({
  ...initialState,
}));

export function getAuthData() {
  return useAuthStore((s) => s?.authData);
}
