import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserContext } from "../../context/userContext.js";
import "./Profile.css"; // Import your CSS file

export default function Profile({ changeLayout }) {
  const { logOutUser, user } = useContext(UserContext);

  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="menu-button">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src={user.photoURL}
            alt={user.displayName}
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="menu-items">
          <p
            className="menu-item"
            onClick={changeLayout}
          >
            Change Layout
          </p>
          <p
            onClick={logOutUser}
            className="menu-item"
          >
            Log Out
          </p>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
