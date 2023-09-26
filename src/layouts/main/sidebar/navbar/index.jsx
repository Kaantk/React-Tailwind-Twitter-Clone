import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { navbar } from "~/utils/navbar";
import More from "./more";

export default function Navbar() {
  return (
    <div className="mt-0.5 mb-1">
      <nav>
        {navbar.map((link, index) => (
          <NavLink key={index} to={link?.path} className="flex group py-1">
            {({ isActive }) => (
              <div className="inline-flex p-3 group-hover:bg-[#e7e9ea1a] rounded-full relative">
                {isActive ? link?.icon.active : link?.icon.passive}
                <div>
                  {link?.notification > 0 && (
                    <span className="w-[1.125rem] h-[1.125rem] text-[0.688rem] absolute left-6 top-2 bg-primary rounded-full flex items-center justify-center z-10 ">
                      {link?.notification}
                    </span>
                  )}
                </div>
                <div
                  className={classNames(
                    "inline-block ml-5 mr-4 leading-6 text-[1.25rem] text-extraLight-gray",
                    { "font-bold": isActive }
                  )}
                >
                  <span>{link.title}</span>
                </div>
              </div>
            )}
          </NavLink>
        ))}
        <More />
      </nav>
    </div>
  );
}