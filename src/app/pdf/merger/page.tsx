import GenericToolPage from "@/components/tools/GenericToolPage";
export default function PdfMergerPage() {
  return <GenericToolPage title="PDF Merger" description="Combine multiple PDF files into a single document." icon="Merge" gradient="from-rose-500 to-pink-600" backHref="/pdf" backLabel="Back to PDF Tools" accept=".pdf,application/pdf" processLabel="Merge PDFs" outputExt="pdf" processingMessage="Merging PDFs…" />;
}
