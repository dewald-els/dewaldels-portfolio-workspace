import { useState } from "react";

interface ProjectTrimableTextProps {
  text: string[];
  maxWordCount?: number;
}

interface CreateDisplayTextInput {
  text: string;
  trim: boolean;
  maxWordCount: number;
}
const createDisplayText = (input: CreateDisplayTextInput) => {
  const { text, trim, maxWordCount } = input;
  if (!trim) {
    return text;
  }

  const words = text.split(" ");

  if (words.length > maxWordCount) {
    return words.slice(0, maxWordCount).join(" ") + "...";
  }

  return words.join(" ");
};

const ProjectTrimableText = (props: ProjectTrimableTextProps) => {
  const { text = [], maxWordCount = 10 } = props;

  const [trimText, setTrimText] = useState(true);

  const handleToggleTrimClick = () => {
    setTrimText(!trimText);
  };

  const sourceText = text.join("\n");
  const sourceTextWordCount = sourceText.split(" ").length;

  const displayText = createDisplayText({
    text: text.join("\n"),
    trim: trimText,
    maxWordCount,
  });

  return (
    <div className="flex flex-col items-center">
      <div>{displayText}</div>
      {sourceTextWordCount > maxWordCount && (
        <button className="nes-btn mt-4" onClick={handleToggleTrimClick}>
          <span className="nes-text text-sm">
            {trimText ? "Read more" : "Less"}
          </span>
        </button>
      )}
    </div>
  );
};

export default ProjectTrimableText;
