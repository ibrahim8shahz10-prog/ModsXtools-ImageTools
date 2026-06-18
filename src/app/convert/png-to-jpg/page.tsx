import GenericToolPage from "@/components/tools/GenericToolPage";
export default function PngToJpgPage() {
  return <GenericToolPage title="PNG to JPG" description="Convert PNG images to JPG and reduce file size." icon="ArrowRight" gradient="from-blue-500 to-cyan-600" backHref="/convert" backLabel="Back to Convert Tools" accept="image/png" processLabel="Convert to JPG" outputExt="jpg" processingMessage="Converting to JPG…" />;
}
