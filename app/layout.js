import "./globals.css";

export const metadata = {
  title: "Henry Ameen Charles | Mobile App Developer",
  description: "I design and develop thoughtful mobile experiences for ambitious brands and businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
