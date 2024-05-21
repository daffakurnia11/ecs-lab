"use client";

import Image from "next/image";
import React from "react";
import Typography from "../Typography";
import classNames from "classnames";
import Button from "../Button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="bg-secondary-900 sm:rounded-b-[20px] rounded-b-[8px] relative z-20">
      <Menu>
        {({ open }) => (
          <>
            <div className="flex items-center justify-between container mx-auto py-5 px-5 relative z-20 bg-secondary-900 rounded-b-[8px]">
              <div className="sm:w-[88px] w-[62.12px] sm:h-[50px] h-[35px]">
                <Image
                  src={"/img/logo.png"}
                  alt="ECS Full Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="sm:flex hidden items-center justify-between gap-12">
                <Link href={"/"}>
                  <Typography.Paragraph
                    className={classNames(
                      "text-2xl",
                      pathname === "/"
                        ? "text-primary-700 font-semibold"
                        : "text-white font-normal"
                    )}
                  >
                    Home
                  </Typography.Paragraph>
                </Link>
                <Link href={"/about"}>
                  <Typography.Paragraph
                    className={classNames(
                      "text-2xl",
                      pathname === "/about"
                        ? "text-primary-700 font-semibold"
                        : "text-white font-normal"
                    )}
                  >
                    About Us
                  </Typography.Paragraph>
                </Link>
                <Link href={"/interest"}>
                  <Typography.Paragraph
                    className={classNames(
                      "text-2xl",
                      pathname === "/about"
                        ? "text-primary-700 font-semibold"
                        : "text-white font-normal"
                    )}
                  >
                    Interest
                  </Typography.Paragraph>
                </Link>
              </div>
              <Link href={"/contact"}>
                <Button.Primary className="sm:block hidden text-secondary-900 font-semibold">
                  Approach Us
                </Button.Primary>
              </Link>
              <MenuButton className="sm:hidden block">
                {open ? (
                  <FiX className="text-primary-700 text-2xl" />
                ) : (
                  <FiMenu className="text-primary-700 text-2xl" />
                )}
              </MenuButton>
            </div>
            <Transition
              enter="transition ease-out duration-300"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transition ease-in duration-300"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              <MenuItems className="flex flex-col gap-3 px-5 py-5 absolute bg-secondary-900 w-full -mt-2 z-10 rounded-b-[12px]">
                <Link href={"/"}>
                  <Typography.Paragraph
                    className={classNames(
                      "text-2xl",
                      pathname === "/"
                        ? "text-primary-700 font-semibold"
                        : "text-white font-normal"
                    )}
                  >
                    Home
                  </Typography.Paragraph>
                </Link>
                <Link href={"/about"}>
                  <Typography.Paragraph
                    className={classNames(
                      "text-2xl",
                      pathname === "/about"
                        ? "text-primary-700 font-semibold"
                        : "text-white font-normal"
                    )}
                  >
                    About Us
                  </Typography.Paragraph>
                </Link>
                <Link href={"/interest"}>
                  <Typography.Paragraph
                    className={classNames(
                      "text-2xl",
                      pathname === "/about"
                        ? "text-primary-700 font-semibold"
                        : "text-white font-normal"
                    )}
                  >
                    Interest
                  </Typography.Paragraph>
                </Link>
                <Link href={"/contact"}>
                  <Button.Primary
                    className="text-secondary-900 font-semibold"
                    size="sm"
                  >
                    Approach Us
                  </Button.Primary>
                </Link>
              </MenuItems>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
