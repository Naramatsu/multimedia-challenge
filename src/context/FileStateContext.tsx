import { useReducer } from "react";
import Reducer from "./reducer";
import { FileContext, fileInitialState } from ".";
import { FileModel, FileState } from "../models/file.interface";
import { ActionTypes, DispatchActions } from "./actions";
import { cloudinaryUploadFilesApi } from "../api/cloudinary";
import { fetchFilesApi, uploadFilesApi } from "../api/files";
import { generalErrorMessage } from "../utils/constants";

const FileStateContext = ({ children }: any) => {
  const [globalState, dispatch] = useReducer<
    (state: FileState, actions: DispatchActions) => FileState
  >(Reducer, fileInitialState);

  const fetchFiles = async (): Promise<void> => {
    dispatch({
      type: ActionTypes.FETCH_FILES_LOADING,
      payload: null,
    });
    try {
      const data = await fetchFilesApi();
      dispatch({
        type: ActionTypes.FETCH_FILES,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.FETCH_FILES_ERROR,
        payload: generalErrorMessage,
      });
    }
  };

  const uploadFiles = async (file: File): Promise<void> => {
    dispatch({
      type: ActionTypes.UPLOAD_FILE_LOADING,
      payload: null,
    });
    try {
      const cloudinaryData = await cloudinaryUploadFilesApi(file);
      const newFile: FileModel = {
        id: cloudinaryData.asset_id,
        lastModifiedDate: cloudinaryData.created_at,
        name: cloudinaryData.original_filename,
        size: cloudinaryData.bytes,
        type: cloudinaryData.resource_type,
        url: cloudinaryData.secure_url,
      };
      await uploadFilesApi(newFile);
      dispatch({
        type: ActionTypes.UPLOAD_FILE,
        payload: null,
      });
      await fetchFiles();
    } catch (error) {
      dispatch({
        type: ActionTypes.UPLOAD_FILE_ERROR,
        payload: generalErrorMessage,
      });
    }
  };

  const setFileSelected = (file: FileModel): void => {
    dispatch({
      type: ActionTypes.SET_FILE_SELECTED,
      payload: file,
    });
  };

  const combinedFunctions: any = {
    fetchFiles,
    uploadFiles,
    setFileSelected,
  };

  return (
    <FileContext.Provider value={{ ...globalState, ...combinedFunctions }}>
      {children}
    </FileContext.Provider>
  );
};

export default FileStateContext;
