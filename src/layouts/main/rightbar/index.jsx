import Footer from "./footer";
import PeopleToFollow from "./people-to-follow";
import Premium from "./premium";
import Search from "./search";
import Topics from "./topics";

export default function Rightbar() {
  return (
    <div className="w-[21.875rem] mr-[0.625rem] pb-16">
      <Search />
      <Premium />
      <Topics />
      <PeopleToFollow />
      <Footer />
    </div>
  );
}
