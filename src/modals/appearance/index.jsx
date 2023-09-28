import {
  setBackgroundColor,
  setBoxShadow,
  setColor,
} from "~/store/appearance/actions";
import { useAppearance } from "~/store/appearance/hooks";
import { setModal } from "~/store/modal/actions";
import { colors } from "~/utils/colors";

export default function AppearenceModal() {
  const appearance = useAppearance();

  return (
    <div className="flex flex-col w-[37.5rem] items-center bg-[color:var(--background-primary)]">
      <div className="mt-8 mb-3 leading-7 w-full flex justify-center text-[1.438rem] font-bold text-[color:var(--color-base)]">
        <h4>Görünümü özelleştir</h4>
      </div>
      <div className="flex flex-col items-center p-8 pt-0 w-full">
        <div className="mb-5">
          <span className="text-[#71767b] text-[0.938rem] leading-5">
            Bu ayarlar, bu tarayıcıdaki tüm X hesaplarını etkiler.
          </span>
        </div>
        <div className="mb-4 mx-8 border border-[color:var(--background-third)] rounded-2xl px-4 py-3 gap-3 flex cursor-default">
          <img
            src="https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_normal.jpg"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col text-[0.938rem] leading-5">
            <header className="w-full flex items-center">
              <span className=" font-bold">X</span>
              <svg
                viewBox="0 0 22 22"
                width={18.75}
                height={18.75}
                className="ml-0.5"
              >
                <path
                  fill="#1d9bf0"
                  d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                />
              </svg>
              <p className="ml-1 text-[#71767b]">@X · 45d</p>
            </header>
            <p className="text-[color:var(--color-base)] leading-5 text-[0.938rem] ">
              <span>
                X'in merkezinde, tıpkı bunun gibi gönderi denen kısa mesajlar
                yatar. Gönderiler; fotoğraflar, videolar, bağlantılar, metinler,
                etiketler ve
              </span>
              <span className="text-primary"> @X</span>
              <span> gibi bahsetmeler içerebilir.</span>
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <p className="text-[color:var(--color-baseSecondary)] font-bold text-[0.813rem] mb-1 ">
            Arka plan
          </p>
          <section className="bg-[color:var(--background-secondary)] mb-3 rounded-2xl py-1 px-3 flex items-center justify-center">
            <button
              onClick={() => {
                setColor({
                  ...colors,
                  base: "#0f1419",
                  baseSecondary: "#536471",
                });
                setBackgroundColor({
                  name: "light",
                  primary: "#fff",
                  secondary: "#f7f9f9",
                  third: "#eff3f4",
                  modal: "#00000066",
                  hover: "#0f14191a",
                  lightHover: "#00000008",
                });
                setBoxShadow(
                  "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px"
                );
              }}
              className="min-h-16 px-5 m-1 rounded bg-[#fff] border-2 border-transparent focus-within:border-[#1d9bf0] w-[10.125rem] h-16 font-bold leading-5 text-[#000] text-[0.938rem]"
            >
              Varsayılan
            </button>
            <button
              onClick={() => {
                setColor({
                  ...colors,
                  base: "#f7f9f9",
                  baseSecondary: "#8b98a5",
                });
                setBackgroundColor({
                  name: "dark",
                  primary: "#15202b",
                  secondary: "#1e2732",
                  third: "#263340",
                  modal: "#5b708366",
                  hover: "#e7e9ea1a",
                  lightHover: "#ffffff08",
                });
              }}
              className="min-h-16 px-5 m-1 rounded bg-[#15202b] border-2 border-transparent focus-within:border-[#1d9bf0] w-[10.125rem] h-16 font-bold leading-5 text-[#e7e9ea] text-[0.938rem]"
            >
              Loş
            </button>
            <button
              onClick={() => {
                setColor({
                  ...colors,
                  base: "#e7e9ea",
                  baseSecondary: "#71767b",
                });
                setBackgroundColor({
                  name: "darker",
                  primary: "#000",
                  secondary: "#16181c",
                  third: "#212327",
                  modal: "#5b708366",
                  hover: "#e7e9ea1a",
                  lightHover: "#ffffff08",
                });
                setBoxShadow(
                  "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
                );
              }}
              className="min-h-16 px-5 m-1 rounded bg-[#000] border-2 border-transparent focus-within:border-[#1d9bf0] w-[10.125rem] h-16 font-bold leading-5 text-[#e7e9ea] text-[0.938rem]"
            >
              Işıklar kapalı
            </button>
          </section>
        </div>
        <button
          onClick={() => setModal("appearance", false)}
          className="bg-[#1d9bf0] min-w-[2.25rem] min-h-[2.25rem] px-4 transition-colors hover:bg-light-primary text-[#fff] flex items-center justify-center rounded-full font-semibold text-[0.938rem] mt-4"
        >
          Bitti
        </button>
      </div>
    </div>
  );
}
