import { MODULES } from "../lib/navigation";

export function Sidebar() {
  return {
    type: "Sidebar",
    items: MODULES.map((m) => ({
      id: m.id,
      label: m.label,
      path: `/${m.id}`
    }))
  };
}
