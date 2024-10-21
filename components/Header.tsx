"use client";
import NextImage from "next/image";
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Divider,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      isBordered
      maxWidth="2xl"
      onMenuOpenChange={setIsMenuOpen}
      className="py-4 w-full !bg-background"
    >
      <a href="/">
        <NavbarBrand>
          <Image
            src="/mutts.png"
            width={600}
            height={600}
            className="max-w-16 max-h-16 aspect-square"
            alt="Maia Mutts Logo"
            removeWrapper
            as={NextImage}
          />
        </NavbarBrand>
      </a>
      <NavbarContent
        id="nav-link"
        className="hidden lg:flex gap-4"
        justify="center"
      >
        <Dropdown className="bg-content3  text-white">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                id="nav-link"
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white text-medium rounded-none"
                radius="sm"
                endContent={<IoIosArrowDown />}
                variant="light"
              >
                Equipas
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="team"
            className="w-full px-6 py-4"
            itemClasses={{
              base: ["data-[hover=true]:bg-transparent"],
            }}
          >
            <DropdownItem
              key="autoscaling"
              className="cursor-auto w-full flex-auto"
            >
              <div className="w-max flex flex-row gap-8 items-start text-white">
                <div className="w-max flex flex-col gap-8 items-start">
                  <h1 id="h-txt" className="text-2xl w-max">
                    Mutts - Tackle
                  </h1>
                  <div className="grid grid-cols-2 w-full items-center justify-center gap-6 gap-x-24">
                    <Link
                      id="nav-link"
                      className="text-white hover:opacity-80"
                      href="/tackle/roster"
                    >
                      Roster
                    </Link>
                    <Link
                      id="nav-link"
                      className="text-white hover:opacity-80"
                      href="/tackle/schedule"
                    >
                      Calendário
                    </Link>
                    <Link
                      id="nav-link"
                      className="text-white hover:opacity-80"
                      href="/tackle/results"
                    >
                      Resultados
                    </Link>
                    <Link
                      id="nav-link"
                      className="text-white hover:opacity-80"
                      href="/tackle/standings"
                    >
                      Classificação
                    </Link>
                  </div>
                </div>
                <Divider
                  className="h-32 self-center w-[1px] bg-white opacity-80"
                  orientation="vertical"
                />
                <div className="w-max flex flex-col gap-8 items-start">
                  <h1 id="h-txt" className="text-2xl w-max">
                    Mutts - Flag
                  </h1>
                  <div className="grid grid-cols-2 w-full items-center justify-center gap-6 gap-x-24">
                    <Link
                      id="nav-link"
                      className="text-white hover:opacity-80"
                      href="/flag/roster"
                    >
                      Roster
                    </Link>
                    <Link
                      id="nav-link"
                      className="text-white hover:opacity-80"
                      href="/flag/schedule"
                    >
                      Calendário
                    </Link>
                    <Link
                      id="nav-link"
                      className="text-white hover:opacity-80"
                      href="/flag/results"
                    >
                      Resultados
                    </Link>
                    <Link
                      id="nav-link"
                      className="text-white hover:opacity-80"
                      href="/flag/standings"
                    >
                      Classificação
                    </Link>
                  </div>
                </div>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link className="text-white" href="/news">
            Notícias
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/about">
            Sobre Nós
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="lg:hidden" justify="end">
        <p className="text-white" id="nav-link">
          Menu
        </p>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-white"
        />
      </NavbarContent>
      <NavbarMenu className="mt-8 bg-content3 pt-12 px-12">
        <NavbarMenuItem className="z-50">
          <div className="w-full flex flex-col gap-8 items-start">
            <div className="w-max flex flex-col gap-8 items-start">
              <h1 id="h-txt" className="text-2xl w-max">
                Mutts - Tackle
              </h1>
              <div className="grid sm:grid-cols-2 w-full items-center justify-center gap-6 sm:gap-x-24">
                <Link
                  id="nav-link"
                  className="text-black hover:text-primary"
                  href="/tackle/roster"
                >
                  Roster
                </Link>
                <Link
                  id="nav-link"
                  className="text-black hover:text-primary"
                  href="/tackle/schedule"
                >
                  Calendário
                </Link>
                <Link
                  id="nav-link"
                  className="text-black hover:text-primary"
                  href="/tackle/results"
                >
                  Resultados
                </Link>
                <Link
                  id="nav-link"
                  className="text-black hover:text-primary"
                  href="/tackle/standings"
                >
                  Classificação
                </Link>
              </div>
            </div>
            <Divider
              className="w-full self-start h-[1px]"
              orientation="horizontal"
            />
            <div className="w-max flex flex-col gap-8 items-start">
              <h1 id="h-txt" className="text-2xl w-max">
                Mutts - Flag
              </h1>
              <div className="grid sm:grid-cols-2 w-full items-center justify-center gap-6 sm:gap-x-24">
                <Link
                  id="nav-link"
                  className="text-black hover:text-primary"
                  href="/flag/roster"
                >
                  Roster
                </Link>
                <Link
                  id="nav-link"
                  className="text-black hover:text-primary"
                  href="/flag/schedule"
                >
                  Calendário
                </Link>
                <Link
                  id="nav-link"
                  className="text-black hover:text-primary"
                  href="/flag/results"
                >
                  Resultados
                </Link>
                <Link
                  id="nav-link"
                  className="text-black hover:text-primary"
                  href="/flag/standings"
                >
                  Classificação
                </Link>
              </div>
            </div>
            <Divider
              className="w-full self-start h-[1px]"
              orientation="horizontal"
            />
            <Link id="nav-link" className="text-black" href="/news">
              Notícias
            </Link>
            <Divider
              className="w-full self-start h-[1px]"
              orientation="horizontal"
            />
            <Link id="nav-link" className="text-black" href="/about">
              Sobre Nós
            </Link>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
