import InfoCardWithShowMore from "./InfoCardWithShowMore";

import { cats } from "../../resources/dictionaries/index";

import "./index.scss";

const BlocksOfCardsWithShowMore = () =>
  cats?.length ? (
    <ul className="blocks-of-cards-with-show-more">
      {cats.map((element, index) => (
        <InfoCardWithShowMore data={{ ...element, alt: "cat", index: index }} />
      ))}
    </ul>
  ) : null;

export default BlocksOfCardsWithShowMore;
