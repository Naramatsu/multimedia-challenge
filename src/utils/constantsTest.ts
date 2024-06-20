import { FileInitialStateModel, FileModel } from "../models/file.interface";
import { RequestStatus } from "./enums";

export const filesMock: FileModel[] = [
  {
    id: "8b7182220d641a8dd07c9982f53339c1",
    lastModifiedDate: null,
    name: "dovakin-naruto",
    size: 1232485,
    type: "image",
    url: "https://res.cloudinary.com/dxg9gszax/image/upload/v1718825984/challenge/dovakin-naruto_v5t4pd.jpg",
  },
  {
    id: "c1b8455015dea2e0986b611e142d913f",
    lastModifiedDate: null,
    name: "artworks-t3RDHmqmsMBXdzvc-fy6KCw-t500x500",
    size: 64115,
    type: "video",
    url: "https://res.cloudinary.com/dxg9gszax/image/upload/v1718861891/challenge/artworks-t3RDHmqmsMBXdzvc-fy6KCw-t500x500_jh5tf9.jpg",
  },
  {
    id: "c1b8455015dea2e0986b611e142d913f",
    lastModifiedDate: null,
    name: "artworks-t3RDHmqmsMBXdzvc-fy6KCw-t500x500",
    size: 64115,
    type: "image",
    url: null,
  },
];

export const fileMock: FileModel = filesMock[0];

export const fileBlobMock = new File([""], "filename", { type: "image/jpg" });

export const fileInitialStateMock: FileInitialStateModel = {
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
