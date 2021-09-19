import { useState } from "react";

import ButtonPrimary from "../common/ButtonPrimary";
import ButtonSecondary from "../common/ButtonSecondary";

import { addSpaceship } from "../../fauna/queries";

const AddSpaceship = ({ onClose }) => {
  const [name, setName] = useState();
  const [pilot, setPilot] = useState();

  const handleAddSpaceship = async () => {
    if (!name || !pilot) return;
    await addSpaceship(name, pilot);
    onClose();
  };

  return (
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-lg w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                Add Spaceship
              </h3>
              <div class="mt-2">
                <form class="w-full">
                  <input
                    placeholder="Name"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full my-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Pilot"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full my-2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    onChange={(e) => {
                      setPilot(e.target.value);
                    }}
                  />
                </form>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <ButtonPrimary text="Add" onClick={() => handleAddSpaceship()} />
            <ButtonSecondary text="Cancel" onClick={() => onClose()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSpaceship;
