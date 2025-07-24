import React from "react";

function Header() {
  return (
    <header className="navbar flex justify-between">
      <div className="grow-1">
        <a href="/" className="ml-2  text-xl">
          Financer
        </a>
      </div>
      <ul className="flex gap-1 col m-1">
        <li>
          <a className="btn btn-outline btn-primary">Sign in</a>
        </li>
        <li>
          <a className="btn btn-outline btn-primary btn-wide">
            Create an account
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
