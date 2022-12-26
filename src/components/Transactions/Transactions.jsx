import PropTypes from 'prop-types';

import { Table, Th, Td, Tr } from './Transactions.styled';

export const Transactions = ({ items }) => {
  return (
        <Table>
          <thead>
            <Tr>
              <Th>Type</Th>
              <Th>Amount</Th>
              <Th>Currency</Th>
            </Tr>
          </thead>

          <tbody>
            {items.map(({ id, amount, currency, type }) => (
              <Tr key={id}>
                <Td>{type}</Td>
                <Td>{amount}</Td>
                <Td>{currency}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
  )} 

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};