import {
  FormControl,
  FormLabel,
  FormHelperText,
  Container,
  Input,
  Box,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface Istate {
  user: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  };
}

const Form: React.FC = () => {
  const [state, setstate] = useState<Istate>({
    user: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });
  const handlechange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setstate({
      user:{
        ...state.user,
        [event.target.name]:event.target.value


      }
    })

  }
  const handlesubmit =(event: React.FormEvent<HTMLFormElement>):void=>{
    event.preventDefault()
    console.log(state.user)

  }
  

  return (
    <>
      <VStack>
        <Box>
          <Heading fontWeight={"bold"} pb={"50px"} fontSize={"34px"}>
            Form Validation
          </Heading>
        </Box>
        <form  onSubmit={handlesubmit}>
        <FormControl>
          <FormLabel mt={"10px"}>First Name</FormLabel>
          <Input type="text" px={"10px"}  value={state.user.firstname} onChange={handlechange} name = 'firstname'/>
        </FormControl>
        <FormControl>
          <FormLabel mt={"10px"}>Last Name</FormLabel>
          <Input type="text" px={"10px"}  value={state.user.lastname} onChange={handlechange} name = 'lastname' />
        </FormControl>
        <FormControl>
          <FormLabel mt={"10px"}>Email</FormLabel>
          <Input type="email" px={"10px"}  value={state.user.email} onChange={handlechange} name = 'email' />
        </FormControl>
        <FormControl>
          <FormLabel mt={"10px"}>Password</FormLabel>
          <Input type="password" px={"10px"} value={state.user.password} onChange={handlechange} name = 'password' />
        </FormControl>
        <Input mt={"30px"} px={"30px"} type="submit" />
        </form>
      </VStack>
      
      <Box ml={"500px"} mt={"90px"}>{JSON.stringify(state.user)}</Box>
    </>
  );
};

export default Form;
