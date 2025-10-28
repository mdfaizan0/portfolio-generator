import Template1 from "../components/Template1";
import Template2 from "../components/Template2";

export const templates = {
  template1: {
    title: "Template 1",
    image: "https://dummyimage.com/300x200/ccc/000000&text=Template+1",
    component: Template1
  },
  template2: {
    title: "Template 2",
    image: "https://dummyimage.com/300x200/ccc/000000&text=Template+2",
    component: Template2
  }
}

export const formStructure = {
  template: "",
  professionalInfo: {
    name: "",
    title: "",
    tagline: "",
    profileImage: ""
  },
  aboutMe: {
    bio: "",
    email: "",
    phone: "",
    location: "",
    socials: []
  },
  skills: Array(5).fill(""),
  services: [],
  portfolio: [],
  testimonials: [],
  blog: {
    title: "",
    summary: ""
  },
  contact: {
    messageText: "",
    email: "",
    phone: ""
  }
}

export const demoObj = {
  professionalInfo: {
    name: "John Doe",
    title: "Full Stack Developer",
    tagline: "Building modern web experiences",
    profileImage: "https://via.placeholder.com/150"
  },
  aboutMe: {
    bio: "I am a passionate developer with experience in React and Node.js.",
    email: "john@example.com",
    phone: "+1234567890",
    location: "New York, USA",
    socials: ["https://github.com/johndoe", "https://linkedin.com/in/johndoe"]
  },
  skills: ["React", "Node.js", "JavaScript", "CSS", "HTML"],
  services: [
    { title: "Web Development", description: "Building responsive web apps" },
    { title: "API Integration", description: "Seamless backend integration" },
    { title: "UI/UX Design", description: "Designing user-friendly interfaces" }
  ],
  portfolio: [
    { title: "Project One", image: "https://via.placeholder.com/200", description: "A sample project" },
    { title: "Project Two", image: "https://via.placeholder.com/200", description: "Another sample project" },
    { title: "Project Three", image: "https://via.placeholder.com/200", description: "Yet another sample project" }
  ],
  testimonials: [
    { client: "Client A", quote: "Great work and professional!" },
    { client: "Client B", quote: "Delivered on time and exceeded expectations." }
  ],
  blog: { title: "My Journey", summary: "Sharing my experience as a developer." },
  contact: { messageText: "Feel free to reach out!", email: "john@example.com", phone: "+1234567890" }
};