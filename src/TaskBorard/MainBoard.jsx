import React from "react";
import SearchFeild from "./SearchFeild";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const MainBoard = () => {
  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="p-2 flex justify-end">
            <form>
              <div className="flex">
                <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                  <SearchFeild />
                </div>
              </div>
            </form>
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction />

            <TaskList />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBoard;
