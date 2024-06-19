import { AlertMessage } from "../models/alert.interface";
import { ToastTypes } from "./enums";

export const errorMessageInitialState: AlertMessage = {
  visible: false,
  message: "",
  type: ToastTypes.EMPTY,
};

// App
export const appTitle =
  "Prueba Tecnica SWE II - Alexandra Lozano Immigration Law Interview Process";
export const devName = "by: Jonathan Narvaez Martinez";
export const imageNameLabel = "Nombre de la imagen:";
export const btnMainPlaceHolder = "Haz click en el boton aqui para cargar ->";
export const showModalLabel = "Abrir Modal";

// Gallery
export const videoNotSupportedLabel =
  "Your browser does not support the video tag.";

// Modal
export const mediaLibraryTitle = "Biblioteca multimedia";
export const closeModalLabel = "Cerrar";
export const selectLabel = "Seleccionar";
export const galleryTabLabel = "Galeria";
export const uploadFileTabLabel = "Cargar archivo";
export const tabsList = [galleryTabLabel, uploadFileTabLabel];

// UploadFile
export const previewLabel = "Vista previa";
export const sizeErrorMessage =
  "Error en el tamaño del archivo! \nSolo se pueden archivos menores a 5MB.";
export const typeErrorMessage =
  "Error de formato del archivo! \nSolo se aceptan los siguientes formatos: JPG, PNG, GIF, MP4 o WEBM.";
export const clickOrDropFileLabel =
  "Haz click aqui o arrastra una imagen o video.";
export const uploadLabel = "Subir archivo";

// Context
export const generalErrorMessage = "Opps! Hubo un error.";
