import { useState, useContext, useEffect } from "react";
import Tabs from "./Tabs";
import Gallery from "./Gallery";
import UploadFile from "./UploadFile";
import { IoCloseOutline } from "react-icons/io5";
import { FileContext } from "../context";
import { FileModel } from "../models/file.interface";
import { RequestStatus } from "../utils/enums";
import {
  closeModalLabel,
  galleryTabLabel,
  mediaLibraryTitle,
  selectLabel,
  tabsList,
  uploadFileTabLabel,
} from "../utils/constants";

const Modal = ({ onClose }: any) => {
  const [activeTab, setActiveTab] = useState(galleryTabLabel);
  const [fileSelectedState, setFileSelectedState] = useState<FileModel | null>(
    null
  );
  const { files, fileStatus, fetchFiles, setFileSelected } =
    useContext(FileContext);

  useEffect(() => {
    if (!files?.length || fileStatus === RequestStatus.NOT_LOADED) fetchFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files, fileStatus]);

  return (
    <>
      <main
        role="dialog"
        className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none top-6 bottom-6"
      >
        <section className="relative w-auto mx-auto max-w-5xl">
          <section className="border-0 rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none z-10">
            <section className="w-full p-4 pb-0 sticky top-0 z-20 bg-white h-[56px]">
              <h2 className="text-center text-2xl font-bold my-2">
                {mediaLibraryTitle}
              </h2>
              <button
                className="absolute top-4 right-4 bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none z-20"
                onClick={onClose}
              >
                <IoCloseOutline className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none" />
              </button>
            </section>
            <section className="flex items-start justify-between border-solid border-blueGray-200 sticky top-[56px] bg-white z-10">
              <Tabs
                tabs={tabsList}
                activeTab={activeTab}
                onChangetab={setActiveTab}
              />
            </section>
            <section className="body min-h-[400px]">
              {activeTab === galleryTabLabel && (
                <Gallery
                  mediaList={files}
                  fileSelected={fileSelectedState}
                  setFileSelected={setFileSelectedState}
                />
              )}
              {activeTab === uploadFileTabLabel && <UploadFile />}
            </section>

            <section className="flex items-start justify-between p-5  border-solid border-blueGray-200 rounded-t sticky bottom-0 bg-white z-10 rounded-md border-t-2">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                {closeModalLabel}
              </button>
              {activeTab === galleryTabLabel && (
                <button
                  className={`
                  bg-transparent border-2 
                  border-emerald-500 text-emerald-500 active:text-emerald-800 
                  font-bold uppercase text-sm 
                  px-6 py-3 
                  rounded
                  shadow
                  hover:shadow-lg outline-none 
                  focus:outline-none 
                  mr-1 mb-1
                  ease-linear transition-all duration-150
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  `}
                  type="button"
                  disabled={!fileSelectedState?.url}
                  onClick={() => {
                    setFileSelected(fileSelectedState);
                    onClose();
                  }}
                >
                  {selectLabel}
                </button>
              )}
            </section>
          </section>
        </section>
      </main>
      <section className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};

export default Modal;
