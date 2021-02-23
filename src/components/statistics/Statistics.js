import React from "react"
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'


const Statistics = ({ title, stats }) => {
    const items =stats&&stats.length?  stats.map(({ id, label, percentage }) => 
         <li key={id} className={styles.item}>
            <span className={styles.label}>{ label }</span>
            <span className={styles.percentage}>{ percentage }%</span>
        </li>
    )
        : <p className={ styles.notFound }>Stats not found</p>
    

    return (
    <section className={styles.statistics}>
        <h2 className={styles.title}>{ title }</h2>

            <ul className={styles.statList}>
            { items }    
        </ul>
    </section>
    )
}
export default Statistics

Statistics.defaultProps = {
    title: '',
    stats: []
};
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
  
};