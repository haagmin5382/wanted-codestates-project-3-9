import React from 'react';
import { FaStar } from 'react-icons/fa';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
const ARRAY = [0, 1, 2, 3, 4];

function Grade({
  clicked,
  clickGrade,
  onClickCheck = false,
  size = 50,
  hoverAbled = false,
}) {
  return (
    <Wrap>
      <Stars hoverAbled={hoverAbled}>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size={size}
              onClick={() => onClickCheck && clickGrade(el)}
              className={clicked[el] ? 'blackStar' : 'grayStar'}
            />
          );
        })}
      </Stars>
    </Wrap>
  );
}
Grade.propTypes = {
  clicked: PropTypes.array,
  clickGrade: PropTypes.func,
  onClickCheck: PropTypes.bool,
  size: PropTypes.number,
  hoverAbled: PropTypes.bool,
};
export default Grade;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
`;

const Stars = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
  ${({ hoverAbled }) => {
    if (hoverAbled)
      return css`
        & svg {
          color: #cccccc;
          cursor: pointer;
        }

        :hover svg {
          color: #000000;
        }

        & svg:hover ~ svg {
          color: #cccccc;
        }
      `;
    else return css``;
  }}

  .blackStar {
    color: #000000; // 검은색
  }
  .grayStar {
    color: #cccccc;
  }
`;
