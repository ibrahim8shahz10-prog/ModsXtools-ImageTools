import GenericToolPage from "@/components/tools/GenericToolPage";
export default function PdfCompressorPage() {
  return <GenericToolPage title="PDF Compressor" description="Reduce PDF file size while maintaining readability." icon="PackageOpen" gradient="from-rose-500 to-pink-600" backHref="/pdf" backLabel="Back to PDF Tools" accept=".pdf,application/pdf" processLabel="Compress PDF" outputExt="pdf" processingMessage="Compressing PDF…" />;
}
