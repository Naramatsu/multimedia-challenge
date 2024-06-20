import axios, { AxiosResponse } from "axios";
import { fileBlobMock, fileMock } from "../utils/constantsTest";
import { cloudinaryUploadFilesApi } from "./cloudinary";

jest.mock("axios");

describe("Cloudinary Service", () => {
  it("should upload a file to cloudinary server", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.post.mockResolvedValueOnce({ data: fileMock } as AxiosResponse);

    const data = await cloudinaryUploadFilesApi(fileBlobMock, "image");

    expect(axios.post).toHaveBeenCalled();
    expect(data).toEqual(fileMock);
  });
});
