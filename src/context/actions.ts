import { FileModel } from "../models/file.interface";

export enum ActionTypes {
  UPLOAD_FILE = "UPLOAD_FILE",
  UPLOAD_FILE_LOADING = "UPLOAD_FILE_LOADING",
  UPLOAD_FILE_ERROR = "UPLOAD_FILE_ERROR",
  FETCH_FILES = "FETCH_FILES",
  FETCH_FILES_LOADING = "FETCH_FILES_LOADING",
  FETCH_FILES_ERROR = "FETCH_FILES_ERROR",
  SET_FILE_SELECTED = "SET_FILE_SELECTED",
}

export type FetchFileAction = {
  type: ActionTypes.FETCH_FILES;
  payload: FileModel[];
};

export type FetchFileLoadingAction = {
  type: ActionTypes.FETCH_FILES_LOADING;
  payload: null;
};

export type FetchFileErrorAction = {
  type: ActionTypes.FETCH_FILES_ERROR;
  payload: string;
};

export type SetFileSelectedAction = {
  type: ActionTypes.SET_FILE_SELECTED;
  payload: FileModel;
};

export type UploadFileAction = {
  type: ActionTypes.UPLOAD_FILE;
  payload: null;
};

export type UploadFileLoadingAction = {
  type: ActionTypes.UPLOAD_FILE_LOADING;
  payload: null;
};

export type UploadFileErrorAction = {
  type: ActionTypes.UPLOAD_FILE_ERROR;
  payload: string;
};

export type DispatchActions =
  | FetchFileAction
  | FetchFileLoadingAction
  | FetchFileErrorAction
  | SetFileSelectedAction
  | UploadFileAction
  | UploadFileLoadingAction
  | UploadFileErrorAction;
