import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../public/Logo1.svg";
import JustLogo from "../../public/OnlyLogo.svg";
import Link from "next/link";
import Image from "next/image";

export default function Example() {
  return (
    <Disclosure as="nav" className=" w-full z-20 ">
      {({ open }) => (
        <section>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 font-Bitter">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <Link href="/">
                  <div className="flex-shrink-0 flex items-center">
                    <Image
                      priority="true"
                      quality={50}
                      className="block relative lg:hidden h-14 w-auto cursor-pointer"
                      src={JustLogo}
                      alt="Only logo"
                    />

                    <div>
                      <Image
                        priority="true"
                        quality={50}
                        className="hidden relative lg:block  h-14 w-auto cursor-pointer"
                        src={Logo}
                        alt="Logo with text"
                      />
                    </div>
                  </div>
                </Link>

                <nav className="hidden sm:flex sm:ml-6">
                  <div className="flex items-center space-x-4">
                    <Link
                      href="/"
                      className=" px-2 cursor-pointer text-lg font-medium link-underline link-underline-black text-black hover:text-primary "
                    >
                      <span>Domů</span>
                    </Link>

                    <Link
                      href="/about"
                      className=" px-2 link text-lg font-medium link-underline link-underline-black text-black hover:text-primary "
                    >
                      <span>O nás</span>
                    </Link>
                    <Link
                      href="/rezervace"
                      className=" px-2 cursor-pointer text-lg font-medium link-underline link-underline-black text-black hover:text-primary "
                    >
                      <span>Rezervace</span>
                    </Link>
                    <button
                      onClick={() => {
                        window.scrollTo({
                          top: document.body.scrollHeight,
                          behavior: "smooth",
                        });
                      }}
                      className=" px-2 cursor-pointer text-lg font-medium link-underline link-underline-black text-black hover:text-primary "
                    >
                      Kontakty
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <Disclosure.Panel className=" sm:hidden">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {/* {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))} */}
              <Link
                href="/"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Domů
              </Link>
              <Link
                href="/rezervace"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Rezervace
              </Link>
              <Link
                href="/about"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                O nás
              </Link>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Kontakty
              </button>
            </nav>
          </Disclosure.Panel>
        </section>
      )}
    </Disclosure>
  );
}
