import { useState } from "react";
import classnames from "classnames";

import {
  BUTTON_TEXT_SHOW_MORE,
  BUTTON_TEXT_SHOW_MORE_HIDE,
} from "../../../resources/dictionaries/index";

import "./index.scss";

const InfoCardWithShowMore = ({ data = null }) => {
  const [showMore, setShowMore] = useState(false);

  const handleSetShowMore = () => setShowMore(true);
  const handleResetShowMore = () => setShowMore(false);

  return data?.image && data?.alt && data?.name && data?.description ? (
    <>
      <li
        className={classnames("info-card-with-show-more", {
          active: showMore,
        })}
        key={`${data.index}card`}
      >
        <img
          className="info-card-with-show-more-image"
          alt={data.alt}
          src={data.image}
        />

        {!showMore && (
          <>
            <p className="info-card-with-show-more-text-name">{data.name}</p>

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
          key={`${data.index}more`}
        >
          <p className="info-card-with-show-more-description-block-text">
            {data.description}
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
