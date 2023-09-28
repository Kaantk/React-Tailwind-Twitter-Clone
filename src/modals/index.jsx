import { modals } from "~/routes/modals";
import { useModal } from "~/store/modal/hooks";

export default function Modal() {
  const modal = useModal(); // Şuan elimdeki modal'ı getirir.
  const currentModal = modals.find((item) => item.name === modal.name); // Hangi modalı yükleyeceğimizi burda buluruz.
  return (
    <div className="fixed inset-0 bg-[color:var(--background-model)] flex items-center justify-center z-20 ">
      <div className="bg-[color:var(--background-primary)] max-w-[37.5rem] max-h-[90vh] rounded-2xl overflow-auto ">
        {currentModal && <currentModal.element />}
      </div>
    </div>
  );
}
