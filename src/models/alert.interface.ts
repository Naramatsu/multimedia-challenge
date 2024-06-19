import { ToastTypes } from "../utils/enums";

export interface AlertMessage {
  visible: boolean;
  message: string;
  type: ToastTypes;
}
