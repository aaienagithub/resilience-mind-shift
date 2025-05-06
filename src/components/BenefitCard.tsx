
import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <Card className="p-6 bg-white hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="text-brand-blue mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-brand-darkText">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default BenefitCard;
