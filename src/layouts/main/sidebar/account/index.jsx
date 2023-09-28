import { Popover } from "@headlessui/react";
import classNames from "classnames";
import { setCurrentAccount } from "~/store/auth/actions";
import { useAccount, useAccounts } from "~/store/auth/hooks";

export default function Account() {
  const currentAccount = useAccount();
  const accounts = useAccounts();

  return (
    <Popover className="relative">
      <Popover.Button className="w-full outline-none text-[--color-base]">
        {({ open }) => (
          <div
            className={classNames(
              "my-3 p-3 rounded-full flex items-center w-full",
              {
                "hover:bg-[color:var(--background-hover)] transition-colors":
                  !open,
              }
            )}
          >
            <img
              src={currentAccount.avatar}
              alt={`${currentAccount.userName} Avatar`}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col items-start mx-3">
              <span className="text-[color:var(--color-base)] font-semibold text-[0.938rem]">
                {currentAccount.userName}
              </span>
              <span className="text-[#71767b] text-[0.938rem]">
                @{currentAccount.nickName}
              </span>
            </div>
            <svg
              viewBox="0 0 24 24"
              width={18.75}
              height={18.75}
              className="ml-auto"
            >
              <path
                fill="currentColor"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              />
            </svg>
          </div>
        )}
      </Popover.Button>

      <Popover.Panel className="absolute w-[18.75rem] rounded-xl overflow-hidden z-10 left-0 -top-[320px] bg-[color:var(--background-primary)] shadow-box py-3 text-[--color-base]">
        {accounts.map((account, index) => (
          <button
            key={index}
            disabled={account.id === currentAccount.id}
            className={classNames(
              "py-3 px-4 flex items-center w-full justify-between",
              {
                "hover:bg-[color:var(--background-hover)]":
                  account.id !== currentAccount.id,
              }
            )}
            onClick={() => setCurrentAccount(account)}
          >
            <div className="flex items-center text-[--color-base]">
              <img
                src={account.avatar}
                alt={`${account.userName} avatar`}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col items-start mx-3">
                <span className="text-[color:var(--color-base)] font-semibold text-[0.938rem]">
                  {account.userName}
                </span>
                <span className="text-[#71767b] text-[0.938rem]">
                  @{account.nickName}
                </span>
              </div>
            </div>
            {account.id === currentAccount.id && (
              <svg
                viewBox="0 0 24 24"
                width={18.75}
                height={18.75}
                className="mr-2 ml-3"
              >
                <path
                  fill="#00ba7c"
                  d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"
                />
              </svg>
            )}
          </button>
        ))}

        <div
          role="seperator"
          className="w-full h-px bg-[color:var(--background-third)] my-3"
        />

        <button className="text-[color:var(--color-base)] text-[0.938rem] leading-5 font-bold py-3 px-4 hover:bg-[color:var(--background-hover)] w-full flex">
          Var olan bir hesap ekle
        </button>
        <button className="text-[color:var(--color-base)] text-[0.938rem] leading-5 font-bold py-3 px-4 hover:bg-[color:var(--background-hover)] w-full flex">
          Hesapları yönet
        </button>
        <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full text-[0.938rem] font-bold leading-5">
          <div className="max-w-[220px]">
            {currentAccount.nickName} hesabından çıkış yap
          </div>
        </button>
      </Popover.Panel>
    </Popover>
  );
}
