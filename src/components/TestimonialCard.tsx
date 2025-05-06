
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

const TestimonialCard = ({ quote, name, title, image }: TestimonialCardProps) => {
  return (
    <Card className="p-6 md:p-8 shadow-md bg-white h-full flex flex-col">
      <div className="flex-grow">
        <svg
          className="h-8 w-8 text-brand-blue mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H10V18H0Z" />
        </svg>
        <p className="text-lg text-gray-700 mb-4">{quote}</p>
      </div>
      <div className="flex items-center mt-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-10 w-10 rounded-full mr-3 object-cover"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-brand-softBlue mr-3 flex items-center justify-center">
            <span className="text-brand-blue font-semibold">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-brand-darkText">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
