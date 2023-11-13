import { useState } from "react";
import Collection from "./components/imageCollection/Collection";
import UserGallery from "./components/userGallery/UserGallery";

const App = () => {
  const [showDropZone, setShowDropZone] = useState(false);

  return (
    <body className="w-[90%] max-w-[1200px] mx-auto py-[60px]">
      <header className="flex flex-col gap-[8px] mb-[40px]">
        <h2 className="text-xl font-bold">Brainscape App Coding Exercise</h2>
        <p className="text-sm">Photo Album Generator by Jamieson Reinhard</p>
      </header>
      <section className="w-full flex items-start">
        {/* api photos component */}
        <Collection setShowDropZone={setShowDropZone} />

        {/* selected photos component */}
        <UserGallery showDropZone={showDropZone} />

      </section>
    </body>
  );
}

export default App;
