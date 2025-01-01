import AccessBox from "./Access";
import BundleImage from "./BundleImage";
import BundleImageSecond from "./BundleImageSecond";
import Button from "./Button";
import Compatible from "./Compatible";
import ContentSection from "./ContentSection";
import Copywriting from "./Copywriting";
import DayandAge from "./DayandAge";
import EspeciallyDesigned from "./EspeciallyDesigned";
import FAQ from "./FAQ";
import Footer from "./Footer";
import ForYouImage from "./ForYouImage";
import Grid from "./grid";
import PrivacyPolicy from "./PrivacyPolicy";
import Reviews from "./Reviews";

export default function App() {
  return (
    <>
      {/* Wrapper */}
      <div className="relative text-white h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Background Section with Clipped Shape */}
        <div
          className="absolute inset-0 bg-[url('/background1.jpg')] bg-cover bg-center"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 85%)',
            zIndex: -1,
          }}
        ></div>

        {/* Content Section */}
        <ContentSection />

        {/* Image Section */}
        <BundleImage />
      </div>

      {/* Additional Content */}
      <div className="h-full w-full flex flex-col items-center justify-center gap-8 px-4 sm:px-6 md:px-8 lg:px-16">
        <DayandAge />

        {/* Second Image Section */}
        <BundleImageSecond />

        {/* Text Section */}
        <p className="font-semibold mt-10 text-center text-lg sm:text-xl md:text-2xl">
          CREATE STUNNING VIDEO PROJECTS THAT{' '}
          <span className="text-red-500">10X YOUR AUDIENCE RETENTION</span>
        </p>

        {/* Other Components */}
        <Compatible />
        <EspeciallyDesigned />
        <Button />
        <ForYouImage />
        <Grid />
        <Copywriting />
        <Reviews />
        <Button />
        <AccessBox />
        <FAQ />
        <PrivacyPolicy />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}