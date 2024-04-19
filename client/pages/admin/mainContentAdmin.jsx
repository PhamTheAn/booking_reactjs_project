import React, { PureComponent } from "react";
import Dashboard from "./dashboard";
import SidebarAdmin from "./sidebar";
import "./admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Outlet} from "react-router-dom";

const MainContentAdmin = () => {
  return (
    <>
        <div className="flex h-screen overflow-hidden">
          <SidebarAdmin />
          <div className=" flex-1 relative overflow-y-auto overflow-x-hidden m-8 mt-0">
            <div className="search flex flex-row h-16 items-center shadow mb-2">

              {/* input search */}
              <div className="input-search">
                <FontAwesomeIcon icon={faSearch} />{" "}
                <input
                  className="focus:outline-none"
                  type="text"
                  placeholder="Type to search..."
                />
              </div>
            </div>
            <Dashboard />
            <main>
              <Outlet/>
            </main>
          </div>
        </div>
    </>
  );
};

export default MainContentAdmin;
