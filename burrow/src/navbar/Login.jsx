import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { FcGoogle } from "react-icons/fc";
import { auth } from '../Oauth/Firebaseauth'
import { Link } from 'react-router-dom';
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
  InputRightElement
} from "@chakra-ui/react";
import axios from 'axios'
import { FaUserAlt, FaLock, FaRegEye, FaRegEyeSlash, FaFacebook } from "react-icons/fa";


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const obj={
    email:"",
      password:""
  }
  

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
//   const {isautho,setIsautho}=useContext(Authcontext);
   const [form,setForm]=useState(obj)
   const provider= new GoogleAuthProvider()
  

   function HandleChange(e){
    setForm({...form,[e.target.name]:e.target.value});
   }

  async function HandleSubmit(e){

    console.log(obj)
    e.preventDefault();
    try {
      let resp=await axios.post(`http://localhost:9999/user/login`,{...form});
      console.log(resp)
      // if(resp.data.operator==='admin'){
      //   navigator('/home')
      // }
      // const obj={
      //   isauth.token:resp.token,
      //   isautho.isauth:true,
      // }

      // setIsautho(obj)
    } catch (error) {
      console.log(error)
    }
      
        console.log("Form Submitted");
   }
console.log(form)

const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    // navigate("/home");
    console.log(result)
  });
}


  const handleShowClick = () => setShowPassword(!showPassword);



  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
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
                  <Input type="email" placeholder="email address" onChange={(e)=>HandleChange(e)}/>
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
                    onChange={(e)=>HandleChange(e)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? <FaRegEye/>: <FaRegEyeSlash/>}
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
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>


        <Box >
        New to us?{" "}
        <Link to="/Signup" color="teal.500" >
          Sign Up
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

      </Stack>
      
    </Flex>
  );
};

export default Login;
