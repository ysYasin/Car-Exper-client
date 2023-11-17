import React from "react";
import {
  FaCalendar,
  FaLocationArrow,
  FaLongArrowAltDown,
  FaPhoneAlt,
  FaPhoneSlash,
} from "react-icons/fa";

const ContactOverviw = () => {
  return (
    <div className="contactOverviw rounded-lg bg-black text-slate-50 flex items-center justify-evenly py-16 my-5">
      <div className="flex items-center gap-4">
        <FaCalendar className="text-[30px] text-[#ff3811]" />
        <div>
          <p>We are open monday-friday</p>
          <h3 className="text-xl font-semibold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FaPhoneAlt className="text-[30px] text-[#ff3811]" />
        <div>
          <p>Have a question?</p>
          <h3 className="text-xl font-semibold">+2546 251 2658</h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FaLocationArrow className="text-[30px] text-[#ff3811]" />
        <div>
          <p>Need a repair? our address</p>
          <h3 className="text-xl font-semibold">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactOverviw;
