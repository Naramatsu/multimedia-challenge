import { createContext } from "react";
import { FileInitialStateModel, FileModel } from "../models/file.interface";
import { RequestStatus } from "../utils/enums";

export const fileInitialState: FileInitialStateModel = {
  files: [],
  fileStatus: RequestStatus.NOT_LOADED,
  fileErrorMessage: "",
  fileSelected: null,
  fileUploadStatus: RequestStatus.NOT_LOADED,
  fileUploadErrorMessage: "",
  fetchFiles: () => {},
  uploadFiles: (file: FormData) => {},
  setFileSelected: (file: FileModel) => {},
};

export const FileContext = createContext(fileInitialState);
