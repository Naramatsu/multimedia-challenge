import {
  fileInitialStateMock,
  fileMock,
  filesMock,
} from "../utils/constantsTest";
import { RequestStatus } from "../utils/enums";
import { ActionTypes } from "./actions";
import reducer from "./reducer";

const actionsList = [
  {
    action: ActionTypes.FETCH_FILES,
    result: {
      ...fileInitialStateMock,
      files: filesMock,
      fileStatus: RequestStatus.LOADED,
      fileErrorMessage: "",
    },
    payload: filesMock,
  },
  {
    action: ActionTypes.FETCH_FILES_LOADING,
    result: {
      ...fileInitialStateMock,
      fileStatus: RequestStatus.LOADING,
      fileErrorMessage: "",
    },
    payload: null,
  },
  {
    action: ActionTypes.FETCH_FILES_ERROR,
    result: {
      ...fileInitialStateMock,
      fileStatus: RequestStatus.ERROR,
      fileErrorMessage: "error",
    },
    payload: "error",
  },
  {
    action: ActionTypes.UPLOAD_FILE,
    result: {
      ...fileInitialStateMock,
      fileUploadStatus: RequestStatus.LOADED,
      fileUploadErrorMessage: "",
    },
    payload: null,
  },
  {
    action: ActionTypes.UPLOAD_FILE_LOADING,
    result: {
      ...fileInitialStateMock,
      fileUploadStatus: RequestStatus.LOADING,
      fileUploadErrorMessage: "",
    },
    payload: null,
  },
  {
    action: ActionTypes.UPLOAD_FILE_ERROR,
    result: {
      ...fileInitialStateMock,
      fileUploadStatus: RequestStatus.ERROR,
      fileUploadErrorMessage: "error",
    },
    payload: "error",
  },
  {
    action: ActionTypes.SET_FILE_SELECTED,
    result: {
      ...fileInitialStateMock,
      fileSelected: fileMock,
    },
    payload: fileMock,
  },
  {
    action: "default",
    result: fileInitialStateMock,
    payload: null,
  },
];

describe("Reducer file context", () => {
  actionsList.map(({ action, result, payload }) =>
    it(`${action} action`, () => {
      const expected = reducer(fileInitialStateMock, {
        type: action,
        payload,
      });
      expect(expected).toEqual(result);
    })
  );
});
