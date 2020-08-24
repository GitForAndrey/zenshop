import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import { SELECTED } from '../../Redux/actions';

const { Meta } = Card;

function Cards({ item, SELECTED }) {
  const [value, setFlipSide] = useState(false);

  const onClickFlip = () => {
    setFlipSide(!value);
  };

  return (
    <ReactCardFlip isFlipped={value} flipDirection="horizontal">
      <Card
        hoverable
        cover={<img alt="example" src={item.url} style={{ height: 200 }} />}
        onClick={onClickFlip}>
        <Link to="/details">
          <Meta
            title={item.title}
            description="some"
            onClick={() => {
              SELECTED(item);
            }}
          />
        </Link>
      </Card>

      <Card
        hoverable
        cover={<img alt="example" src={item.thumbnailUrl} style={{ height: 200 }} />}
        onClick={onClickFlip}>
        <Meta title="This is the back of the card" description="some" />
      </Card>
    </ReactCardFlip>
  );
}

export default connect(null, { SELECTED })(Cards);
