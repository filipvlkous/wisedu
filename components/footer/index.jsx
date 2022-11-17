/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";
const navigation = {
  main: [
    { name: "Domů", href: "/" },
    { name: "Rezervace", href: "/rezervace" },
    { name: "O nás", href: "/about" },
  ],
};

export default function Example() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-base text-gray-500 hover:text-primary transition duration-200"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2022{" "}
          <a
            href="https://dreamdesigns-82f54.web.app/"
            className=" text-blue-400 font-bold"
          >
            DreamDesigns
          </a>
          , Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
}
