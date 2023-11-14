import draggable from "../../assets/draggable.svg";

const DraggableImage = ({ image, setShowDropZone }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(image));
    setShowDropZone(true);
  };

  const handleDragEnd = () => {
    setShowDropZone(false);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="group cursor-pointer relative w-[28%] sm:w-[200px] m-[1%] sm:m-0"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      draggable="true"
    >
      <div className="pb-[100%] w-full h-auto relative bg-gray-700">
        <img
          src={image.url}
          alt={image.title}
          className="absolute top-0 left-0 w-full h-full object-cover group-hover:opacity-50 z-2"
          loading="lazy"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-opacity-50 bg-gray-700 hidden group-hover:flex items-center justify-center z-10 relative">
          <img
            src={draggable}
            alt="draggable icon"
            className="absolute top-[4px] left-0 w-[32px] sm:w-[80px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DraggableImage;
