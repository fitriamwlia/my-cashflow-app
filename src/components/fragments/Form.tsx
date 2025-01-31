import Button from "../elements/Button";
import Input from "../elements/Input";
import SelectOption from "../elements/SelectOption";

export default function Form(){
    
    const dateNow = getDate()

    return (
        <div className="bg-white p-10 mb-10">
            <h1 className="text-lg font-semibold mb-5">Transactions</h1>
            <div className="flex gap-10 text-slate-500 items-center">
                <Input type="text" placeholder={dateNow} className="p-3 rounded-md w-44 bg-slate-100" name="Date"/>
                <SelectOption name="Bank" dataList={['BCA','BSI', 'BRI', 'Mandiri', 'Hijra']} className="p-3 rounded-md w-44 bg-slate-100"/>
                <SelectOption name="Type" dataList={['SAVING','SPENDING', 'BUDGETING']} className="p-3 rounded-md w-44 bg-slate-100"/>
                <SelectOption name="Via" dataList={['-','QR', 'VA', 'TF', 'CASH']} className="p-3 rounded-md w-44 bg-slate-100"/>
                <SelectOption name="Transaction" dataList={['-','Rumah', 'Pulang Kampung', 'Kosan', 'Obat', 'Belanja']} className="p-3 rounded-md w-44 bg-slate-100"/>
                <Input type="text" className="p-3 rounded-md w-44 bg-slate-100" name="Amount" placeholder="Rp 0.00"/>
                <Input type="text" className="p-3 rounded-md w-44 bg-slate-100" name="Notes" placeholder=""/>
                <Button label="save" className="h-14 rounded-md w-44 bg-blue-500 text-white font-semibold uppercase hover:bg-blue-600"/>
            </div>
        </div>
        
    )
}

function getDate(){
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    return `${year} - ${month} - ${date}`;
}