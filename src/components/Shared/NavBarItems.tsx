import React from "react";
interface NavBarItemsProps {
  label: string;
}
const NavBarItems: React.FC<NavBarItemsProps> = ({ label }) => {
  return (
    <>
      <div className="cursor-pointer hover:text-gray-300 transition">
        {label}
      </div>
    </>
  );
};
export default NavBarItems;
