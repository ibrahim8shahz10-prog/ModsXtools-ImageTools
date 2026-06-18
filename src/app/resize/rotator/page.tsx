import GenericToolPage from "@/components/tools/GenericToolPage";
export default function RotatorPage() {
  return <GenericToolPage title="Image Rotator" description="Rotate images to any angle with precision." icon="RotateCw" gradient="from-orange-500 to-amber-600" backHref="/resize" backLabel="Back to Resize Tools" processLabel="Rotate Image" outputExt="png" processingMessage="Rotating image…" />;
}
