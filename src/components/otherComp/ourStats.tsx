import * as React from "react";

function StatsComponent() {
  return (
    <div className="max-w-[830px]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center px-5 text-base font-medium max-md:mt-10">
            <div className="justify-center px-6 py-5 text-white rounded-3xl border border-white border-solid bg-neutral-800 bg-opacity-50 max-md:px-5">
              Working History 📜
            </div>
            <div className="mt-4 text-5xl bg-clip-text max-md:text-4xl">
              Explore Our Impressive Stats
            </div>
            <div className="mt-4 text-lg leading-9 text-white">
              We take pride in our commitment to excellence and our dedication
              to our success.
            </div>
            <div className="justify-center px-6 py-5 mt-9 text-white rounded-2xl max-md:px-5">
              Contact Us
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col flex-wrap content-start max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col justify-center max-md:mt-5">
                    <div className="flex flex-col px-10 py-16 rounded-2xl border border-solid border-neutral-900 max-md:px-5">
                      <div className="text-6xl font-medium text-center bg-clip-text max-md:text-4xl">
                        200+
                      </div>
                      <div className="mt-4 text-lg text-white">
                        Completed Projects
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col justify-center max-md:mt-5">
                    <div className="flex flex-col px-16 py-16 mr-0 rounded-2xl border border-solid border-neutral-900 max-md:px-5">
                      <div className="text-6xl font-medium text-center bg-clip-text max-md:text-4xl">
                        95+
                      </div>
                      <div className="mt-4 text-lg text-white">
                        Client Reviews
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col justify-center max-md:mt-5">
                    <div className="flex flex-col px-12 py-16 mb-0 rounded-2xl border border-solid border-neutral-900 max-md:px-5">
                      <div className="self-center text-6xl font-medium text-center bg-clip-text max-md:text-4xl">
                        8+
                      </div>
                      <div className="mt-4 text-lg text-white">
                        Services Provided
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col justify-center max-md:mt-5">
                    <div className="flex flex-col px-11 py-16 mb-5 rounded-2xl border border-solid border-neutral-900 max-md:px-5">
                      <div className="text-6xl font-medium text-center bg-clip-text max-md:text-4xl">
                        24/7
                      </div>
                      <div className="mt-4 text-lg text-white">
                        Customer Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StatsComponent;
