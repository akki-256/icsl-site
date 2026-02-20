import Link from "next/link";
import { useState } from "react";

type news = {
    date: Date;
    title: string;
    body: string;
};

const News = () => {
    const [news, setNews] = useState<news[]>([
        {
            date: new Date("2024-06-01"),
            title: "この機能は建設中です。",
            body: "",
        },
        {
            date: new Date("2024-05-15"),
            title: "この機能は建設中です。",
            body: "",
        },
        {
            date: new Date("2024-04-20"),
            title: "この機能は建設中です。",
            body: "",
        },
    ]);

    return (
        <div className="border-gray-500 border-y-2">
            <h1 className="text-3xl px-6  p-4 border-gray-400 border-b-2">
                News
            </h1>
            <ul className="text-xl flex flex-col gap-3 my-4 border-gray-400 border-solid [&>li]:border-b-2 [&>li]:border-gray-300">
                {news.map((item, index) => (
                    <li key={index} className="px-4">
                        <Link href={"/"}>
                            <span className="font-bold">
                                {item.date.toLocaleDateString("ja-JP")}
                            </span>
                            ：{item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <button
                className="w-full text-3xl text-center bg-gray-500"
                onClick={() => setNews([])}
            >
                ↧
            </button>
        </div>
    );
};

export default News;
