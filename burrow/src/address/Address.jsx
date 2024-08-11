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
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { getAddress, addAddress, editAddress,deleteAddress } from '../redux/User/actions';

function Address() {
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
  console.log(addressArr);

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  const initRef = useRef();

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

  const toast = useToast(); // Initialize Chakra UI toast
  const handleSaveClick = () => {
    const {
      Name,
      MobileNumber,
      PinCode,
      Locality,
      Address,
      City,
      State,
    } = addobj;


    if (!Name) {
      toast({
        title: "Error",
        description: "Name are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position:"top-right"
      });
      return false;
    }

    if (!PinCode ) {
      toast({
        title: "Error",
        description: "Pincode are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position:"top-right"
      });
      return false;
    }
    if (!Locality ) {
      toast({
        title: "Error",
        description: "Locality are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position:"top-right"
      });
      return false;
    }
    if (!Address ) {
      toast({
        title: "Error",
        description: "Address are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position:"top-right"
      });
      return false;
    }
    if (!State ) {
      toast({
        title: "Error",
        description: "State are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position:"top-right"
      });
      return false;
    }
    if (!City ) {
      toast({
        title: "Error",
        description: "City are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position:"top-right"
      });
      return false;
    }

    if (!MobileNumber) {
      toast({
        title: "Error",
        description: "Mobile Number are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position:"top-right"
      });
      return false;
    }
  
    const addressToSave = {
      ...addobj,
      AddressType: value === "1" ? "Home" : "Work",
    };

    if (editCardId !== null) {
      dispatch(editAddress(editCardId, addressToSave)).then(()=>{
        dispatch(getAddress());
      })
    } else {
      dispatch(addAddress({ addressItems: [addressToSave] })).then(()=>{
        dispatch(getAddress());
      })
    }

    setIsFormVisible(false);
    setEditCardId(null);
  };

  const handleEdit = (id, onClose) => {
    const addressToEdit = addressArr.find((address) => address._id === id);
    setAddobj({
      ...addressToEdit,
      AddressType: addressToEdit.AddressType === "Home" ? "1" : "2",
    });
    setValue(addressToEdit.AddressType === "Home" ? "1" : "2");
    setIsFormVisible(true);
    setEditCardId(id);
    onClose();
  };

  const handleDelete=(id,onClose)=>{
    dispatch(deleteAddress(id)).then(()=>{
      dispatch(getAddress());
    })
    onClose();
  }

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

              <RadioGroup onChange={(value) => handleChange({ target: { name: 'AddressType', value } })} value={value}>
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
        {addressArr.map((address) => (
          <div
            className={`border border-gray-200 px-4 py-6 ${
              editCardId === address._id ? "hidden" : ""
            }`}
            key={address._id}
          >
            <div>
            <div className="flex justify-between items-center mb-4">
              <div>
              <p className="flex text-[16px] font-[600] gap-10 py-2 items-center">
                <span>{address.Name}</span>
                <p className="text-[16px] font-semibold bg-[#eed9d9] px-[8px] py-[2px] rounded-[20px]">
                {address.AddressType}
              </p> 
                 <span>{address.MobileNumber}</span>
              </p>
              </div>


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
                            onClick={() => handleEdit(address._id, onClose)}
                          >
                            Edit
                          </p>
                          <p className="p-2 hover:bg-gray-300 rounded-[5px]" onClick={()=>handleDelete(address._id,onClose)}>Delete</p>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </>
                )}
              </Popover>
            </div>
           
              <p>
                {address.Address}, {address.PinCode}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Address;
