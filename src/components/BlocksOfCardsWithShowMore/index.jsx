import { useEffect, useRef, useState } from "react";

import InfoCardWithShowMore from "./InfoCardWithShowMore";

import { cats } from "../../resources/dictionaries/index";

import "./index.scss";

const BlocksOfCardsWithShowMore = () => {
  const constainerRef = useRef(null);
  const [constainerWidth, setConstainerWidth] = useState(undefined);

  useEffect(() => {
    setConstainerWidth(constainerRef?.current?.offsetWidth);
  }, [constainerRef?.current?.offsetWidth]);

  return (
    <ul className="blocks-of-cards-with-show-more" ref={constainerRef}>
      {cats?.length &&
        cats.map((element, index) => (
          <InfoCardWithShowMore
            data={{
              ...element,
              alt: "cat",
              index: index + 1,
              parentWidth: constainerWidth,
            }}
            key={index}
          />
        ))}
    </ul>
  );
};

export default BlocksOfCardsWithShowMore;
