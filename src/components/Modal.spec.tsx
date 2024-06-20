/* eslint-disable */
import userEvent from "@testing-library/user-event";
import FileStateContext from "../context/FileStateContext";
import Modal from "./Modal";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { FileContext } from "../context";
import { fileInitialStateMock } from "../utils/constantsTest";
import { RequestStatus } from "../utils/enums";

const onClose = jest.fn();

const modalWrapper = () => {
  render(
    <FileStateContext>
      <Modal onClose={onClose} />
    </FileStateContext>
  );
};

describe("Modal component", () => {
  it("Should render the gallery section", () => {
    modalWrapper();
    const modalTitle = screen.getByText(/Biblioteca multimedia/i);
    expect(modalTitle).toBeInTheDocument();

    const btnSelect = screen.getByText(/Seleccionar/i);
    expect(btnSelect).toBeInTheDocument();
  });

  it("Should change the tab and render upload section", () => {
    modalWrapper();
    const modalTitle = screen.getByText(/Biblioteca multimedia/i);
    expect(modalTitle).toBeInTheDocument();

    const tabUploadFile = screen.getByText(/Cargar archivo/i);
    fireEvent.click(tabUploadFile);

    const btnUploadFile = screen.getByText(/Subir archivo/i);
    fireEvent.click(btnUploadFile);
    expect(btnUploadFile).toBeInTheDocument();
  });

  it("Should select a file", async () => {
    modalWrapper();
    await waitFor(() => {
      const firstFile = screen.getByAltText(/media-1/i);
      expect(firstFile).toBeInTheDocument();
      userEvent.click(firstFile);
      const btnSelect = screen.getByText(/Seleccionar/i);
      expect(btnSelect).toBeInTheDocument();
      userEvent.click(btnSelect);
      expect(onClose).toHaveBeenCalled();
    });
  });

  it("Should render an error Toast", async () => {
    fileInitialStateMock.fileStatus = RequestStatus.ERROR;
    const onClose = jest.fn();
    render(
      <FileContext.Provider value={fileInitialStateMock}>
        <Modal onClose={onClose} />
      </FileContext.Provider>
    );
    const toastError = screen.getByTestId("toast-error");
    expect(toastError).toBeInTheDocument();

    const btnClose = screen.getByTestId("btn-toast-close");
    expect(btnClose).toBeInTheDocument();
    fireEvent.click(btnClose);
  });
});
