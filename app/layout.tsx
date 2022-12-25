import NavBar from "../components/NavBar";
import "../styles/global.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div>
          <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
