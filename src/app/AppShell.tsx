import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { Layout } from "../components/Layout";
import { MODULES } from "../lib/navigation";

export function AppShell() {
  // This is a framework-agnostic shell description.
  // Later it can be ported into React/Next/Vite.
  return {
    layout: "ShieldOSDashboard",
    modules: MODULES,
    description: "Main dashboard shell for ShieldOS"
  };
}
