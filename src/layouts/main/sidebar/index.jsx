import Account from "./account";
import Logo from "./logo";
import Navbar from "./navbar";

export default function Sidebar() {
  return (
    <div className="text-white max-w-[17.188rem] w-[17.188rem] max-h-screen px-2 flex flex-col sticky top-0">
      <div>
        <Logo />
        <Navbar />
        <button className="my-4 w-[90%] h-[3.25rem] text-[1.063rem] leading-5 font-bold text-white bg-primary hover:bg-light-primary transition-colors rounded-full">
          Gönder
        </button>
      </div>
      <div className="mt-auto">
        <Account />
      </div>
    </div>
  );
}
