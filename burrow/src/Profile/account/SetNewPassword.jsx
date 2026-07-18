import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

function Resetpassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);

      toast({
        title: "Passwords do not match",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    try {
      const token = searchParams.get("token");

      const res = await axios.post(
        "https://burrow-app-database.onrender.com/pass/resetPassword",
        {
          token,
          password,
        }
      );

      setMessage(res.data.message);
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[30%] m-auto">
      <h1 className="text-[24px] font-[600]">Reset Password</h1>

      <form onSubmit={handleSubmit}>
        <FormControl mt={4}>
          <FormLabel>Enter New Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter New Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>

        {message && (
          <Text color="green.500" mt={3}>
            {message}
          </Text>
        )}

        {error && (
          <Text color="red.500" mt={3}>
            {error}
          </Text>
        )}

        <Button
          type="submit"
          className="w-full mt-5"
          isLoading={isLoading}
          loadingText="Resetting..."
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
}

export default Resetpassword;