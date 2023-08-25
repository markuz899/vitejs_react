import { Helmet } from "react-helmet";
import Navigation from "./Navigation";

export default function Layout({ children, title }: any) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <div className="app-layout">
        <Navigation />
        {children}
      </div>
    </>
  );
}
