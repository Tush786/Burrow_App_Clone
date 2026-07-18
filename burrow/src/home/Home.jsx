import React, { Suspense } from "react";
import Loader from "../errorHandling/Loader";

const sections = [
  { component: React.lazy(() => import("./Secs/Sec0")) },
  { component: React.lazy(() => import("./Secs/Sec2")) },
  { component: React.lazy(() => import("./Secs/Sec3")) },
  { component: React.lazy(() => import("./Secs/Sec5")) },
  { component: React.lazy(() => import("./Secs/Sec10")) },
  { component: React.lazy(() => import("./Secs/Sec8")) },
];

const Home = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        {sections.map((section, index) => {
          const Component = section.component;
          return (
            <div key={index}>
              <Component />
            </div>
          );
        })}
      </Suspense>
    </div>
  );
};

export default Home;
