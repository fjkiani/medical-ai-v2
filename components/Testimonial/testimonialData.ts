import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Herman Jensen",
    designation: "MD",
    image: image1,
    content:
      "AI won't replace doctors, but doctors who use AI will replace doctors who do not",
  },
  {
    id: 2,
    name: "Steve Mark",
    designation: "Chief Radiologist",
    image: image2,
    content:
      "AI technology may also help primary care physicians care for patients without needing the assistance of specialists. It will free up specialist time to focus on the more complex cases rather than the ones that could be answered through a few questions",
  },
  {
    id: 3,
    name: "Kenn Gallagher",
    designation: "Resident",
    image: image1,
    content:
      "Artificial intelligence has the potential to revolutionize medicine and improve the detection, diagnosis and treatment of breast cancer. Some of the potential consequences of using AI in medicine include early detection. AI can help detect breast cancer at its earliest stages, which would increase survival rates and improve treatment outcomes.",
  },
  {
    id: 4,
    name: "Rahima Nayeem",
    designation: "MD",
    image: image2,
    content:
      "It takes doctors on average hours to days to wait for x-rays. Instant access to results can help improve patient care. ",
  },
];
