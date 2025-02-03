import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProcessSteps from "./ProcessSteps";
import "./App.css";
import processDetails from "./data/processData";
import { graph, graph2, graph3 } from "./data/graphData1";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const graphRef = useRef(null);
  const graph2Ref = useRef(null);
  const graph3Ref = useRef(null);

  useEffect(() => {
    const renderGraphs = async () => {
      try {
        const { instance } = await import("@viz-js/viz");
        const viz = await instance();

        const renderGraph = async (graphString, containerRef) => {
          const svg = viz.renderSVGElement(graphString);
          containerRef.current.innerHTML = "";
          containerRef.current.appendChild(svg);

          svg.querySelectorAll(".node").forEach((node) => {
            node.addEventListener("click", () => {
              const nodeName = node.querySelector("title").textContent;
              setModalContent(
                processDetails[nodeName] || "No details available."
              );
              setShowModal(true);
            });
          });
        };

        await renderGraph(graph, graphRef);
        await renderGraph(graph2, graph2Ref);
        await renderGraph(graph3, graph3Ref);
      } catch (error) {
        console.error("Error rendering graphs:", error);
      }
    };

    renderGraphs();
  }, []);

  return (
    <div className="text-center">
      <h1>🧠 Retrieval-Augmented Generation (RAG) System Architecture</h1>
      <small>
        Flowchart illustrating the system architecture and data flow
      </small>
      <br />
      <small>
        Developed by <a href="https://github.com/Priom7">Md Sharif Alam</a>
      </small>
      <div className="row">
        <div className="legend col-md-3"></div>
        <div className="legend col-md-3">
          <strong>Legend:</strong>
          <ul>
            <li>🎨 User Interaction</li>
            <li>⚙️ Backend Processing</li>
            <li>🛠️ Pre-Processing</li>
            <li>🔍 Query Retrieval</li>
            <li>🧠 AI Processing</li>
            <li>📊 Post-Processing</li>
          </ul>
        </div>
        <div className="tools col-md-3">
          <strong>Tools:</strong>
          <ul>
            <li>⚛️ React</li>
            <li>🚀 Express</li>
            <li>📡 Axios</li>
            <li>🟢 Node.js</li>
            <li>🗄️ MySQL</li>
            <li>🔴 Redis</li>
            <li>🤗 LLM Model (Hugging Face API/Open AI/DeepSeek/Own Model)</li>
            <li>🔗 LangChain</li>
            <li>📚 VectorDB</li>
            <li>☸️ Kubernetes</li>
            <li>📈 Prometheus</li>
          </ul>
        </div>
        <div className="legend col-md-3"></div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <div
            ref={graphRef}
            className="graph-container"
            style={{ width: "100%" }}
          />
          <div
            ref={graph3Ref}
            className="graph-container"
            style={{ width: "100%" }}
          />
          <div
            ref={graph2Ref}
            className="graph-container"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Process Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalContent}</p>
          <ProcessSteps key={modalContent} />
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
