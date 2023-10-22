import styles from "./Navbar.module.css";
import Link from "next/link";
// import { RxPerson } from "react-icons/rx";
import { IoPerson } from "react-icons/io5";
import Cardcomponent from "./Cardcomponent";
import React from "react";


export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <div className={styles.nav}>
              <div className="flex items-center mb-14">
                <IoPerson size={18} color={"black"} />
                <h1 className="ml-2  text-zinc-950 ">
                  Hello, there
                </h1>
                <h2 className={styles.font}>hello mike</h2>
              </div>
              <nav>
                <ul className="flex flex-col">
                  <li className="mb-14">
                    <Link
                      className="text-zinc-950  pl-2 hover:font-bold hover:text-white hover:text-xl transition-all duration-300 ease-in-out"
                      href="/"
                    >
                      Add Task
                    </Link>
                  </li>
                  <li className="mb-14">
                    <Link
                      className="text-zinc-950 hover:font-bold hover:text-white hover:text-xl transition-all duration-300 ease-in-out"
                      href="/pendingtasks"
                    >
                      Pending Tasks
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-zinc-950 hover:font-bold hover:text-white hover:text-xl transition-all duration-300 ease-in-out"
                      href="/completedtasks"
                    >
                      Completed Tasks
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-span-9">
            <Cardcomponent />
          </div>
        </div>
      </div>
    </div>
  );
}
