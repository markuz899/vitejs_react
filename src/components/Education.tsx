import { useTranslation } from "react-i18next";

export default function Education({ data }: any) {
  const { t } = useTranslation();

  return (
    <div className="p-7 pb-0 block-section shadow rounded-xl overflow-hidden bg-white dark:bg-slate-800">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 dark:text-white">
        {t("translations:education:title")}
      </h2>
      {data.map((el: any, i: any) => {
        return (
          <div className="flex items-start mb-5" key={i}>
            <div className="w-full space-y-5">
              <div className="flex justify-between">
                <div className="space-y-1.5">
                  <div className="font-medium text-gray-600 dark:text-gray-400">
                    {el.type}
                  </div>
                  <div className="flex space-x-5">
                    <div className="flex items-center text-gray-400 dark:text-gray-500 text-sm">
                      {el.name}
                    </div>
                    <div className="flex items-center text-gray-400 dark:text-gray-500 text-sm">
                      {el.location}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 sm:text-right">
                  <div className="p-2 font-light text-sm"></div>
                  <div className="flex items-center text-gray-400 dark:text-gray-500 text-sm">
                    {el.data}
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
