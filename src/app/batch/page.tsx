import CategoryPageLayout from "@/components/tools/CategoryPageLayout";
import { getCategoryTools, getCategoryById } from "@/lib/tools-data";

export default function BatchPage() {
  const cat = getCategoryById("batch")!;
  return (
    <CategoryPageLayout
      title={cat.name}
      description={cat.description}
      icon={cat.icon}
      gradient={`bg-gradient-to-br ${cat.gradient}`}
      tools={getCategoryTools("batch")}
    />
  );
}
