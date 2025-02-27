import "./globals.css";

export const metadata = {
  title: "Echoes Of Light | Sound Healing",
  description: "Sound Healing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
