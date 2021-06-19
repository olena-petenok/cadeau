import InfoCardWithShowMore from "./InfoCardWithShowMore";

import { cats } from "../../resources/dictionaries/index";

const BlocksOfCardsWithShowMore = () =>
  cats?.length ? (
    <ul className="blocks-of-cards-with-show-more">
      {cats.map((element, index) => (
        <InfoCardWithShowMore data={{ ...element, alt: "cat" }} key={index} />
      ))}
    </ul>
  ) : null;

export default BlocksOfCardsWithShowMore;
