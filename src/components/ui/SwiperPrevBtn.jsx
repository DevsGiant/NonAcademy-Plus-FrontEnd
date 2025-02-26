import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const SwiperPrevBtn = ({ handlePrev }) => {
  return (
    <button
      onClick={handlePrev}
      type="button"
      className="absolute left-4 top-[18%] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-100 shadow-md transition-all delay-75 duration-300 hover:bg-[#EEF9F6] active:!scale-95"
    >
      <MdOutlineKeyboardArrowLeft className="text-2xl" />
    </button>
  );
};

export default SwiperPrevBtn;
