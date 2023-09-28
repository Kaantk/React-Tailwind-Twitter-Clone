import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <h1
      role="heading"
      className="my-0.5 w-[3.25rem] h-[3.25rem] inline-flex items-center justify-center hover:bg-[color:var(--background-hover)] transition-colors rounded-full cursor-pointer text-[--color-base]"
    >
      <NavLink to="/">
        <svg viewBox="0 0 24 24" width={30} height={50}>
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </svg>
      </NavLink>
    </h1>
  );
}
