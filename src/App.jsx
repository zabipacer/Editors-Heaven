import { useEffect } from "react";
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
import MetaPixel from "./utils/meta/metaPixel";

export default function App() {

  useEffect(()=>{
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = '/background1.webp'; // Path to your image
    document.head.appendChild(preloadLink);

  },[])
  return (
    <>
      {/* Wrapper */}
      <div className="relative text-white h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16">
       <MetaPixel/>
        {/* Background Section with Clipped Shape */}
        <div
          className="absolute inset-0 bg-[url('/background1.webp')] bg-cover bg-center"
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

      <a
        href="https://api.whatsapp.com/send?phone=923288768783" // Replace 1234567890 with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 z-40 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all"
        title="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12c0 2.093.685 4.028 1.841 5.605L2 22l4.454-1.777C8.046 21.316 9.992 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm-.003 18c-1.796 0-3.445-.565-4.84-1.516l-.344-.226-2.639 1.051.566-2.835-.211-.352A7.945 7.945 0 0 1 4 12c0-4.411 3.589-8 8.002-8C16.412 4 20 7.589 20 12s-3.589 8-8.003 8zm4.905-5.937c-.268-.134-1.584-.781-1.83-.87-.246-.09-.426-.134-.607.135-.18.268-.696.87-.855 1.05-.158.18-.315.202-.583.067-.268-.134-1.13-.416-2.152-1.328-.794-.704-1.33-1.576-1.485-1.844-.158-.268-.017-.414.118-.548.121-.12.268-.314.403-.472.134-.157.179-.269.268-.448.09-.18.045-.337-.022-.47-.067-.134-.608-1.463-.833-2.007-.22-.528-.444-.454-.607-.454-.158-.013-.337-.016-.518-.016-.18 0-.472.067-.719.337-.246.269-.946.923-.946 2.243 0 1.319.969 2.593 1.104 2.772.134.18 1.91 2.921 4.633 4.01.648.28 1.154.448 1.548.573.65.207 1.24.178 1.707.108.52-.077 1.584-.646 1.81-1.27.223-.626.223-1.163.157-1.27-.067-.107-.246-.179-.515-.313z" />
        </svg>
      </a>
    </>
  );
}
