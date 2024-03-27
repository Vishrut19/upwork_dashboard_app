import React from "react";

const Breadcrumbs = () => {
  return (
    /** More breadcrumbs can be added or removed depending API data that interactivity can be added in the below code.*/
    <div className="text-sm breadcrumbs">
      <ul className="font-manrope">
        <li>
          <a>Create</a>
        </li>
        <li>
          <a>Learning Path Overview</a>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
