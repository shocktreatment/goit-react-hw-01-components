import s from './transactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    
    const elements = items.map(({type, currency, amount, id}) => 
        <tr key={id}  className={s.body}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )

    return (
        <table className={s.transactionHistory}>
        <thead>
            <tr className={s.head}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {elements}
        </tbody>
        </table>
    )   
}

export default TransactionHistory;

TransactionHistory.defaultProps = {
    items: []
}

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}