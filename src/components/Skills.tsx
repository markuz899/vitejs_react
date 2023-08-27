export default function Skills({ data }: any) {
  const coloors: any = {
    0: "bg-violet-500",
    1: "bg-green-500",
    2: "bg-rose-500",
    3: "bg-blue-500",
    4: "bg-cyan-500",
    5: "bg-yellow-500",
    6: "bg-teal-500",
    7: "bg-stone-500",
    8: "bg-pink-500",
  };

  return (
    <div className="p-7 block-section rounded-xl bg-white">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Skills</h2>
      <div className="space-y-4">
        {Object.keys(data).length &&
          Object.keys(data).map((skill: any, index: any) => {
            return (
              <div className="mb-4" key={skill}>
                <div className="text-gray-400 mb-2 uppercase">{skill}</div>
                <div className="flex flex-1 flex-wrap">
                  {data[skill].map((el: any, i: any) => {
                    return (
                      <div
                        key={i}
                        className={`rounded badge badge-primary opacity-60 p-4 mr-2 mb-2 hover:opacity-100 transition ${coloors[index]} border-transparent`}
                      >
                        {el}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
