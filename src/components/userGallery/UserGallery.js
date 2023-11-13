import { useEffect, useState } from "react";
import DropZone from "./DropZone";
import StoredImage from "./StoredImage";

const UserGallery = ({ showDropZone }) => {
  const [storedImages, setStoredImages] = useState([]);

  const handleDrop = (droppedImage) => {
    setStoredImages((prevImages) => [...prevImages, droppedImage]);
  };

  const removeImage = (image) => {
    const newStoredImages = storedImages.filter((storedImage) => storedImage.id !== image.id);
    setStoredImages(newStoredImages); 
  }

  return (
    <div className="w-full sm:w-[400px] h-[500px] bg-brainscapeBlue rounded-[8px] p-[16px] relative">
      <p className="text-black font-bold mb-[16px]">Album Generator</p>
      <div className="flex w-full items-start justify-between gap-[8px]">
        {/* Images */}
        <div className="flex flex-wrap gap-[8px] w-1/2">
          {storedImages?.map((image, index) => (
            <StoredImage
              key={index}
              image={image}
              removeImage={removeImage}
            />
          ))}
        </div>
        {/* Image titles list */}
        <ol className="flex flex-col gap-[4px] w-1/2 list-decimal list-inside">
          {storedImages.map((image, index) => (
            <li key={index} className="text-[12px]">
              {image.title}
            </li>
          ))}
        </ol>
      </div>

      {showDropZone && <DropZone onDrop={handleDrop} />}
    </div>
  );
};

export default UserGallery;
