export default function About({ setMenuActive, menuActive, data }: any) {
  return (
    <div className="p-7 pb-0 block-section shadow rounded-xl overflow-hidden bg-white">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Su di me</h2>
      <p
        className="text-gray-600 mb-5"
        dangerouslySetInnerHTML={{ __html: data.info }}
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
          <a>Storia</a>
        </li>
        <li
          onClick={() => setMenuActive(2)}
          className={`${
            menuActive === 2
              ? "text-primary border-b-primary"
              : "text-gray-600 border-b-transparent"
          } hover:text-primary border-b-2 hover:border-b-primary pb-5 transition cursor-pointer`}
        >
          <a>Progetti</a>
        </li>
      </ul>
    </div>
  );
}
