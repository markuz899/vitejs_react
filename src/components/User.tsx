import { Switch } from ".";

const absoluteTheme = {
  right: "10px",
  top: "10px",
};

export default function User({ data }: any) {
  function getImageUrl() {
    return new URL(`../assets/${data.cvFile}`, import.meta.url).href;
  }
  return (
    <div className="shadow rounded-xl overflow-hidden">
      <div
        className="h-32 bg-cover relative"
        style={{
          backgroundImage: `url(${data.cover})`,
        }}
      >
        <div
          style={absoluteTheme}
          className="absolute bg-white dark:bg-slate-800 flex justify-center items-center rounded-3xl w-9 h-9"
        >
          <Switch />
        </div>
      </div>

      <div className="bg-white relative dark:bg-slate-800">
        <div
          className="mb-7 p-5 w-full flex items-end justify-between absolute"
          style={{ top: "-75px" }}
        >
          <a href={getImageUrl()} target="_blank">
            <img
              className="border-2 border-slate-200 rounded-md grayscale hover:scale-125 transition duration-500"
              src={data.avatar}
              alt="avatar"
              width={100}
            />
          </a>
          <span className="badge badge-neutral p-3">
            {data.available ? "Disponibile" : "Non disponibile"}
          </span>
        </div>

        <div className="flex items-center justify-between p-5 pt-10">
          <div>
            <div className="text-lg font-semibold mt-3 mb-1.5 dark:text-white">
              {data.fullname}
            </div>
            <div className="text-sm">{data.role}</div>
          </div>
        </div>

        <div className="flex group p-5 pt-1.5">
          <button className="btn btn-primary w-full">
            <a
              className="flex items-center"
              href={getImageUrl()}
              target="_blank"
            >
              Scarica CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
