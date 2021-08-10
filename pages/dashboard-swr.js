import React from 'react';
import useSWR from 'swr';

const fetchData = async () => {
  const res = await fetch("http://localhost:4000/dashboard");
    const data = await res.json();
    
    return data;
 
};

function DashboardSwr() {

    const { data, error } = useSWR('dashboard', fetchData);

    if (error) return "An error happened"
    if (!data) return <h2>Loading....</h2>
    


    return (
      <div>
        <h2> Post : {data.posts} </h2>
        <h2> Like : {data.likes} </h2>
      </div>
    );
}

export default DashboardSwr
