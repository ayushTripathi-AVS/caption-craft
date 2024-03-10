import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  return (
    <>
      <PageHeaders
        h1Text={'Add captions to your videos with ease'}
        h2Text={'Upload your video and get your video captioned in seconds.'}
      />
      <div className="text-center">
        <UploadForm />
      </div>
      <DemoSection />
    </>
  )
}
