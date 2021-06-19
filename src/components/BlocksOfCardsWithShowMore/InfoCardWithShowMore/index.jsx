import "./index.scss";

const InfoCardWithShowMore = ({ data = null }) =>
  data?.image && data?.alt && data?.name && data?.description ? (
    <li className="info-card-with-show-more">
      <img
        className="info-card-with-show-more-image"
        alt={data.alt}
        src={data.image}
      />

      <p className="info-card-with-show-more-text-name">{data.name}</p>
    </li>
  ) : null;

export default InfoCardWithShowMore;
