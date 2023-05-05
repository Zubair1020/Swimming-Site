import {
  StatisticsCardCont,
  StatisticsCardTitleCont,
} from "./statistics-card.style";

const StatisticsCard = ({ number, name }) => (
  <>
    <StatisticsCardCont>
      <StatisticsCardTitleCont>
        <h2>{number}</h2>
      </StatisticsCardTitleCont>
      <h4>{name}</h4>
    </StatisticsCardCont>
  </>
);

export default StatisticsCard;
