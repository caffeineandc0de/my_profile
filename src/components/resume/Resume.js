import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../Assets/Santos.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [pages, setPages] = useState([]);
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const loadPages = async () => {
      const loadingTask = pdfjs.getDocument(pdf);
      const pdfDocument = await loadingTask.promise;

      const pagePromises = [];
      for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber++) {
        pagePromises.push(pdfDocument.getPage(pageNumber));
      }

      const pages = await Promise.all(pagePromises);
      setPages(pages);
    };

    loadPages();
  }, []);

  useEffect(() => {
    if (pages.length > 0) {
      const container = canvasContainerRef.current;
      container.innerHTML = ''; // Clear previous canvases

      pages.forEach((page, index) => {
        const viewport = page.getViewport({ scale: width > 786 ? 1.7 : 0.6 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        container.appendChild(canvas);

        page.render({
          canvasContext: context,
          viewport: viewport,
        });
      });
    }
  }, [pages, width]);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume">
          <div className="pdf-container" ref={canvasContainerRef}></div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
      <style jsx>{`
        .pdf-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default ResumeNew;
