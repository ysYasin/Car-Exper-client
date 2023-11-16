import React from "react";

const CaroselButton = ({ right, left }) => {
  return (
    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a
        href={left}
        className="btn border-[#ffffff42] outline-[#ffffff42] btn-circle hover:bg-[#FF3811] bg-[#ffffff42] hover:outline-[#FF3811] hover:border-[#FF3811] text-3xl"
      >
        ❮
      </a>
      <a
        href={right}
        className="hover:outline-[#FF3811] hover:border-[#FF3811] border-[#ffffff42] outline-[#ffffff42] btn btn-circle text-3xl bg-[#ffffff42] hover:bg-[#FF3811]"
      >
        ❯
      </a>
    </div>
  );
};

export default CaroselButton;
