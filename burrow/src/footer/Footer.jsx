"use client";

import { Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { Button, Footer } from "flowbite-react";
import { useState } from "react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdCopyright } from "react-icons/md";

function FooterComp() {
    const [arr,setArr]=useState()
  return (
    <>
           <div className="lg:flex lg:flex-row sm:flex-col lg:justify-between sm:justify-center lg:items-center bg-[#514f4d] h-[150px] lg:px-5 sm:px-0 py-10">
        <div className="w-[450px]">
        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type='text' 
      
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem' className="mr-4">
        <Button h='1.75rem' size='sm' >
          Subscribe
        </Button>
      </InputRightElement>
    </InputGroup>
    </div>
    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-[#fff]"/>
            <Footer.Icon href="#" icon={BsInstagram} className="text-[#fff]"/>
            <Footer.Icon href="#" icon={BsTwitter} className="text-[#fff]"/>
            <Footer.Icon href="#" icon={BsGithub} className="text-[#fff]"/>
            <Footer.Icon href="#" icon={BsDribbble} className="text-[#fff]" />
          </div>
        </div>
 
    <Footer className="bg-[#383633] text-[#fff]">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div className="text-[#fff]">
            <Footer.Title title="Shopping Services" className="text-[#fff]" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-[#fff]">Schedule Consultation</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Showrooms</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Trade Program</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Outlet</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="About" className="text-[#fff]"/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-[#fff]">Our Story</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Reviews</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Careers</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Financing</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Patents</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Our Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Resources" className="text-[#fff]"/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-[#fff]">Look Up Order Status</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Assembly Instructions</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Returns</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Shipping &amp; Delivery</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">FAQ</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Refer a Friend</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Contact Customer Experience" className="text-[#fff]" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-[#fff]">Email: support@burrow.com</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Hours:</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Monday to Friday — 10a to 6p EST</Footer.Link>
              <Footer.Link href="#" className="text-[#fff]">Saturday to Sunday — 10a to 2p EST</Footer.Link>
              
            </Footer.LinkGroup>
          </div>
        </div>
     

        <div className="w-full bg-[#383633] px-4 py-6 ">
          {/* <Footer.Copyright href="#" by="burrow™" year={2024} /> */}
          <span className="flex justify-start items-center text-[12px]"><MdCopyright/>burrow 2024</span>
         <Text className="text-[12px]">Terms-Accessibility-Sitemap-Privacy-Do not sell my personal information</Text>
         <Text className="text-[12px]">This site may collect, use and disclose personal information. Please refer to our Privacy Policy for more information.</Text>
         </div>
          
        
      </div>
    </Footer>
    </>
  );
}

export default FooterComp
