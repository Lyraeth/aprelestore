"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Playwrite_AR } from "next/font/google";

const playwrite_ar = Playwrite_AR({
    weight: "400",
});

type Service = {
    id: string;
    duration: string;
    price: string;
    account_type: string;
    description: string;
};

type Application = {
    id: string;
    name: string;
    created_at: string;
    services: Service[];
};

type SearchablePricelistsProps = {
    applications: Application[];
};

export default function SearchablePricelists({
    applications,
}: SearchablePricelistsProps) {
    const [searchQuery, setSearchQuery] = useState<string>("");

    // Filter applications based on search query
    const filteredApplications = applications.filter((app) =>
        app.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="flex justify-center">
                <div className="relative w-full max-w-lg">
                    <CiSearch className="absolute top-3 left-4" size={20} />
                    <input
                        type="search"
                        placeholder="Cari aplikasi..."
                        className="w-full pl-12 pr-4 py-2 rounded-3xl dark:bg-gray-400/50"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-4 xl:grid-cols-6">
                {filteredApplications.length > 0 ? (
                    filteredApplications.map((application) => {
                        const groupedServices = application.services.reduce(
                            (acc: Record<string, Service[]>, service) => {
                                if (!acc[service.account_type]) {
                                    acc[service.account_type] = [];
                                }
                                acc[service.account_type].push(service);
                                return acc;
                            },
                            {}
                        );

                        return (
                            <div key={application.id}>
                                <div className="text-center p-6 shadow-sm rounded-md h-full border-blue-200 bg-gradient-to-b from-blue-300 to-blue-400/20 dark:bg-gradient-to-b dark:from-gray-700 dark:to-gray-800 hover:bg-blue-300 dark:hover:to-gray-900 hover:translate-y-1">
                                    <div className="font-bold text-xl">
                                        <div className={playwrite_ar.className}>
                                            {application.name}
                                        </div>
                                    </div>
                                    {Object.entries(groupedServices).map(
                                        ([accountType, services]) => (
                                            <div
                                                key={accountType}
                                                className="mb-4 font-[family-name:var(--font-geist-sans)]"
                                            >
                                                <div className="font-bold mt-4 ">
                                                    {accountType}
                                                </div>
                                                <ul>
                                                    {services.map((service) => (
                                                        <li
                                                            key={service.id}
                                                            className="mt-2"
                                                        >
                                                            {service.duration} -{" "}
                                                            {service.price}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center col-span-full">
                        No applications match your search.
                    </div>
                )}
            </div>
        </>
    );
}
