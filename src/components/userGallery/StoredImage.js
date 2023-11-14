import remove from "../../assets/delete.svg";

const StoredImage = ({ image, index, removeImage }) => {

  return (
    <div className="w-[48px] h-0 relative group" style={{ paddingBottom: "48px" }}>
      <img
        src={image.url}
        alt={image.title}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-[2px] right-[2px] rounded-full w-[16px] h-[16px] flex items-center justify-center bg-black text-white font-bold">
        {index + 1}
      </div>
      <button
        className="absolute top-0 left-0 w-full h-full z-[10] hidden group-hover:flex bg-opacity-80 bg-white items-center justify-center"
        onClick={() => removeImage(image)}
      >
        <img src={remove} alt="trash icon" />
      </button>
    </div>
  );
};

export default StoredImage;
