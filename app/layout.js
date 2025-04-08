import "./styles/globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Header title="Welcome to My Next.js App" backgroundColor="#0070f3" />
        {children}
      </body>
    </html>
  );
}
