import NavBar from "../components/NavBar";
import "../styles/global.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <div>
          <NavBar />
        </div>
        <div className="main-content">{children}</div>
      </body>
    </html>
  );
}
