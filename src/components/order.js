import hero from "../images/illustration-hero.svg";
import music from "../images/icon-music.svg";

export default function Order() {
  return (
    <div className="flex container mx-auto justify-center items-center z-10">
      <section className="flex max-w-sm md:max-w-md bg-white rounded-2xl ">
        <div className="flex flex-col justify-center items-center">
          <img src={hero} alt="hero" className="flex rounded-t-2xl" />
          <div className="text-center flex justify-center flex-col items-center">
            <h1 className="text-2xl font-extrabold text-[#1F2F56] py-6 mt-2">
              Order Summary
            </h1>
            <p className="text-[#7280A7] font-medium max-w-xs mb-3 px-6 md:px-3">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>

          <div className="flex gap-5 justify-center items-center p-4 bg-[#F5F7FF] rounded-xl w-4/5 my-4">
            <span>
              <img src={music} alt="music" />
            </span>
            <span>
              <h3 className="font-bold text-[#1F2F56]">Annual Plan</h3>
              <p className="font-medium text-[#7280A7]">$59.99/year</p>
            </span>
            <span className="ml-9">
              <a
                href="https://huddlenepal.com"
                className="text-[#3829E0] hover:text-[#3829E0]/80 font-bold underline  "
              >
                Change
              </a>
            </span>
          </div>

          <div className="flex flex-col justify-center items-center mt-4 mb-9 w-full font-bold">
            <button className="bg-[#3829E0] text-white hover:bg-[#3829E0]/80 p-4 rounded-xl w-4/5 mb-7 shadow-xl shadow-[#3829E0]/30 hover:shadow-[#3829E0]/50 hover:translate-y-1 ease-out  transition-all ">
              {" "}
              Proceed to Payment
            </button>

            <p className="cursor-pointer text-[#7280A7]">Cancel Order</p>
          </div>
        </div>
      </section>
    </div>
  );
}
