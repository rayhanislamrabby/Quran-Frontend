import "./globals.css";

export const metadata = {
  title: "Quran Mazid",
  description: "Read and listen to the Holy Quran",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}