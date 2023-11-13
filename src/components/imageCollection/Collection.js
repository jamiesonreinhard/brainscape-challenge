import { useEffect, useState } from "react";
import DraggableImage from "./DraggableImage";

const Collection = ({setShowDropZone}) => {
  const [images, setImages] = useState([]);
  const [loadingImages, setLoadingImages] = useState(false);

  const url = "https://api.slingacademy.com/v1/sample-data/photos?limit=100";

  const getImages = () => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setImages(data.photos);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      });
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="flex items-start flex-wrap w-full gap-[16px]">
      {/* map over images from api */}
      {images.map((image, index) => (
        <DraggableImage key={index} image={image} setShowDropZone={setShowDropZone} />
      ))}

      
    </div>
  );
};

export default Collection;
