import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(60)};
  overflow: hidden;
  margin: 10px auto;
  box-shadow: ${({ theme }) => theme.shadows.regular};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const CarPicture = styled.img`
  height: auto;
  width: 100px;
  object-fit: cover;
`

export const Tag = styled.span`
  // align-self: flex-start;
  padding: ${({ theme }) => theme.spacing(1)};
  font-size: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.black};

`;


export const Username = styled.h2`
  font-size: ${({ theme }) => theme.spacing(6)};
  text-transform: capitalize;
  margin-bottom: 0;
`;
export const Location = styled.p`
  font-weight: 600;
  letter-spacing: ${({ theme }) => theme.spacing(0.2)};
  margin-bottom: 0;
`;

export const CardFooter = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  margin-top: auto;
  list-style: none;
`;
export const CardLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const SpanLabel = styled.span`
  color: grey;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const SpanText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
`;