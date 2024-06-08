import React, { useState } from "react";
import ProfileHome from "../Activities/ProfileHome";
import ProfileLists from "../Activities/ProfileLists";
import ProfileAbout from "../Activities/ProfileAbout";
import Modal from "../../../utils/Modal";
import { LiaTimesSolid } from "react-icons/lia";

const Profile = () => {
  const activities = [
    {
      title: "Home",
      comp: ProfileHome,
    },
    {
      title: "Lists",
      comp: ProfileLists,
    },
    {
      title: "About",
      comp: ProfileAbout,
    },
  ];

  const [currentActive, setCurrentActive] = useState(activities[0]);
  const [modal, setModal] = useState(true);
  return (
    <section className="size flex gap-[4rem] relative">
      {/* user activities */}
      <div className="mt-[9rem] flex-[2]">
        <div className="flex items-end gap-4">
          <h2 className="text-3xl sm:text-5xl font-bold capitalize">
            Kayla Kenney
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">Followers(2)</p>
          <p className="text-gray-500 text-xs sm:text-sm">Following(2)</p>
        </div>
        <div className="flex items-center gap-5 mt-[1rem] border-b border-gray-300 mb-[3rem] z-40">
          {activities.map((item, i) => (
            <div
              key={i}
              className={`py-[0.5rem] z-30
            ${item.title === currentActive.title
                ? "border-b border-gray-500"
                : ""
            } `}
            >
              <button onClick={() => setCurrentActive(item)}>
                {item.title}
              </button>
            </div>
          ))}
        </div>
        <currentActive.comp />
      </div>
      {/* user details */}
      {/* <Modal modal={modal} setModal={setModal}> */}
        {/* <div
          className={`flex-[1] border-l border-gray-300 p-[2rem] z-10 fixed right-0 bottom-0 top-0 w-[18rem] bg-white md:relative ${
            modal ? "translate-x-0" : "translate-x-[100%] md:translate-x-0"
          } transition-all duration-500`}
        > */}
          {/* icon to close modal */}
          {/* <div className="pb-4 text-right "> */}
            {/* <button
              onClick={() => setModal(false)}
              className="inline-block md:hidden"
            > */}
              {/* <LiaTimesSolid /> */}
            {/* </button>
          </div>
        </div>
      </Modal> */}

      <Modal modal={modal} setModal={setModal}>
      <div className={`flex-[1] border-l border-gray-300 p-[2rem] z-10
        fixed right-0 bottom-0 top-0 w-[18rem] bg-white md:sticky
        ${modal ? "translate-x-0" : "translate-x-[100%] md:translate-x-0"}
        transition-all duration-500`}>
            {/* icons to close modal */}
            <div className="pb-4 text-right">
                <button className="inline-block md:hidden">
                    <LiaTimesSolid />
                </button>
            </div>
        </div>
      </Modal>
    </section>
  );
};

export default Profile;
