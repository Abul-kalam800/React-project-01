import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Markschart = ({markesPromies}) => {
    const markesDataRes = use(markesPromies);
  const markesData = markesDataRes.data;
    // data processing for the chart 
    const markesChartData = markesData.map((studentData)=>{
        const student ={
            id : studentData.id,
            name : studentData.name,
            math :studentData.marks.math,
            english : studentData.marks.english,
            physics : studentData.marks.physics

        }
        const avg = student.math + student.english+ student.physics %3;
        student.avg = avg;
        return student;

    })
  

    return (
        <div className='lg:w-9/12 mx-auto md:w-full flex flex-col justify-center items-center my-8'>
              <h2 className='text-3xl font-bold text-center'>Using Axis mathed for bar charts</h2>
          <BarChart  width={300} height={400} data={markesChartData}>
            <Bar dataKey='avg' fill='blue' ></Bar>
            <Bar dataKey='english' fill='red' ></Bar>
            <Bar dataKey='physics' fill='green' ></Bar>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
          

          </BarChart>

        </div>
    );
};

export default Markschart;