import { AccordiconHeader } from "@/components/vendors/Accordion"

export const UdemyJP = () => {}

UdemyJP.Title = () => {
    return (
        <AccordiconHeader title="Udemyサイト" startDate="06-2023" endDate="10-2023" />
    )
}

UdemyJP.Body = () => {
    return (
        <ul>
            <li><strong>プロジェクト:</strong> Udemyプロジェクト - 個人学習プロジェクト</li>
            <li><strong>プロジェクトリンク:</strong> <a href="https://github.com/hinerumasato/udemy">https://github.com/hinerumasato/udemy</a></li>
            <li><strong>使用した技術:</strong>
                <ul>
                    <li><strong>フロントエンド:</strong> JSP, JSTL, Bootstrap</li>
                    <li><strong>バックエンド:</strong> Java Servlet</li>
                </ul>
            </li>
            <li><strong>チームサイズ:</strong> 1 (個人の自己学習プロジェクト)</li>
            <li><strong>説明:</strong>
                <ul>
                    <li>すべてのテーブルに対するCRUD操作</li>
                    <li>FacebookとGoogleを使用したユーザー認証とログイン</li>
                    <li>オンライン決済処理</li>
                    <li>SMTPプロトコルとJava Mailライブラリを使用したメールによるアカウントの確認</li>
                    <li>AJAXを使用したファイルのアップロード</li>
                </ul>
            </li>
            <li><strong>追加の詳細:</strong>
                <ul>
                    <li>このプロジェクトは、さまざまなWeb開発技術を実践的に学ぶための個人の学習演習として開発されました。</li>
                    <li>このプロジェクトは、CRUD機能、ユーザー認証、オンライン決済統合、メール確認など、フルスタックのWebアプリケーションの構築能力を示しています。</li>
                    <li>このプロジェクトでは、HTML、CSS、JavaScript、JSP、Java Servlet、SMTPプロトコル、およびJava Mailライブラリなど、さまざまな人気のあるWeb開発技術を利用しています。</li>
                </ul>
            </li>
        </ul>
    )
}
