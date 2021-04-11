import React from "react";
import CardSocialTraffic from "../components/CardSocialTraffic";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 185,
  },
}));
function Form() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className="relative">
        {/* Header */}
        <div
          className="relative  md:pt-32 pb-8 "
          style={{
            paddingTop: 200,
            backgroundImage:
              "url(https://cdn.blablacar.com/kairos/assets/build/images/carpool_only_large-1fb250954893109fa160f6fb41c3ef3d.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="px-4 text-center md:px-10 mx-auto w-full mb-12 ">
            <div>
              <h1 className="font-Lobster text-white sm:text-6xl">
                Where to Go?
              </h1>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex  flex-wrap mt-12">
            <div className="w-full xl:w-12/12 px-4">
              <CardSocialTraffic />
            </div>
          </div>
        </div>
      </div>
      {/*check*/}

      <div class="min-w-screen mt-32 min-h-screen flex items-center justify-center  py-5">
        <div
          class=" text-gray-500 rounded-3xl  w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div class="md:flex w-full">
            <div class="hidden md:block w-1/2  py-10 mt-32">
              <img src="https://cdn.blablacar.com/kairos/assets/build/images/indicate-your-route-fef6b1a4c9dac38c77c092858d73add3.svg" />
            </div>
            <div class="w-full shadow-2xl md:w-1/2 py-10 px-5 md:px-10">
              <div class="text-center mb-10">
                <h1 class="font-bold font-Lobster text-3xl text-gray-900">
                  Create RideShare
                </h1>
                <p>Enter your information to create</p>
              </div>
              <div>
                <div class="flex -mx-3">
                  <div class="w-1/2 px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                      Origin
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="fas fa-map-marker-alt text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Origin"
                      />
                    </div>
                  </div>
                  <div class="w-1/2 px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                      Destination
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="fas fa-map-marker-alt text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Destination"
                      />
                    </div>
                  </div>
                </div>

                <div class="flex -mx-3">
                  <div class="w-1/2 px-3 ">
                    <label for="" class="text-xs font-semibold px-1">
                      Departure at
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                      <input
                        type="time"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Origin"
                      />
                    </div>
                  </div>
                  <div class="w-1/2 px-3 ">
                    <label for="" class="text-xs font-semibold px-1">
                      Capacity
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                      <input
                        type="number"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                <div class="flex -mx-3 mt-5">
                  <div class="w-full px-3 mb-12">
                    <label for="" class="text-xs font-semibold px-1">
                      Confirmed By
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                      <input
                        type="input"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Confirmed By"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                      Expected Payment
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-5 text-center pointer-events-none flex items-center justify-center">
                        <i>ETH</i>
                      </div>
                      <input
                        type="number"
                        class="w-full -ml-10 pl-20 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        defaultValue="0"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                      CREATE NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              class="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
            />
          </a>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default Form;
