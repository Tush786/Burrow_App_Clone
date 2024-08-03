import React, { Suspense, useState, useEffect } from "react";
import Loader from "../errorHandling/Loader";

const sections = [
  { component: React.lazy(() => import("./Secs/Sec0")),  },
  { component: React.lazy(() => import("./Secs/Sec2")),  },
  { component: React.lazy(() => import("./Secs/Sec3")),  },
  { component: React.lazy(() => import("./Secs/Sec5")), },
  { component: React.lazy(() => import("./Secs/Sec10")),  },
  { component: React.lazy(() => import("./Secs/Sec8")),  },
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadComponents = async () => {
      try {
        await Promise.all(sections.map(section => section.component._ctor()));
      } catch (error) {
        console.error("Error loading components:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadComponents();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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
