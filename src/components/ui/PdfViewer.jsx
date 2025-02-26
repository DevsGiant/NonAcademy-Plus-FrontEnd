import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import React, { useState } from "react";
import "./pdfStyle.css";

const PdfViewer = ({ pdfUrl, waterMark }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // State to trigger retries or handle loading
  const [retryCount, setRetryCount] = useState(0);

  // Function to handle PDF load failure
  const handleLoadFailure = (error) => {
    console.error("Failed to load PDF:", error);

    // Retry after 2 seconds, limit retries to avoid infinite loop
    if (retryCount < 3) {
      setTimeout(() => setRetryCount((prev) => prev + 1), 2000);
    } else {
      console.log("Max retry attempts reached.");
    }
  };

  return (
    <div>
      <div className="watermark">{waterMark}</div>
      {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"> */}
      {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js"> */}
      <Worker workerUrl="/pdf/pdf.worker.min.js">
        <Viewer
          fileUrl={pdfUrl}
          plugins={[defaultLayoutPluginInstance]}
          onDocumentLoadFail={handleLoadFailure} // Handle load failures
          key={retryCount} // Force re-render on retry
        />
      </Worker>
    </div>
  );
};

export default PdfViewer;
