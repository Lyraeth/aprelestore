import { Playwrite_AR } from "next/font/google";

const playwrite_ar = Playwrite_AR({
    weight: "400",
});

export default function Contact() {
    return (
        <div className={playwrite_ar.className}>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-b from-pink-200/80 via-pink-300/80 to-pink-400/80">
                <h1> Will be added soon!</h1>
            </div>
        </div>
    );
}
