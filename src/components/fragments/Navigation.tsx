import { AccountCircle, Fitbit, Notifications } from "@mui/icons-material";

export default function Navigation(){
    return(
        <nav className="p-5 h-16 w-full bg-white flex justify-between">
            <Fitbit fontSize="medium" color="primary"/>

            <div className="flex gap-5">
                <Notifications fontSize="medium" color="primary" style={{color: "#818FB4"}}/>
                <AccountCircle fontSize="medium" color="primary" style={{color: "#818FB4"}}/>
            </div>
        </nav>
    )
}