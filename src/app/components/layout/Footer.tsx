"use client";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-500 text-sm py-5 px-4">
      <div className="max-w-screen-lg mx-auto text-center">
        &copy; {new Date().getFullYear()} <strong>TaggiPay</strong> — Todos los derechos reservados.
        <br className="block sm:hidden" />
        <span className="inline-block mt-2 sm:mt-0 sm:ml-1">
          Hecho con <span role="img" aria-label="amor" className="text-red-500">❤</span> por{" "}
          <a
            href="https://wa.link/ryp5wu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Ramiro Ls
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;