import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const AccordiconHeader = ({ title = 'Title', startDate = '01/01/1900', endDate = 'Now' } : { title?: string, startDate?: string, endDate?: string }) => {
    return (
        <div className="d-md-flex align-items-center justify-content-between w-100">
            <strong className="d-block">{title}</strong> 
            <small className="me-3 d-block">
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                <i>{startDate} / {endDate}</i>
            </small>
        </div>
    )
}
