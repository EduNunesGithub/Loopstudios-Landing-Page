'use client';

import React from "react";
import {
	Dialog,
	Transition
} from "@headlessui/react";
import {
	Menu,
	X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import imgLogo from "../../../../../public/WEBP/loopstudios.webp";

type Nav = {
	href: string;
	name: string;
};

const navs: Nav[] = [
	{ href: "#", name: "About" },
	{ href: "#", name: "Careers" },
	{ href: "#", name: "Events" },
	{ href: "#", name: "Products" },
	{ href: "#", name: "Support" }
];

export const Mobile = () => {
	const [show, setShow] = React.useState<boolean>(false);

	const scrollbar = typeof window !== "undefined" ? window.innerWidth - document.documentElement.clientWidth : 0;

	return (<>
		<button
			className={twMerge(
				"sm:flex",
				"md:hidden"
			)}
			onClick={() => setShow(true)}
		>
			<Menu />
		</button>

		<Transition
			as={React.Fragment}
			show={show}
		>
			<Dialog
				className="sm:relative sm:z-50"
				onClose={() => setShow(false)}
			>
				<div
					className="sm:bg-[var(--scrollbar-track)] sm:flex sm:h-full sm:fixed sm:right-0 sm:top-0 sm:z-10"
					style={{ width: scrollbar }}
				/>

				<Transition.Child
					as={React.Fragment}
					enter={twMerge("sm:ease-emphasized-decelerate sm:duration-emphasized-decelerate sm:transform-gpu sm:transition-[opacity,transform]")}
					enterFrom={twMerge("sm:scale-90 sm:opacity-0 sm:translate-y-1/4")}
					enterTo={twMerge("sm:scale-100 sm:opacity-100 sm:translate-y-0")}
					leave={twMerge("sm:ease-emphasized-accelerate sm:duration-emphasized-accelerate sm:transform-gpu sm:transition-[opacity,transform]")}
					leaveFrom={twMerge("sm:scale-100 sm:opacity-100 sm:translate-y-0")}
					leaveTo={twMerge("sm:scale-90 sm:opacity-0 sm:translate-y-1/4")}
				>
					<div
						className="sm:fixed sm:flex sm:inset-0 sm:items-center sm:justify-end"
						style={{
							paddingRight: show === true ?
								scrollbar :
								0
						}}
					>
						<Dialog.Panel className="sm:bg-black sm:gap-10 sm:grid sm:grid-cols-1 sm:grid-rows-[auto_1fr] sm:h-full sm:max-w-full sm:overflow-y-auto sm:px-6 sm:py-10 sm:relative sm:w-full">
							<Dialog.Title className="sm:absolute sm:h-0 sm:left-0 sm:opacity-0 sm:overflow-hidden sm:top-0 sm:w-0">
								Navigation Dialog
							</Dialog.Title>

							<div className="sm:flex sm:gap-6 sm:items-center sm:justify-between sm:w-full">
								<Link
									className="sm:flex"
									href="/"
								>
									<Image
										alt="Loopstudios"
										className="sm:h-6 sm:object-contain sm:w-auto"
										height={24}
										placeholder="blur"
										src={imgLogo}
										width={150}
									/>
								</Link>

								<button
									aria-label="Close navigation dialog"
									className="sm:flex sm:h-5 sm:items-center sm:justify-center sm:text-white sm:w-5"
									onClick={() => setShow(false)}
								>
									<X className="sm:h-5 sm:stroke-[0.125rem] sm:w-5" />
								</button>
							</div>

							<div className="sm:flex sm:h-full sm:items-center sm:w-full">
								<nav className="sm:flex sm:justify-start sm:w-full">
									<ul className="sm:flex sm:flex-col sm:gap-6 sm:items-start sm:w-full">
										{navs.map(({
											href,
											name
										}, index) => (
											<li
												className="sm:flex"
												key={index}
											>
												<Link
													className="sm:font-josefin-sans sm:font-light sm:text-[#FFFFFF] sm:text-2xl sm:leading-[1.5625rem] sm:uppercase"
													href={href}
												>
													{name}
												</Link>
											</li>
										))}
									</ul>
								</nav>
							</div>
						</Dialog.Panel>
					</div>
				</Transition.Child>
			</Dialog>
		</Transition>
	</>);
};