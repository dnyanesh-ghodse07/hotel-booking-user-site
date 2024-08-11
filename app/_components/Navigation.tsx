import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="z-10 text-xl">

    <ul className="flex gap-16 items-center">
      <li className="hover:text-accent-400 transition-colors">
        <Link href="cabins">Cabins</Link>
      </li>
      <li className="hover:text-accent-400 transition-colors">
        <Link href="account">Account</Link>
      </li>
      <li className="hover:text-accent-400 transition-colors">
        <Link href="about">About</Link>
      </li>
    </ul>
    </nav>
  );
};

export default Navigation;
