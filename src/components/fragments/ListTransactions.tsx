import { Delete, Edit } from "@mui/icons-material"

const fakeData = [
    {
        "id":"1",
        "date":"2023-02-12",
        "bank":"BCA",
        "type":"Spending",
        "via":"QR",
        "amount":"20,000",
        "transaction":"makan",
        "notes":"warteg"
    },
    {
        "id":"2",
        "date":"2023-02-13",
        "bank":"BCA",
        "type":"Spending",
        "via":"QR",
        "amount":"15,000",
        "transaction":"makan",
        "notes":"warteg"
    },
    {
        "id":"3",
        "date":"2023-02-14",
        "bank":"BCA",
        "type":"Spending",
        "via":"QR",
        "amount":"23,000",
        "transaction":"makan",
        "notes":"warteg"
    }
]

export default function ListTransactions(){
    return(
        <div className="bg-white p-10">
            <table className="w-full">
                <thead className="">
                    <tr className="h-20">
                        <th>No</th>
                        <th>Date</th>
                        <th>Bank</th>
                        <th>Type</th>
                        <th>Via</th>
                        <th>Transaction</th>
                        <th>Amount</th>
                        <th>Notes</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {fakeData.length > 0 &&
                        fakeData.map(item => 
                            <tr key={item.id} className="h-10 border-b-[1px] border-slate-400 text-center">
                                <td className="text-center">{item.id}</td>
                                <td>{item.date}</td>
                                <td>{item.bank}</td>
                                <td>{item.type}</td>
                                <td>{item.via}</td>
                                <td>Rp {item.amount}</td>
                                <td>{item.transaction}</td>
                                <td>{item.notes}</td>
                                <td className="flex justify-center gap-5">
                                    <Edit fontSize="small" color="primary" style={{color:"#818FB4"}}/>
                                    <Delete fontSize="small" color="primary" style={{color:"#818FB4"}}/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
