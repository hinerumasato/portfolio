import { AccordiconHeader } from "@/components/vendors/Accordion"

export const UdemyUS = () => {}

UdemyUS.Title = () => {
    return (
        <AccordiconHeader title="Website Udemy" startDate="06-2023" endDate="10-2023" />
    )
}

UdemyUS.Body = () => {
    return (
        <ul>
            <li><strong>Project:</strong> Udemy Project - Personal Learning Project</li>
            <li><strong>Project Link:</strong> <a href="https://github.com/hinerumasato/udemy">https://github.com/hinerumasato/udemy</a></li>
            <li><strong>Technologies Used:</strong>
                <ul>
                    <li><strong>Front-end:</strong> JSP, JSTL, Bootstrap</li>
                    <li><strong>Back-end:</strong> Java Servlet</li>
                </ul>
            </li>
            <li><strong>Team Size:</strong> 1 (Individual self-learning project)</li>
            <li><strong>Description:</strong>
                <ul>
                    <li>CRUD operations for all tables</li>
                    <li>User authentication and login with Facebook and Google</li>
                    <li>Online payment processing</li>
                    <li>Account verification via email using SMTP protocol and Java Mail library</li>
                    <li>Uploading File using AJAX</li>
                </ul>
            </li>
            <li><strong>Additional Details:</strong>
                <ul>
                    <li>This project was developed as a personal learning exercise to gain hands-on experience with various web development technologies.</li>
                    <li>The project demonstrates the ability to build a full-stack web application with CRUD functionality, user authentication, online payment integration, and email verification.</li>
                    <li>The project utilizes a variety of popular web development technologies, including HTML, CSS, JavaScript, JSP, Java Servlet, SMTP protocol, and Java Mail library.</li>
                </ul>
            </li>
        </ul>
    )
}
