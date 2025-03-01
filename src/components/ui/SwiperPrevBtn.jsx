import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const SwiperPrevBtn = ({ handlePrev }) => {
  return (
    <button
      onClick={handlePrev}
      type="button"
      className="absolute left-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white opacity-100 shadow-md transition-all delay-75 duration-300 hover:bg-[#EEF9F6] active:!scale-95"
    >
      <MdOutlineKeyboardArrowLeft className="text-2xl" />
    </button>
  );
};

export default SwiperPrevBtn;
