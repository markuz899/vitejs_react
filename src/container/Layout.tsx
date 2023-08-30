import { Helmet } from "react-helmet";
import Footer from "./Footer";
import { userInfo } from "../config";

export default function Layout({ children, title, style }: any) {
  const mainStyle = {
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
    ...style,
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || userInfo.mainCard.fullname} - CV</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href={userInfo.mainCard.favicon || "/vite.svg"}
        />
      </Helmet>
      <div className="app-layout bg-gray-200 dark:bg-slate-600 antialiased">
        <main className="main-container" style={mainStyle}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
