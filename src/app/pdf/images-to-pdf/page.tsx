import GenericToolPage from "@/components/tools/GenericToolPage";
export default function ImagesToPdfPage() {
  return <GenericToolPage title="Images to PDF" description="Combine one or more images into a single PDF document." icon="FilePlus" gradient="from-rose-500 to-pink-600" backHref="/pdf" backLabel="Back to PDF Tools" processLabel="Convert to PDF" outputExt="pdf" processingMessage="Creating PDF…" />;
}
