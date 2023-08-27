export default function Project({ data }: any) {
  return (
    <div className="p-7 pb-0 block-section shadow rounded-xl overflow-hidden bg-white">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Project</h2>
      {data.map((el: any, i: any) => {
        return (
          <div className="flex items-start mb-5" key={i}>
            <div className="w-full space-y-5">
              <div className="flex justify-between">
                <div className="space-y-1.5">
                  <div className="font-medium text-gray-600">{el.name}</div>
                  <div className="flex space-x-5">
                    <div className="flex items-center text-gray-400 text-sm">
                      {el.type}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">Description</p>
              <div
                className="border-b border-gray-200"
                dangerouslySetInnerHTML={{ __html: el.description }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
