import { UdemyVI } from "@/components/projects/Udemy/UdemyVI";
import { IDictionary } from "../interface";

export const vn: IDictionary = {
    nav: {
        home: 'Trang chủ',
        about: 'Về tôi',
        service: 'Kỹ năng',
        projects: 'Projects',
        contact: 'Liên hệ',
    },
    header: {
        subtitle: `Xin chào, Tôi là`,
        title: `Trần Thắng Lợi`,
        position: `Fullstack Web Developer`,
        hire: `HIRE ME`,
        downloadCv: `TẢI CV CỦA TÔI`,
    },
    widget: {
        clients: `Clients`,
        projectCompleted: `Project đã hoàn thành`,
        awardsWon: `Giải thưởng`,
    },
    about: {
        title: `Trần Thắng Lợi`,
        subtitle: `Fullstack Web Developer`,
        content: `Tôi hiện là sinh viên năm ba tại <strong>Trường Đại học Nông Lâm</strong> chuyên ngành Công nghệ Thông tin. Tôi có học lực tốt và niềm đam mê với công nghệ. Tôi là người học nhanh và luôn sẵn sàng đón nhận những thách thức mới.`,
        careerGoals: `Mục tiêu nghề nghiệp`,
        careerGoalsContent1: `<strong>Trở thành lập trình viên web full-stack chuyên nghiệp:</strong> Tôi có niềm đam mê mãnh liệt trong việc <span style="font-weight: bold;">tạo ra các trang web đẹp mắt và các chức năng trong webapp</span>. Tôi có kỹ năng về cả phát triển front-end và back-end, và tôi luôn luôn háo hức tìm hiểu những công nghệ mới. Tôi tin tưởng rằng mình có các kỹ năng và động lực để trở thành một lập trình viên web full-stack thành công.`,
        careerGoalsContent2: `<strong>Trở thành kỹ sư DevOps trong tương lai:</strong> Tôi quan tâm đến quá trình triển khai dự án ứng dụng, do đó tôi đã nghiên cứu về Docker, Jenkins, Ansible, v.v. Tôi cho rằng DevOps là một quá trình rất quan trọng trong quá trình phát triển ứng dụng, vì vậy tôi muốn trở thành một kỹ sư DevOps trong tương lai.`,
        downloadCv: `TẢI CV`,
    },
    service: {
        title: `Những lĩnh vực của tôi`,
        content: `Dưới đây là các lĩnh vực chuyên môn của tôi`,
        frontend: `Front-end Developer`,
        backend: `Back-end Developer`,
        android: `Android Navtive App`,
        devops: `Devops Engineer`,
    },
    skill: {
        title: `Tại sao nên chọn tôi`,
        content: `Tôi có nhiều kỹ năng trong nhiều công nghệ và ngôn ngữ lập trình khác nhau`,
    },
    experience: {
        title: `Kinh nghiệm`,
        subtitle: `Dưới đây là những project tự học và project thực tế tôi đã tham gia`,
        projects: [
            {
                title: <UdemyVI.Title />,
                content: <UdemyVI.Body />,
            },
            {
                title: `Website E-commerce`,
                content: `Website bán hàng online. Sử dụng ReactJS, Redux, Firebase.`
            },
        ],
        github: `Github`,
        production: `Xem sản phẩm`,
    },

    hireBanner: {
        hireMeForYourProject: `Tuyển dụng tôi cho công ty của bạn`,
        description: `Vui lòng liên hệ với tôi qua email hoặc số điện thoại bên dưới. Tôi sẽ phản hồi ngay khi nhận được thông báo từ bạn.`,
        hireMe: `Tuyển Dụng Tôi!`,        
    },

    contact: {
        title: `Liên hệ với tôi`,
        subtitle: `Liên hệ`,
        available: `Luôn có mặt 24/7`,
        sendMessage: `Gửi mail`,
        successMessage: `Bạn đã gửi mail thành công`,
        errorMessage: `Không thể gửi nhiều lần, vui lòng thử lại sau khi gửi xong`,
        emailAddress: `Địa chỉ Email`,
        location: `Địa chỉ`,
        phoneNumber: `SĐT`,
        enterYourEmail: `Nhập email của bạn`,
        message: `Nội dung...`,
    },

    modal: {
        selectYourLanguage: `Chọn ngôn ngữ của bạn`,
        close: `Đóng`,
    }
};