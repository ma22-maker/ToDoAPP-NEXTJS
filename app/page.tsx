"use client";
import DataProvider from "./components/Navbar/DataProvider";
import Sidebar from "../component/sideNavbar";
import styles from "./components/Navbar/Showdetails.module.css";
import BaseLayout from "../component/baseLayout";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Home() {
  // const tasks = useSelector((state) => state.InputData.data);
  // function formatDate(dateString: string | number | Date) {
  //   const date = new Date(dateString);
  //   const day = date.getDate();
  //   const month = date.toLocaleString("default", { month: "short" });
  //   const year = date.getFullYear().toString().slice(-2);
  //   return `${day}${month}${year}`;
  // }
  // return (
  //   <>
  //   <BaseLayout>
  //   <div>
  //     hello
  //   </div>
  //   <div className="divborder">
  //         {tasks.map(
  //           (
  //             item: {
  //               [x: string]: any;
  //               id: React.Key | null | undefined;
  //               taskText:
  //                 | string
  //                 | number
  //                 | boolean
  //                 | React.ReactElement<
  //                     any,
  //                     string | React.JSXElementConstructor<any>
  //                   >
  //                 | Iterable<React.ReactNode>
  //                 | React.ReactPortal
  //                 | React.PromiseLikeOfReactNode
  //                 | null
  //                 | undefined;
  //               priority:
  //                 | string
  //                 | number
  //                 | boolean
  //                 | React.ReactElement<
  //                     any,
  //                     string | React.JSXElementConstructor<any>
  //                   >
  //                 | Iterable<React.ReactNode>
  //                 | React.ReactPortal
  //                 | React.PromiseLikeOfReactNode
  //                 | null
  //                 | undefined;
  //               dueDate: any;
  //               createdDate: any;
  //             },
  //             index: React.Key | null | undefined
  //           ) => (
  //             <ul key={item.id}>
  //               <div className={styles.card}>
  //                 <div className="flex flex-row justify-between">
  //                   <div className="flex flex-row">
  //                     {/* <input
  //                       type="radio"
  //                       onChange={() => handleTaskCompletion(item.id)}
  //                       className={styles.button}
  //                     /> */}
  //                     {/* <input
  //                         type="checkbox"
  //                         checked={false}
  //                         className="checkbox checkbox-success"
  //                         onClick={() => handleTaskCompletion(item.id)}
  //                       /> */}
  //                     <p className="text-white text-lg ml-3">{item.taskText}</p>
  //                   </div>
  //                   <div className="flex flex-row">
  //                     <p className="text-white ml-3">{item.priority}</p>
  //                   </div>
  //                 </div>
  //                 <div className=" flex flex-row ">
  //                   <p className="text-white mr-4">
  //                     <span className="text-grey-800 font-extralight text-sm">
  //                       Due Date:
  //                     </span>{" "}
  //                     {formatDate(item.dueDate)}
  //                   </p>
  //                   <p className="text-white">
  //                     <span className="text-grey-800 font-extralight text-sm">
  //                       Created Date:
  //                     </span>
  //                     {formatDate(item.createdDate)}
  //                   </p>
  //                 </div>
  //               </div>
  //             </ul>
  //           )
  //         )}
  //       </div>
  //   </BaseLayout>
  //   </>
  // );

  const actualtasks = useSelector((state) => state.InputData.data);
  const completedtasks = useSelector((state) => state.InputData.completedTasks);

  const highPriorityTasks = actualtasks.filter(
    (task) => task.priority === "High"
  );
  const mediumPriorityTasks = actualtasks.filter(
    (task) => task.priority === "Medium"
  );
  const lowPriorityTasks = actualtasks.filter(
    (task) => task.priority === "Low"
  );
  const nonPriorityTasks = actualtasks.filter(
    (task) => task.priority === "None"
  );

  const totalTasks = actualtasks.length;
  const highPriorityProgress = (highPriorityTasks.length / totalTasks) * 100;
  const mediumPriorityProgress =
    (mediumPriorityTasks.length / totalTasks) * 100;
  const lowPriorityProgress = (lowPriorityTasks.length / totalTasks) * 100;
  const nonPriorityProgress = (nonPriorityTasks.length / totalTasks) * 100;

  const progressValue = completedtasks.length;
  const intotalTasks = actualtasks.length;

  return (
    <BaseLayout>
      <div className="container mx-auto p-4 flex flex-row">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Total Tasks vs Completed Tasks(%100)
          </h2>
          <progress
            className="progress progress-accent w-72"
            value={progressValue}
            max={intotalTasks}
          ></progress>
        </div>
        <div className="flex flex-col items-center ml-12">
          <h2 className="text-2xl font-bold mb-4">
            Pending Tasks Based on Priority (%100)
          </h2>
          <div className="grid gap-4">
            <div className="card w-full">
              <div className="flex justify-between items-center">
                <p className="font-medium">High Priority:</p>
                <progress
                  className="progress progress-accent w-48"
                  value={highPriorityProgress}
                  max={100}
                ></progress>
              </div>
            </div>
            <div className="card w-full">
              <div className="flex justify-between items-center">
                <p className="font-medium">Medium Priority:</p>
                <progress
                  className="progress progress-accent w-48"
                  value={mediumPriorityProgress}
                  max={100}
                ></progress>
              </div>
            </div>
            <div className="card w-full">
              <div className="flex justify-between items-center">
                <p className="font-medium">Low Priority:</p>
                <progress
                  className="progress progress-accent w-48"
                  value={lowPriorityProgress}
                  max={100}
                ></progress>
              </div>
            </div>
            <div className="card w-full">
              <div className="flex justify-between items-center">
                <p className="font-medium">Non-Priority:</p>
                <progress
                  className="progress progress-accent w-48"
                  value={nonPriorityProgress}
                  max={100}
                ></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
