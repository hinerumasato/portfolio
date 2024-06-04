import { Accordion } from 'react-bootstrap';
import React from 'react';

export const AccordionItem = ({header = 'Accordion Item', body = 'Nothing here', eventKey}: {header?: string | React.ReactNode, body?: React.ReactNode, eventKey: string}) => {
    return (
        <Accordion.Item eventKey={eventKey} style={{ textAlign: 'left' }}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>
                {body}
            </Accordion.Body>
        </Accordion.Item>
    );
}
