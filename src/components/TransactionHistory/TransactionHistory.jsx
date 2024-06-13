import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.container}>
            <thead>
                <tr className={css.headerTitle}>
                    <th className={css.title}>Type</th>
                    <th className={css.title}>Amount</th>
                    <th className={css.title}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr className={css.table} key={item.id}>
                        <td className={css.tableItem}>{item.type}</td>
                        <td className={css.tableItem}>{item.amount}</td>
                        <td className={css.tableItem}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;
