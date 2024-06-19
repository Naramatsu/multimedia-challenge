const api = process.env.REACT_APP_CLOUDINARY_API;
const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUDNAME || "";
const apiKey = process.env.REACT_APP_CLOUDINARY_API_KEY || "";
const tag = process.env.REACT_APP_CLOUDINARY_API_TAG || "";

export const cloudinaryUploadFilesApi = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", cloudName);
  formData.append("api_key", apiKey);
  formData.append("tags", tag);

  const response = await fetch(`${api}/upload`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data;
};
