const DropZone = ({ onDrop }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   const image = JSON.parse(e.dataTransfer.getData("text/plain"));
  //   onDrop(image);
  // };

  return (
    <div
      onDragOver={handleDragOver}
      // onDrop={handleDrop}
      className="absolute top-0 left-0 w-full h-full bg-opacity-90 bg-gray-700 border-4 border-dashed border-gray-300 flex items-center justify-center transition-all duration-300 ease-in-out z-2"
    >
      <p className="text-white text-lg font-semibold">Drop images here</p>
    </div>
  );
};

export default DropZone;
