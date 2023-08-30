export default function Information({ data }: any) {
  const getYearExperience = () => {
    let now = new Date().getFullYear();
    return now - data.experience + "+";
  };
  return (
    <div className="p-7 block-section rounded-xl bg-white dark:bg-slate-800">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">
        Informazioni
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="text-gray-400">Età</div>
          <div className="font-medium text-right text-gray-600">
            {data.birthday}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">Località</div>
          <div className="font-medium text-right text-gray-600">
            {data.location}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">Esperienza</div>
          <div className="font-medium text-right text-gray-600">
            {getYearExperience()}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">Disponibile per</div>
          <div className="font-medium text-right text-gray-600">
            {data.availableFor}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-400">Spostamento</div>
          <div className="font-medium text-right text-gray-600">
            {data.relocation ? "Si" : "No"}
          </div>
        </div>
      </div>
    </div>
  );
}
