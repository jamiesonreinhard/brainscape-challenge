import draggable from "../../assets/draggable.svg";

const DraggableImage = ({ image, setShowDropZone }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(image));
    setShowDropZone(true);
  };

  const handleDragEnd = () => {
    setShowDropZone(false);
  };

  return (
    <div
      className="group cursor-pointer relative w-[28%] sm:w-[200px] m-[1%] sm:m-0"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      draggable="true"
    >
      <div className="pb-[100%] w-full h-auto relative bg-gray-700">
        <div className="absolute w-full h-full top-0 left-0 bg-opacity-50 bg-gray-700 hidden group-hover:flex items-center justify-center z-10">
          <img
            src={draggable}
            alt="draggable icon"
            className="w-[50px] sm:w-[80px]"
          />
        </div>
        <img
          src={image.url}
          alt={image.title}
          className="absolute top-0 left-0 w-full h-full object-cover group-hover:opacity-50 z-2"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default DraggableImage;
