import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import processDetails from "./data/processDetails";

const ProcessStep = ({ title, description, code, rationale }) => {
  return (
    <div className="process-step">
      <h3>{title}</h3>
      <p>
        <strong>Details:</strong> {description}
      </p>

      <SyntaxHighlighter language="jsx" style={darcula}>
        {code}
      </SyntaxHighlighter>
      <p>
        <strong>Rationale:</strong> {rationale}
      </p>
      <button onClick={() => alert('Edit functionality not implemented yet')}>Edit</button>
      <button onClick={() => navigator.clipboard.writeText(code)}>Copy</button>
    </div>
  );
};

/**
 * Detailed Process Block Explanations for a RAG System Framework
 *
 * In our RAG system design, we maintain a mapping of process details that outlines each block’s functionality.
 * In this article, we explain each process step, provide example code where appropriate, and discuss the rationale behind these components.
 *
 * Note: The sample code examples are illustrative. In production systems, you may need to adapt them to your specific technology stack and security requirements.
 *
 * @component
 * @example
 * return (
 *   <ProcessSteps />
 * )
 */
const ProcessSteps = () => {
  return (
    <div className="process-container">
      <h3>Detailed Process Block Explanations for a RAG System Framework</h3>
      <p>
        In our RAG system design, we maintain a mapping of process details that
        outlines each block’s functionality. In this article, we explain each
        process step, provide example code where appropriate, and discuss the
        rationale behind these components.
      </p>
      <p className="process-container bg-warning p-3">
        <strong>
          Note: The sample code examples are illustrative. In production
          systems, you may need to adapt them to your specific technology stack
          and security requirements.
        </strong>
      </p>

      {processDetails.map((step, index) => (
        <ProcessStep key={index} {...step} />
      ))}
    </div>
  );
};

export default ProcessSteps;
