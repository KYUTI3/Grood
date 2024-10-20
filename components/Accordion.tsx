import { Accordion, AccordionItem } from "@nextui-org/accordion";

const accOne = "Grood is a Typing Test Simulator that helps you improve on your typing!"
const accTwo = "Grood works by collecting your performance and running it throught an LLM to help grade you!"

const Accord = () => (
  <div> 
    <Accordion>
    <AccordionItem key="1" aria-label="Accordion 1" title="What is Grood really">
    {accOne}
    </AccordionItem>
    <AccordionItem key="2" aria-label="Accordion 2" title="How does it work?">
    {accTwo}
    </AccordionItem>
    </Accordion>
    </div> 

)

export default Accord