import GenericToolPage from "@/components/tools/GenericToolPage";
export default function ResizerPage() {
  return <GenericToolPage title="Image Resizer" description="Resize images to exact pixel dimensions or percentages." icon="Maximize2" gradient="from-orange-500 to-amber-600" backHref="/resize" backLabel="Back to Resize Tools" processLabel="Resize Image" outputExt="png" processingMessage="Resizing image…" />;
}
