import { Fragment, useState, useEffect } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { deepPurple } from "@mui/material/colors";
import { navigation } from "./Navigation";
import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie, getproducts, loadUserFromCookies } from "../redux/User/actions";
import Profile from "../Profile/Profile";
import Login from "../Profile/Login";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { useCallback } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userPro = useSelector((state) => state.data.user);
  const Token = localStorage.getItem("Token");
  const CartQty = useSelector((state) => state.data.cartTotalQty);
  const Page = useSelector((state) => state.data.Page);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("top");
  const [search,setSearch]=useState("")

  const handleUserClick = (event) => {
    navigate("/Profile");
  };

  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };

  const handleClose = () => {
    setOpenAuthModal(false);
  };

  const [avatarH, setAvatarH] = useState(false);
  const handleCategoryClick = (category, section, item, close) => {
    // navigate(`/${category.id}/${section.id}/${item.id}`);
    navigate(`/product`);
    close();
  };

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearch = useCallback(debounce((query) => {
    dispatch(getproducts(Page, query));
  }, 500), [dispatch]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(getproducts(Page, search));
      navigate(`/product?search=${search}`);
    }
  };

  useEffect(() => {
    dispatch(getproducts(Page, search));
  }, [dispatch]);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* 2line up mine 60-83 skipped*/}
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  {/* {relative} btn*/}
                  <button
                    type="button"
                    className=" -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    {/* <span className="absolute -inset-0.5" /> */}
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium border-none"
                            )
                          }
                        >
                          {/* after this 104-225 skipped*/}
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={'/product'}
                                     // href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="/"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="/" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />

                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        {/* Started working */}
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        {/*removed {max - w - 7xl px-4 sm:px-6 lg:px-8} */}
        <nav aria-label="Top" className="mx-auto ">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-11">
              <button
                type="button"
                // relative removed he
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <span className="sr-only">Your Company</span>
                <img
                  onClick={() => {
                    navigate("/");
                  }}
                  className="h-8 w-8 mr-2"
                  src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
                  width="300"
                  alt=""
                />
                {/* </Link> */}
              </div>

              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            // href={item.href}
                                            href={'/product'}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    {/*303- 370dir */}
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <p
                                                  onClick={() =>
                                                    handleCategoryClick(
                                                      category,
                                                      section,
                                                      item,
                                                      close
                                                    )
                                                  }
                                                  className="cursor-pointer hover:text-gray-800"
                                                >
                                                  {item.name}
                                                  
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <div>
                    <CgProfile
                      className="text-blue-600 text-[30px] cursor-pointer"
                      onClick={handleUserClick}
                    />
                  </div>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <p
                    className="p-2 text-gray-400 items-center flex gap-4 hover:text-gray-500"
                    onClick={onOpen}
                  >
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                    <span className="text-[20px]">Search</span>

                    <Drawer
                      placement={placement}
                      onClose={onClose}
                      isOpen={isOpen}
                    >
                      <DrawerOverlay />
                      <DrawerContent>
                        <DrawerBody>
                          <InputGroup>
                            <InputLeftElement pointerEvents="none">
                              <MagnifyingGlassIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </InputLeftElement>
                            <Input
                              type="tel"
                              placeholder="Search"
                              border="none"
                              className="text-[20px]"
                              onChange={handleChange}
                              onKeyPress={handleKeyPress}
                            />
                          </InputGroup>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </p>
                </div>

                {/* Cart */}
                <div
                  className="ml-4 flow-root lg:ml-6"
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <button className="group -m-2 flex items-center p-2">
                    <TiShoppingCart className="text-blue-600 text-[30px]" />
                    <span className="ml-[2px] text-[16px] font-medium text-gray-700 group-hover:text-gray-800">
                      {CartQty}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}






// import { Fragment, useState, useEffect, useCallback } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { useNavigate } from "react-router-dom";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerContent,
//   DrawerOverlay,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { useDispatch } from "react-redux";
// import { getproducts } from "../redux/User/actions";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   // Debounce function to limit search calls
//   const debounce = (func, delay) => {
//     let timeout;
//     return (...args) => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => {
//         func(...args);
//       }, delay);
//     };
//   };

//   const handleSearch = useCallback(
//     debounce((query) => {
//       dispatch(getproducts(1, query)); // Fetch the first page of the searched product
//     }, 500),
//     [dispatch]
//   );

//   const handleChange = (e) => {
//     setSearch(e.target.value);
//     handleSearch(e.target.value);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       // Navigate to the product page and pass the search query as a URL parameter
//       navigate(`/product?search=${search}`);
//     }
//   };

//   return (
//     <div className="bg-white">
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
//           {/* Your Dialog content */}
//         </Dialog>
//       </Transition.Root>

//       <header className="relative bg-white">
//         <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
//           Get free delivery on orders over $100
//         </p>

//         <nav aria-label="Top" className="mx-auto">
//           <div className="border-b border-gray-200">
//             <div className="flex h-16 items-center px-11">
//               <div className="ml-auto flex items-center">
//                 <div className="flex lg:ml-6">
//                   <p
//                     className="p-2 text-gray-400 items-center flex gap-4 hover:text-gray-500"
//                     onClick={onOpen}
//                   >
//                     <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
//                     <span className="text-[20px]">Search</span>

//                     <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
//                       <DrawerOverlay />
//                       <DrawerContent>
//                         <DrawerBody>
//                           <InputGroup>
//                             <InputLeftElement pointerEvents="none">
//                               <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
//                             </InputLeftElement>
//                             <Input
//                               type="text"
//                               placeholder="Search"
//                               border="none"
//                               className="text-[20px]"
//                               value={search}
//                               onChange={handleChange}
//                               onKeyPress={handleKeyPress}
//                             />
//                           </InputGroup>
//                         </DrawerBody>
//                       </DrawerContent>
//                     </Drawer>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

