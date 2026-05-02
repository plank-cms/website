import { ProseRenderer } from "@/components/ProseRenderer";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { AccordionWrapItem } from "@/types";

interface Props {
  items: AccordionWrapItem[];
}

export function AccordionWrap({ items }: Props) {
  return (
    <Accordion type="single" collapsible>
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>
            {item.label}
          </AccordionTrigger>
          <AccordionContent>
            <ProseRenderer content={item.content} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
