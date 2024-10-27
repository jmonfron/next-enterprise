'use client'
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navbar = cva(
    [
        "flex",
        "items-center",
        "justify-between",
        "p-6",
        "transition-colors",
        "delay-50",
    ],
    {
        variants: {
            bgColor: {
                white: ["bg-white"],
                dark: ["bg-gray-800", "text-white"],
            },
        },
        defaultVariants: {
            bgColor: "white",
        },
    }
);

const linkStyles = cva(["text-sm", "font-semibold"], {
    variants: {
        intent: {
            primary: ["text-gray-900", "hover:text-primary-400"],
            secondary: ["text-gray-400", "hover:text-primary-200"],
        },
    },
    defaultVariants: {
        intent: "primary",
    },
});

interface NavbarProps extends VariantProps<typeof navbar> {
    className?: string;
}

const navigation = [
    { name: "Accueil", sectionId: "accueil" },
    { name: "Nos prestations", sectionId: "prestations" },
    { name: "À propos", sectionId: "apropos" },
    { name: "Nous contacter", sectionId: "contact" },
];

export default function Navbar({ className, bgColor }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <header className={twMerge(navbar({ bgColor, className }))}>
            <nav aria-label="Global" className="flex max-w-7xl mx-auto w-full items-center">
                <a href="#" className="flex flex-1 -m-1.5 p-1.5">
                    <span className="sr-only">Serrurier</span>
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="h-8 w-auto"
                    />
                </a>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div className={`hidden lg:flex lg:gap-x-12`}>
                    {navigation.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.sectionId)}
                            className={twMerge(linkStyles({ intent: "primary" }))}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </nav>

            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Serrurier</span>
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={50}
                                height={50}
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => {
                                            scrollToSection(item.sectionId);
                                            setMobileMenuOpen(false);
                                        }}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-primary-50"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}