/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useState } from 'react';
import ModalNav from '../ui/ModalNav';
import { TaskContext } from '../../context';

const Modal = () => {
  return (
    <div className="absolute top-0 left-0 z-30 w-full h-full ">
      <section className="bg-[#1D212B] font-[Inter] max-md:px-4 lg:text-lg">
        <ModalNav />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // handleSave(task);
          }}
          className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
        >
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            {/* {isAdd ? 'Add New Task' : 'Edit Task'} */}
          </h2>

          <div className="space-y-9 text-white lg:space-y-10">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="title">Title</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="title"
                id="title"
                value={task.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                type="text"
                name="description"
                id="description"
                value={task.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="tags">Tags</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="tags"
                  id="tags"
                  value={task.tags}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                  name="priority"
                  id="priority"
                  value={task.priority}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-between lg:mt-20">
            <button
              type="button"
              className="rounded bg-red-500 px-4 py-2 text-white transition-all hover:opacity-80"
              onClick={handleCloseModal}
            >
              Close
            </button>

            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              Save
            </button>
          </div>
        </form>
        <footer className="py-6 md:py-8">
          <div className="container mx-auto">
            <p className="text-center text-xs text-[#6A6A6A] lg:text-sm">
              Copyright ©2023 | All rights reserved by Learn with Sumit
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Modal;
