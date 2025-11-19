export interface DashboardSession {
  walletAddress?: string;
  isAuthenticated: boolean;
}

export function createAnonymousSession(): DashboardSession {
  return {
    walletAddress: undefined,
    isAuthenticated: false
  };
}
