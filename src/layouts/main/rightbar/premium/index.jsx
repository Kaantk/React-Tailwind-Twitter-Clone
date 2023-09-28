export default function Premium() {
  return (
    <div className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl">
      <aside className="py-3 px-4 flex flex-col gap-[0.625rem]">
        <div>
          <h3 className="font-extrabold leading-6 text-[1.25rem] text-[color:var(--color-base)]">
            Premium'a Abone Ol
          </h3>
        </div>
        <div className="w-[19.375rem]">
          <p className="font-bold text-[0.938rem] leading-5 text-[color:var(--color-base)]">
            Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam
            geliri payı kazan.
          </p>
        </div>
        <a>
          <span className="inline-flex items-center justify-center cursor-pointer min-w-[2.25rem] min-h-[2.25rem] bg-primary rounded-full px-4 font-bold text-[0.938rem] text-[#e7e9ea] leading-5 hover:bg-light-primary transition-colors">
            Abone ol
          </span>
        </a>
      </aside>
    </div>
  );
}
