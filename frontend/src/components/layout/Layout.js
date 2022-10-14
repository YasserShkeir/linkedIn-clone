import MainNav from "./MainNav";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      {/* <MainNav /> */}
      <h1>x</h1>
      <main className={classes.main}>XX{props.children}</main>
    </div>
  );
}

export default Layout;
