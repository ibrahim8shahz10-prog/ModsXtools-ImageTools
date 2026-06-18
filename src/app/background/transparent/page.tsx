import GenericToolPage from "@/components/tools/GenericToolPage";
export default function TransparentPage() {
  return <GenericToolPage title="Transparent PNG Creator" description="Make any image background transparent and export as PNG." icon="Square" gradient="from-violet-500 to-purple-600" backHref="/background" backLabel="Back to Background Tools" processLabel="Make Transparent" outputExt="png" processingMessage="Creating transparent PNG…" />;
}
