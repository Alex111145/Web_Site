import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

// --- IMPORTAZIONE DELLE ICONE DEGLI STRUMENTI ---
// Nota: Assicurati che questi file esistano nella cartella public/assets/tools/
import Tools1 from "/assets/tools/vscode.png";       // Esiste già
import Tools2 from "/assets/tools/github.png";  
import Tools3 from "/assets/tools/java.png";       // Esiste già        // DA AGGIUNGERE: uas.png
import Tools4 from "/assets/tools/python.png";  // DA AGGIUNGERE: python-java.png
import Tools5 from "/assets/tools/mysql.png";        // Uso l'icona mysql.png che hai già per SQL
import Tools6 from "/assets/tools/ngrok.png";        // DA AGGIUNGERE: ngrok.png
import Tools7 from "/assets/tools/crypto.png";       // DA AGGIUNGERE: crypto.png
import Tools8 from "/assets/tools/docker.png";       // DA AGGIUNGERE: docker.png
import Tools9 from "/assets/tools/agisoft.png";      // DA AGGIUNGERE: agisoft.png
import Tools10 from "/assets/tools/ai.png";          // Esiste già, perfetta per Instance Segmentation
import Tools11 from "/assets/tools/yolo.png";        // DA AGGIUNGERE: yolo.png
import Tools12 from "/assets/tools/pix4d.png";     
export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "GitHub",
    ket: "Repository",
    dad: "200",
  },
   {
    id: 3,
    gambar: Tools3,
    nama: "Java",
    ket: "Programming Language",
    dad: "300",
  },

 
  {
    id: 4,
    gambar: Tools4,
    nama: "Python - Java",
    ket: "Languages",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "SQL",
    ket: "Database",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Ngrok",
    ket: "Network Tool",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Cryptography",
    ket: "Security",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Docker",
    ket: "DevOps",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Agisoft Metashape - Pix4Dmapper",
    ket: "Photogrammetry Software",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Instance Segmentation",
    ket: "Computer Vision",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Yolov26",
    ket: "AI Model",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Pix4Dmapper",
    ket: "Photogrammetry Software",
    dad: "1200",
  }
];

// --- SEZIONE PROGETTI (Rimasta invariata) ---
import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "AIS Detection App",
    subtitle: "A mobile application powered by Artificial Intelligence...",
    fullDescription:"A mobile application powered by Artificial Intelligence and Machine Learning, developed to assist in the early detection of Adolescent Idiopathic Scoliosis (AIS). By analyzing patient data and patterns, the app provides predictions that can help doctors and patients take preventive measures. This project demonstrates the role of AI in modern healthcare by improving accuracy, accessibility, and efficiency in medical diagnosis.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "IoT Air Quality Monitoring",
    subtitle: "A smart IoT system designed to measure and analyze air quality...",
    fullDescription:"A smart IoT system designed to measure and analyze air quality using sensors connected to a mobile application. The app provides real-time updates on air quality levels, empowering users to make healthier lifestyle decisions based on environmental conditions. This project showcases the potential of IoT in addressing environmental and public health issues.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "IoT Heartbeat Monitoring System",
    subtitle: "An IoT-based healthcare project developed to measure and monitor...",
    fullDescription:"An IoT-based healthcare project developed to measure and monitor heart rate in real-time. The system connects sensors to a local web server, enabling users and healthcare providers to track data directly from a web interface. This project highlights the integration of hardware and software to create efficient medical solutions that can be applied in local clinics or personal health monitoring.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Personal Web Portfolio",
    subtitle: "An interactive web portfolio showcasing my professional journey...",
    fullDescription:"An interactive web portfolio showcasing my professional journey, skills, and projects. Designed with a clean yet modern aesthetic, the portfolio highlights my technical expertise in web development, software engineering, and IoT. The site also serves as a central hub for potential employers and collaborators to explore my works, reflecting both my creativity and technical precision.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Color Blindness Detection App",
    subtitle: "A cross-platform application available on both mobile and desktop...",
    fullDescription:"A cross-platform application available on both mobile and desktop, created to help identify different types of color blindness through color recognition tests. The app provides users with instant results, making it useful for educational, medical, and self-assessment purposes. Its intuitive design and accessibility aim to support individuals in understanding and managing color vision deficiencies.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Coffee Shop Website",
    subtitle: "A fully functional website designed for a coffee shop, enabling...",
    fullDescription:"A fully functional website designed for a coffee shop, enabling customers to explore the menu, learn about the shop’s story, and place orders online. The project focused on creating an attractive and modern interface, integrating responsive design for mobile and desktop, and ensuring smooth navigation for users. This website not only improved customer experience but also supported the coffee shop’s digital presence and business growth.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "600",
  },
];