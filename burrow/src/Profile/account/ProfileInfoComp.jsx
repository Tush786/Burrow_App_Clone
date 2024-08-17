import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import FAQs from "./AccountFaqSection";
import { useDispatch } from "react-redux";
import { editEmail, editFullname, editPhoneNo } from "../../redux/User/actions";
import Cookies from 'js-cookie';

function ProfileInfoComp() {
  const [isEditable, setIsEditable] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [isMobileNumEditable, setIsMobileNumEditable] = useState(false);
  const [user, setUser] = useState({
    email: "",
    fullname: "",
    avatar: "",
    phonenumber: "",
    userid: "",
  });

  // States for input changes
  const [editedFullName, setEditedFullName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedMobileNum, setEditedMobileNum] = useState("");

  useEffect(() => {
    // const UserInf = localStorage.getItem("userdata");

    const UserInf = Cookies.get('userInfo');
   
    if (UserInf) {
      try {
        const parsedUser = UserInf ? JSON.parse(UserInf) : null;
        setUser(parsedUser);
        setEditedFullName(parsedUser.fullName || '');
        setEditedEmail(parsedUser.email || '');
        setEditedMobileNum(parsedUser.phonenumber || ''); // Ensure default value
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }
  }, []);

  const dispatch = useDispatch();

  const handleFullName = () => {
    dispatch(editFullname(editedFullName, user.userid));
    setIsEditable(false);
  };

  const handleEmail = () => {
    dispatch(editEmail(editedEmail, user.userid));
    setIsEmailEditable(false);
  };

  const handlePhoneNo = () => {
    dispatch(editPhoneNo(editedMobileNum, user.userid));
    setIsMobileNumEditable(false);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Personal Information Edit Functionality */}
      <div>
        <div className="flex items-center mb-8 gap-4">
          <p className="text-2xl font-semibold text-gray-800">Personal Information</p>
          <span
            className="text-lg font-semibold text-indigo-600 cursor-pointer"
            onClick={() => setIsEditable(!isEditable)}
          >
            {isEditable ? "Cancel" : "Edit"}
          </span>
        </div>
        <div className="flex gap-4 items-center">
          {["firstname", "lastname"].map((field, index) => (
            <div key={index} className="relative group">
              <input
                type="text"
                name={field}
                value={
                  field === "firstname"
                    ? editedFullName.split(" ")[0] || ''
                    : editedFullName.split(" ").slice(1).join(" ") || ''
                }
                onChange={(e) => {
                  const value = e.target.value;
                  if (field === "firstname") {
                    setEditedFullName(
                      value + " " + editedFullName.split(" ").slice(1).join(" ")
                    );
                  } else {
                    setEditedFullName(
                      editedFullName.split(" ")[0] + " " + value
                    );
                  }
                }}
                className={`py-4 px-6 ${isEditable ? "" : "bg-gray-100 pointer-events-none"} text-base w-[350px] border border-gray-300 rounded-md`}
                readOnly={!isEditable}
              />
            </div>
          ))}
          {isEditable && (
            <Button
              className="py-4 px-8 bg-indigo-600 text-white rounded-md"
              onClick={handleFullName}
            >
              Save
            </Button>
          )}
        </div>
      </div>

      {/* Email Edit Functionality */}
      <div>
        <div className="flex items-center mb-8 gap-4">
          <p className="text-2xl font-semibold text-gray-800">Email Address</p>
          <span
            className="text-lg font-semibold text-indigo-600 cursor-pointer"
            onClick={() => setIsEmailEditable(!isEmailEditable)}
          >
            {isEmailEditable ? "Cancel" : "Edit"}
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative group">
            <input
              type="email"
              name="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              className={`py-4 px-6 ${isEmailEditable ? "" : "bg-gray-100 pointer-events-none"} text-base w-[350px] border border-gray-300 rounded-md`}
              readOnly={!isEmailEditable}
            />
          </div>
          {isEmailEditable && (
            <Button
              className="py-4 px-8 bg-indigo-600 text-white rounded-md"
              onClick={handleEmail}
            >
              Save
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Number Edit Functionality */}
      <div>
        <div className="flex items-center mb-8 gap-4">
          <p className="text-2xl font-semibold text-gray-800">Mobile Number</p>
          <span
            className="text-lg font-semibold text-indigo-600 cursor-pointer"
            onClick={() => setIsMobileNumEditable(!isMobileNumEditable)}
          >
            {isMobileNumEditable ? "Cancel" : "Edit"}
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative group">
            <input
              type="text"
              name="mobile"
              value={editedMobileNum}
              onChange={(e) => setEditedMobileNum(e.target.value)}
              className={`py-4 px-6 ${isMobileNumEditable ? "" : "bg-gray-100 pointer-events-none"} text-base w-[350px] border border-gray-300 rounded-md`}
              readOnly={!isMobileNumEditable}
            />
          </div>
          {isMobileNumEditable && (
            <Button
              className="py-4 px-8 bg-indigo-600 text-white rounded-md"
              onClick={handlePhoneNo}
            >
              Save
            </Button>
          )}
        </div>
      </div>

      <FAQs />

      <div className="mt-8">
        <p className="text-xl py-4 font-semibold text-indigo-600 cursor-pointer">
          Deactivate Account
        </p>
        <p className="text-xl py-4 text-gray-800 cursor-pointer">
          Delete Account
        </p>
      </div>
    </div>
  );
}

export default ProfileInfoComp;
