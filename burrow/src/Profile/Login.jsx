import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Cookies from 'js-cookie';
import { FcGoogle } from "react-icons/fc";
import { auth } from "../Oauth/Firebaseauth";
import { Link,useNavigate } from "react-router-dom";
import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  FormControl,
  FormHelperText,
  InputRightElement,
  useToast,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  FaUserAlt,
  FaLock,
  FaRegEye,
  FaRegEyeSlash,
  FaFacebook,
} from "react-icons/fa";
import { LoginUser } from "../redux/User/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const obj = {
  email: "",
  password: "",
  gauth: false,
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const userPro = useSelector((state) => state.data.user);
  console.log(userPro);
  const [form, setForm] = useState(obj);
  const toast = useToast();
  const dispatch = useDispatch();
  const Navigate=useNavigate()

  function HandleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const HandleSubmit = async () => {
    const { email, password } = form;

    if (!email.includes("@") || !email.includes(".com")) {
      toast({
        title: "Enter valid email",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (password === "" || password.length < 10) {
      toast({
        title: "Enter valid password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    dispatch(LoginUser(form));

    toast({
      title: "Login Succesful",
      status: "success",
      duration: 3000,
      isClosable: true,
      position:"top-right"
    });

    Navigate('/')
  };
  console.log(form);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    const { displayName, email, photoURL } = result.user;
    let obj = {
      email,
      fullName: displayName,
      profilePic: photoURL,
      gauth: true,
    };
    dispatch(LoginUser(obj));
  };

  const handleShowClick = () => setShowPassword(!showPassword);


const checkUserAuthentication = () => {
  const token = Cookies.get('token');
  console.log(token)
  if (token) {
    // User is logged in, you can make authenticated requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // User is not logged in, redirect to login page
  }
};

// Call checkUserAuthentication when the app initializes
useEffect(() => {
  checkUserAuthentication();
}, []);

  return (
    <div className="flex justify-center items-center gap-8 w-[90%] m-auto">
      <div>
        <Image
          src="https://media.fbot.me/c38a4643-6fb8-4035-b9c9-95bda7930900/media/d-advocate.jpg"
          height={550}
        />
      </div>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        // backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Text className="text-[48px] font-[600]">Burrow</Text>
        {/* <Text className="text-[36px] text-justify w-[450px] py-4">Don't miss out on Memorial Day deals</Text> */}
        <Text className="text-[21px] pb-4 text-justify">
          Sign up and save up to 60% before this offer ends.
        </Text>

        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          {/* <Avatar bg="teal.500" /> */}
          {/* <Heading color="teal.400">Welcome</Heading> */}
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={HandleSubmit}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      type="email"
                      placeholder="email address"
                      name="email"
                      value={form.email}
                      onChange={(e) => HandleChange(e)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      value={form.password}
                      onChange={(e) => HandleChange(e)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    <Link>forgot password?</Link>
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  color="white"
                  colorScheme="yellow"
                  width="full"
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>

          <Box>
            New to us?{" "}
            <Link to="/Signup" color="teal.500">
              Sign Up
            </Link>
          </Box>

          <Stack direction="row" marginTop={2} gap={4} align="center">
            <Button
              className="py-6"
              px={6}
              leftIcon={<FcGoogle />}
              onClick={signInWithGoogle}
              colorScheme="pink"
              variant="solid"
            >
              Signup With Google
            </Button>

            <Button
              className="py-6"
              px={6}
              leftIcon={<FaFacebook />}
              onClick={signInWithGoogle}
              colorScheme="pink"
              variant="solid"
            >
              Signup With Facebook
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
};

export default Login;
