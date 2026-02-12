"use client";
import { useState } from "react";
// import Menu from "./Menu";
import Link from "next/link";
import News from "./News";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <header className="h-20 text-6xl z-60 text-white px-5 flex justify-between items-center bg-blue-950 ">
                <h1>知的制御研究室</h1>
                <button
                    onMouseEnter={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    {"<<"}
                </button>
            </header>

            <div className="flex min-h-screen w-full overflow-hidden">
                <main className="w-full lg:basis-5/6 shrink-0 p-4 transition-all">
                    知的制御研究室は，ロボットの制御にまつわる研究を主に取り扱う，愛知工業大学に2023年に設立された比較的新興の研究室です
                    <News />
                </main>
                <aside
                    className={`
                              /* 共通: パフォーマンスに優れたtransformアニメーション */
                              transition-transform duration-300 ease-in-out
                              bg-gray-400

                              /* モバイル: 右端に固定、横幅を設定 */
                              fixed inset-y-0 right-0 z-50 w-72
                              ${isOpen ? "translate-x-0" : "translate-x-full"}

                              /* デスクトップ: 元の比率へリセット */
                              lg:relative lg:inset-auto lg:z-0 lg:w-auto lg:basis-1/6 lg:translate-x-0
                            `}
                >
                    {/*メニューバーを閉じるボタン*/}
                    {/*<button
                        className="text-7xl"
                        onClick={() => {
                            setIsOpen((prev) => {
                                return !prev;
                            });
                        }}
                    ></button>*/}
                    <ul className="text-2xl flex flex-col gap-3 px-5">
                        <h3>各種リンク</h3>
                        <Link href="/about">研究室について</Link>
                        <Link href="/research">研究内容</Link>
                        <Link href="/annual-plan">年間計画</Link>
                        <Link href="httpsgithub.com">github</Link>
                        <Link href="/publications">論文・出版物</Link>
                    </ul>
                </aside>
            </div>
        </div>
    );
}
