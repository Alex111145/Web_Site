import Modal from "../ui/Modal";
import { IconGithub } from "../ui/icons";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" kicker="Project" title={project.title}>
      <img
        src={project.image}
        alt={project.title}
        className="w-full aspect-video object-cover rounded-[14px] border border-line bg-paper"
      />
      <div className="mt-5 flex items-center gap-3">
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: project.borderColor }}
          aria-hidden="true"
        />
        <span className="tag">{project.soon ? "Soon..." : project.anno}</span>
      </div>
      <p className="lead mt-4">{project.fullDescription}</p>
      <div className="mt-7">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full sm:w-auto"
          >
            <IconGithub /> Source Code
          </a>
        ) : (
          <span className="tag tag-soon !h-11 !px-5 !text-[13px]">Soon...</span>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal;
