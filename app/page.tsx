"use client";
import { useState } from "react";
// import Menu from "./Menu";
import Link from "next/link";
import News from "./News";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <header className="h-26 z-60 text-white px-5 flex justify-between items-center bg-blue-950">
                <h1 className="text-4xl">知的制御研究室</h1>
                {/*<button
                    onMouseEnter={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    {"<<"}
                </button>*/}
            </header>

            <article className="flex min-h-screen w-full overflow-hidden">
                <main className=" lg:basis-5/6 shrink-0 transition-all">
                    <section className="w-fit text-base md:text-2xl mx-auto px-2 py-20">
                        知的制御研究室は，ロボットの制御にまつわる研究を主に取り扱う，
                        <br />
                        愛知工業大学に2023年に設立された比較的新興の研究室です
                    </section>
                    <News />
                </main>
                <aside
                    className={`
                    transition-transform duration-300 ease-in-out
                      bg-gray-400

                      fixed inset-y-0 right-0 z-50 w-72
                        ${isOpen ? "translate-x-0" : "translate-x-full"}

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
                    <h2 className="text-[18px] mt-1 mx-2 mb-3">ページ</h2>
                    <ul className="text-2xl mx-4 flex flex-col gap-3">
                        <Link href="/about">研究室について</Link>
                        <Link href="/research">研究内容</Link>
                        <Link href="/annual-plan">年間計画</Link>
                        <Link href="httpsgithub.com">github</Link>
                        <Link href="/publications">論文・出版物</Link>
                    </ul>
                </aside>
            </article>
        </div>
    );
}
