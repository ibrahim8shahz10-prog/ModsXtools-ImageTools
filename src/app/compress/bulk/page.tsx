import GenericToolPage from "@/components/tools/GenericToolPage";
export default function BulkCompressPage() {
  return <GenericToolPage title="Bulk Image Compressor" description="Compress multiple images at once without quality loss." icon="Archive" gradient="from-emerald-500 to-teal-600" backHref="/compress" backLabel="Back to Compress Tools" processLabel="Compress All Images" outputExt="zip" processingMessage="Compressing images…" />;
}
