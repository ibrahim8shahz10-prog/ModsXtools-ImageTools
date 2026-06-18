import GenericToolPage from "@/components/tools/GenericToolPage";
export default function BgColorPage() {
  return <GenericToolPage title="Background Color Changer" description="Replace the background of your image with any solid color." icon="Palette" gradient="from-violet-500 to-purple-600" backHref="/background" backLabel="Back to Background Tools" processLabel="Change Background Color" outputExt="png" processingMessage="Changing background color…" />;
}
