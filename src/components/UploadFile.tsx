import { useContext, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { FileContext } from "../context";
import {
  clickOrDropFileLabel,
  errorMessageInitialState,
  previewLabel,
  sizeErrorMessage,
  typeErrorMessage,
  uploadLabel,
} from "../utils/constants";
import { AlertMessage } from "../models/alert.interface";
import { ToastTypes } from "../utils/enums";
import Toast from "./Toast";

const fileTypes = ["JPG", "PNG", "GIF", "MP4", "WEBM"];

const UploadFile = () => {
  const [file, setFile] = useState<any>(null);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [toastMessage, setToastMessage] = useState<AlertMessage>(
    errorMessageInitialState
  );
  const { uploadFiles } = useContext(FileContext);

  const onSubmitFile = async () => {
    if (!file) return null;
    await uploadFiles(file);
    setToastMessage({
      visible: true,
      type: ToastTypes.SUCCESS,
      message: "La imagen se subio correctamente",
    });
  };

  const handlerChange = (newFile: File) => {
    setFile(newFile);
    setImagePreview(URL.createObjectURL(newFile));
    setToastMessage(errorMessageInitialState);
  };

  const onCloseToast = () => setToastMessage(errorMessageInitialState);

  const handlerErrorMessage = (message: string) => {
    setToastMessage({
      visible: true,
      type: ToastTypes.ERROR,
      message,
    });
  };

  return (
    <section className="w-[80%] h-full m-auto my-6 grid lg:grid-cols-2 gap-4 justify-center md:grid-cols-1 md:justify-center">
      <section className="max-h-[460px]">
        {imagePreview && (
          <img
            src={imagePreview}
            className="h-full w-full object-contain rounded-lg"
            alt={previewLabel}
          />
        )}
      </section>
      <section className="flex flex-col gap-2 justify-center">
        <FileUploader
          handleChange={handlerChange}
          name="file"
          types={fileTypes}
          onDrop={handlerChange}
          maxSize={5}
          classes="drop_area drop_zone"
          onSizeError={() => handlerErrorMessage(sizeErrorMessage)}
          onTypeError={() => handlerErrorMessage(typeErrorMessage)}
        >
          <div
            className={`w-[400px] md:w-full border-2 h-[400px] rounded-lg shadow-lg flex justify-center items-center
          ${
            toastMessage.visible
              ? "bg-red-100 border-red-800"
              : "bg-slate-200 border-slate-800"
          }
          `}
          >
            {toastMessage?.visible ? (
              <p className="text-red-600">{toastMessage.message}</p>
            ) : (
              <p>{clickOrDropFileLabel}</p>
            )}
          </div>
        </FileUploader>
        <button
          className={`
                  bg-blue-500 border-2 
                  text-white 
                  hover:bg-blue-800
                  font-bold uppercase text-sm 
                  px-6 py-3 
                  rounded-lg
                  shadow
                  hover:shadow-lg outline-none 
                  focus:outline-none 
                  mr-1 mb-1
                  ease-linear transition-all duration-150
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  w-full
                  `}
          type="button"
          disabled={!imagePreview}
          onClick={onSubmitFile}
        >
          {uploadLabel}
        </button>
      </section>
      <Toast
        visible={toastMessage.visible}
        type={toastMessage.type}
        message={toastMessage.message}
        onClose={onCloseToast}
      />
    </section>
  );
};

export default UploadFile;
