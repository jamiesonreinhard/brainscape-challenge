import { useEffect, useState, Suspense } from "react";
import DraggableImage from "./DraggableImage";
import Spinner from "../utility/Spinner";

const Collection = ({ setShowDropZone }) => {
  const [images, setImages] = useState([]);
  const [loadingImages, setLoadingImages] = useState(false);

  const url = "https://api.slingacademy.com/v1/sample-data/photos?limit=100";

  const getImages = async () => {
    setLoadingImages(true);
    const cachedImages = sessionStorage.getItem("cachedImages");
    if (cachedImages) {
      setImages(JSON.parse(cachedImages));
      setLoadingImages(false);
    } else {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setImages(data.photos);
        sessionStorage.setItem("cachedImages", JSON.stringify(data.photos));
      } catch (error) {
        console.error("Fetch error:", error.message);
      }
      setLoadingImages(false);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div
      className="h-1/2 sm:h-auto overflow-y-auto w-full sm:w-2/3 lg:w-fit
      flex justify-between sm:justify-start items-start flex-wrap gap-[8px] sm:gap-[16px]"
    >
      {loadingImages && <Spinner />}
      {!loadingImages &&
        images.map((image, index) => (
          <Suspense fallback={<Spinner />} key={index}>
            <DraggableImage image={image} setShowDropZone={setShowDropZone} />
          </Suspense>
        ))}
    </div>
  );
};

export default Collection;
