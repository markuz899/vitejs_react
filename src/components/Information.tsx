export default function Information({ data }: any) {
  const getYearExperience = () => {
    let now = new Date().getFullYear();
    return now - data.experience + "+";
  };
  return (
    <div className="p-7 block-section rounded-xl bg-white">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Informazioni</h2>
      <div className="space-y-4">
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
