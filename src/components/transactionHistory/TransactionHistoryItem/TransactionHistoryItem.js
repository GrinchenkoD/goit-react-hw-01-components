import React from "react"
import PropTypes from 'prop-types';
import styles from './TransactionHistoryItem.module.css'

const TransactionHistoryItem=({type, amount, currency}) => {
    return (
        <tr className={styles.transactionItem}>
            <td className={ styles.tableCell}>{ type }</td>
            <td className={ styles.tableCell}>{ amount }</td>
            <td className={ styles.tableCell}>{ currency}</td>
        </tr>
    )
}

export default TransactionHistoryItem

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}