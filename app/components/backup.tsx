import { createClient } from "@/utils/supabase/server";
import {
    HiOutlineClock,
    HiOutlineCurrencyDollar,
    HiOutlineUser,
    HiOutlineDocumentText,
} from "react-icons/hi";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "400",
});

export default async function Pricelists() {
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
        <div className={montserrat.className}>
            <main className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4">
                {applications?.map((application) => (
                    <div
                        key={application.id}
                        className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                        <div className="p-6">
                            <h5 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                                {application.name}
                            </h5>
                            <h2 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-300">
                                Services
                            </h2>
                            {application.services &&
                            application.services.length > 0 ? (
                                <ul className="mt-4 space-y-4">
                                    {application.services.map((service) => (
                                        <li
                                            key={service.id}
                                            className="p-4 bg-gray-100 rounded-md dark:bg-gray-700"
                                        >
                                            <p className="flex items-center gap-2">
                                                <HiOutlineClock className="text-blue-500" />
                                                <strong>Duration:</strong>{" "}
                                                {service.duration}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <HiOutlineCurrencyDollar className="text-green-500" />
                                                <strong>Price:</strong> Rp.{" "}
                                                {service.price}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <HiOutlineUser className="text-purple-500" />
                                                <strong>Account Type:</strong>{" "}
                                                {service.account_type}
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <HiOutlineDocumentText className="text-yellow-500" />
                                                <strong>Description:</strong>{" "}
                                                {service.description}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 dark:text-gray-400">
                                    No services available
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}
