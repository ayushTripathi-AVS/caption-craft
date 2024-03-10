import SparklesIcon from "@/components/SparklesIcon";

export default function DemoSection() {
  const vidCaption = process.env.WITH_CAPTIONS;
  const vidNoCaption = process.env.WITHOUT_CAPTIONS;
  return (
    <section className="flex justify-around mt-8 sm:mt-12 items-center">
      <div className="hidden sm:block bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
        <video src={vidNoCaption} preload muted autoPlay loop></video>
      </div>
      <div className="hidden sm:block">
        <SparklesIcon />
      </div>
      <div className="bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
        <video src={vidCaption} preload muted autoPlay loop></video>
      </div>
    </section>
  );
}