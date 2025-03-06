export const metadata = {
  title: "Meu App Next.js",
  description: "Layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <nav>
          <a href="/">Home</a> | <a href="/dashboard">Dashboard</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
