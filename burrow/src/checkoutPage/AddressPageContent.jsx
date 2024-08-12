import {
  Box,
  Button,
  Input,
  Textarea,
  Radio,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddress,
  addAddress,
  editAddress,
  activeAddress,
} from "../redux/User/actions";

function AddressPageContent({ toggleSection }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [value, setValue] = useState("1");
  const [editCardId, setEditCardId] = useState(null);
  const [addobj, setAddobj] = useState({
    Name: "",
    MobileNumber: "",
    PinCode: "",
    Locality: "",
    Address: "",
    City: "",
    State: "",
    Landmark: "",
    AlternateNumber: "",
    AddressType: "Home",
  });

  const dispatch = useDispatch();
  const addressArr = useSelector((state) => state.data.addressData);
  const toast = useToast();

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  const handleAddAddressClick = () => {
    setIsFormVisible(true);
    setAddobj({
      Name: "",
      MobileNumber: "",
      PinCode: "",
      Locality: "",
      Address: "",
      City: "",
      State: "",
      Landmark: "",
      AlternateNumber: "",
      AddressType: "Home",
    });
  };

  const handleCancelClick = () => {
    setIsFormVisible(false);
    setEditCardId(null);
  };

  const showToast = (title, description) => {
    toast({
      title,
      description,
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  const handleSaveClick = () => {
    const { Name, MobileNumber, PinCode, Locality, Address, City, State } =
      addobj;

    if (
      !Name ||
      !PinCode ||
      !Locality ||
      !Address ||
      !State ||
      !City ||
      !MobileNumber
    ) {
      showToast("Error", "Please fill out all required fields.");
      return;
    }

    const addressToSave = {
      ...addobj,
      AddressType: value === "1" ? "Home" : "Work",
    };

    const action =
      editCardId !== null
        ? editAddress(editCardId, addressToSave)
        : addAddress({ addressItems: [addressToSave] });

    dispatch(action).then(() => {
      dispatch(getAddress());
    });

    setIsFormVisible(false);
    setEditCardId(null);
  };

  const handleEdit = (id) => {
    const addressToEdit = addressArr.find((address) => address._id === id);
    setAddobj({
      ...addressToEdit,
      AddressType: addressToEdit.AddressType === "Home" ? "1" : "2",
    });
    setValue(addressToEdit.AddressType === "Home" ? "1" : "2");
    setIsFormVisible(true);
    setEditCardId(id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddobj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "AddressType") {
      setValue(value);
    }
  };

  const ActiveAddressStatus = (id) => {
    dispatch(activeAddress(id)).then(() => {
      dispatch(getAddress());
    });
  };

  return (
    <div className="flex flex-col gap-4 2xl:p-[6px] xl:p-[6px]">
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
          <div className="">
            <div className="flex flex-col md:flex-row gap-4 py-2">
              <Input
                placeholder="Name"
                name="Name"
                value={addobj.Name}
                className="w-full md:w-1/2 py-6 bg-[#fff]"
                onChange={handleChange}
              />
              <Input
                placeholder="10-digit MobileNumber number"
                name="MobileNumber"
                value={addobj.MobileNumber}
                className="w-full md:w-1/2 py-6"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 py-2">
              <Input
                placeholder="PinCode"
                name="PinCode"
                value={addobj.PinCode}
                className="w-full md:w-1/2 py-6"
                onChange={handleChange}
              />
              <Input
                placeholder="Locality"
                name="Locality"
                value={addobj.Locality}
                className="w-full md:w-1/2 py-6"
                onChange={handleChange}
              />
            </div>
            <div className="py-2">
              <Textarea
                placeholder="Address (Area and Street)"
                name="Address"
                value={addobj.Address}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 py-2">
              <Input
                placeholder="City/District/Town"
                name="City"
                value={addobj.City}
                className="w-full md:w-1/2 py-6"
                onChange={handleChange}
              />
              <Input
                placeholder="State"
                name="State"
                value={addobj.State}
                className="w-full md:w-1/2 py-6"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 py-2">
              <Input
                placeholder="Landmark (Optional)"
                name="Landmark"
                value={addobj.Landmark}
                className="w-full md:w-1/2 py-6"
                onChange={handleChange}
              />
              <Input
                placeholder="Alternate Phone (Optional)"
                name="AlternateNumber"
                value={addobj.AlternateNumber}
                className="w-full md:w-1/2 py-6"
                onChange={handleChange}
              />
            </div>
            <div className="py-2">
              <p className="font-semibold py-2">Address Type</p>
              <RadioGroup
                onChange={(value) =>
                  handleChange({ target: { name: "AddressType", value } })
                }
                value={value}
              >
                <Stack direction="row">
                  <Radio value="1">Home</Radio>
                  <Radio value="2">Work</Radio>
                </Stack>
              </RadioGroup>
            </div>
            <div className="py-4 flex gap-4">
              <Button
                colorScheme="blue"
                className="w-1/2"
                onClick={handleSaveClick}
              >
                Save
              </Button>
              <Button
                variant="outline"
                className="w-1/2"
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
      {addressArr &&
        addressArr.map((address) => (
          <div
            className={`border border-gray-200 px-4 py-6 ${
              editCardId === address._id ? "hidden" : ""
            } ${address.ActiveAddress ? "bg-gray-100" : ""}`}
            key={address._id}
          >
            <div>
              <div className="flex gap-6 items-center">
                <Radio
                  size="lg"
                  name="1"
                  colorScheme="blue"
                  isChecked={address.ActiveAddress}
                  onClick={() => ActiveAddressStatus(address._id)}
                />
                <div className="w-[100%]">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="flex text-[16px] font-[600] gap-10 py-2 items-center">
                        <span>{address.Name}</span>
                        <p className="text-[16px] font-semibold bg-[#eed9d9] px-[8px] py-[2px] rounded-[20px]">
                          {address.AddressType}
                        </p>
                        <span>{address.MobileNumber}</span>
                      </p>
                    </div>
                    <p
                      className={`p-2 font-semibold text-blue-600 cursor-pointer rounded-[5px] ${
                        address.ActiveAddress ? "visible" : "hidden"
                      }`}
                      onClick={() => handleEdit(address._id)}
                    >
                      EDIT
                    </p>
                  </div>
                  <p>
                    {address.Address}, {address.PinCode}
                  </p>
                  {address.ActiveAddress && (
                    <button
                      className="bg-orange-600 text-white text-lg font-semibold py-2 px-6 mt-4 rounded-lg hover:bg-orange-700 transition"
                      onClick={() => toggleSection("orderSummary")}
                    >
                      DELIVER HERE
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default AddressPageContent;
