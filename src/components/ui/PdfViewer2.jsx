"use client";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import { useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCompress,
  FaExpand,
  FaSearchMinus,
  FaSearchPlus,
} from "react-icons/fa"; // React Icons

// Set the workerSrc before loading the PDF document
if (typeof window !== "undefined") {
  GlobalWorkerOptions.workerSrc = "/pdf/pdf.worker.min.js"; // path to worker script
}

const PdfViewer2 = ({ pdfUrl }) => {
  const containerRef = useRef(null);
  const pdfViewerRef = useRef(null); // Ref for the PDF viewer container
  const [pdf, setPdf] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1.5);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const loadPdf = async () => {
      const loadedPdf = await getDocument(pdfUrl).promise;
      setPdf(loadedPdf);
    };
    loadPdf();
  }, [pdfUrl]);

  // Handle the rendering of the PDF when zoom, page, or fullscreen changes
  useEffect(() => {
    const renderPdf = async () => {
      if (!pdf || !containerRef.current) return;

      // Clear previous renderings in the container
      containerRef.current.innerHTML = "";

      const page = await pdf.getPage(currentPage);
      const viewport = page.getViewport({ scale: zoom });

      const canvas = document.createElement("canvas");
      containerRef.current.appendChild(canvas);

      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport,
      };

      await page.render(renderContext).promise;
    };

    renderPdf();
  }, [pdf, currentPage, zoom]);

  const goToNextPage = () => {
    if (currentPage < pdf.numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleFullscreen = () => {
    if (isFullscreen) {
      document?.exitFullscreen();
    } else {
      if (pdfViewerRef.current) {
        pdfViewerRef.current.requestFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const zoomIn = () => {
    const newZoom = Math.min(zoom + 0.2, 3); // Limit max zoom
    setZoom(newZoom);
  };

  const zoomOut = () => {
    const newZoom = Math.max(zoom - 0.2, 0.5); // Limit min zoom
    setZoom(newZoom);
  };

  // Fit PDF within the screen size in fullscreen
  useEffect(() => {
    if (isFullscreen && pdf) {
      const handleResize = async () => {
        if (pdfViewerRef.current) {
          const containerWidth = pdfViewerRef.current.offsetWidth;
          const containerHeight = pdfViewerRef.current.offsetHeight;

          // Ensure the page is loaded before trying to get the viewport
          const page = await pdf.getPage(currentPage);
          const viewport = page.getViewport({ scale: 1 });

          // Calculate zoom factor based on the container size
          const zoomFactor = Math.min(
            containerWidth / viewport.width,
            containerHeight / viewport.height,
          );

          setZoom(zoomFactor);
        }
      };

      // Resize when fullscreen is activated
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isFullscreen, currentPage, pdf]);

  return (
    <div
      className={`pdf-container ${isFullscreen ? "fullscreen" : ""}`}
      ref={pdfViewerRef}
    >
      <div className="mx-auto flex w-full max-w-full flex-col items-center  justify-between space-y-3 bg-gray-800 p-3 lg:flex-row">
        <div className="flex items-center gap-3">
          <button
            onClick={goToPreviousPage}
            className="rounded-full bg-gray-600 p-2 text-white hover:bg-gray-400"
          >
            <FaChevronLeft />
          </button>

          <div className="text-lg text-white">
            Page {currentPage} of {pdf?.numPages}
          </div>

          <button
            onClick={goToNextPage}
            className="rounded-full bg-gray-600 p-2 text-white hover:bg-gray-400"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={zoomOut}
            className="rounded-full bg-gray-600 p-2 text-white hover:bg-gray-400"
          >
            <FaSearchMinus />
          </button>
          <div className="text-white">{Math.round(zoom * 100)}%</div>
          <button
            onClick={zoomIn}
            className="rounded-full bg-gray-600 p-2 text-white hover:bg-gray-400"
          >
            <FaSearchPlus />
          </button>
          <button
            onClick={toggleFullscreen}
            className="rounded-full bg-gray-600 p-2 text-white hover:bg-gray-400"
          >
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col items-center overflow-x-scroll">
        {/* PDF Viewer */}
        <div
          ref={containerRef}
          className="relative mx-auto"
          style={{ maxWidth: isFullscreen ? "100vw" : "90vw" }}
        ></div>
      </div>
    </div>
  );
};

export default PdfViewer2;
