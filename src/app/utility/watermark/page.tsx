import GenericToolPage from "@/components/tools/GenericToolPage";
export default function WatermarkPage() {
  return <GenericToolPage title="Watermark Adder" description="Add text or image watermarks to protect your photos." icon="Stamp" gradient="from-sky-500 to-indigo-600" backHref="/utility" backLabel="Back to Utility Tools" processLabel="Add Watermark" outputExt="png" processingMessage="Adding watermark…" />;
}
