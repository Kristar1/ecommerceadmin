import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { useMemo, useState, useEffect } from "react";
import { userRequest } from "../../requestMethod";

export default function Home() {
const [userStats, setUserStats] = useState([]);

const MONTHS =useMemo(
  ()=>[
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
'Jul',
'Aug',
'Sep',
'Oct',
'Nov',
'Dec',

  ],[]
)

useEffect(() => {
 const getStats= async()=>{
   try {
     const res= await  userRequest.get('/users/stats');

     const list =res.data.sort((a,b)=>{
      return a._id - b._id
  })
     list.map((item)=>
       setUserStats((prev)=>[
         ...prev,
         {name: MONTHS[item._id - 1], "Active User": item.total}
       ])
     );
   } catch (error) {
     console.log(error)
   }
 }

 getStats()
}, [MONTHS])
console.log(userStats)

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
      </div>
    </div>
  );
}
