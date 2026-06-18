import GenericToolPage from "@/components/tools/GenericToolPage";
export default function BatchConverterPage() {
  return <GenericToolPage title="Batch Image Converter" description="Convert hundreds of images to any format simultaneously." icon="RefreshCcw" gradient="from-fuchsia-500 to-pink-600" backHref="/batch" backLabel="Back to Batch Tools" processLabel="Convert All Images" outputExt="zip" processingMessage="Converting images…" />;
}
