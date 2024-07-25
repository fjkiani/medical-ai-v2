import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Continuous learning capabilities are built on a sophisticated feedback loop system:",
    desc1: `MedicalAI incorporates a feedback loop that allows for continuous improvement of the AI models. As radiologists interact with the system and provide feedback, the algorithms learn and adapt, becoming more accurate over time.`,
    desc2: `    Radiologists can provide direct feedback on AI predictions through an intuitive interface integrated into their workflow`,
    image: "/images/features/learning.jpg",
    imageDark: "/images/features/learning.jpg",
  },
  {
    id: "tabTwo",
    title: "Built on a robust AWS cloud infrastructure, designed for high performance, scalability, and security:",
    desc1: `We implement AWS Key Management Service (KMS) for encryption key management, ensuring data protection at rest and in transit and complying with HIPAA standards`,
    desc2: ` S3 is used for secure, encrypted storage of X-ray images and associated metadata. Amazon EC2 instances with GPU acceleration for rapid inference, ensuring real-time analysis of X-ray images.`,
    image: "/images/features/cloud.jpg",
    imageDark: "/images/features/cloud.jpg",
  },
  {
    id: "tabThree",
    title: "Seamless integration with various healthcare IT systems and workflows",
    desc1: `DICOM Compatibility: Our solution fully supports the DICOM (Digital Imaging and Communications in Medicine) standard, enabling direct integration with PACS (Picture Archiving and Communication Systems) and modalities from all major vendors.`,
    desc2: `RESTful API: Our platform exposes a comprehensive RESTful API, enabling easy integration with third-party applications and custom workflows. This API supports various operations, including image upload, analysis requests, and result retrieval.`,
    image: "/images/features/integration.jpg",
    imageDark: "/images/features/integration.jpg",
  },
];

export default featuresTabData;
