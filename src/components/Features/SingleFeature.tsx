import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp"
        data-wow-delay=".15s"
      >
        <div className="bg-primary/10 text-primary mb-6 flex h-[64px] w-[64px] items-center justify-center rounded-lg shadow-sm">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-base font-normal leading-relaxed text-gray-600 dark:text-gray-300">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
