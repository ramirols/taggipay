"use client"

export function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-8 text-sm text-gray-500">
      &copy; {new Date().getFullYear()} TaggiPay - Todos los derechos reservados | Con <span className="text-red-500">❤</span> por <a href="https://github.com/taggipay" className="text-primary hover:underline">Ramiro Ls</a>
    </footer>
  )
}

export default Footer;