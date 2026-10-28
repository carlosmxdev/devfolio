function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-white/90 py-6 text-center text-sm text-slate-500 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-400">
      © {currentYear} carlosmxdev. Todos los derechos reservados.
    </footer>
  );
}

export default Footer;
