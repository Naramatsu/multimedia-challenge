import axios, { AxiosResponse, AxiosError } from "axios";
import { fileMock, filesMock } from "../utils/constantsTest";
import { fetchFilesApi, uploadFilesApi } from "./files";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("File Services", () => {
  it("should get all files using fetchFilesApi", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: filesMock,
    } as AxiosResponse);

    const data = await fetchFilesApi();

    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(filesMock);
  });

  it("should upload a file using uploadFilesApi", async () => {
    mockedAxios.post.mockResolvedValueOnce({
      data: fileMock,
    } as AxiosResponse);

    const data = await uploadFilesApi(fileMock);

    expect(axios.post).toHaveBeenCalled();
    expect(data).toEqual(fileMock);
  });
});
