import GenericToolPage from "@/components/tools/GenericToolPage";
export default function QualityOptimizerPage() {
  return <GenericToolPage title="Quality Optimizer" description="Automatically find the best quality-to-size balance." icon="Sliders" gradient="from-emerald-500 to-teal-600" backHref="/compress" backLabel="Back to Compress Tools" processLabel="Optimize Quality" outputExt="jpg" processingMessage="Optimizing quality…" />;
}
