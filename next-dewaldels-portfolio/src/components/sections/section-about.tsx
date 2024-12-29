import { useTheme } from "@/lib/context/theme-context";

const SectionAbout = () => {
  const { isDark } = useTheme();
  return (
    <section
      className={`nes-container is-rounded with-title mb-8 ${isDark ? "is-dark" : ""}`}
    >
      <h3 className="title">About</h3>
      <p>Hello! My name is Dewald Els. I&apos;m a full stack web developer.</p>
    </section>
  );
};

export default SectionAbout;
