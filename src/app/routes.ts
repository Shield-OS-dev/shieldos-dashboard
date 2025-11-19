import { MODULES } from "../lib/navigation";

export interface RouteConfig {
  path: string;
  moduleId: string;
  title: string;
}

export const ROUTES: RouteConfig[] = MODULES.map((m) => ({
  path: `/${m.id}`,
  moduleId: m.id,
  title: m.label
}));
