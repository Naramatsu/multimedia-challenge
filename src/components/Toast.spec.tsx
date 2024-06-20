import Toast, { ToastInterface } from "./Toast";
import { render, screen, fireEvent } from "@testing-library/react";
import { ToastTypes } from "../utils/enums";

const onClose = jest.fn();

const props: ToastInterface = {
  visible: true,
  type: ToastTypes.SUCCESS,
  message: "",
  onClose,
};

const galleryWrapper = (newProps = props) => {
  return render(<Toast {...newProps} />);
};

describe("Gallery component", () => {
  it("Should render a success Toast", () => {
    galleryWrapper();
    const toastSuccess = screen.getByTestId("toast-success");
    expect(toastSuccess).toBeInTheDocument();
  });

  it("Should render an error Toast", () => {
    const newProps: ToastInterface = {
      ...props,
      type: ToastTypes.ERROR,
    };
    galleryWrapper(newProps);
    const toastError = screen.getByTestId("toast-error");
    expect(toastError).toBeInTheDocument();
  });

  it("Should close Toast", () => {
    galleryWrapper();
    const btnClose = screen.getByTestId("btn-toast-close");
    expect(btnClose).toBeInTheDocument();

    fireEvent.click(btnClose);
    expect(onClose).toHaveBeenCalled();
  });
});
