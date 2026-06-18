import GenericToolPage from "@/components/tools/GenericToolPage";
export default function WebpToPngPage() {
  return <GenericToolPage title="WebP to PNG" description="Convert WebP images to widely-supported PNG format." icon="ArrowRight" gradient="from-blue-500 to-cyan-600" backHref="/convert" backLabel="Back to Convert Tools" accept="image/webp" processLabel="Convert to PNG" outputExt="png" processingMessage="Converting WebP…" />;
}
