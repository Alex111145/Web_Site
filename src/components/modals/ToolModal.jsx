import Modal from "../ui/Modal";

const ToolModal = ({ isOpen, onClose, tool }) => {
  if (!tool) return null;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      kicker={`${tool.ket}${tool.done ? "" : " · Soon..."}`}
      title={tool.nama}
    >
      <div className="flex flex-col items-center text-center gap-5">
        <div className="logo-tile !w-24 !h-24 !rounded-2xl !p-4">
          <img src={tool.gambar} alt={tool.nama} />
        </div>
        {tool.desc && <p className="text-[15.5px] leading-relaxed text-ink-2">{tool.desc}</p>}
        {!tool.done && <span className="tag tag-soon">Soon...</span>}
      </div>
    </Modal>
  );
};

export default ToolModal;
