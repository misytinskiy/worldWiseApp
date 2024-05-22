import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import Footer from "./Footer";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
