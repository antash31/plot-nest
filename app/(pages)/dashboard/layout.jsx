"use client";
import { AppShell, Burger, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { ChevronRight, LandPlot, MapPinHouse } from "lucide-react";

const DashboardLayout = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header p={"sm"}>
        <div className="flex items-center  h-full">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <p className="font-semibold text-lg">Plot Nest</p>
        </div>
      </AppShell.Header>

      <AppShell.Navbar p="sm">
        <nav className="flex flex-col gap-2">
          <NavLink
            href="/dashboard/buy"
            label="Buy"
            leftSection={<MapPinHouse />}
            rightSection={<ChevronRight />}
            variant="active-subtle"
            active
          />
          <NavLink
            href="/dashboard/sell"
            label="Sell"
            leftSection={<LandPlot />}
            rightSection={<ChevronRight />}
            variant="active-subtle"
            active
          />
        </nav>
      </AppShell.Navbar>

      <AppShell.Main p={"sm"}>
        <main className={`ml-64 mt-14`}>{children}</main>
      </AppShell.Main>
    </AppShell>
  );
};

export default DashboardLayout;
