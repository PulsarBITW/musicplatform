import { Link } from "react-router-dom";
import classes from "./Header.module.css";

import SearchInput from "../SearchInput/SearchInput";

const Header = () => {
  const list = [{ id: 1, name: "Home", to: "/" }];
  return (
    <header className={classes.header}>
      {list.map((el) => (
        <Link>{el.name}</Link>
      ))}
      <SearchInput />
      <div>{"profile"}</div>
    </header>
  );
};

export default Header;
