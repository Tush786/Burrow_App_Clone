import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  ModalFooter,
  ModalCloseButton,
  ModalOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Account from "./account/Account";
import Inviteform from "./Inviteform";
import Order from "./orderComp/Order";

function Profile() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <div className="lg:w-[80%] sm:w-[98%] md:w-[98%]  m-auto mt-4 ">
      <Tabs
        isFitted
        variant="enclosed"
        index={selectedTabIndex}
        onChange={(index) => setSelectedTabIndex(index)}
      >
        <TabList mb="1em" className="md:w-[96%] lg:w-[97%] sm:w-[98%] m-auto">
          <Tab bg="blue.100" _selected={{ color: "blue.500", bg: "green.100" }}>
            ACCOUNT
          </Tab>
          <Tab
            bg="blue.100"
            _selected={{ color: "green.500", bg: "green.100" }}
          >
            ORDER HISTORY
          </Tab>
          <Tab
            bg="blue.100"
            _selected={{ color: "green.500", bg: "green.100" }}
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          >
            INVITE FRIENDS
          </Tab>
          <Tab
            bg="blue.100"
            _selected={{ color: "green.500", bg: "green.100" }}
          >
            LOG OUT
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Account />
          </TabPanel>
          <TabPanel>
            <Order />
          </TabPanel>
          <TabPanel>
            <Inviteform />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Profile;
