import { Playwrite_AR } from "next/font/google";
import { FaGithub } from "react-icons/fa";
const playwrite_ar = Playwrite_AR({
    weight: "400",
});

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="flex flex-row justify-between my-5 w-full">
                    <a
                        href="/pricelist"
                        className="hover:text-gray-600 hover:underline hover:underline-offset-2 hover:duration-500"
                    >
                        Pricelist
                    </a>
                    <a
                        href="/contact"
                        className="hover:text-gray-600 hover:underline hover:underline-offset-2 hover:duration-500"
                    >
                        Contact
                    </a>
                </div>
                <div className={playwrite_ar.className}>
                    <div className="font-bold text-6xl animate-bounce hover:underline select-none">
                        Aprelestore
                    </div>
                </div>
            </main>
            <footer className="row-start-3 flex flex-col gap-6 flex-wrap items-center justify-center">
                <div>Copyright &copy; 2025, Lyraeth</div>
                <div>
                    <a href="https://github.com/lyraeth" target="_blank">
                        <FaGithub />
                    </a>
                </div>
            </footer>
        </div>
    );
}
