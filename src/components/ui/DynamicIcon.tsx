import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = (Icons as Record<string, React.ComponentType<LucideProps>>)[name];
  if (!Icon) return <Icons.Wrench {...props} />;
  return <Icon {...props} />;
}
