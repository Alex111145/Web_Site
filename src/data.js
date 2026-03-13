// --- IMPORTAZIONE DELLE ICONE DEGLI STRUMENTI ---
import Tools1 from "/assets/tools/vscode.png";       
import Tools2 from "/assets/tools/github.png";  
import Tools3 from "/assets/tools/java.png";       
import Tools4 from "/assets/tools/python.png";  
import Tools5 from "/assets/tools/mysql.png";        
import Tools6 from "/assets/tools/ngrok.png";        
import Tools7 from "/assets/tools/crypto.png";       
import Tools8 from "/assets/tools/agisoft.png";  
import Tools9 from "/assets/tools/pix4d.png";     
import Tools10 from "/assets/tools/rete.png";          
import Tools11 from "/assets/tools/yolo.png";        
import Tools12 from "/assets/tools/js.png"; 
import Tools13 from "/assets/tools/css.png";
import Tools14 from "/assets/tools/robo.png"; 
import Tools15 from "/assets/tools/rete.png";
import Tools16 from "/assets/tools/s3.png";
import Tools17 from "/assets/tools/termal.png";
import Tools18 from "/assets/tools/docker.png";
import Tools19 from "/assets/tools/kub.png";
import Tools20 from "/assets/tools/plc.jpg";
import Tools21 from "/assets/tools/runpod.png";
import Tools22 from "/assets/tools/amazonq.png";
import Tools23 from "/assets/tools/amazoniam.png";
import Tools24 from "/assets/tools/textract.png";


// --- IMPORTAZIONE LOGHI CERTIFICATI (Icone Griglia) ---
import Cert1 from "/assets/cert/challenge.png"; 
import Cert2 from "/assets/cert/b2.png"; 
import Cert3 from "/assets/cert/a1a3.png"; 
import Cert4 from "/assets/cert/aws3.png";
import Cert5 from "/assets/cert/kub.png";
import Cert6 from "/assets/cert/docker.png";
import Cert7 from "/assets/cert/google.png";
import Cert8 from "/assets/cert/aws1.png";
import Cert9 from "/assets/cert/aws2.png";
import Cert10 from "/assets/cert/plcprog.png";
import Cert11 from "/assets/cert/nvidia.png";
import Cert13 from "/assets/cert/nvidia3.png";
import Cert14 from "/assets/cert/antropic1.png";

// --- IMPORTAZIONE IMMAGINI CERTIFICATI (Full Size per Modal) ---
import fullCert1 from "/assets/certificati/inglese.png"; 
import fullCert2 from "/assets/certificati/drone.png"; 
import fullCert3 from "/assets/certificati/cyber.png";
import fullCert4 from "/assets/certificati/AIpractitioner.png";  

export const listTools = [
  { id: 1,  gambar: Tools1,  nama: "Visual Studio Code",    ket: "Code Editor",                      dad: "100",  done: true,  desc: "Primary development environment used for writing, debugging and managing code across multiple languages and frameworks." },
  { id: 2,  gambar: Tools2,  nama: "GitHub",                ket: "Repository",                        dad: "200",  done: true,  desc: "Version control platform used for source code management, collaboration and CI/CD pipelines." },
  { id: 3,  gambar: Tools3,  nama: "Java",                  ket: "Language",                          dad: "300",  done: true,  desc: "Object-oriented language used for building robust backend applications, algorithms and university-level projects." },
  { id: 4,  gambar: Tools4,  nama: "Python",                ket: "Language",                          dad: "400",  done: true,  desc: "Main language for AI, Machine Learning and data science projects. Used with libraries such as TensorFlow, PyTorch and OpenCV." },
  { id: 12, gambar: Tools12, nama: "JavaScript",            ket: "Web Language",                      dad: "450",  done: true,  desc: "Used for building interactive web applications and frontend logic, including this portfolio." },
  { id: 13, gambar: Tools13, nama: "CSS",                   ket: "Styling",                           dad: "480",  done: true,  desc: "Used for designing responsive and modern user interfaces, including animations and layout systems like Flexbox and Grid." },
  { id: 5,  gambar: Tools5,  nama: "SQL",                   ket: "Database",                          dad: "500",  done: true,  desc: "Used for relational database design and querying in both academic and personal projects." },
  { id: 14, gambar: Tools14, nama: "Roboflow",              ket: "Computer Vision Tool",              dad: "550",  done: true,  desc: "Platform used to label, augment and export datasets for training custom object detection and segmentation models." },
  { id: 15, gambar: Tools15, nama: "GAN",                   ket: "Generative Adversarial Networks",   dad: "610",  done: true,  desc: "Applied generative deep learning techniques for image synthesis and data augmentation in AI research projects." },
  { id: 6,  gambar: Tools6,  nama: "Ngrok",                 ket: "Network Tool",                      dad: "650",  done: true,  desc: "Used to expose local servers to the internet for testing webhooks, APIs and remote demos." },
  { id: 7,  gambar: Tools7,  nama: "Cryptography",          ket: "Security",                          dad: "700",  done: true,  desc: "Applied symmetric and asymmetric encryption, hashing and digital signatures in cybersecurity coursework and projects." },
  { id: 8,  gambar: Tools8,  nama: "Agisoft Metashape",     ket: "Photogrammetry Software",           dad: "900",  done: true,  desc: "Professional photogrammetry software used to process aerial drone imagery into 3D models and orthophotos." },
  { id: 9,  gambar: Tools9,  nama: "Pix4Dmapper",           ket: "Photogrammetry Software",           dad: "1200", done: true,  desc: "Used for mapping and surveying workflows, generating point clouds and digital surface models from drone imagery." },
  { id: 10, gambar: Tools10, nama: "Instance Segmentation", ket: "Computer Vision",                   dad: "1000", done: true,  desc: "Implemented instance segmentation pipelines to detect and delineate individual objects in images at pixel level." },
  { id: 11, gambar: Tools11, nama: "YOLOv8",                ket: "AI Model",                          dad: "1100", done: true,  desc: "State-of-the-art real-time object detection model used in computer vision projects for fast and accurate inference." },
  { id: 16, gambar: Tools16, nama: "Amazon S3",             ket: "Cloud Storage",                     dad: "1300", done: false,  desc: "AWS object storage service used to store and serve datasets, model artifacts and static assets in the cloud." },
  { id: 17, gambar: Tools17, nama: "Thermal Vision",        ket: "Hardware & Sensing",                dad: "1400", done: true,  desc: "Thermal imaging technology used to detect heat signatures and temperature variations invisible to the naked eye. Commonly applied in industrial inspection, building diagnostics, search and rescue, medical imaging and security surveillance." },
  { id: 18, gambar: Tools18, nama: "Docker",                ket: "Containerization",                  dad: "1500", done: false, desc: "Platform used to build, ship and run applications in lightweight containers, ensuring consistent environments across development, testing and production." },
  { id: 19, gambar: Tools19, nama: "Kubernetes",            ket: "Container Orchestration",           dad: "1600", done: false, desc: "Open-source system for automating deployment, scaling and management of containerized applications across clusters of machines." },
  { id: 20, gambar: Tools20, nama: "PLC Programming",       ket: "Industrial Automation",             dad: "1700", done: false, desc: "Programmable Logic Controllers are used to automate industrial processes and machinery. PLC programming enables real-time control of production lines, robotics, SCADA systems and critical infrastructure in manufacturing and energy sectors." },
  { id: 21, gambar: Tools21, nama: "RunPod",               ket: "GPU Cloud Platform",                dad: "1800", done: true,  desc: "Cloud platform for renting on-demand and spot GPUs to train, fine-tune and deploy machine learning models at scale without managing physical infrastructure." },
  { id: 22, gambar: Tools22, nama: "Amazon Q Business",   ket: "AI Assistant",                      dad: "1900", done: false, desc: "AWS generative AI-powered assistant that connects to enterprise data sources to answer questions, summarize content and automate tasks across business applications." },
  { id: 23, gambar: Tools23, nama: "IAM Identity Center", ket: "AWS Security",                     dad: "2000", done: false, desc: "AWS service for centrally managing workforce identities and access to multiple AWS accounts and applications through single sign-on." },
  { id: 24, gambar: Tools24, nama: "Amazon Textract",    ket: "Document AI",                       dad: "2100", done: false, desc: "AWS machine learning service that automatically extracts text, handwriting and structured data from scanned documents, PDFs and images without manual configuration." },
];

// --- SEZIONE PROGETTI ---
import Project1 from "/assets/project/solar.png"; 
import Project2 from "/assets/project/super.png"; 
import Project3 from "/assets/project/artigiano.png"; 
import Project4 from "/assets/project/biblo.png"; 

export const listProyek = [
  {
    id: 1,
    image: Project1,
    title: "Solar Panel Detection",
    subtitle: "A Computer Vision project using advanced AI models...",
    fullDescription: "This project implements a high-precision instance segmentation framework for solar energy monitoring. Utilizing multispectral aerial datasets acquired via UAVs.",
    anno: "Present",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://github.com/Alex111145/Solar_Panel/tree/dino(nvidia2)",
    dad: "100",
  },
  {
    id: 2,
    image: Project2,
    title: "Image Super Resolution",
    subtitle: "A Deep Learning model designed to upscale and enhance image quality...",
    fullDescription: "This project explores advanced Deep Learning architectures for Single Image Super-Resolution (SISR).",
    anno: "2026",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://github.com/Alex111145/SuperResolution",
    dad: "200",
  },
  {
    id: 3,
    image: Project3,
    title: "Artigianato Online",
    subtitle: "An e-commerce web platform dedicated to local artisans...",
    fullDescription: "A full-stack web application built to support local artisans by providing them with a dedicated e-commerce platform.",
    anno: "2025",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Alex111145/ArtigianatoOnline",
    dad: "300",
  },
  {
    id: 4,
    image: Project4,
    title: "Book Recommender",
    subtitle: "A recommendation engine for book enthusiasts...",
    fullDescription: "A recommendation system that suggests books to users by analyzing reading patterns.",
    anno: "2024",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Alex111145/BookRecommender",
    dad: "400",
  }
];

// --- SEZIONE CERTIFICATIONS ---
export const listCertifications = [
  { id: 1,  gambar: Cert7,  certImage: null,      nama: "Google Cloud ML",                  ket: "Professional Engineer",        anno: "2026", dad: "100",  subtitle: "Designing and deploying ML models on Google Cloud with MLOps and TensorFlow.",           desc: "Validates advanced expertise in designing and deploying machine learning models on Google Cloud infrastructure, covering MLOps, TensorFlow and scalable AI pipelines." },
  { id: 2,  gambar: Cert4,  certImage: null,      nama: "AWS Machine Learning",             ket: "Specialty Certification",      anno: "2026", dad: "200",  subtitle: "Advanced ML on AWS covering data engineering, modeling and full pipeline implementation.",  desc: "Demonstrates deep knowledge of AWS machine learning services, covering data engineering, exploratory data analysis, modeling and ML implementation on the AWS platform." },
  { id: 9,  gambar: Cert9,  certImage: null,      nama: "AWS Machine Learning Engineer",    ket: "Associate Certification",      anno: "2026", dad: "900",  subtitle: "Building, training and deploying ML models with SageMaker across the full ML lifecycle.",  desc: "Certifies the ability to build, train, tune and deploy ML models using AWS services such as SageMaker, covering the full ML lifecycle from data preparation to production." },
  { id: 8,  gambar: Cert8,  certImage: fullCert4, nama: "AWS Certified AI Practitioner",   ket: "Foundational Certification",   anno: "2026", dad: "800",  subtitle: "Core AWS AI/ML services, responsible AI principles and generative AI use cases.",         desc: "Foundational certification validating knowledge of AI and ML concepts on AWS, including core services, responsible AI principles and practical use cases for generative AI solutions." },
  { id: 3,  gambar: Cert6,  certImage: null,      nama: "Docker",                           ket: "DevOps Certification",         anno: "2026", dad: "300",  subtitle: "Containerization with Docker: image building, networking and consistent deployments.",      desc: "Certifies proficiency in containerization with Docker, covering image building, container orchestration, networking and best practices for packaging and deploying applications consistently." },
  { id: 10, gambar: Cert10, certImage: null,      nama: "PLC Programming",                  ket: "Industrial Automation Cert",   anno: "2025", dad: "1000", subtitle: "Ladder logic and function blocks for real-time control of industrial machinery.",           desc: "Validates skills in programming Programmable Logic Controllers for industrial automation, covering ladder logic, function blocks and real-time control of machinery and production systems." },
  { id: 4,  gambar: Cert5,  certImage: null,      nama: "Kubernetes",                       ket: "Container Orchestration",      anno: "2026", dad: "400",  subtitle: "Deploying and managing containerized workloads with Kubernetes in production clusters.",   desc: "Certifies expertise in deploying, scaling and managing containerized applications with Kubernetes, covering cluster architecture, workloads, networking and storage in production environments." },
  { id: 5,  gambar: Cert3,  certImage: fullCert2, nama: "A1/A3 Open Category",             ket: "UAS/Drone Pilot License",      anno: "2026", dad: "500",  subtitle: "EU EASA drone pilot license for A1/A3 operations, aerial surveys and data collection.",   desc: "Official EU drone pilot license for Open Category A1 and A3 operations, authorizing the flight of unmanned aerial vehicles in compliance with EASA regulations for aerial surveys and data collection." },
  { id: 6,  gambar: Cert2,  certImage: fullCert1, nama: "B2 English",                      ket: "Language Certification",       anno: "2025", dad: "600",  subtitle: "Upper-intermediate English: complex texts, fluent communication and technical writing.",   desc: "Upper-intermediate English language certification demonstrating the ability to understand complex texts, communicate fluently and produce detailed written content on technical and professional topics." },
  { id: 7,  gambar: Cert1,  certImage: fullCert3, nama: "Coding Challenge",                ket: "Achievement / Award",          anno: "2024", dad: "700",  subtitle: "Competitive coding award for algorithmic problem-solving under time constraints.",          desc: "Award earned by placing in a competitive coding challenge, demonstrating problem-solving skills, algorithmic thinking and the ability to deliver efficient solutions under time constraints." },
  { id: 11, gambar: Cert11, certImage: null,      nama: "Agentic AI Professional",         ket: "NVIDIA Certification",         anno: "2026", dad: "1100", subtitle: "Multi-agent architectures, tool use and autonomous reasoning pipelines for enterprise AI.",  desc: "NVIDIA certification covering the design and deployment of agentic AI systems, including multi-agent architectures, tool use, memory and autonomous reasoning pipelines for enterprise applications." },
  { id: 13, gambar: Cert13, certImage: null,      nama: "Professional Gen AI LLMs",        ket: "NVIDIA Certification",         anno: "2026", dad: "1300", subtitle: "Fine-tuning, RAG architectures and deploying LLM-powered applications at scale.",           desc: "NVIDIA certification validating expertise in large language models and generative AI, covering fine-tuning, prompt engineering, RAG architectures and deploying LLM-powered applications at scale." },
  { id: 14, gambar: Cert14, certImage: null,      nama: "Intro to Model Context Protocol", ket: "Anthropic Certification",      anno: "2026", dad: "1400", subtitle: "Building MCP servers and clients to connect AI models with external tools and data sources.", desc: "Anthropic certification covering the Model Context Protocol standard for connecting AI models with external tools, APIs and data sources, enabling context-aware and tool-augmented AI applications." },
  { id: 15, gambar: Cert14, certImage: null,      nama: "Claude with Amazon Bedrock",      ket: "Anthropic Certification",      anno: "2026", dad: "1500", subtitle: "Deploying and integrating Claude models on AWS Bedrock for production AI applications.",     desc: "Anthropic certification focused on deploying and integrating Claude models via Amazon Bedrock, covering API usage, prompt engineering, guardrails and building production-grade AI applications on AWS." },
  { id: 16, gambar: Cert14, certImage: null,      nama: "Building with the Claude API",    ket: "Anthropic Certification",      anno: "2026", dad: "1600", subtitle: "End-to-end development of AI applications using the Claude API and Anthropic SDK.",          desc: "Anthropic certification validating the ability to build end-to-end AI applications using the Claude API, covering authentication, tool use, streaming, prompt design and production deployment patterns." },
];