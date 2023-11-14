import { useEffect, useState } from "react";
import DropZone from "./DropZone";
import StoredImage from "./StoredImage";
import { useDrop } from "react-dnd";

const UserGallery = ({ showDropZone, setShowToast }) => {
  const [storedImages, setStoredImages] = useState(() => {
    return JSON.parse(sessionStorage.getItem("storedImages")) || [];
  });

  const [, dropRef] = useDrop(() => ({
    accept: "image",
    drop: (item) => handleDrop(item),
  }));

  const handleDrop = (item) => {
    setStoredImages((prevStoredImages) => {
      const storedImageIds = prevStoredImages.map((image) => image.id);
      console.log(`Stored Image Ids: ${storedImageIds}`);
      console.log(`Dropped Image Id: ${item.id}`);
      if (!storedImageIds.includes(item.id)) {
        const newStoredImages = [...prevStoredImages, item];
        console.log(`New stored images: ${newStoredImages}`);
        sessionStorage.setItem("storedImages", JSON.stringify(newStoredImages));
        return newStoredImages;
      } else {
        setShowToast("Image already added.");
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
        return prevStoredImages;
      }
    });
  };

  const removeAll = () => {
    setStoredImages([]);
    sessionStorage.removeItem("storedImages");
  };

  const removeImage = (image) => {
    const newStoredImages = storedImages.filter(
      (storedImage) => storedImage.id !== image.id
    );
    setStoredImages(newStoredImages);
    sessionStorage.setItem("storedImages", JSON.stringify(newStoredImages));
  };

  return (
    <div
      ref={dropRef}
      className="sticky top-[60px] sm:top-[40px] right-0 w-full min-w-[300px] sm:w-1/3 lg:w-[380px] h-1/2 sm:h-[calc(100vh-200px)] overflow-y-auto bg-brainscapeBlue p-[16px]"
    >
      <div className="flex items-center w-full justify-between mb-[16px]">
        <p className="text-black font-bold">Album Generator</p>
        {storedImages?.length > 0 && (
          <button
            className="py-1 px-2 flex items-center bg-black rounded-[8px] text-white font-bold"
            onClick={removeAll}
          >
            Remove All
          </button>
        )}
      </div>

      <div className="flex w-full items-start justify-between gap-[8px]">
        {storedImages?.length === 0 ? (
          <p className="text-sm">
            No images selected! Drag and drop some images from the collection.
          </p>
        ) : (
          <>
            {/* Images */}
            <div className="flex flex-wrap gap-[8px] w-1/2">
              {storedImages?.map((image, index) => (
                <StoredImage
                  key={`${image.id}-${index}`}
                  image={image}
                  index={index}
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
          </>
        )}
      </div>

      {showDropZone && <DropZone onDrop={handleDrop} />}
    </div>
  );
};

export default UserGallery;
