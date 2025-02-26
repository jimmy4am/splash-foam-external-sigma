import React from "react";

type Props = {
  loading: string;
};

const CheckoutFormStatus = ({ loading }: Props) => {

  return (
    <>
      {loading && (
        <div className="fixed h-screen w-screen top-0 left-0 z-40 flex justify-center items-center bg-black/20">
          <div className="flex bg-blue-500 text-white p-4 rounded-md flex-col items-center justify-center w-[280px] h-[140px] text-[18px] font-[500]">
            <div role="status" className="h-[60px]">
              {(loading === "Processing Payment" ||
                loading === "Connecting to PayPal") && (
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              )}
              {(loading === "Order Confirmed" ||
                loading === "One More Thing..." ||
                loading === "Redirecting to PayPal") && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                  className="checkmark"
                >
                  <circle
                    className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    className="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
              )}
              {(loading === "Error Processing Payment" ||
                loading === "Please Try Another Payment Method" ||
                loading === "Error with PayPal. Please try again.") && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                  className="checkmark_red"
                >
                  <circle
                    className="checkmark__circle_red"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="16"
                    x2="36"
                    y2="36"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <line
                    x1="36"
                    y1="16"
                    x2="16"
                    y2="36"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </div>
            <div className="h-[25px] flex items-center text-center justify-center w-full">
              {loading}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutFormStatus;