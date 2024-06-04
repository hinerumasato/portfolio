import { UdemyJP } from "@/components/projects/Udemy/UdemyJP";
import { IDictionary } from "../interface";

export const jp: IDictionary = {
    nav: {
        home: 'ホーム',
        about: '私について',
        service: 'スキール',
        projects: 'プロジェクト',
        contact: '連絡先',
    },
    header: {
        subtitle: `こんにちは、私は`,
        title: `Trần Thắng Lợiと申します`,
        position: `Fullstack Web Developer`,
        hire: `雇いたい`,
        downloadCv: `履歴書をダウンロードする`,
    },
    widget: {
        clients: `クライアント`,
        projectCompleted: `賛成されたプロジェクト`,
        awardsWon: `受賞`,
    },
    about: {
        title: `Trần Thắng Lợi`,
        subtitle: `Fullstack Web Developer`,
        content: `私は <strong>Nong Lam大学で</strong> 情報技術を専攻している三年生の学生です。 私には自信があり、勉強することが出来ていつも新しい挑戦を受け取れます。`,
        careerGoals: `キャリア目標`,
        careerGoalsContent1: `<strong>プロのフルスタックサイトのディベロッパーになりたいこと:</strong> <strong>仕事には綺麗なサイトを作成したり、サイトの機能を開発したりすることが夢中しているので</strong>. フロントエンド開発とバックエンド開発の両方に技術があり, 常に新しい技術を学びたいと思って. 私はいい社人になれるために十分な技術と努力を持っていると自信を持っています`,
        careerGoalsContent2: `<strong>DevOpsエンジニアになりたいこと:</strong> 私はアプリのプロジェクトの展開の過程に関心があるので、DockerやJenkinsやAnsibleなどを研究して、Devopsはアプリの開発過程の時めちゃくちゃ大事な過程だと思っていたから、未来にはDevOpsエンジニアになりたいと思います`,
        downloadCv: `履歴書をダウンロードする`,
    },
    service: {
        title: `私の専攻`,
        content: `以下は私の専攻中技術`,
        frontend: `Front-end Developer`,
        backend: `Back-end Developer`,
        android: `Android Navtive App`,
        devops: `Devops Engineer`,
    },
    skill: {
        title: `なぜ私を選ぶべきか`,
        content: `私には様々のプログラム言語とFrameworkの技術があります`,
    },
    experience: {
        title: `キャリアの経験`,
        subtitle: `以下は自習のプロジェクトと実務のプロジェクトだ！！`,
        projects: [
            {
                title: <UdemyJP.Title />,
                content: <UdemyJP.Body />,
            },
            {
                title: `Website E-commerce`,
                content: `Website bán hàng online. Sử dụng ReactJS, Redux, Firebase.`
            },
        ],
        github: `Github`,
        production: `サイトを見に行く`,
    },

    hireBanner: {
        hireMeForYourProject: `私を雇ってください`,
        description: `以下に書いてありますメールとか電話番号などを使って連絡してください. 届いてくれたらすぐに返信します`,
        hireMe: `私を雇う`,    
    },

    contact: {
        title: `連絡先`,
        subtitle: `連絡`,
        available: `いつもでも返信できます`,
        sendMessage: `メールを送る`,
        successMessage: `メールを送りました、ありがとうございます`,
        errorMessage: `メールを何度も送れません、送り終えたらもう一度試してください`,
        emailAddress: `メール住所`,
        location: `住所`,
        phoneNumber: `電話番号`,
        enterYourEmail: `あなたのメールを入力してください`,
        message: `内容はこちらです`,
    },

    modal: {
        selectYourLanguage: `あなたの母語を選択してください`,
        close: `閉じる`,
    }
}