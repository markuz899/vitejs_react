import { Helmet } from "react-helmet";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  const mainStyle = {
    maxWidth: "1300px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
    height: "100%",
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PUZZLE GAME</title>
        <link rel="icon" type="image/svg+xml" href={"/vite.svg"} />
      </Helmet>
      <div className="app-layout antialiased box-content">
        <main className="main-container" style={mainStyle}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
