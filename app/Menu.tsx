import Link from "next/link";

const Menu = () => {
    return (
        <ul>
            <li>
                <h2>各種リンク</h2>
            </li>
            <li>
                <Link href="/about">研究室について</Link>
            </li>
            <li>
                <Link href="/research">研究内容</Link>
            </li>
            <li>
                <Link href="/annual-plan">年間計画</Link>
            </li>
            <li>
                <Link href="httpsgithub.com">github</Link>
            </li>
            <li>
                <Link href="/publications">論文・出版物</Link>
            </li>
        </ul>
    );
};

export default Menu;
