function Table(){
    return(
        <>

       <div className="p-5 flex flex-col justify-start items-start rounded-md bg-white border-2 border-gray-100 shadow-lg w-full overflow-x-auto ">
         <h1 className="font-semibold text-lg text-left w-full">Recent Orders</h1>
        <p className="text-gray-600 mb-2">View your completed and in-progress orders with detail status updates</p>
        <table className="min-w-full">
            <thead>
                <tr className="border-b-2 text-gray-700 border-gray-700">
                    <th className="p-3 text-left">Order ID</th>
                    <th className="p-3 text-left">Date</th>
                    <th className="p-3 text-left">Item</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Purpose</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b-2 border-gray-700 text-gray-600">
                    <td className="p-3">#123456</td>
                    <td className="p-3">2023-10-01</td>
                    <td className="p-3">Pet Food</td>
                    <td className="p-3">Delivered</td>
                    <td className="p-3">Feeding</td>
                </tr>
                <tr className="border-b-2 border-gray-700  text-gray-600">
                    <td className="p-3">#123457</td>
                    <td className="p-3">2023-10-02</td>
                    <td className="p-3">Pet Toy</td>
                    <td className="p-3">In Transit</td>
                    <td className="p-3">Playtime</td>
                </tr>
                </tbody>
        </table>
        
       </div>
        
        </>
    )
}
export default Table;