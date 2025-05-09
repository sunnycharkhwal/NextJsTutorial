import Header from "../_components/Header";
import "../styles/globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Header title="Auth Layout" backgroundColor="blue" />
        {children}
      </body>
    </html>
  );
}
