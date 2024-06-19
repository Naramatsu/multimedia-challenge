import { RequestStatus } from "../utils/enums";

export interface FileModel {
  id: string | null;
  lastModifiedDate: Date | null;
  name: string | null;
  size: number | null;
  type: string | null;
  url: string | null;
}

export interface FileState {
  files: FileModel[] | [] | null;
  fileStatus: string | null;
  fileErrorMessage: string | null;
  fileUploadStatus: string | null;
  fileUploadErrorMessage: string | null;
  fileSelected: FileModel | null;
}

export interface Action {
  type: string;
  payload: any;
}

export interface FileInitialStateModel {
  files: FileModel[] | [];
  fileStatus: RequestStatus;
  fileErrorMessage: string | null;
  fileSelected: FileModel | null;
  fileUploadStatus: RequestStatus;
  fileUploadErrorMessage: string | null;
  fetchFiles: Function;
  uploadFiles: Function;
  setFileSelected: Function;
}
