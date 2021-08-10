import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [Loading,setLoading] = useState(true);
    const [Dashboard, setDashboard] = useState(null)
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch("http://localhost:4000/dashboard");
        const data = await res.json();
          setDashboard(data);
          setLoading(false)
      };

      fetchData();
    }, [Dashboard]);

    // console.log(Dashboard)

    if (Loading) {
        return <h2> Loading ....</h2>
    }
    return (
        <div>
            <h2> Post : {Dashboard.posts} </h2>
            <h2> Like : {Dashboard.likes} </h2>
        </div>
    )
}

export default Dashboard
