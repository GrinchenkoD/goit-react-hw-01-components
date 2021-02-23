import React from "react";
import TransactionHistoryItem from "./TransactionHistoryItem/TransactionHistoryItem";
import styles from "./TransactionHistory.module.css"
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.tableHead}>
                <tr>
                <th className={styles.tableHeadCell}>Type</th>
                <th className={styles.tableHeadCell}>Amount</th>
                <th className={styles.tableHeadCell}>Currency</th>
                </tr>
            </thead>
            <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return (
                    <TransactionHistoryItem key={id} type={type} amount={ amount} currency={currency} />
                )
            })}
            </tbody>
        </table>
    )
 }

export default TransactionHistory

TransactionHistory.defaultProps = {
    items: [],
}

TransactionHistory.propTypes = {
    items: PropTypes.array
    
}