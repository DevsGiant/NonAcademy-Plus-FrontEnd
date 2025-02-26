import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SwiperNextBtn = ({ handleNext }) => {
  return (
    <button
      onClick={handleNext}
      type="button"
      className="absolute right-4 top-[18%] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-100 shadow-md transition-all delay-75 duration-300 hover:bg-[#EEF9F6] active:!scale-95"
    >
      <MdOutlineKeyboardArrowRight className="text-2xl" />
    </button>
  );
};

export default SwiperNextBtn;
