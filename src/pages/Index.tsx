import Hero from "@/components/Hero";
import SubsidyInfo from "@/components/SubsidyInfo";
import EligibilityCriteria from "@/components/EligibilityCriteria";
import DocumentsList from "@/components/DocumentsList";
import FrequentQuestions from "@/components/FrequentQuestions";
import ContactInfo from "@/components/ContactInfo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SubsidyInfo />
      <EligibilityCriteria />
      <DocumentsList />
      <FrequentQuestions />
      <ContactInfo />
    </div>
  );
};

export default Index;
