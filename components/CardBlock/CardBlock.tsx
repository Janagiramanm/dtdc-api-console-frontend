import next from "next";
import styles from "./CardBlock.module.scss";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
];

const COLORS = ["#0e2c53", "#dc0032"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
                                   cx,
                                   cy,
                                   midAngle,
                                   innerRadius,
                                   outerRadius,
                                   percent,
                                   index
                               }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

    export default function CardBlock() {
    return (
        <div>
            <div className={`row`}>
                <div className={`col-md-6 p-4`}>
                </div>
                <div className={`col-md-6 p-4`}>
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx={200}
                            cy={200}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>

            <div className={`container-fluid`}>
                <h3>Customer List </h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Customer ID</th>
                        <th scope="col">Customer Name </th>
                        <th scope="col">Customer Type</th>
                        <th scope="col">Count</th>
                        <th scope="col">Quota Status</th>
                        <th scope="col">Contract Expired</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>2123123</td>
                        <td>
                            <div className="progress" role="progressbar" aria-label="Animated striped example"
                                 aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar progress-bar-striped w-75 progress-bar-animated"
                                ></div>
                            </div>
                        </td>
                        <td>Otto</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-sm btn-primary">Expired</button>
                                <button type="button" className="btn btn-sm btn-secondary">Active</button>
                            </div></td>
                    </tr>
                    </tbody>
                </table>
            </div>




        </div>
    )
}
