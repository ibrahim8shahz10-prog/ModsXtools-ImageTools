import GenericToolPage from "@/components/tools/GenericToolPage";
export default function JpegToPngPage() {
  return <GenericToolPage title="JPEG to PNG" description="Convert JPEG images to PNG with transparency support." icon="ArrowRight" gradient="from-blue-500 to-cyan-600" backHref="/convert" backLabel="Back to Convert Tools" accept="image/jpeg" processLabel="Convert to PNG" outputExt="png" processingMessage="Converting JPEG…" />;
}
