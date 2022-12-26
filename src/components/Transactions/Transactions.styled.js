import styled from 'styled-components';

export const Table = styled.table`
  width: 750px;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
`;

export const Th = styled.th`
  background: #3498db;
  color: white;
  font-weight: bold;
  text-align: left;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 18px;
`;

export const Tr = styled.tr`

  &:nth-of-type(even) {
    background: #eee;
    color: #333;
  }
`