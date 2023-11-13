const DraggableImage = ({image, setShowDropZone}) => {

  const handleDragStart = (e) => {
    console.log(e);
    e.dataTransfer.setData("text/plain", JSON.stringify(image));
    setShowDropZone(true);
  };

  const handleDragEnd = () => {
    setShowDropZone(false);
  }

  return (
    <div className="w-[200px] h-[200px]">
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-full object-cover"
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      />
    </div>
  );
};

export default DraggableImage;
