function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e2e8f0] bg-[#ffffffe6] py-7 text-center text-sm text-[#64748b] backdrop-blur-xl dark:border-[#1d293d] dark:bg-[#030712] dark:text-[#94a3b8]">
      © {currentYear} carlosmxdev. Todos los derechos reservados.
    </footer>
  );
}

export default Footer;
