import Layout from "@/components/Layout";

const Delete = () => {
  return (

      <main class="antialiased bg-gray-300 text-gray-900 font-sans overflow-x-hidden">
        <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div class="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
          <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
            <div class="md:flex items-center">
              <div class="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p class="font-bold">Delete your account</p>
                <p class="text-sm text-gray-700 mt-1">
                  You will lose all of your data by deleting your account. This
                  action cannot be undone.
                </p>
              </div>
            </div>
            <div class="text-center md:text-right mt-4 md:flex md:justify-center">
              <button class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
                Delete Account
              </button>
              <button
                class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </main>
    
  );
};

export default Delete;
