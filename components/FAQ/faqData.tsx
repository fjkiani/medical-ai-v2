import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "What is MedicalAI's X-ray analysis platform?",
    ans: "MedicalAI's X-ray analysis platform is an AI-powered solution designed to analyze chest X-rays rapidly and accurately. It leverages advanced deep learning algorithms to detect abnormalities such as pneumonia, lung nodules, and other chest conditions, providing healthcare professionals with instant preliminary reports.",
  },
  {
    id: 2,
    quest: "What is the accuracy rate of the AI algorithms?",
    ans: "MedicalAI's algorithms achieve an accuracy rate of approximately 95% in detecting pneumonia and other abnormalities, matching or exceeding the performance of experienced radiologists.",
  },
  {
    id: 3,
    quest: "MedicalAI integration with existing  systems?",
    ans: "MedicalAI's solution is designed for seamless integration with existing PACS (Picture Archiving and Communication Systems) and RIS (Radiology Information Systems). It supports standard protocols such as DICOM and HL7, ensuring compatibility with 98% of current systems.",
  },
  {
    id: 4,
    quest: "Is patient data secure with MedicalAI?",
    ans: "Yes, patient data security is our top priority. Our platform is 100% HIPAA compliant and employs end-to-end encryption for data at rest and in transit. We also implement strict access controls and regular security audits.",
  },
  {
    id: 5,
    quest: "Can the AI learn and improve over time?",
    ans: "Absolutely! Our platform incorporates a continuous learning mechanism. As radiologists provide feedback and new data is introduced, the AI algorithms are updated to improve accuracy and adapt to emerging medical knowledge.",
  },
  {
    id: 5,
    quest: "What types of abnormalities can the AI detect?",
    ans: "MedicalAI's platform is currently trained to detect Pneumonia but we have future plans to also include Lung nodules, Fractures, Cardiomegaly, and Cancer  ",
  },
];

export default faqData;
