"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Phone, Castle, Bug } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import logo from "@/public/vet-logo.webp";
import logoText from "@/public/logo-text.svg";

const routeMap: Record<string, { label: string; icon: React.ReactNode }> = {
  "/": {
    label: "",
    icon: null,
  },
  "/kapcsolat": { label: "Kapcsolat", icon: <Phone className="h-3.5 w-3.5" /> },
  "/kastelydomb": {
    label: "Kastélydomb",
    icon: <Castle className="h-3.5 w-3.5" />,
  },
  "/parazitologia": {
    label: "Parazitológia",
    icon: <Bug className="h-3.5 w-3.5" />,
  },
};

export const Navbar = () => {
  const pathname = usePathname();
  const currentRoute = routeMap[pathname];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center border-none bg-white px-4 shadow-sm backdrop-blur-md md:px-8">
      {/* Logo */}
      <Link href="/" className="flex shrink-0 items-center gap-0">
        <Image
          src={logo}
          alt="logo"
          width={150}
          height={65}
          className="h-14 w-auto object-contain md:h-14 md:w-14"
        />
        <Image
          src={logoText}
          alt="logo text"
          width={150}
          height={25}
          className="h-7 w-auto object-contain md:h-7"
        />
      </Link>

      {/*/!* Breadcrumb *!/*/}
      {/*{currentRoute && (*/}
      {/*  <Breadcrumb>*/}
      {/*    <BreadcrumbList>*/}
      {/*      {pathname === "/" ? (*/}
      {/*        <BreadcrumbItem>*/}
      {/*          <BreadcrumbPage className="flex items-center gap-1.5">*/}
      {/*            {currentRoute.icon}*/}
      {/*            {currentRoute.label}*/}
      {/*          </BreadcrumbPage>*/}
      {/*        </BreadcrumbItem>*/}
      {/*      ) : (*/}
      {/*        <>*/}
      {/*          <BreadcrumbItem>*/}
      {/*            <BreadcrumbLink asChild>*/}
      {/*              <Link href="/" className="flex items-center gap-1.5">*/}
      {/*                <LayoutGrid className="h-3.5 w-3.5" />*/}
      {/*                Válasszon rendelőt*/}
      {/*              </Link>*/}
      {/*            </BreadcrumbLink>*/}
      {/*          </BreadcrumbItem>*/}
      {/*          <BreadcrumbSeparator />*/}
      {/*          <BreadcrumbItem>*/}
      {/*            <BreadcrumbPage className="flex items-center gap-1.5">*/}
      {/*              {currentRoute.icon}*/}
      {/*              {currentRoute.label}*/}
      {/*            </BreadcrumbPage>*/}
      {/*          </BreadcrumbItem>*/}
      {/*        </>*/}
      {/*      )}*/}
      {/*    </BreadcrumbList>*/}
      {/*  </Breadcrumb>*/}
      {/*)}*/}
    </nav>
  );
};
