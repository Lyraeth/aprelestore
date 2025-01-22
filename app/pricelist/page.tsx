import { Playwrite_AR, Montserrat } from "next/font/google";
import { createClient } from "@/utils/supabase/server";
import SearchablePricelists from "../components/SearchablePricelists";

const playwrite_ar = Playwrite_AR({
    weight: "400",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "400",
});

export default async function Pricelist() {
    const supabase = await createClient();

    const { data: applications, error } = await supabase.from("application")
        .select(`
            id,
            name,
            created_at,
            services:service (
                id,
                duration,
                price,
                account_type,
                description,
                created_at
            )
        `);

    if (error) {
        console.error("Error fetching data:", error);
        return <div className="text-red-500">Error fetching data</div>;
    }

    return (
        <div className="min-h-screen p-8 sm:p-20 ">
            <header className="mb-6 text-center my-5">
                <div className={playwrite_ar.className}>
                    <h1 className="text-6xl font-bold mb-10">Aprelestore</h1>
                </div>
                <div className={montserrat.className}>
                    <p className="mt-2 text-lg">
                        Explore our services and find the best option for you.
                    </p>
                </div>
            </header>
            {/* Pass data to client component */}
            <SearchablePricelists applications={applications} />
        </div>
    );
}
