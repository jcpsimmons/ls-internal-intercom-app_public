import React from "react";
import { Link } from "react-router-dom";

export default function AppDirectory() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/email-customer">Email Customer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
