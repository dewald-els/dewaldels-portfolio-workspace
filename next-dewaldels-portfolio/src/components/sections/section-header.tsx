import { PageSection } from "@/types";

interface SectionHeaderProps {
  onScrollToSectionClick: (section: PageSection) => void;
}
const SectionHeader = (props: SectionHeaderProps) => {
  const { onScrollToSectionClick } = props;

  return (
    <header className="flex flex-col items-center justify-center mb-8 pt-8">
      <div className="flex flex-col gap-4 mb-8">
        <h2 className="text-3xl nes-text is-primary">Portfolio of</h2>
        <h1 className="text-5xl font-bold">Dewald Els</h1>
      </div>

      <div className="inline-flex flex-col gap-4">
        <button
          className="nes-btn w-60"
          onClick={() => onScrollToSectionClick(PageSection.About)}
        >
          About
        </button>
        <button
          className="nes-btn is-primary w-60"
          onClick={() => onScrollToSectionClick(PageSection.Projects)}
        >
          Projects
        </button>
        <button
          className="nes-btn is-warning w-60"
          onClick={() => onScrollToSectionClick(PageSection.Contact)}
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default SectionHeader;
