export const projects = {
  kicker: "Featured Projects",
  title: "Case studies built around automation, APIs, and AI architecture.",
  items: [
    {
      id: "letter-lyzer",
      title: "Letter Lyzer Development System",
      category: "Banking Automation",
      image: "/assets/project-letter-lyzer.png",
      alt: "Abstract data extraction pipeline interface",
      description:
        "Built a configuration-driven data extraction pipeline for a banking client, processing raw text across 20+ applications with dynamic JSON-based transformation logic.",
      facts: [
        { label: "Impact", value: "80% manual effort reduction" },
        { label: "Architecture", value: "Centralized rules with configurable extraction logic" },
        { label: "Stack", value: "Python, JSON, Text Parsing, Data Transformation" },
      ],
    },
    {
      id: "ocr",
      title: "Automated OCR Document Processing System",
      category: "Azure AI",
      image: "/assets/project-ocr.png",
      alt: "Abstract OCR document processing interface",
      description:
        "Developed document automation pipelines using Azure OCR, AI services, REST APIs, and GenAI components for validation, extraction, and frontend integration.",
      facts: [
        { label: "Impact", value: "75% document workflow efficiency gain" },
        { label: "Architecture", value: "Secure cloud processing with Blob Storage and Key Vault" },
        { label: "Stack", value: "Python, FastAPI, Flask, Azure Cloud" },
      ],
    },
    {
      id: "emotion",
      title: "Dynamic Emotion Recognition System",
      category: "Deep Learning",
      image: "/assets/project-emotion.png",
      alt: "Abstract computer vision face detection interface",
      description:
        "Created a real-time computer vision system that detects multiple faces, classifies emotions, and logs timestamped outputs through a Flask-based interface.",
      facts: [
        { label: "Dataset", value: "35,000+ training images" },
        { label: "Model", value: "VGG-19 with 61.7% classification accuracy" },
        { label: "Stack", value: "Python, Computer Vision, Flask, HTML, CSS, JavaScript" },
      ],
    },
    {
      id: "ssis-etl",
      title: "SSIS Data Integration Package",
      category: "SQL Server ETL",
      image: "/assets/project-ssis.png",
      alt: "Abstract ETL data pipeline and database workflow interface",
      description:
        "Designed and deployed SSIS packages in SQL Server Management Studio to automate data extraction, transformation, and loading across enterprise databases using stored procedures and scheduled job workflows.",
      facts: [
        { label: "Impact", value: "Reliable batch processing with reduced manual data handling" },
        { label: "Architecture", value: "SSIS control/data flows orchestrated with SQL stored procedures" },
        { label: "Stack", value: "SSMS, SSIS, SQL Server, T-SQL Stored Procedures" },
      ],
    },
  ],
};
