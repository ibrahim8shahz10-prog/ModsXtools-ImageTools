import GenericToolPage from "@/components/tools/GenericToolPage";
export default function PdfSplitterPage() {
  return <GenericToolPage title="PDF Splitter" description="Split a PDF into individual pages or custom ranges." icon="Scissors" gradient="from-rose-500 to-pink-600" backHref="/pdf" backLabel="Back to PDF Tools" accept=".pdf,application/pdf" processLabel="Split PDF" outputExt="zip" processingMessage="Splitting PDF…" />;
}
