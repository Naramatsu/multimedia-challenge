import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FileModel } from "../models/file.interface";
import { videoNotSupportedLabel } from "../utils/constants";

const mediaBuilder = (file: FileModel, index: number) => {
  if (!file.url) return;
  if (file.type === "video")
    return (
      <video
        className="w-full object-cover rounded-md shadow-lg h-[240px] peer"
        height="240"
        controls
        autoPlay={false}
      >
        <source src={file.url} type="video/mp4" />
        {videoNotSupportedLabel}
      </video>
    );
  return (
    <img
      src={file.url}
      className="w-full object-contain rounded-md shadow-lg h-[240px] peer"
      alt={`media-${index + 1}`}
    />
  );
};

const Gallery = ({
  mediaList,
  fileSelected,
  setFileSelected,
}: GalleryInterface) => {
  return (
    <article className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4 my-6 w-[80%] sm:w-[90%] m-auto relative">
      {mediaList.map((media, index) => (
        <section
          className="file w-full relative cursor-pointer"
          key={index}
          onClick={() => setFileSelected(media)}
        >
          {mediaBuilder(media, index)}
          {fileSelected?.url === media?.url && (
            <FaRegCheckCircle
              data-testid="svg-check"
              className="absolute left-2 bottom-2 text-white bg-emerald-700 rounded-full h-10 w-10"
            />
          )}
        </section>
      ))}
    </article>
  );
};

export default React.memo(Gallery);

export interface GalleryInterface {
  mediaList: FileModel[] | [];
  fileSelected: FileModel | null;
  setFileSelected: any;
}
