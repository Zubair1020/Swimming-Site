import StatisticsCard from "../statistics-card/statistics-card.component";
import { StatisticsCont } from "./statistics.style";

const Statistics = () => (
  <>
    <StatisticsCont>
      <StatisticsCard
        name="swimming pool"
        number="20"
      />
      <StatisticsCard
        name="coach"
        number="55"
      />
      <StatisticsCard
        name="olimpiade"
        number="11"
      />
      <StatisticsCard
        name="winner"
        number="33"
      />
    </StatisticsCont>
  </>
);
export default Statistics;
