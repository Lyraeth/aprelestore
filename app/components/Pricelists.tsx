import {
    HiOutlineClock,
    HiOutlineCurrencyDollar,
    HiOutlineUser,
    HiOutlineDocumentText,
} from "react-icons/hi";


export default function Pricelists({ applications }) {
    if (!applications || applications.length === 0) {
        return (
            <div className="text-gray-500 text-center mt-10">
                No applications match your search.
            </div>
        );
    }

    return (
        <div className={montserrat.className}>
            <main className="grid grid-cols-2 gap-4 p-4 xl:grid-cols-6">
                {applications.map((application) => (
                    <div key={application.id}>
                        <div className="card text-center p-6 border bg-pink-200 rounded-md">
                            <div className="font-bold border-b text-xl">
                                {application.name}
                            </div>
                            {application.services &&
                            application.services.length > 0 ? (
                                <div className="mt-4">
                                    {application.services.map((service) => (
                                        <ul key={service.id}>
                                            <li>
                                                <HiOutlineUser className="inline-block mr-1" />
                                                {service.account_type}
                                            </li>
                                            <li>
                                                <HiOutlineClock className="inline-block mr-1" />
                                                {service.duration}
                                            </li>
                                            <li>
                                                <HiOutlineCurrencyDollar className="inline-block mr-1" />
                                                {service.price}
                                            </li>
                                            <li>
                                                <HiOutlineDocumentText className="inline-block mr-1" />
                                                {service.description}
                                            </li>
                                        </ul>
                                    ))}
                                </div>
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
