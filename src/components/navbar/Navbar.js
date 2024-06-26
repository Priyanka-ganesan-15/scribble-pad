import menuIcon from "../../assets/icons/menu.svg";
import XIcon from "../../assets/icons/XIcon.js";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Profile from "./Profile.js";
import NavLinks from "./NavLinks.js";
import SearchField from "./searchField/SearchField.js";
import logoImage from "../../assets/images/logo.jpg"; // Replace with your logo image path

export default function Navbar(props) {
    const { changeLayout, setQuery, query, setPathName } = props;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

    const handleSidebarToggle = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-40 overflow-y-auto bg-black bg-opacity-75"
                        onClose={setSidebarOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Panel className="absolute top-0 right-0 h-full flex  flex-col max-w-xs w-full bg-black">
                                <div className="p-4 flex justify-end">
                                    <button
                                        type="button"
                                        className="text-white hover:text-gray-300 focus:outline-none"
                                        onClick={() => {
                                            setSidebarOpen(false);
                                            handleSidebarToggle();
                                        }}
                                    >
                                        <span className="sr-only">
                                            Close sidebar
                                        </span>
                                        <XIcon className="h-6 w-6" />
                                    </button>
                                </div>
                                <img
                                    src={logoImage}
                                    alt="Logo"
                                    className="h-10 w-10 mx-auto"
                                />
                                <div className="mt-5 flex-1 overflow-y-auto">
                                    <nav className="px-2 space-y-1">
                                        <NavLinks
                                            setSidebarOpen={setSidebarOpen}
                                            setQuery={setQuery}
                                            setPathName={setPathName}
                                            collapsed={sidebarCollapsed}
                                        />
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </Dialog>
                </Transition.Root>
                <div className={`hidden md:flex md:flex-col md:fixed md:inset-y-0 md:ml-12 mt-20 mb-20 rounded-full  bg-black ${sidebarCollapsed ? "md:w-16" : "md:w-21"}`}>
                    {/* Sidebar component */}
                    <div className="flex flex-col flex-grow pt-5 rounded-full bg-black">
                        <button
                            type="button"
                            className="text-white hover:text-gray-300 focus:outline-none mb-5"
                            onClick={handleSidebarToggle}
                        >
                            <XIcon className="h-6 w-6 mx-auto" />
                        </button>
                        <img
                            src={logoImage}
                            alt="Logo"
                            className={`mx-auto ${sidebarCollapsed ? "h-8 w-8" : "h-40 w-40"}`}
                        />
                        <div className="mt-5 flex-1 flex flex-col">
                            <nav className=" px-2 pb-4 space-y-1">
                                <NavLinks
                                    setSidebarOpen={setSidebarOpen}
                                    setQuery={setQuery}
                                    setPathName={setPathName}
                                    collapsed={sidebarCollapsed}
                                />
                            </nav>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col flex-1 w-90 ${sidebarCollapsed ? "md:pl-20" : "md:pl-20"} md:ml-20`}>
                    {/* <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white "> */}
                        <button
                            type="button"
                            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <img
                                src={menuIcon}
                                alt="menu icon"
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>
                        <div className="flex-1 px-4 flex justify-between md:mt-6">
                            <div className="flex-1 flex">
                                <SearchField setQuery={setQuery} query={query} />
                            </div>
                            <div className="ml-4 flex items-center md:ml-6">
                                {/* Profile dropdown */}
                                <Profile changeLayout={changeLayout} />
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    );
}
