import PropTypes from 'prop-types'; // Import PropTypes
import style from "./TransactionHistory.module.css";
import "../transactions.json";

export default function TransactionHistory({ items }) {
    if (!items || items.length === 0) {
        return <p>No transactions available.</p>; // Error handling for empty items
    }

    return (
        <table className={style.table}>
            <thead className={style.thead}>
                <tr className={style.table_upper_part}>
                    <th className={style.table_title} scope="col">Type</th>
                    <th className={style.table_title} scope="col">Amount</th>
                    <th className={style.table_title} scope="col">Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => {
                    return (
                        <tr key={item.id} className={index % 2 === 0 ? style.isWhite : style.isDarker}>
                            <td className={style.td}>{item.type}</td>
                            <td className={style.td}>{item.amount}</td>
                            <td className={style.td}>{item.currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

// Define prop types for the component
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};
