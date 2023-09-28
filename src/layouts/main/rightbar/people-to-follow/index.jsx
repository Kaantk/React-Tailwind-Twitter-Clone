import { Users } from "~/mock";
import UserCard from "./persons";

export default function PeopleToFollow() {
  return (
    <div className="mb-4 rounded-2xl bg-[color:var(--background-secondary)] overflow-hidden">
      <aside>
        <h4 className="py-3 px-4 font-extrabold leading-6 text-[1.25rem] text-[color:var(--color-base)]">
          Kimi takip etmeli
        </h4>
        <div>
          {Users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      </aside>
      <button className="p-4 hover:bg-white/[0.03] w-full text-primary text-[0.938rem] leading-5 inline-flex">
        Daha fazla göster
      </button>
    </div>
  );
}
