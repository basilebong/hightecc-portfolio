"use client";

import { useState } from "react";

import { MenuIcon } from "lucide-react";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";

import styles from "./mobile-menu.module.css";

type NavItem = { href: string; label: string };

type MobileMenuProps = {
  navItems: ReadonlyArray<NavItem>;
  ctaLabel: string;
  menuLabel: string;
};

export function MobileMenu({ navItems, ctaLabel, menuLabel }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button type="button" variant="ghost" size="icon" aria-label={menuLabel}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{menuLabel}</SheetTitle>
        </SheetHeader>
        <nav className={styles.links} aria-label={menuLabel}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link} onClick={close}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.footer}>
          <LocaleSwitcher />
          <Button asChild variant="outline">
            <Link href="/#contact" onClick={close}>
              {ctaLabel}
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
