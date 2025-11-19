export interface ModuleCardProps {
  id: string;
  title: string;
  description: string;
}

export function ModuleCard(props: ModuleCardProps) {
  return {
    type: "ModuleCard",
    id: props.id,
    title: props.title,
    description: props.description
  };
}
