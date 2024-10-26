"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
        IconBrandX,
                Exchange,
                        ,
                NewSection,
        IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export const Dock = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Projects",
      // find project icons
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "About",
      // find about section icon
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/AvadhootSmart",
    },
  ];
  return (
    <FloatingDock
      desktopClassName="bg-zinc-800 w-fit absolute fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
      items={links}
    />
  );
};
