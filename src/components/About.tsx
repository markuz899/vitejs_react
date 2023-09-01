import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function About({
  setMenuActive,
  menuActive,
  data,
  language,
}: any) {
  const { t } = useTranslation();
  const { currentLanguage } = language;
  return (
    <div className="p-7 pb-0 block-section shadow rounded-xl overflow-hidden bg-white dark:bg-slate-800">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        {t("translations:about:title")}
      </h2>
      <p
        className="text-gray-600 dark:text-gray-300 mb-5"
        dangerouslySetInnerHTML={{
          __html: currentLanguage === "it" ? data.info : data.infoEn,
        }}
      ></p>
      <div className="flex flex-col space-y-4">
        <a className="text-primary">
          <span className="font-semibold">@</span>{" "}
          <span>
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </span>
        </a>
        <ul className="flex space-x-5">
          <li className="hover:text-primary cursor-pointer transition">
            <a className="" target="_blank" href={data.github}>
              Github
            </a>
          </li>
          <li className="hover:text-primary cursor-pointer transition">
            <a className="" target="_blank" href={data.linkedin}>
              Linkendin
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-200 my-5"></div>
      <ul className="flex space-x-8 font-medium">
        <li
          onClick={() => setMenuActive(1)}
          className={`${
            menuActive === 1
              ? "text-primary border-b-primary"
              : "text-gray-600 border-b-transparent"
          } hover:text-primary border-b-2 hover:border-b-primary pb-5 transition cursor-pointer`}
        >
          <a>{t("translations:about:story")}</a>
        </li>
        <li
          onClick={() => setMenuActive(2)}
          className={`${
            menuActive === 2
              ? "text-primary border-b-primary"
              : "text-gray-600 border-b-transparent"
          } hover:text-primary border-b-2 hover:border-b-primary pb-5 transition cursor-pointer`}
        >
          <a>{t("translations:about:project")}</a>
        </li>
        <li
          className={`text-gray-600 border-b-transparent hover:text-primary border-b-2 hover:border-b-primary pb-5 transition cursor-pointer`}
        >
          <Link to="/game" target="_blank">
            {t("translations:about:forChildren")}
          </Link>
        </li>
      </ul>
    </div>
  );
}
