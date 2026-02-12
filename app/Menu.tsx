import Link from "next/link";

const Menu = () => {
    return (
        <ul className="text-2xl flex flex-col gap-3 px-5">
            <h3>各種リンク</h3>
            <Link href="/about">研究室について</Link>
            <Link href="/research">研究内容</Link>
            <Link href="/annual-plan">年間計画</Link>
            <Link href="httpsgithub.com">github</Link>
            <Link href="/publications">論文・出版物</Link>
        </ul>
    );
};

export default Menu;
