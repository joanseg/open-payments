import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Navigation from "../components/Navigation";

export default function WhitepaperPage() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/whitepaper.md")
      .then((res) => res.text())
      .then(setMarkdown);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen w-full">
      <Navigation />
      <div className="prose prose-lg mx-auto px-4 py-8 max-w-3xl">
        <ReactMarkdown
          components={{
            h1: ({node, ...props}) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-3xl font-semibold mt-8 mb-3" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-2xl font-semibold mt-6 mb-2" {...props} />,
            h4: ({node, ...props}) => <h4 className="text-xl font-semibold mt-4 mb-2" {...props} />,
            h5: ({node, ...props}) => <h5 className="text-lg font-semibold mt-3 mb-1" {...props} />,
            h6: ({node, ...props}) => <h6 className="text-base font-semibold mt-2 mb-1" {...props} />,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
} 