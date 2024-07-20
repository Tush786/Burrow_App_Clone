import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { FcGoogle } from "react-icons/fc";
import { auth } from '../Oauth/Firebaseauth'
import { Link } from 'react-router-dom';
import { FaRegEyeSlash, FaRegEye, FaFacebook} from "react-icons/fa";

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,

  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  useToast,
  Image,
  Text
} from "@chakra-ui/react";
import axios from 'axios'
import { FaUserAlt, FaLock } from "react-icons/fa";
import { LoginUser, addUser } from "../redux/User/actions";
import { useDispatch } from "react-redux";


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const obj={
    email:"",
    phonenumber:"",
      password:"",
  }
  

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
   const [form,setForm]=useState(obj)
   const provider= new GoogleAuthProvider()
  const dispatch=useDispatch()

//    function HandleChange(e){
//     setForm({...form,[e.target.name]:e.target.value});
//    }

//   async function HandleSubmit(e){

//     console.log(obj)
//     e.preventDefault();
//     try {
//       let resp=await axios.post(`http://localhost:9999/user/login`,{...form});
//       console.log(resp)
//       // if(resp.data.operator==='admin'){
//       //   navigator('/home')
//       // }
//       // const obj={
//       //   isauth.token:resp.token,
//       //   isautho.isauth:true,
//       // }

//       // setIsautho(obj)
//     } catch (error) {
//       console.log(error)
//     }
      
//         console.log("Form Submitted");
//    }
// console.log(form)

const toast = useToast();

const [user, setUser] = useState({
  phonenumber: "",
  fullName: "",
  email: "",
  password: "",
  cpassword: "",
  // avatar:""
});

// console.log(user)

const HandleChange = (e) => {
  e.preventDefault();
  // if (e.target.name === 'file') {
  //   setUser({ ...user, [e.target.name]: e.target.files[0] });
  // } else {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // }
  setUser({ ...user, [e.target.name]: e.target.value });
};
console.log(user)

const HandleSubmit = async (e) => {
  e.preventDefault();
  const { phonenumber, fullName, email, password, cpassword,avatar} = user;

  if (phonenumber === "") {
    return toast({
      title: "Enter Phone Number",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }

  if (fullName=== "") {
    return toast({
      title: "Enter full name",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }

  if (!email.includes("@") || !email.includes(".com") || email.length < 12) {
    return toast({
      title: "Enter valid email",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }

  if (password === "" || password.length < 6) {
    return toast({
      title: "Enter valid password",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }

  if (password !== cpassword) {
    return toast({
      title: "Wrong Password",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }

  dispatch(addUser(user));

  // Clear form fields after submission
  setUser({
    phonenumber: "",
    fullName: "",
    email: "",
    password: "",
    cpassword: "",
    avatar:""
  });
};




const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  console.log(result)
  const { email, photoURL,displayName } = result.user;
  let obj = {
    email,
    fullName:displayName,
    profilePic: photoURL,
    gauth: true
  }
  dispatch(LoginUser(obj));
};



const [show, setShow] = useState(false);
const handleClick = () => setShow(!show);

const [showc, setShowc] = useState(false);
const handleClick_c = () => setShowc(!showc);



  return (
    <div className="flex justify-center items-center gap-8 w-[90%] m-auto">
      <div>
        <Image src="https://media.fbot.me/c38a4643-6fb8-4035-b9c9-95bda7930900/media/d-advocate.jpg" height={550} />
      </div>
      <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      // backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        {/* <Avatar bg="teal.500" /> */}
        {/* <Heading color="teal.400">Welcome</Heading> */}
        <Box minW={{ base: "90%", md: "468px" }}>
        <Text className="text-[48px] font-[600] text-center">Burrow</Text>
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
                  <Input type="email" placeholder="email address" name="email" onChange={(e)=>HandleChange(e)}/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="number" placeholder="user name" name="phonenumber" onChange={(e)=>HandleChange(e)}/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="text" placeholder="full name" name="fullName" onChange={(e)=>HandleChange(e)}/>
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
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    onChange={(e)=>HandleChange(e)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ?   <FaRegEye/>: <FaRegEyeSlash/>}
                    </Button>
                  </InputRightElement>
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
                    type={showc ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="cpassword"
                    onChange={(e)=>HandleChange(e)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick_c}>
                      {showc ? <FaRegEye/>: <FaRegEyeSlash/>}
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
                CREATE AN ACCOUNT
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link to="/Login" color="teal.500" >
        Login
        </Link>
      </Box>
    

      <Stack direction='row' marginTop={2} gap={4}  align="center">

      <Button className="py-6" px={6} leftIcon={<FcGoogle />}  onClick={signInWithGoogle} colorScheme='pink' variant='solid'>
    Signup With Google
  </Button>


  <Button className="py-6" px={6} leftIcon={<FaFacebook />}  onClick={signInWithGoogle} colorScheme='pink' variant='solid'>
   Signup With Facebook
  </Button>

</Stack>


    
    
    </Flex>
    </div>

   
  );
};

export default Signup;
