

export default Image;

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

import Cert1 from "/assets/cert/challenge.png"; 
import Cert2 from "/assets/cert/b2.png"; 
import Cert3 from "/assets/cert/a1a3.png"; 
import Cert4 from "/assets/cert/aws1.png";
import Cert5 from "/assets/cert/kub.png";
import Cert6 from "/assets/cert/docker.png";
import Cert7 from "/assets/cert/google.png";

export const listTools = [
  { id: 1, gambar: Tools1, nama: "Visual Studio", ket: "Code Editor", dad: "100" },
  { id: 2, gambar: Tools2, nama: "GitHub", ket: "Repository", dad: "200" },
  { id: 3, gambar: Tools3, nama: "Java", ket: "Languages", dad: "300" },
  { id: 4, gambar: Tools4, nama: "Python", ket: "Languages", dad: "400" },
  { id: 12, gambar: Tools12, nama: "JavaScript", ket: "Web Language", dad: "450" }, 
  { id: 13, gambar: Tools13, nama: "CSS", ket: "Styling", dad: "480" },            
  { id: 5, gambar: Tools5, nama: "SQL", ket: "Database", dad: "500" },
  { id: 14, gambar: Tools14, nama: "Roboflow", ket: "Computer Vision Tool", dad: "550" },
  { id: 15, gambar: Tools15, nama: "GAN", ket: "Generative Adversarial Networks", dad: "610" },
  { id: 6, gambar: Tools6, nama: "Ngrok", ket: "Network Tool", dad: "650" },
  { id: 7, gambar: Tools7, nama: "Cryptography", ket: "Security", dad: "700" },
  { id: 8, gambar: Tools8, nama: "Agisoft Metashape", ket: "Photogrammetry Software", dad: "900" },
  { id: 9, gambar: Tools9, nama: "Pix4Dmapper", ket: "Photogrammetry Software", dad: "1200" },
  { id: 10, gambar: Tools10, nama: "Instance Segmentation", ket: "Computer Vision", dad: "1000" },
  { id: 11, gambar: Tools11, nama: "Yolov26", ket: "AI Model", dad: "1100" },
];

// --- SEZIONE PROGETTI (In ordine cronologico decrescente) ---
import Proyek1 from "/assets/project/super.png"; 
import Proyek2 from "/assets/project/super.png"; 
import Proyek3 from "/assets/project/artigiano.png"; 
import Proyek4 from "/assets/project/super.png"; 

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Solar Panel Detection",
    subtitle: "A Computer Vision project using advanced AI models...",
    fullDescription: "An advanced computer vision project focused on analyzing and detecting solar panels using state-of-the-art foundational models like MaskDINO. This system aims to automate the inspection and anomaly detection processes for solar energy infrastructure.",
    anno: "Present",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://github.com/Alex111145/Solar_Panel/tree/dino(nvidia2)",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Image Super Resolution",
    subtitle: "A Deep Learning model designed to upscale and enhance image quality...",
    fullDescription: "A Deep Learning project that implements Super Resolution techniques to reconstruct high-resolution images from low-resolution inputs. This model utilizes advanced neural networks to improve image clarity, making it highly useful for digital media enhancement, medical imaging, and pattern recognition.",
    anno: "2026",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://github.com/Alex111145/SuperResolution",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Artigianato Online",
    subtitle: "An e-commerce web platform dedicated to local artisans...",
    fullDescription: "A full-stack web application built to support local artisans by providing them with a dedicated e-commerce platform. It features a user-friendly interface for browsing unique handcrafted items, a secure checkout process, and an intuitive dashboard for sellers to easily manage their inventory and orders.",
    anno: "2024",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Alex111145/ArtigianatoOnline",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Book Recommender System",
    subtitle: "A Machine Learning recommendation engine for book enthusiasts...",
    fullDescription: "A Machine Learning-based recommendation system that suggests books to users by analyzing reading patterns, ratings, and preferences. Using collaborative filtering and content-based approaches, it delivers highly personalized reading lists to enhance the user experience and discoverability.",
    anno: "2024",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Alex111145/BookRecommender",
    dad: "400",
  }
];

// --- SEZIONE CERTIFICATIONS (In ordine cronologico decrescente) ---
export const listCertifications = [
  { id: 1, gambar: Cert7, nama: "Google Cloud ML", ket: "Professional Engineer", anno: "2026", dad: "100" },
  { id: 2, gambar: Cert4, nama: "AWS Machine Learning", ket: "Specialty Certification", anno: "2026", dad: "200" },
  { id: 3, gambar: Cert6, nama: "Docker", ket: "DevOps Certification", anno: "2026", dad: "300" },
  { id: 4, gambar: Cert5, nama: "Kubernetes", ket: "Container Orchestration", anno: "2026", dad: "400" },
  { id: 5, gambar: Cert3, nama: "A1/A3 Open Category", ket: "UAS/Drone Pilot License", anno: "2026", dad: "500" },
  { id: 6, gambar: Cert2, nama: "B2 English", ket: "Language Certification", anno: "2025", dad: "600" },
  { id: 7, gambar: Cert1, nama: "Coding Challenge", ket: "Achievement / Award", anno: "2023", dad: "700" },
];