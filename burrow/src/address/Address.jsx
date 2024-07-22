import {
    Box,
    Button,
    Input,
    Popover,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverFooter,
    PopoverHeader,
    PopoverTrigger,
    Portal,
    Radio,
    RadioGroup,
    Stack,
    Textarea,
  } from "@chakra-ui/react";
  import React, { useRef, useState } from "react";
  import { MdAdd } from "react-icons/md";
  import { SlOptionsVertical } from "react-icons/sl";
  
  function Address() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [value, setValue] = useState("1");
    const [editCardId, setEditCardId] = useState(null);
    const [addobj, setAddobj] = useState({
      fullName: "",
      mobileNumber: "",
      pinCode: "",
      locality: "",
      address: "",
      cityName: "",
      state: "",
      landmark: "",
      alternateNumber: "",
      type: "Home",
    });
  
    const [addresses, setAddresses] = useState([
      {
        id: 1,
        name: "Tushar Sapate",
        mobile: "7709499326",
        address: "Senapati nagar dighori umred road nagpur, Maharastra",
        pincode: "440009",
        type: "Home",
      },
      {
        id: 2,
        name: "Tushar Sapate",
        mobile: "7709499326",
        address: "Senapati nagar dighori umred road nagpur, Maharastra",
        pincode: "440009",
        type: "Home",
      },
      {
        id: 3,
        name: "Tushar Sapate",
        mobile: "7709499326",
        address: "Senapati nagar dighori umred road nagpur, Maharastra",
        pincode: "440009",
        type: "Home",
      },
      {
        id: 4,
        name: "Tushar Sapate",
        mobile: "7709499326",
        address: "Senapati nagar dighori umred road nagpur, Maharastra",
        pincode: "440009",
        type: "Home",
      },
      // Add more dummy address objects as needed
    ]);
    const initRef = useRef();
  
    const handleAddAddressClick = () => {
      setIsFormVisible(true);
      setAddobj({
        fullName: "",
        mobileNumber: "",
        pinCode: "",
        locality: "",
        address: "",
        cityName: "",
        state: "",
        landmark: "",
        alternateNumber: "",
        type: "Home",
      });
    };
  
    const handleCancelClick = () => {
      setIsFormVisible(false);
      setEditCardId(null);
    };
  
    const handleSaveClick = () => {
      if (editCardId !== null) {
        setAddresses((prevAddresses) =>
          prevAddresses.map((address) =>
            address.id === editCardId
              ? {
                  ...address,
                  name: addobj.fullName,
                  mobile: addobj.mobileNumber,
                  pincode: addobj.pinCode,
                  locality: addobj.locality,
                  address: addobj.address,
                  cityName: addobj.cityName,
                  state: addobj.state,
                  landmark: addobj.landmark,
                  alternateNumber: addobj.alternateNumber,
                  type: value === "1" ? "Home" : "Work",
                }
              : address
          )
        );
      } else {
        setAddresses((prevAddresses) => [
          ...prevAddresses,
          {
            id: prevAddresses.length + 1,
            name: addobj.fullName,
            mobile: addobj.mobileNumber,
            pincode: addobj.pinCode,
            locality: addobj.locality,
            address: addobj.address,
            cityName: addobj.cityName,
            state: addobj.state,
            landmark: addobj.landmark,
            alternateNumber: addobj.alternateNumber,
            type: value === "1" ? "Home" : "Work",
          },
        ]);
      }
      setIsFormVisible(false);
      setEditCardId(null);
    };
  
    const handleEdit = (id, onClose) => {
      const addressToEdit = addresses.find((address) => address.id === id);
      setAddobj({
        fullName: addressToEdit.name,
        mobileNumber: addressToEdit.mobile,
        pinCode: addressToEdit.pincode,
        locality: addressToEdit.locality,
        address: addressToEdit.address,
        cityName: addressToEdit.cityName,
        state: addressToEdit.state,
        landmark: addressToEdit.landmark,
        alternateNumber: addressToEdit.alternateNumber,
        type: addressToEdit.type === "Home" ? "1" : "2",
      });
      setValue(addressToEdit.type === "Home" ? "1" : "2");
      setIsFormVisible(true);
      setEditCardId(id);
      onClose();
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setAddobj((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    return (
      <div className="flex flex-col gap-4 2xl:p-[6px] xl:p-[6px]">
        <div className="border-b pb-4 border-gray-200">
          <p className="text-2xl font-semibold">Manage Addresses</p>
        </div>
  
        {!isFormVisible ? (
          <div
            className="p-4 flex gap-4 items-center border border-gray-200 text-indigo-600 cursor-pointer"
            onClick={handleAddAddressClick}
          >
            <MdAdd className="text-2xl" />
            <p className="text-lg">ADD A NEW ADDRESS</p>
          </div>
        ) : (
          <div className="2xl:bg-[#f5fafe] xl:bg-[#f5fafe] p-4 border border-gray-200">
            <p className="text-indigo-600 font-bold py-2">ADD A NEW ADDRESS</p>
            <div className="w-full lg:w-2/3">
              <div className="flex flex-col md:flex-row gap-4 py-2">
                <Input
                  placeholder="Name"
                  name="fullName"
                  value={addobj.fullName}
                  className="w-full md:w-1/2 py-6 bg-[#fff]"
                  onChange={handleChange}
                />
                <Input
                  placeholder="10-digit mobile number"
                  name="mobileNumber"
                  value={addobj.mobileNumber}
                  className="w-full md:w-1/2 py-6"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 py-2">
                <Input
                  placeholder="PinCode"
                  name="pinCode"
                  value={addobj.pinCode}
                  className="w-full md:w-1/2 py-6"
                  onChange={handleChange}
                />
                <Input
                  placeholder="Locality"
                  name="locality"
                  value={addobj.locality}
                  className="w-full md:w-1/2 py-6"
                  onChange={handleChange}
                />
              </div>
              <div className="py-2">
                <Textarea
                  placeholder="Address (Area and Street)"
                  name="address"
                  value={addobj.address}
                  onChange={handleChange}
                />
              </div>
  
              <div className="flex flex-col md:flex-row gap-4 py-2">
                <Input
                  placeholder="City/District/Town"
                  name="cityName"
                  value={addobj.cityName}
                  className="w-full md:w-1/2 py-6"
                  onChange={handleChange}
                />
                <Input
                  placeholder="State"
                  name="state"
                  value={addobj.state}
                  className="w-full md:w-1/2 py-6"
                  onChange={handleChange}
                />
              </div>
  
              <div className="flex flex-col md:flex-row gap-4 py-2">
                <Input
                  placeholder="Landmark (Optional)"
                  name="landmark"
                  value={addobj.landmark}
                  className="w-full md:w-1/2 py-6"
                  onChange={handleChange}
                />
                <Input
                  placeholder="Alternate Phone (Optional)"
                  name="alternateNumber"
                  value={addobj.alternateNumber}
                  className="w-full md:w-1/2 py-6"
                  onChange={handleChange}
                />
              </div>
  
              <div className="py-2">
                <p className="font-semibold py-2">Address Type</p>
  
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction="row">
                    <Radio value="1">Home</Radio>
                    <Radio value="2">Work</Radio>
                  </Stack>
                </RadioGroup>
              </div>
  
              <div className="flex items-center gap-4 py-4">
                <button
                  className="bg-indigo-600 text-white text-lg font-semibold py-2 px-8 rounded-sm"
                  onClick={handleSaveClick}
                >
                  Save
                </button>
                <button
                  className="bg-indigo-600 text-white text-lg font-semibold py-2 px-8 rounded-sm"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
  
        <div className="">
          {addresses.map((address) => (
            <div
              className={`border border-gray-200 px-4 py-6 ${
                editCardId === address.id ? "hidden" : ""
              }`}
              key={address.id}
            >
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-semibold bg-[#eed9d9] px-[4px] py-[2px] rounded-sm">
                  {address.type}
                </p>
  
                <Popover closeOnBlur={false} placement="left" initialFocusRef={initRef}>
                  {({ isOpen, onClose }) => (
                    <>
                      <PopoverTrigger>
                        <Button>
                          <SlOptionsVertical />
                        </Button>
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent>
                          <PopoverHeader></PopoverHeader>
                          <PopoverCloseButton />
                          <PopoverBody>
                            <p
                              className="p-2 hover:bg-gray-300 rounded-[5px]"
                              onClick={() => handleEdit(address.id, onClose)}
                            >
                              Edit
                            </p>
                            <p className="p-2 hover:bg-gray-300 rounded-[5px]">Delete</p>
                          </PopoverBody>
                        </PopoverContent>
                      </Portal>
                    </>
                  )}
                </Popover>
              </div>
              <div>
                <p className="flex text-[16px] font-[600] gap-10 py-2">
                  <span>{address.name}</span> <span>{address.mobile}</span>
                </p>
                <p>
                  {address.address}, {address.pincode}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Address;
  