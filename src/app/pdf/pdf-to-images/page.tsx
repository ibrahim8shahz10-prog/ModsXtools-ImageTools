import GenericToolPage from "@/components/tools/GenericToolPage";
export default function PdfToImagesPage() {
  return <GenericToolPage title="PDF to Images" description="Extract each PDF page as a high-quality image file." icon="FileImage" gradient="from-rose-500 to-pink-600" backHref="/pdf" backLabel="Back to PDF Tools" accept=".pdf,application/pdf" processLabel="Extract Images" outputExt="zip" processingMessage="Extracting pages…" />;
}
