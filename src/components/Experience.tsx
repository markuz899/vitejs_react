export default function Experience({ data }: any) {
  return (
    <div className="p-7 pb-0 block-section shadow rounded-xl overflow-hidden bg-white">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Esperienze</h2>

      {data.map((exp: any, i: any) => {
        return (
          <div className="flex items-start mb-5" key={i}>
            <div className="w-full space-y-5">
              <div className="flex justify-between">
                <div className="space-y-1.5">
                  <div className="font-medium text-gray-600">{exp.role}</div>
                  <div className="flex space-x-5">
                    <div className="flex items-center text-gray-400 text-sm">
                      {exp.agency}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      {exp.location}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 sm:text-right">
                  <div className="badge badge-primary p-2 font-light text-sm">
                    {exp.time}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    {exp.data}
                  </div>
                </div>
              </div>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: exp.description }}
              ></p>
              <div className="border-b border-gray-200"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
