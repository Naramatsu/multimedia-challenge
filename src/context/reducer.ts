import { Action, FileState } from "../models/file.interface";
import { RequestStatus } from "../utils/enums";
import { ActionTypes } from "./actions";

const reducer = (state: FileState, action: Action): FileState => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.FETCH_FILES:
      return {
        ...state,
        files: payload,
        fileStatus: RequestStatus.LOADED,
        fileErrorMessage: "",
      };
    case ActionTypes.FETCH_FILES_LOADING:
      return {
        ...state,
        fileStatus: RequestStatus.LOADING,
        fileErrorMessage: "",
      };
    case ActionTypes.FETCH_FILES_ERROR:
      return {
        ...state,
        fileStatus: RequestStatus.ERROR,
        fileErrorMessage: payload,
      };

    case ActionTypes.UPLOAD_FILE:
      return {
        ...state,
        fileUploadStatus: RequestStatus.LOADED,
        fileUploadErrorMessage: "",
      };
    case ActionTypes.UPLOAD_FILE_LOADING:
      return {
        ...state,
        fileUploadStatus: RequestStatus.LOADING,
        fileUploadErrorMessage: "",
      };
    case ActionTypes.UPLOAD_FILE_ERROR:
      return {
        ...state,
        fileUploadStatus: RequestStatus.ERROR,
        fileUploadErrorMessage: payload,
      };

    case ActionTypes.SET_FILE_SELECTED:
      return {
        ...state,
        fileSelected: payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
