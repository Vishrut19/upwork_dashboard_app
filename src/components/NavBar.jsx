import React from "react";
import Image from "next/image";
import helpIcom from "../../public/assets/help-icon.svg";
import avatarIcon from "../../public/assets/avatar.svg";

const NavBar = () => {
  return (
    <div className="flex justify-end mt-[10px]">
      <div className="flex w-max">
        <Image src={helpIcom} alt="help icon" />
        <p className="font-manrope font-medium text-[#021D30] ml-2 mr-4 mt-[7px]">
          Help
        </p>
      </div>
      {/* This can be added into a seperate component if there are more than 1 avatars, but as for test page it is fine */}
      <Image className="mr-4" src={avatarIcon} alt="avatar icon" />
    </div>
  );
};

export default NavBar;
