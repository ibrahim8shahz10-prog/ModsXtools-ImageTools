import GenericToolPage from "@/components/tools/GenericToolPage";
export default function FlipperPage() {
  return <GenericToolPage title="Image Flipper" description="Flip images horizontally or vertically." icon="FlipHorizontal" gradient="from-orange-500 to-amber-600" backHref="/resize" backLabel="Back to Resize Tools" processLabel="Flip Image" outputExt="png" processingMessage="Flipping image…" />;
}
