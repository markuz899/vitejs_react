import { Helmet } from "react-helmet";

export default function Layout({ children, title }: any) {
  const mainStyle = {
    maxWidth: "1200px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <div className="app-layout bg-gray-200 antialiased">
        <main className="main-container" style={mainStyle}>
          {children}
        </main>
      </div>
    </>
  );
}
