import React from "react";
import { Blog } from "../../../Context/Context";


const ProfileAbout = ({ getUserData, setEditModal }) => {
  const { currentUser } = Blog();
  return (
    <div className="w-full">
      <p className="text-2xl first-letter:uppercase">
        {getUserData?.bio || getUserData?.username + "has no bio"}
      </p>
      <div className="text-right">
        <button
          onClick={() => setEditModal(true)}
          className="border border-black py-2 px-5 rounded-full text-black mt-[3rem]"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProfileAbout;
