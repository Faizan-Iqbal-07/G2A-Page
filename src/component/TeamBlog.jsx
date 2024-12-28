import React from "react";
import Team from "./Team";
import Blog from "./Blog";

const TeamBlog = () => {
  return (
    <div className="py-[5rem]  flex flex-col lg:flex-row   text-[#fff]">
      <Team />
      <Blog />
    </div>
  );
};

export default TeamBlog;
