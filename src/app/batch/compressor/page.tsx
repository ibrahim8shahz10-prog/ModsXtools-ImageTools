import GenericToolPage from "@/components/tools/GenericToolPage";
export default function BatchCompressorPage() {
  return <GenericToolPage title="Batch Image Compressor" description="Compress entire folders of images in one click." icon="FolderArchive" gradient="from-fuchsia-500 to-pink-600" backHref="/batch" backLabel="Back to Batch Tools" processLabel="Compress All" outputExt="zip" processingMessage="Compressing batch…" />;
}
