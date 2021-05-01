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
</div>
{/*component*/}
<div className="bg-white mt-32 shadow-2xl rounded lg:w-4/12 md:6/12 w-10/12 m-auto my-10 ">
<div className="py-8 px-8 rounded-2xl shadow-2xl">
  <h1 className="font-medium text-2xl mt-3 text-center">Profile</h1>
  <div className="mt-6">
    <div className="my-5 text-sm">
      <label for="username" className="block text-black">
        Name
      </label>
      <input
        type="text"
        autofocus
        name="name"
        onChange={onChangeInput}
        className="rounded-sm shadow-2xl px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
        placeholder="Name"
        value={user.name}
        disabled={!editable}
      />
    </div>
    <div className="my-5 text-sm">
      <label for="password" className="block text-black">
        Age
      </label>
      <input
        onChange={onChangeInput}
        type="number"
        name="age"
        defaultValue={user.age}
        className="rounded-sm shadow-2xl px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
        placeholder="Age"
        min="0"
        disabled={!editable}
      />
      <div className="my-5 text-sm">
        <label for="username" className="block text-black">
          Phone No:
        </label>
        <input
          onChange={onChangeInput}
          type="text"
          autofocus
          name="phone"
          className="rounded-sm shadow-2xl px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
          placeholder="Phone"
          value={user.phone}
          disabled={!editable}
        />
      </div>
      <div className="flex justify-end mt-2 text-lg text-gray-600">
        <button
          onClick={EditSetter}
          className="fas  fa-edit"
        ></button>
      </div>
    </div>

    <button
      className="btn btn-primary text-center"
      onClick={submitEdit}
      disabled={!editable}
      style={{
        fontSize: "12px",
        padding: 22,
        width: 300,
        backgroundColor: "black",
        borderColor: "black",
        fontWeight: "bold",
      }}
    >
      {" "}
      Edit
    </button>
  </div>
</div>
</div>