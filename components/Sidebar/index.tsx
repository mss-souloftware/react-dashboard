import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Image from "next/image";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-20 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-3 py-3 lg:py-3">
        <Link href="/">
          <Image
            width={60}
            height={60}
            src={"/images/logo/logo.svg"}
            alt="Logo"
          />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-o py-4 px-0 lg:mt-0 lg:px-0">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-2.5 justify-center py-4 px-4 font-normal text-2xl text-primary bg-primary bg-opacity-20 duration-300 ease-in-out border-l-4 border-primary"
                    }`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_509_1778)">
                      <path d="M8.25 3H6C4.34315 3 3 4.34315 3 6V8.25C3 9.90685 4.34315 11.25 6 11.25H8.25C9.90685 11.25 11.25 9.90685 11.25 8.25V6C11.25 4.34315 9.90685 3 8.25 3Z" fill="#D6F551" />
                      <path d="M18 3H15.75C14.0931 3 12.75 4.34315 12.75 6V8.25C12.75 9.90686 14.0931 11.25 15.75 11.25H18C19.6568 11.25 21 9.90686 21 8.25V6C21 4.34315 19.6568 3 18 3Z" fill="#D6F551" />
                      <path d="M8.25 12.75H6C4.34315 12.75 3 14.0931 3 15.75V18C3 19.6569 4.34315 21 6 21H8.25C9.90685 21 11.25 19.6569 11.25 18V15.75C11.25 14.0931 9.90685 12.75 8.25 12.75Z" fill="#D6F551" />
                      <path d="M18 12.75H15.75C14.0931 12.75 12.75 14.0931 12.75 15.75V18C12.75 19.6569 14.0931 21 15.75 21H18C19.6568 21 21 19.6569 21 18V15.75C21 14.0931 19.6568 12.75 18 12.75Z" fill="#D6F551" />
                    </g>
                    <defs>
                      <clipPath id="clip0_509_1778">
                        <rect width="18" height="18" fill="white" transform="translate(3 3)" />
                      </clipPath>
                    </defs>
                  </svg>

                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-2.5 justify-center py-4 px-4 font-normal text-2xl"
                    }`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_509_1765)">
                      <path d="M11.9997 8.95933C12.6305 8.95933 13.1419 8.44791 13.1419 7.81707C13.1419 7.18622 12.6305 6.6748 11.9997 6.6748C11.3688 6.6748 10.8574 7.18622 10.8574 7.81707C10.8574 8.44791 11.3688 8.95933 11.9997 8.95933Z" fill="#F2F2F5" />
                      <path d="M18.0001 3.00073H6.00004C4.33227 3.01392 2.99007 4.37492 3.00006 6.04273V15.1702C2.99007 16.8381 4.33216 18.1993 6.00004 18.2129H8.19228L11.0033 20.613C11.5601 21.1218 12.4109 21.1293 12.9765 20.6302L15.8603 18.2122H18C19.6679 18.1986 21.01 16.8374 21 15.1695V6.04273C21.01 4.37492 19.6678 3.01392 18.0001 3.00073ZM12.0001 5.28223C15.4613 5.37374 15.4606 10.515 12.0001 10.6072C8.53882 10.515 8.53956 5.37596 12.0001 5.28223ZM15.1868 15.9067C14.7854 16.0091 14.3771 15.7668 14.2747 15.3654C14.2742 15.3636 14.2738 15.3618 14.2733 15.36C13.8894 14.1043 12.5603 13.3976 11.3046 13.7814C10.5487 14.0125 9.95713 14.6041 9.72604 15.36C9.62124 15.7609 9.21125 16.001 8.81029 15.8962C8.40934 15.7914 8.16925 15.3814 8.27406 14.9805C8.85399 12.9225 10.9925 11.7242 13.0505 12.3042C14.3476 12.6697 15.3613 13.6834 15.7268 14.9805C15.8312 15.385 15.5903 15.7982 15.1868 15.9067Z" fill="#F2F2F5" />
                    </g>
                    <defs>
                      <clipPath id="clip0_509_1765">
                        <rect width="18" height="18" fill="white" transform="translate(3 3)" />
                      </clipPath>
                    </defs>
                  </svg>


                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-2.5 justify-center py-4 px-4 font-normal text-2xl"
                    }`}
                >

                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_509_1770)">
                      <path d="M13.5 8.25V3.345C14.1938 3.607 14.824 4.01348 15.3488 4.5375L17.9618 7.152C18.4864 7.67616 18.8932 8.30617 19.155 9H14.25C14.0511 9 13.8603 8.92098 13.7197 8.78033C13.579 8.63968 13.5 8.44891 13.5 8.25ZM19.5 10.8637V17.25C19.4988 18.2442 19.1033 19.1973 18.4003 19.9003C17.6973 20.6033 16.7442 20.9988 15.75 21H8.25C7.2558 20.9988 6.30267 20.6033 5.59966 19.9003C4.89666 19.1973 4.50119 18.2442 4.5 17.25V6.75C4.50119 5.7558 4.89666 4.80267 5.59966 4.09966C6.30267 3.39666 7.2558 3.00119 8.25 3L11.6363 3C11.7585 3 11.8793 3.00975 12 3.018V8.25C12 8.84674 12.2371 9.41903 12.659 9.84099C13.081 10.2629 13.6533 10.5 14.25 10.5H19.482C19.4902 10.6207 19.5 10.7415 19.5 10.8637ZM15.543 13.7332C15.4059 13.5893 15.2173 13.5057 15.0186 13.5008C14.8198 13.4959 14.6273 13.5701 14.4832 13.707L11.7833 16.2803C11.7111 16.3528 11.6249 16.4099 11.5299 16.4479C11.4348 16.4859 11.3331 16.504 11.2308 16.5012C11.1285 16.4984 11.0278 16.4747 10.9351 16.4315C10.8423 16.3884 10.7593 16.3267 10.6912 16.2502L9.4995 15.1898C9.42593 15.1242 9.34015 15.0737 9.24708 15.0412C9.154 15.0088 9.05545 14.995 8.95704 15.0006C8.7583 15.012 8.57223 15.1019 8.43975 15.2505C8.37415 15.3241 8.32369 15.4098 8.29125 15.5029C8.2588 15.596 8.245 15.6945 8.25064 15.793C8.26204 15.9917 8.35191 16.1778 8.5005 16.3102L9.6585 17.3407C10.0783 17.7606 10.6469 17.9975 11.2406 17.9999C11.8343 18.0023 12.4049 17.77 12.828 17.3535L15.5167 14.793C15.6607 14.6559 15.7443 14.4673 15.7492 14.2686C15.7541 14.0698 15.6799 13.8773 15.543 13.7332Z" fill="#F2F2F5" />
                    </g>
                    <defs>
                      <clipPath id="clip0_509_1770">
                        <rect width="18" height="18" fill="white" transform="translate(3 3)" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className={`group relative flex items-center gap-2.5 justify-center py-4 px-4 font-normal text-2xl"
                    }`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_509_1774)">
                      <path d="M13.5 8.25V3.345C14.1938 3.607 14.824 4.01348 15.3487 4.5375L17.9617 7.152C18.4864 7.67616 18.8932 8.30617 19.155 9H14.25C14.0511 9 13.8603 8.92098 13.7197 8.78033C13.579 8.63968 13.5 8.44891 13.5 8.25ZM19.5 10.8637V17.25C19.4988 18.2442 19.1033 19.1973 18.4003 19.9003C17.6973 20.6033 16.7442 20.9988 15.75 21H8.25C7.2558 20.9988 6.30267 20.6033 5.59966 19.9003C4.89666 19.1973 4.50119 18.2442 4.5 17.25V6.75C4.50119 5.7558 4.89666 4.80267 5.59966 4.09966C6.30267 3.39666 7.2558 3.00119 8.25 3L11.6362 3C11.7585 3 11.8792 3.00975 12 3.018V8.25C12 8.84674 12.2371 9.41903 12.659 9.84099C13.081 10.2629 13.6533 10.5 14.25 10.5H19.482C19.4902 10.6207 19.5 10.7415 19.5 10.8637ZM13.5 17.25C13.5 17.0511 13.421 16.8603 13.2803 16.7197C13.1397 16.579 12.9489 16.5 12.75 16.5H9C8.80109 16.5 8.61032 16.579 8.46967 16.7197C8.32902 16.8603 8.25 17.0511 8.25 17.25C8.25 17.4489 8.32902 17.6397 8.46967 17.7803C8.61032 17.921 8.80109 18 9 18H12.75C12.9489 18 13.1397 17.921 13.2803 17.7803C13.421 17.6397 13.5 17.4489 13.5 17.25ZM15.75 14.25C15.75 14.0511 15.671 13.8603 15.5303 13.7197C15.3897 13.579 15.1989 13.5 15 13.5H9C8.80109 13.5 8.61032 13.579 8.46967 13.7197C8.32902 13.8603 8.25 14.0511 8.25 14.25C8.25 14.4489 8.32902 14.6397 8.46967 14.7803C8.61032 14.921 8.80109 15 9 15H15C15.1989 15 15.3897 14.921 15.5303 14.7803C15.671 14.6397 15.75 14.4489 15.75 14.25Z" fill="#F2F2F5" />
                    </g>
                    <defs>
                      <clipPath id="clip0_509_1774">
                        <rect width="18" height="18" fill="white" transform="translate(3 3)" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
              {/* <!-- Menu Item Dashboard --> */}
            </ul>
          </div>

          {/* <!-- Others Group --> */}

        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
