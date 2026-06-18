import GenericToolPage from "@/components/tools/GenericToolPage";
export default function JpgToPngPage() {
  return <GenericToolPage title="JPG to PNG" description="Convert JPG images to PNG format with lossless quality." icon="ArrowRight" gradient="from-blue-500 to-cyan-600" backHref="/convert" backLabel="Back to Convert Tools" accept="image/jpeg" processLabel="Convert to PNG" outputExt="png" processingMessage="Converting to PNG…" />;
}
