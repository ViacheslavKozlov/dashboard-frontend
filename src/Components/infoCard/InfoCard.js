import { InfoCardStyled } from "./InfoCardStyled";

const InfoCard = ({ title }) => {
  return (
    <InfoCardStyled>
      <div className="card">
        <p className="subTitle">{title}</p>
      </div>
    </InfoCardStyled>
  );
};

export default InfoCard;
