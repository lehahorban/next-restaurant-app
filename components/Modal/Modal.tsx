import { NextPage } from "next";
import Image from "next/image";

interface ModalProps {
  selectedImage: string;
  handleCloseModal: () => void;
  selectedDish: string | null;
  selectedPrice: string | undefined;
}

const Modal: NextPage<ModalProps> = ({
  selectedImage,
  handleCloseModal,
  selectedDish,
  selectedPrice,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75 z-50 overlay">
      <div className="bg-white p-2 w-[500px]">
        <div className="relative bg-cover bg-center w-full aspect-video">
          <Image
            className="w-full h-full object-cover object-center"
            src={selectedImage}
            alt="Background Image"
            fill
          />
          <button
            type="button"
            onClick={handleCloseModal}
            className="absolute top-2 right-2 button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-500 hover:text-red-900"
              aria-label="close"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-center text-gray-900 text-3xl">
          {selectedDish}
        </p>
        <p className="text-center text-gray-700 text-2xl">{selectedPrice}</p>
      </div>
    </div>
  );
};

export default Modal;
