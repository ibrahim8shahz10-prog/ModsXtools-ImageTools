import GenericToolPage from "@/components/tools/GenericToolPage";
export default function PngToWebpPage() {
  return <GenericToolPage title="PNG to WebP" description="Convert PNG to modern WebP format for smaller web files." icon="ArrowRight" gradient="from-blue-500 to-cyan-600" backHref="/convert" backLabel="Back to Convert Tools" accept="image/png" processLabel="Convert to WebP" outputExt="webp" processingMessage="Converting to WebP…" />;
}
