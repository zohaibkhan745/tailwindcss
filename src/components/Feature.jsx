import { features } from "../constants";

function Feature() {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      {/* Header */}
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>

      {/* Features List */}
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="flex items-center gap-4 p-4 bg-neutral-900 text-orange-700 rounded-lg shadow-md">
              <div className="h-10 w-10 flex items-center justify-center bg-orange-700 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 text-xl mb-6">{feature.text}</h5>
                <p className="text-neutral-500 text-md p-2">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
