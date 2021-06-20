import { useEffect, useState } from "react";
import classnames from "classnames";

import {
  BUTTON_TEXT_SHOW_MORE,
  BUTTON_TEXT_SHOW_MORE_HIDE,
} from "../../../resources/dictionaries/index";

import "./index.scss";

const InfoCardWithShowMore = ({ data = null }) => {
  const { parentWidth, index, image, alt, name, description } = data;
  const cardMaxWidth = 300;

  const [showMore, setShowMore] = useState(false);
  const [cardOrder, setCardOrder] = useState({});
  const [showMoreOrder, setShowMoreOrder] = useState({});

  useEffect(() => {
    if (parentWidth) {
      const amountOfCardsPerRow = Math.round(parentWidth / cardMaxWidth);
      const cardPosition = index % amountOfCardsPerRow;

      const cardOrderFormula =
        index <= amountOfCardsPerRow
          ? index
          : index * 2 - (cardPosition || amountOfCardsPerRow);

      setCardOrder({ order: cardOrderFormula });
      setShowMoreOrder({ order: cardOrderFormula + amountOfCardsPerRow });
    }
  }, [parentWidth, index]);

  const handleSetShowMore = () => setShowMore(true);
  const handleResetShowMore = () => setShowMore(false);

  return image && alt && name && description ? (
    <>
      <li
        className={classnames("info-card-with-show-more", {
          active: showMore,
        })}
        style={cardOrder}
      >
        <img className="info-card-with-show-more-image" alt={alt} src={image} />

        {!showMore && (
          <>
            <p className="info-card-with-show-more-text-name">{name}</p>

            <button
              className="info-card-with-show-more-button-show-more"
              onClick={handleSetShowMore}
            >
              {BUTTON_TEXT_SHOW_MORE}
            </button>
          </>
        )}
      </li>

      {showMore && (
        <li
          className="info-card-with-show-more-description-block"
          style={showMoreOrder}
        >
          <p className="info-card-with-show-more-description-block-text">
            {description}
          </p>

          <button
            className="info-card-with-show-more-description-block-button"
            onClick={handleResetShowMore}
          >
            {BUTTON_TEXT_SHOW_MORE_HIDE}
          </button>
        </li>
      )}
    </>
  ) : null;
};

export default InfoCardWithShowMore;
