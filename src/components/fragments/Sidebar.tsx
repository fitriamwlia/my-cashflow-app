import { Leaderboard, Payment } from '@mui/icons-material'
import  HomeIcon  from '@mui/icons-material/Home'

export default function Sidebar() {
    return(
        <div className="w-20 h-svh bg-white py-10 px-3 flex flex-col items-center gap-10">
            <HomeIcon fontSize="medium" color="primary" style={{ color: "#818FB4"}}/>
            <Leaderboard fontSize="medium" color="primary" style={{ color: "#818FB4"}}/>
            <Payment fontSize="medium" color="primary" style={{ color: "#818FB4"}}/>
        </div>
    )
}