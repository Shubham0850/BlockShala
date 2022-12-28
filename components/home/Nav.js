import Link from "next/link";
import React from "react";

export default function Nav() {

  return (
    <nav className="flex items-center justify-between p-2 border-b-2 border-dark">
      {/* logo */}
      <div className="text-2xl">
        <h3>
          ⚡️ Block<b>Shala</b>
        </h3>
      </div>
      {/* links */}
      <div className="flex items-center justify-around">
        <Link href="/learn">
          <div className="mx-[50px] text-xl">👨‍💻 Learn</div>
        </Link>

        <Link href="/build">
          <div className="mx-[50px] text-xl">🛠 Build</div>
        </Link>

        <Link href="/earn">
          <div className="mx-[50px] text-xl">💰 Earn</div>
        </Link>
      </div>

      <button className="btn hidden sm:flex">Create Account</button>
    </nav>
  );
}
