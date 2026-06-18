import CategoryPageLayout from "@/components/tools/CategoryPageLayout";
import { getCategoryTools, getCategoryById } from "@/lib/tools-data";

export default function ConvertPage() {
  const cat = getCategoryById("convert")!;
  return (
    <CategoryPageLayout
      title={cat.name}
      description={cat.description}
      icon={cat.icon}
      gradient={`bg-gradient-to-br ${cat.gradient}`}
      tools={getCategoryTools("convert")}
    />
  );
}
