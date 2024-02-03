/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from 'react';
import { TaskContext } from '../../context';
import FaStarDark from '../ui/FaStarDark';
import FaStarLight from '../ui/FaStarLight';

const Trow = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <tr
          key={task.id}
          className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
        >
          <td>
            <button onClick={() => handleFavToggle(task.id)}>
              {task.isFavorite ? <FaStarLight /> : <FaStarDark />}
            </button>
          </td>
          <td>{task.title}</td>
          <td>
            <div>{task.description}</div>
          </td>
          <td>
            <ul className="flex justify-center gap-1.5 flex-wrap">
              {task.tags.map((tag) => (
                <li key={tag}>
                  <span
                    style={{ backgroundColor: 'green' }}
                    className={`inline-block h-5 whitespace-nowrap rounded-[45px]   px-2.5 text-sm capitalize text-[#F4F5F6]`}
                  >
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </td>
          <td className="text-center"> {task.priority} </td>
          <td>
            <div className="flex items-center justify-center space-x-3">
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500"
              >
                Delete
              </button>
              <button
                onClick={() => handleEditTask(task)}
                className="text-blue-500"
              >
                Edit
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Trow;
