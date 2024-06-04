import { AccordiconHeader } from "@/components/vendors/Accordion"

export const UdemyVI = () => {}

UdemyVI.Title = () => {
    return (
        <AccordiconHeader title="Udemy - Dự án Học tập Cá nhân" startDate="06-2023" endDate="10-2023" />
    )
}

UdemyVI.Body = () => {
    return (
        <ul>
            <li><strong>Project:</strong> Udemy - Dự án Học tập Cá nhân</li>
            <li><strong>Link github:</strong> <a href="https://github.com/hinerumasato/udemy">https://github.com/hinerumasato/udemy</a></li>
            <li><strong>Công nghệ sử dụng:</strong>
                <ul>
                    <li><strong>Front-end:</strong> JSP, JSTL, Bootstrap</li>
                    <li><strong>Back-end:</strong> Java Servlet</li>
                </ul>
            </li>
            <li><strong>Số lượng thành viên:</strong> 1 (Dự án tự học cá nhân)</li>
            <li><strong>Mô tả:</strong>
                <ul>
                    <li>CRUD cho tất cả các bảng</li>
                    <li>Xác thực người dùng và đăng nhập bằng Facebook và Google</li>
                    <li>Xử lý thanh toán trực tuyến</li>
                    <li>Xác minh tài khoản qua email sử dụng giao thức SMTP và thư viện Java Mail</li>
                    <li>Tải tệp lên bằng AJAX</li>
                </ul>
            </li>
            <li><strong>Chi tiết bổ sung:</strong>
                <ul>
                    <li>Dự án này được phát triển như một bài tập học tập cá nhân để có được kinh nghiệm thực tế với các công nghệ phát triển web khác nhau.</li>
                    <li>Dự án thể hiện khả năng xây dựng ứng dụng web toàn diện với chức năng CRUD, xác thực người dùng, tích hợp thanh toán trực tuyến và xác minh qua email.</li>
                    <li>Dự án sử dụng một loạt các công nghệ phát triển web phổ biến, bao gồm HTML, CSS, JavaScript, JSP, Java Servlet, giao thức SMTP và thư viện Java Mail.</li>
                </ul>
            </li>
        </ul>
    )
}
