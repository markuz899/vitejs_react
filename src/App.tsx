import {
  createBrowserRouter,
  RouterProvider,
  LoaderFunction,
  ActionFunction,
} from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Error from "./Error";
import ProtectedRoot from "./utils/ProtectedRoot";

import "./index.css";

interface RouteCommon {
  loader?: LoaderFunction;
  action?: ActionFunction;
  ErrorBoundary?: React.ComponentType<any>;
}

interface IRoute extends RouteCommon {
  path: string;
  Element: React.ComponentType<any>;
}

interface Pages {
  [key: string]: {
    default: React.ComponentType<any>;
  } & RouteCommon;
}

const pages: Pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
const routes: IRoute[] = [];
const restricted: string[] = [
  "/dashboard",
  "/dashboard/analytics",
  "/dashboard/:id",
];

for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader as LoaderFunction | undefined,
    action: pages[path]?.action as ActionFunction | undefined,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

const App = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(language);

  const handleChangeLanguage = () => {
    const newLanguage: string = currentLanguage === "en" ? "it" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  const data: any = {
    language: {
      translate: t,
      currentLanguage: language,
      setCurrentLanguage,
      handleChangeLanguage,
    },
  };

  const router = createBrowserRouter(
    routes.map(({ Element, ErrorBoundary, ...rest }) => ({
      ...rest,
      element: restricted.includes(rest.path) ? (
        <ProtectedRoot>
          <Element data={data} />
        </ProtectedRoot>
      ) : (
        <Element data={data} />
      ),
      errorElement: <Error />,
    }))
  );

  return <RouterProvider router={router} />;
};

export default App;
