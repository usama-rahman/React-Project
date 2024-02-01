/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Thead from "../board/Thead";
import Trow from "../board/Trow";
import Header from "../board/Header";
import { useReducer, useState } from "react";
import Modal from "./Modal";
import { toast } from "react-toastify";
import NoTaskFound from "../ui/NoTaskFound";
import { TaskContext } from "../../context";
import { initialState, taskReducer } from "../../reducers/TaskReducer";

const TaskBoard = () => {
  const defaultTasks = [
    {
      id: crypto.randomUUID(),
      title: "Integration API",
      description:
        "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
      tags: ["web", "react", "js"],
      priority: "High",
      isFavorite: false,
    },
  ];

  return (
    <TaskContext.Provider value={{}}>
      <section className="mb-20" id="tasks">
        {/* <div>
            <Modal />
          </div>
       */}
        <div className="container">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <Header />
            <div className="overflow-auto">
              <table className="table-fixed overflow-auto xl:w-full">
                <Thead />
                <tbody>
                  <Trow />
                </tbody>
              </table>

              {/* <NoTaskFound /> */}
            </div>
          </div>
        </div>
      </section>
    </TaskContext.Provider>
  );
};

export default TaskBoard;
