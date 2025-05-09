import "../styles/globals.css";
import Header from "../_components/Header";
export const metadata = {
  title: {
    template: "%s | sunny",
    default: "sunny",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Header title="pages" backgroundColor="black" />
        <h1>RootLayout</h1>
        {children}
      </body>
    </html>
  );
}
