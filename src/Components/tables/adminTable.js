export default function UserDetailsTable({ data }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md">
                <thead>
                    <tr className="bg-blue-500 text-white uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">ID</th>
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Phone Number</th>
                        <th className="py-3 px-6 text-left">Email</th>
                        <th className="py-3 px-6 text-left">CitizenID</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {data.map((row, index) => (
                        <tr
                            key={index}
                            className="border-b border-gray-200 hover:bg-gray-100"
                        >
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                {row.id}
                            </td>
                            <td className="py-3 px-6 text-left">{row.name}</td>
                            <td className="py-3 px-6 text-left">
                                {row.phoneNumber}
                            </td>
                            <td className="py-3 px-6 text-left">{row.email}</td>
                            <td className="py-3 px-6 text-left">
                                {row.stringCitizenID}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
