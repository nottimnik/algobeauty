import Slider from "react-infinite-logo-slider";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/nav/Navbar";

export default function Home() {
  const CompanyLogosPath = "/assets/images/company-logos";

  return (
    <div className="px-5 lg:px-[200px] font-sans ">
      <Navbar />
      <div className="text-center font-sans mt-10">
        <h1 className="inline-block relative font-bold text-6xl ">
          The{" "}
          <span className="border-b-4 border-green-500 font-bold pb-0 -mb-2">
            Fastest Structured
          </span>{" "}
          Path to Coding Interview{" "}
          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text font-bold text-7xl">
            Success
          </span>
        </h1>
        <p className="mt-4 text-xl">
          Master key patterns to tackle any interview question and accelerate
          your path to success.
        </p>
      </div>

      <div className="flex justify-center mt-5">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"
        >
          Get started for free
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Learn More
          </span>
        </button>
      </div>

      <Button>casca</Button>

      <p className="text-center text-lg font-semibold mt-10 mb-3">
        Join other software engineers working at companies like
      </p>

      <Slider
        width="150px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
        className="text-center w-l"
      >
        <Slider.Slide>
          <img
            src={`${CompanyLogosPath}/google.png`}
            alt="google"
            className="w-20"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={`${CompanyLogosPath}/meta.png`}
            alt="meta"
            className="w-20"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={`${CompanyLogosPath}/microsoft.png`}
            alt="microsoft"
            className="w-20"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={`${CompanyLogosPath}/palantir.png`}
            alt="palantir"
            className="w-20"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={`${CompanyLogosPath}/amazon.png`}
            alt="amazon"
            className="w-20"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={`${CompanyLogosPath}/nvidia.png`}
            alt="nvidia"
            className="w-20"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={`${CompanyLogosPath}/netflix.png`}
            alt="netflix"
            className="w-20"
          />
        </Slider.Slide>
      </Slider>

      <section className="bg-white dark:bg-gray-900 mt-12 pt-20">
        <div className="py-8 px-4 mx-auto  sm:py-16 lg:px-6">
          <div className="">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              We make you understand,{" "}
              <span className="text-red-500 underline py-0">not</span> just
              memorise.
            </h2>
            <p className="mb-8 text-gray-800 sm:text-xl dark:text-gray-400">
              At AlgoBeauty, we help you understand essential patterns to solve
              coding interview problems. By emphasizing comprehension over
              memorization, we enable you to grasp algorithms deeply. Our tools
              and tailored curriculum save you time while building the skills to
              adapt solutions, empowering you to tackle interviews confidently
              and land your dream job.
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="relative inline-flex items-center justify-between w-full px-4 py-2.5 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600 group"
              >
                <div className="flex items-center">
                  <svg
                    className="mr-2 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  <span>View more</span>
                </div>
                <span className="mr-2 items-center transition-transform duration-300 transform group-hover:translate-x-2">
                  <FaLongArrowAltRight size={20} />
                </span>
              </a>

              <a
                href="#"
                className=" inline-flex items-center justify-between w-full px-4 py-2.5 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600 group"
              >
                <div className="flex items-center">
                  <svg
                    className="mr-2 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  <span>View more</span>
                </div>
                <span className="mr-2 items-center transition-transform duration-300 transform group-hover:translate-x-2">
                  <FaLongArrowAltRight size={20} />
                </span>
              </a>

              <a
                href="#"
                className="relative inline-flex items-center justify-between w-full px-4 py-2.5 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600 group"
              >
                <div className="flex items-center">
                  <svg
                    className="mr-2 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  <span>View more</span>
                </div>
                <span className="mr-2 items-center transition-transform duration-300 transform group-hover:translate-x-2">
                  <FaLongArrowAltRight size={20} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
