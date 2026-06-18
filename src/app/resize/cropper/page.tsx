import GenericToolPage from "@/components/tools/GenericToolPage";
export default function CropperPage() {
  return <GenericToolPage title="Image Cropper" description="Crop images to custom dimensions or aspect ratios." icon="Crop" gradient="from-orange-500 to-amber-600" backHref="/resize" backLabel="Back to Resize Tools" processLabel="Crop Image" outputExt="png" processingMessage="Cropping image…" />;
}
