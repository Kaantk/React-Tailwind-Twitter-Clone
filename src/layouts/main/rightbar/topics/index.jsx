import { Link } from "react-router-dom";
import { topics } from "~/utils/topics";
import { Popover } from "@headlessui/react";
import { numberFormat } from "~/utils/formats";

export default function Topics() {
  return (
    <div className="bg-[color:var(--background-secondary)] rounded-2xl mb-4">
      <h2 className="text-[color:var(--color-base)] font-extrabold leading-6 text-[1.25rem] py-3 px-4">
        İlgini çekebilecek gündemler
      </h2>
      {topics.map((topic, index) => (
        <Link
          key={index}
          className="py-3 px-4 transition-colors hover:bg-[color:var(--background-lightHover)] flex justify-between group"
        >
          <div className="flex flex-col">
            <span className="text-[0.813rem] text-[#71767b] leading-4">
              {topic.title}
            </span>
            <div className="mt-0.5 font-bold text-[0.938rem] leading-5 text-[color:var(--color-base)] flex items-center">
              {topic.topic.type === "tag" && "#"}
              {topic.topic.value}
            </div>
            {topic?.postCount && (
              <span className="text-[#71767b] leading-4 mt-1 text-[0.813rem]">
                {numberFormat(topic.postCount)} posts
              </span>
            )}
          </div>
          <Popover className="relative">
            <Popover.Button className="w-[2.188rem] h-[2.188rem] rounded-full flex hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] items-center justify-center outline-none transition-colors">
              <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                <path
                  fill="currentColor"
                  d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                />
              </svg>
            </Popover.Button>

            <Popover.Panel className="absolute z-10 bg-[color:var(--background-primary)] shadow-box w-[23.813rem] rounded-xl right-0 top-0">
              <button className="hover:bg-[color:var(--background-lightHover)] w-full flex items-center py-3 px-4">
                <svg
                  viewBox="0 0 24 24"
                  width={18.75}
                  height={18.75}
                  className="mr-3"
                >
                  <path
                    fill="currentColor"
                    d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
                  />
                </svg>
                <span className="font-bold text-[0.938rem] leading-5 text-[color:var(--color-base)]">
                  İlgimi çekmiyor
                </span>
              </button>
              <button className="hover:bg-[color:var(--background-lightHover)] w-full flex items-center py-3 px-4">
                <svg
                  viewBox="0 0 24 24"
                  width={18.75}
                  height={18.75}
                  className="mr-3"
                >
                  <path
                    fill="currentColor"
                    d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
                  />
                </svg>
                <span className="font-bold text-[0.938rem] leading-5 text-[color:var(--color-base)]">
                  Bu gündem başlığı zararlı veya spam içeriyor
                </span>
              </button>
            </Popover.Panel>
          </Popover>
        </Link>
      ))}
      <button className="p-4 hover:bg-[color:var(--background-lightHover)] w-full text-primary text-[0.938rem] leading-5 inline-flex rounded-b-2xl">
        Daha fazla göster
      </button>
    </div>
  );
}
