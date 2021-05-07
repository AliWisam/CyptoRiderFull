import React, { useEffect, useState } from "react";

import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Web3 from "web3";
import ReactStars from "react-rating-stars-component";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Swal from "sweetalert2";

import config from "../config";

let web3;
let accounts;
let authentication;
let name, age, phone;
const auth = require("../contracts/Authentication.json");

function Profile() {
  const [editable, setEditable] = useState(false);
  const [driverRating, setDriverRating] = useState(0);
  const [riderRating, setRiderRating] = useState(0);
  const [numberOfRidesGiven, setNumberOfRidesGiven] = useState(0);
  const [userAge, setAge] = useState("");

  const [user, setUser] = useState({
    name: "",
    age: "",
    phone: "",

    numberOfRidesTaken: "",
  });
  const [LoaderSpin, setLoader] = useState(true);

  const EditSetter = (e) => {
    setEditable(!editable);
  };

  const onChangeName = (e) => {
    name = e.target.value;
  };
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };
  const onChangePhone = (e) => {
    phone = e.target.value;
  };

  const submitEdit = async (event) => {
    event.preventDefault();

    if (!phone || !userAge) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Phone or Age!",
      });
    } else {
      let ConvertedName = await authentication.methods
        .stringToBytes32(name)
        .call();
      let res = await authentication.methods
        .update(ConvertedName, userAge, phone)
        .send({ from: accounts[0] });
      console.log(res);
      window.location.reload();
    }
  };

  async function metamaskConnection() {
    web3 = new Web3(window.ethereum);
    accounts = await web3.eth.getAccounts();
    await window.ethereum.enable();
    authentication = new web3.eth.Contract(auth.abi, config.Authentication);
    let res = await authentication.methods.users(accounts[0]).call();
    console.log(res);
    let Fname = await authentication.methods.bytes32ToString(res.name).call();
    let riderRating = res.riderRating;
    let driverRating = res.driverRating;
    setRiderRating(riderRating);
    setDriverRating(driverRating);
    name = Fname;
    phone = res.phoneNumber;

    setAge(res.age);
    setUser({ name: Fname });
    setUser({ phone: res.phoneNumber });
    setUser({ age: res.age });
    setNumberOfRidesGiven(res.numberOfRidesGiven);
    setUser({ numberOfRidesTaken: res.numberOfRidesTaken });
    setLoader(false);
  }
  useEffect(() => {
    metamaskConnection();
  }, []);
  return (
    <>
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
                  My Profile
                </h1>
              </div>
            </div>
          </div>

          {!driverRating || !riderRating ? (
            <div className="container text-center">
              <Loader type="Circles" color="blue" height={100} width={100} />
            </div>
          ) : (
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <div className="min-w-screen mt-32 min-h-screen flex items-center justify-center  py-5">
                <div
                  className=" text-gray-500 rounded-3xl  w-full overflow-hidden"
                  style={{ maxWidth: "1000px" }}
                >
                  <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2  py-10 mt-32">
                      <img src="https://cdn.blablacar.com/kairos/assets/build/images/indicate-your-route-fef6b1a4c9dac38c77c092858d73add3.svg" />
                    </div>
                    <div className="w-full shadow-2xl md:w-1/2 py-10 px-5 md:px-10">
                      <div class="text-center md:px-0 lg:px-0 ">
                        <i
                          className="fas fa-user text-6xl mb-5"
                          style={{ color: "#007bff" }}
                        ></i>
                      </div>
                      <div>
                        <div className="flex -mx-3">
                          <div className="w-1/2 px-3 mb-5">
                            <label
                              for=""
                              className="text-xs font-semibold px-1"
                            >
                              Driver Rating
                            </label>
                            <div className="flex">
                              <ReactStars
                                count={5}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                value={driverRating}
                              />
                            </div>
                          </div>

                          <div className="w-1/2  mb-5 lg:ml-40 ">
                            <label
                              for=""
                              className="text-xs font-semibold px-1"
                            >
                              Rider Rating
                            </label>
                            <div>
                              <ReactStars
                                count={5}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                value={riderRating}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex -mx-3">
                          <div className="w-1/2 px-3 mb-5">
                            <label
                              for=""
                              className="text-xs font-semibold px-1"
                            >
                              Rides Given
                            </label>
                            <div className="flex ml-2">
                              <span>{numberOfRidesGiven}</span>
                            </div>
                          </div>

                          <div className="w-1/2  mb-5 lg:ml-40 ">
                            <label
                              for=""
                              className="text-xs font-semibold px-1"
                            >
                              Rides Taken
                            </label>
                            <div className="flex ml-2">
                              <span>{user.numberOfRidesTaken}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex -mx-3 mt-4">
                          <div className="w-full px-3 ">
                            <label
                              for=""
                              className="text-xs font-semibold px-1"
                            >
                              Name
                            </label>
                            <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                              <input
                                type="text"
                                autofocus
                                name="name"
                                onChange={onChangeName}
                                className="w-full -ml-10 pl-20 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                placeholder="Name"
                                defaultValue={name}
                                disabled={!editable}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex -mx-3 mt-4">
                          <div className="w-full px-3 ">
                            <label
                              for=""
                              className="text-xs font-semibold px-1"
                            >
                              Age
                            </label>
                            <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                              <input
                                onChange={onChangeAge}
                                type="number"
                                min={0}
                                name="age"
                                defaultValue={userAge}
                                className="w-full -ml-10 pl-20 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                placeholder="Age"
                                disabled={!editable}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex -mx-3 mt-4">
                          <div className="w-full px-3 ">
                            <label
                              for=""
                              className="text-xs font-semibold px-1"
                            >
                              Phone No
                            </label>
                            <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                              <input
                                onChange={onChangePhone}
                                type="number"
                                min={0}
                                autofocus
                                name="phone"
                                className="w-full -ml-10 pl-20 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                placeholder="Phone"
                                defaultValue={phone}
                                disabled={!editable}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex -mx-3 ">
                          <div className="w-full px-5  mt-5">
                            <div className="flex justify-start mt-2 text-lg text-gray-600">
                              <button
                                onClick={EditSetter}
                                className="fas  fa-edit"
                              ></button>
                            </div>
                          </div>
                        </div>
                        <div className="flex -mx-3 ">
                          <div className="w-full px-5 ml-5 mb-5 mt-5">
                            <button
                              // onClick={SubmitForm}
                              className="btn btn-primary w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                              onClick={submitEdit}
                              disabled={!editable || !userAge}
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Profile;
