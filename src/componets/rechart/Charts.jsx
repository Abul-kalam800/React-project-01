import React from 'react';
import { LineChart, Line, XAxis, YAxis, Bar, BarChart, AreaChart, Area, Tooltip, PieChart, Pie } from 'recharts';
const Charts = () => {
    const studentsData = [
        {
            "id": 1,
            "math": 85,
            "english": 78,
            "physics": 90,
            "chemistry": 88
        },
        {
            "id": 2,
            "math": 72,
            "english": 65,
            "physics": 70,
            "chemistry": 68
        },
        {
            "id": 3,
            "math": 91,
            "english": 87,
            "physics": 89,
            "chemistry": 93
        },
        {
            "id": 4,
            "math": 64,
            "english": 40,
            "physics": 60,
            "chemistry": 66
        },
        {
            "id": 5,
            "math": 78,
            "english": 82,
            "physics": 85,
            "chemistry": 80
        },
        {
            "id": 6,
            "math": 94,
            "english": 50,
            "physics": 60,
            "chemistry": 66
        },
        {
            "id": 7,
            "math": 84,
            "english": 90,
            "physics": 30,
            "chemistry": 66
        },
    ]

    return (
        <>
            <h3 className='text-5xl my-20 text-center  w-6/12 mx-auto font-bold text-green-300'> Showing Data use by Charts</h3>
            <div className='w-9/12 mx-auto  flex flex-col justify-center items-center gap-16'>
            <h2 className='text-3xl font-bold'>Barchart</h2>
                <BarChart width={900} height={400} data={studentsData} margin={20}>
                    <XAxis dataKey={'id'}></XAxis>
                    <YAxis dataKey={"math"}></YAxis>
                    <Bar dataKey='math' fill='red'></Bar>
                    <Bar dataKey={"english"} fill='red'></Bar>
                    <Bar dataKey={"physics"} fill='green'></Bar>
                    <Bar dataKey={"chemistry"} fill='blue'></Bar>
                    <Tooltip></Tooltip>

                </BarChart>

        
            <div>
            <h2 className='text-3xl font-bold'>Area Charts</h2>
                <AreaChart width={900} height={300} data={studentsData}>

                   
                    <Area dataKey={"math"}  stroke='#8884d8' fill='red'></Area>
                    <Area dataKey={"english"} stroke='gray' fill='green'></Area>
                    <Area dataKey={"chemistry"} stroke='green' fill='blue'></Area>
                    <Tooltip></Tooltip>
                </AreaChart>
            </div>

            <div>
            <h2 className='text-3xl font-bold'>Pie Charts</h2>
                <PieChart width={800} height={400}>
                    <Pie dataKey={"math"} name='id' data={studentsData} fill='green' cx={'50%'} cy={'50%'} innerRadius={50}></Pie>
                    <Pie innerRadius={60} outerRadius={80} dataKey={"english"} name='id' data={studentsData} fill='red' cx={'50%'} cy={'50%'}></Pie>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
            </div>
        </>
    );
};

export default Charts;