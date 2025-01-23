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
        <div className="relative">
            {/* Search Bar */}
            <div className="flex justify-center mb-5">
                <div className="relative w-full max-w-lg">
                    <CiSearch
                        className="absolute top-3 left-4 text-black"
                        size={20}
                    />
                    <input
                        type="search"
                        placeholder="Cari aplikasi..."
                        className="w-full pl-12 pr-4 py-2 border rounded-lg shadow-lg focus:outline-none text-black placeholder:text-black"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                    />
                </div>
            </div>

            {/* Pricelists */}
            <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-4 xl:grid-cols-6">
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
                                <div className="text-center p-6 border shadow-xl rounded-md">
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
        </div>
    );
}
