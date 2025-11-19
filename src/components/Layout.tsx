import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export interface LayoutConfig {
  sidebar: ReturnType<typeof Sidebar>;
  topbar: ReturnType<typeof Topbar>;
}

export function Layout(): LayoutConfig {
  return {
    sidebar: Sidebar(),
    topbar: Topbar()
  };
}
