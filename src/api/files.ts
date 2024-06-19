import axios from "axios";
import { FileModel } from "../models/file.interface";

const api = process.env.REACT_APP_FILES_API || "";

export const fetchFilesApi = async (): Promise<FileModel[]> => {
  const { data } = await axios.get(api);
  return data;
};

export const uploadFilesApi = async (file: FileModel): Promise<FileModel> => {
  const { data } = await axios.post(api, file);
  return data;
};

export const some = "";
