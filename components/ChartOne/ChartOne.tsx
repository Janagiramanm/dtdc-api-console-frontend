import next from "next";
import styles from "./ChartOne.module.scss"
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Link from "next/link";

export default function ChartOne() {
    return (
        <div>
           <div className={styles.OneChart}>
               <ResponsiveContainer width="100%" height={400}>
                   <BarChart
                       width={500}
                       height={300}
                       data={data}
                       margin={{
                           top: 5,
                           right: 30,
                           left: 20,
                           bottom: 5,
                       }}
                   >
                       <CartesianGrid strokeDasharray="3 3" />
                       <XAxis dataKey="name" />
                       <YAxis />
                       <Tooltip />
                       <Legend />
                       <Bar dataKey="pv" fill="#0e2c53" />
                       <Bar dataKey="uv" fill="#dc0032" />
                   </BarChart>
               </ResponsiveContainer>
           </div>
        </div>
    )
}

const data = [
    {
        name: 'Day 1',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Day 2',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Day 3',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Day 4',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Day 5',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Day 6',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Day 7',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

