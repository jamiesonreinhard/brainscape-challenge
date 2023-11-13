import { useState } from "react";
import Collection from "./components/imageCollection/Collection";
import UserGallery from "./components/userGallery/UserGallery";

const App = () => {
  const [showDropZone, setShowDropZone] = useState(false);

  return (
    <div className="w-[90%] h-[90vh] sm:h-auto xl:max-w-[1200px] mx-auto py-[24px] sm:py-[60px] flex flex-col relative">
      <header className="flex flex-col gap-[8px] mb-[40px]">
        <h2 className="text-xl font-bold">Brainscape App Coding Exercise</h2>
        <p className="text-sm">Photo Album Generator by Jamieson Reinhard</p>
      </header>
      <section className="w-full flex flex-col sm:flex-row sm:items-start overflow-hidden gap-[12px] sm:overflow-visible">
        {/* api photos component */}
        <div className="h-1/2 sm:h-auto overflow-y-auto w-full sm:w-2/3 lg:w-fit">
          <Collection setShowDropZone={setShowDropZone} />
        </div>

        {/* selected photos component */}
        <UserGallery showDropZone={showDropZone} />
      </section>
    </div>
  );
};

export default App;
