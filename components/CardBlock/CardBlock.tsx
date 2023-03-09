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


            <div className={styles.CardBlock}>
                <div className={`container-fluid`}>
                    <div className={`row`}>
                        <div className={`col-3`}>
                            <div className={styles.card}>
                                <h4>10000/12212</h4>
                                <p>API Available Count</p>
                            </div>
                        </div>
                        <div className={`col-3`}>
                            <div className={styles.card}>
                                <h4>10000/12212</h4>
                                <p>API Available Count</p>
                            </div>
                        </div>
                        <div className={`col-3`}>
                            <div className={styles.card}>
                                <h4>10000/12212</h4>
                                <p>API Available Count</p>
                            </div>
                        </div>
                        <div className={`col-3`}>
                            <div className={styles.card}>
                                <h4>10000/12212</h4>
                                <p>API Available Count</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
