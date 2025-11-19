export interface DashboardConfig {
  appName: string;
  environment: "dev" | "staging" | "prod";
}

export const DASHBOARD_CONFIG: DashboardConfig = {
  appName: "ShieldOS Dashboard",
  environment: "dev"
};
