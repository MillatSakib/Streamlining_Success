import React from "react";
import { FaStar } from "react-icons/fa";

export const HaveTask = ({ defaultTask }) => {
  return (
    <>
      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                Title
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                Description
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                Tags
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                Priority
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                Options
              </th>
            </tr>
          </thead>

          {defaultTask.map((data) => (
            <tbody key={data.id}>
              <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                <td>
                  {data.isFavorite ? (
                    <FaStar className="text-yellow-400" />
                  ) : (
                    <FaStar className="text-slate-400" />
                  )}
                </td>
                <td>{data.title}</td>
                <td>
                  <div>{data.description}</div>
                </td>
                <td>
                  <ul className="flex justify-center gap-1.5 flex-wrap">
                    {data.tags.map((data, index) => (
                      <li key={index}>
                        <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                          {data}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="text-center">{data.priority}</td>
                <td>
                  <div className="flex items-center justify-center space-x-3">
                    <button className="text-red-500">Delete</button>
                    <button className="text-blue-500">Edit</button>
                  </div>
                </td>
              </tr>

              {/* More tasks rows here */}
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export const NoTask = () => {
  return <>There have no task.</>;
};

const TaskList = ({ defaultTask }) => {
  return (
    <>
      {/* <NoTask></NoTask> */}
      <HaveTask defaultTask={defaultTask}></HaveTask>
    </>
  );
};

export default TaskList;
