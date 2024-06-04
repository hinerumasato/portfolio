import { useContext } from "react";
import { context } from "@/store/context";
import { IState } from "@/interface";
import { AccordionItem } from "@/components/vendors/Accordion";
import { Accordion } from "react-bootstrap";

export const Experience = () => {

    const [state] = useContext(context) as [IState];
    const projects = state.dictionary.experience.projects;

    return (
        <section id="portfolio" className="mt-3">
            <div className="container text-center">
                <h6 className="section-title mb-4">{state.dictionary.experience.title}</h6>
                <h6 className="subtitle">{state.dictionary.experience.subtitle}</h6>
                <Accordion defaultActiveKey="0" className="mt-4">
                    {projects && projects.map((project, index) => (
                        <AccordionItem eventKey={String(index)} key={index} header={project.title} body={project.content} />
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
