import { Button, FormControl, Image, Input, InputGroup, InputLeftElement, Stack, Text, Textarea } from '@chakra-ui/react'


import React, { useState } from 'react'

function Inviteform() {
    const [obj,setObj]=useState({
        phonenum:"",
        content:"Check out Burrow’s Memorial Day Sale! They make modern, modular furniture with clever features and premium materials, and everything sfree."
    })

    function handlechange(e){
        setObj({...obj,[e.target.name]:e.target.value});
    }
     function handlesubmit(e){

     }
  
  return (
    <div className='flex gap-8 justify-center items-center h-[70%]'>
    <div className=''>
    <Image src='https://media.fbot.me/c38a4643-6fb8-4035-b9c9-95bda7930900/media/d-advocate.jpg'/>
    </div>
      
      <div className=''>
         <div className='mb-8'>
         <Text className='text-[48px] line-clamp-2'>Get rewarded for sharing your style</Text>
         </div>
       
        <Text>Let a friend know that Burrow is having a sale, and if they spend over $300, we’ll give you a $50 Amazon gift card. They save, you earn, everyone wins.</Text>
        <div className='my-4'>
          
            <form onSubmit={handlesubmit}>
     
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
                   <Text>Send your friends an Mobile Number</Text>
             <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                  

                  />
                  <Input type="text" placeholder="Enter Mobile Number" name='phonenum' value={obj.phonenum} onChange={handlechange} className='p-0' />
                </InputGroup>
              </FormControl>
             <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                  />
                  <Textarea type="text" placeholder="Content" name='content' value={obj.content} onChange={handlechange}/>
                </InputGroup>
              </FormControl>
              <Button    
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="yellow"
                width="full"
              >
                SEND
              </Button>
            </Stack>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Inviteform
