import { useEffect, useState, Suspense, useRef, useCallback } from 'react';
import DraggableImage from './DraggableImage';
import Spinner from '../utility/Spinner';

const Collection = ({ setShowDropZone }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingImages, setLoadingImages] = useState(false);
  const observer = useRef();
  const lastImageElementRef = useCallback(
    (node) => {
      if (loadingImages) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadingImages, hasMore]
  );

  const getImages = async (pageNum) => {
    setLoadingImages(true);
    const offset = parseInt(pageNum) * 20;
    const url = `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data.photos]);
      setHasMore(data.photos.length > 0);
    } catch (error) {
      console.error('Fetch error:', error.message);
    }
    setLoadingImages(false);
  };

  useEffect(() => {
    getImages(page);
  }, [page]);

  return (
    <div
      className="h-1/2 sm:h-auto overflow-y-auto w-full sm:min-w-2/3
      flex justify-between sm:justify-start items-start flex-wrap gap-[8px] sm:gap-[16px]"
    >
      {loadingImages && (
        <div className="w-full">
          <Spinner />
        </div>
      )}
      {images.map((image, index) => {
        if (images.length === index + 1) {
          return (
            <div ref={lastImageElementRef} key={image.id}>
              <Suspense fallback={<Spinner />}>
                <DraggableImage image={image} setShowDropZone={setShowDropZone} />
              </Suspense>
            </div>
          );
        } else {
          return (
            <Suspense fallback={<Spinner />} key={`${image.id}-${index}`}>
              <DraggableImage image={image} setShowDropZone={setShowDropZone} />
            </Suspense>
          );
        }
      })}
      {!hasMore && <p>No more images to load.</p>}
    </div>
  );
};

export default Collection;
