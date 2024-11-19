import InfoHeader from "./components/InfoHeader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CompaniesPage from "./components/CompaniesPage";
import CoursesCategory from "./components/CoursesCategory";
import Achivements from "./components/Achivements";
import Courses from "./components/Courses";
import OurTeam from "./components/OurTeam";
import CustomerTestimonial from "./components/CustomerTestimonial";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <InfoHeader />
      <Header />
      <Hero />
      <CompaniesPage />
      <CoursesCategory />
      <Achivements />
      <Courses />
      <OurTeam />
      <CustomerTestimonial />
      <Footer />
    </div>
  );
}
