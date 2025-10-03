import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQLayoutProps {
  items: FAQItem[];
}

const FAQLayout = ({ items }: FAQLayoutProps) => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-white border border-sky-100 rounded-lg px-6 shadow-sm"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-sky-600 py-6">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed pb-6">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQLayout;
