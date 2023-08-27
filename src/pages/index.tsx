import { useState } from "react";
import Layout from "../container/Layout";

const Home = () => {
  const [menuActive, setMenuActive] = useState(1);
  return (
    <Layout title="Marco Liberati - CV">
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-5">
          <div className="shadow rounded-xl overflow-hidden">
            <div
              className="h-32 bg-cover"
              style={{
                backgroundImage:
                  "url(https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_640.jpg)",
              }}
            ></div>

            <div className="bg-white relative">
              <div
                className="mb-7 p-5 w-full flex items-end justify-between absolute"
                style={{ top: "-60px" }}
              >
                <a href="cv">
                  <img
                    className="border-2 border-slate-200 rounded-md grayscale"
                    src="https://media.licdn.com/dms/image/C5603AQHBEEOAHT9lzw/profile-displayphoto-shrink_800_800/0/1600705393575?e=1698883200&v=beta&t=s9rL9MTa8SvV-0E8bVU5ZJbpvhtva9qmaFZIOOFnqgk"
                    alt="avatar"
                    width={75}
                  />
                </a>
                <span className="badge badge-neutral p-3">Busy</span>
              </div>

              <div className="flex items-center justify-between p-5 pt-10">
                <div>
                  <div className="text-lg font-semibold mt-3 mb-1.5 text-gray-800">
                    Marco Liberati
                  </div>
                  <div className="text-sm text-gray-500">Web Developer</div>
                </div>
              </div>

              <div className="flex group p-5 pt-1.5">
                <button className="btn btn-primary w-full">
                  Download CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                </button>
              </div>
            </div>
          </div>
          <div className="p-7 block-section rounded-xl bg-white">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Information
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div className="text-gray-400">Location</div>
                <div className="font-medium text-right text-gray-600">
                  Italy
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-400">Experience</div>
                <div className="font-medium text-right text-gray-600">
                  4+ years
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-400">Availability for</div>
                <div className="font-medium text-right text-gray-600">
                  Small project
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-gray-400">Relocation</div>
                <div className="font-medium text-right text-gray-600">No</div>
              </div>
            </div>
          </div>
          <div className="p-7 block-section rounded-xl bg-white">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Skills</h2>
            <div className="space-y-4">
              <div className="mb-4">
                <div className="text-gray-400 mb-2 uppercase">frontEnd</div>
                <div className="flex flex-1 flex-wrap">
                  <div className="rounded badge badge-primary opacity-60 p-4 mr-2 mb-2 hover:opacity-100 transition">
                    Javascript
                  </div>
                  <div className="rounded badge badge-primary opacity-60 p-4 mr-2 mb-2 hover:opacity-100 transition">
                    HTML/CSS/SCSS
                  </div>
                  <div className="rounded badge badge-primary opacity-60 p-4 mr-2 mb-2 hover:opacity-100 transition">
                    React
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-gray-400 mb-2 uppercase">backEnd</div>
                <div className="flex flex-1 flex-wrap">
                  <div className="rounded badge badge-secondary opacity-60 p-4 mr-2 mb-2 hover:opacity-100 transition">
                    Node
                  </div>
                  <div className="rounded badge badge-secondary opacity-60 p-4 mr-2 mb-2 hover:opacity-100 transition">
                    Fastify
                  </div>
                  <div className="rounded badge badge-secondary opacity-60 p-4 mr-2 mb-2 hover:opacity-100 transition">
                    Express
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:col-span-2">
          <div className="p-7 pb-0 block-section shadow rounded-xl overflow-hidden bg-white">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              About me
            </h2>
            <p className="text-gray-600 mb-5">
              Libero quas veritatis nulla distinctio fuga nihil temporibus et.
              Quia dicta sapiente qui porro molestiae nobis incidunt voluptatem.
              Et voluptas sunt nihil. At perferendis voluptatem dolores nulla.
              Adipisci dolore non. Praesentium ipsa magnam ut quia explicabo
              voluptates.
            </p>
            <div className="flex flex-col space-y-4">
              <a className="text-primary">
                <span className="font-semibold">@</span>{" "}
                <span>crisabbott@email.com</span>
              </a>
              <ul className="flex space-x-5">
                <li className="hover:text-primary cursor-pointer transition">
                  <a className="">FB</a>
                </li>
                <li className="hover:text-primary cursor-pointer transition">
                  <a className="">GIT</a>
                </li>
                <li className="hover:text-primary cursor-pointer transition">
                  <a className="">LINK</a>
                </li>
              </ul>
            </div>
            <div className="border-t border-gray-200 my-5"></div>
            <ul className="flex space-x-8 font-medium">
              <li
                onClick={() => setMenuActive(1)}
                className={`${
                  menuActive === 1 && "text-primary border-b-primary"
                } text-gray-600 hover:text-primary border-b-2 border-b-transparent hover:border-b-primary pb-5 transition cursor-pointer`}
              >
                <a>Resume</a>
              </li>
              <li
                onClick={() => setMenuActive(2)}
                className={`${
                  menuActive === 2 && "text-primary border-b-primary"
                } text-gray-600 hover:text-primary border-b-2 border-b-transparent hover:border-b-primary pb-5 transition cursor-pointer`}
              >
                <a>Project</a>
              </li>
            </ul>
          </div>

          {menuActive === 1 && (
            <>
              <div className="p-7 pb-0 block-section shadow rounded-xl overflow-hidden bg-white">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Experience
                </h2>
                <div className="flex items-start mb-5">
                  <div className="w-full space-y-5">
                    <div className="flex justify-between">
                      <div className="space-y-1.5">
                        <div className="font-medium text-gray-600">
                          Web developer - Backend
                        </div>
                        <div className="flex space-x-5">
                          <div className="flex items-center text-gray-400 text-sm">
                            Azienda
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            Luogo
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 sm:text-right">
                        <div className="badge badge-primary p-2 font-light text-sm">
                          Full time
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          Dicembre 2018
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Aut omnis voluptatem sit sequi. Voluptatem temporibus
                      repellat voluptatem voluptatibus enim voluptas
                      necessitatibus. Aut quasi sunt dolor. Commodi dolores
                      saepe asperiores beatae voluptate corporis est ea
                      voluptatem. Enim quo sed et sint aspernatur distinctio qui
                      quam.
                    </p>
                    <div className="border-b border-gray-200"></div>
                  </div>
                </div>

                <div className="flex items-start mb-5">
                  <div className="w-full space-y-5">
                    <div className="flex justify-between">
                      <div className="space-y-1.5">
                        <div className="font-medium text-gray-600">
                          Web developer - Frontend
                        </div>
                        <div className="flex space-x-5">
                          <div className="flex items-center text-gray-400 text-sm">
                            Azienda
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            Luogo
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 sm:text-right">
                        <div className="badge badge-primary p-2 font-light text-sm">
                          Full time
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          Dicembre 2017
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Aut omnis voluptatem sit sequi. Voluptatem temporibus
                      repellat voluptatem voluptatibus enim voluptas
                      necessitatibus. Aut quasi sunt dolor. Commodi dolores
                      saepe asperiores beatae voluptate corporis est ea
                      voluptatem. Enim quo sed et sint aspernatur distinctio qui
                      quam.
                    </p>
                    <div className="border-b border-gray-200"></div>
                  </div>
                </div>
              </div>

              <div className="p-7 pb-0 block-section shadow rounded-xl overflow-hidden bg-white">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Education
                </h2>
                <div className="flex items-start mb-5">
                  <div className="w-full space-y-5">
                    <div className="flex justify-between">
                      <div className="space-y-1.5">
                        <div className="font-medium text-gray-600">ITIS</div>
                        <div className="flex space-x-5">
                          <div className="flex items-center text-gray-400 text-sm">
                            Enrico Fermi
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            Rome
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 sm:text-right">
                        <div className="p-2 font-light text-sm"></div>
                        <div className="flex items-center text-gray-400 text-sm">
                          Agosto 2014
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-gray-200"></div>
                  </div>
                </div>
              </div>
            </>
          )}

          {menuActive === 2 && (
            <>
              <div className="p-7 pb-0 block-section shadow rounded-xl overflow-hidden bg-white">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Project
                </h2>
                <div className="flex items-start mb-5">
                  <div className="w-full space-y-5">
                    <div className="flex justify-between">
                      <div className="space-y-1.5">
                        <div className="font-medium text-gray-600">
                          Nome tool
                        </div>
                        <div className="flex space-x-5">
                          <div className="flex items-center text-gray-400 text-sm">
                            Utility tool
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Aut omnis voluptatem sit sequi. Voluptatem temporibus
                      repellat voluptatem voluptatibus enim voluptas
                      necessitatibus. Aut quasi sunt dolor. Commodi dolores
                      saepe asperiores beatae voluptate corporis est ea
                      voluptatem. Enim quo sed et sint aspernatur distinctio qui
                      quam.
                    </p>
                    <div className="border-b border-gray-200"></div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
