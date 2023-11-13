import { useState, useEffect } from "react";
import Collection from "./components/imageCollection/Collection";
import UserGallery from "./components/userGallery/UserGallery";

const App = () => {
  const [appHeight, setAppHeight] = useState(window.innerHeight);
  const mobileBreakpoint = 768;
  const [showDropZone, setShowDropZone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < mobileBreakpoint) {
        setAppHeight(window.innerHeight);
      } else {
        setAppHeight('auto');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-[90%] xl:max-w-[1200px] mx-auto py-[24px] sm:py-[60px] flex flex-col relative" style={{ height: appHeight }}>
      <header className="flex flex-col gap-[8px] mb-[40px]">
        <h2 className="text-xl font-bold">Brainscape App Coding Exercise</h2>
        <p className="text-sm">Photo Album Generator by Jamieson Reinhard</p>
      </header>
      <section className="w-full flex flex-col sm:flex-row sm:items-start overflow-hidden gap-[12px] sm:overflow-visible">
        {/* api photos component */}
        <Collection setShowDropZone={setShowDropZone} />

        {/* selected photos component */}
        <UserGallery showDropZone={showDropZone} />
      </section>
    </div>
  );
};

export default App;
