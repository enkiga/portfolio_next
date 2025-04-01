import Link from "next/link";
import { useRouter } from "next/router";

const NAVBAR_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  console.log("Current Path:", currentPath); // Debugging line

  return (
    <nav className="w-full border-secondary border-b p-2 flex justify-end gap-4 text-base font-mono fixed top-0 bg-background z-10">
      {NAVBAR_LINKS.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`font-medium hover:text-secondary transition duration-300 ${
            currentPath === link.href ? "text-primary" : "text-text"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
