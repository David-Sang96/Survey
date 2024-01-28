import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Header from "../pages/Header";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="bg-slate-700 h-screen text-white py-2 px-3 font-mono">
      <div className="container mx-auto">
        <Header />
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            timeout={200}
            classNames={"fade"}
          >
            <div className="flex justify-center items-center h-[80vh] ">
              <Outlet />
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default Layout;
