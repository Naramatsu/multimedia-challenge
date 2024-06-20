import { FaRegCheckCircle, FaInfoCircle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { ToastTypes } from "../utils/enums";

const Toast = ({ visible, type, message, onClose }: ToastInterface) => {
  return (
    <section
      role="alert"
      className={`toast w-[350px] min-h-16 shadow-lg rounded-lg flex justify-start items-center gap-2 p-4 border-2 text-white fixed bottom-8 right-8 text-left
        ${visible ? "block" : "hidden"}
        ${type === ToastTypes.SUCCESS && "bg-emerald-600 border-emerald-800"}
        ${type === ToastTypes.ERROR && "bg-red-600 border-red-800"}
      `}
    >
      {type === ToastTypes.SUCCESS && (
        <FaRegCheckCircle
          data-testid="toast-success"
          size={32}
          className="min-h-8 min-w-8"
        />
      )}
      {type === ToastTypes.ERROR && (
        <FaInfoCircle
          data-testid="toast-error"
          size={32}
          className="min-h-8 min-w-8"
        />
      )}
      <p className="mr-8">{message}</p>
      <IoCloseOutline
        data-testid="btn-toast-close"
        className="absolute right-4 bg-transparent  h-6 w-6 text-2xl block outline-none focus:outline-none hover:cursor-pointer hover:text-black"
        onClick={onClose}
      />
    </section>
  );
};

export default Toast;

export interface ToastInterface {
  visible: boolean;
  type: ToastTypes;
  message: string;
  onClose: any;
}
