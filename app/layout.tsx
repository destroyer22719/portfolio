import NavBar from "../components/NavBar";
import "../styles/global.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <NavBar />
        </div>
        <div className="main-content">{children}</div>
      </body>
    </html>
  );
}
