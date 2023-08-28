import { useState } from "react";
import Layout from "../container/Layout";
import { userInfo } from "../config";
import {
  About,
  Education,
  Experience,
  Information,
  Project,
  Skills,
  User,
} from "../components";

const Home = () => {
  const [menuActive, setMenuActive] = useState(1);
  return (
    <Layout>
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-5">
          <User data={userInfo.mainCard} />
          <Information data={userInfo.information} />
          <Skills data={userInfo.skills} />
        </div>
        <div className="space-y-5 lg:col-span-2">
          <About
            setMenuActive={setMenuActive}
            menuActive={menuActive}
            data={userInfo.aboutMe}
          />

          {menuActive === 1 && (
            <>
              <Experience data={userInfo.experience} />
              <Education data={userInfo.education} />
            </>
          )}

          {menuActive === 2 && (
            <>
              <Project data={userInfo.project} />
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
