import { Playwrite_AR } from "next/font/google";
import Link from "next/link";
const playwrite_ar = Playwrite_AR({
    weight: "400",
});

export default function Contact() {
    return (
        <div className="bg-gradient-to-b from-pink-200/80 via-pink-300/80 to-pink-400/80 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-gray-700">
            <div className={playwrite_ar.className}>
                <main className="min-h-screen p-8 sm:p-20">
                    <h1 className="mb-6 text-center text-2xl md:text-4xl xl:text-6xl my-5">
                        {" "}
                        My Contact
                    </h1>
                    <div className="grid grid-cols-2 xl:grid-cols-3 w-full text-center my-20 gap-4">
                        <Link
                            href={`https://t.me/Apreleisa`}
                            target="_blank"
                            className="py-10 bg-blue-300 rounded-lg border-blue-200 bg-gradient-to-b from-pink-200/80 via-pink-300/80 to-pink-400/80 dark:bg-gradient-to-b dark:from-gray-700 dark:to-gray-800 hover:bg-blue-300 dark:hover:to-gray-900 hover:translate-y-1"
                        >
                            <div className="mb-10 font-[family-name:var(--font-geist-sans)]">
                                Telegram
                            </div>
                            <div>Apreleisa</div>
                        </Link>
                        <Link
                            href={`https://twitter.com/wfrcoklat`}
                            target="_blank"
                            className="py-10 bg-blue-300 rounded-lg border-blue-200 bg-gradient-to-b from-pink-200/80 via-pink-300/80 to-pink-400/80 dark:bg-gradient-to-b dark:from-gray-700 dark:to-gray-800 hover:bg-blue-300 dark:hover:to-gray-900 hover:translate-y-1 "
                        >
                            <div className="mb-10 font-[family-name:var(--font-geist-sans)]">
                                X / Twitter
                            </div>
                            <div>@wfrcoklat</div>
                        </Link>
                        <Link
                            href={`https://wa.me/628993337395`}
                            target="_blank"
                            className="py-10 bg-blue-300 rounded-lg border-blue-200 bg-gradient-to-b from-pink-200/80 via-pink-300/80 to-pink-400/80 dark:bg-gradient-to-b dark:from-gray-700 dark:to-gray-800 hover:bg-blue-300 dark:hover:to-gray-900 hover:translate-y-1 col-span-2 xl:col-span-1"
                        >
                            <div className="mb-10 font-[family-name:var(--font-geist-sans)]">
                                WhatsApp
                            </div>
                            <div>lele</div>
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}
