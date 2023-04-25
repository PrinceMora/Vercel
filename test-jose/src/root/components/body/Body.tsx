import React, { useRef } from "react";
import Information, {
  InformationProps,
} from "@/root/components/information/Information";
import NavBar from "../navBar/NavBar";

interface BodyProps {
  features: InformationProps[];
}

function Body(props: BodyProps) {
  return (
    <section className="text-gray-600 body-font" tabIndex={0}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <NavBar />
        </div>
        <div className="flex flex-wrap -m-4">
          {props.features.map((feature) => (
            <Information
              key={feature.name}
              name={feature.name}
              lastName={feature.lastName}
              email={feature.email}
              tastes={feature.tastes}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Body;
