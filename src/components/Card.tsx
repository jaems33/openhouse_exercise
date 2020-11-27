import React from 'react'
import { Image } from './Image'

interface IProps {
  key: string;
  name: string;
  imgUrl: string;
  group: string;
  average: string;
}

export const Card: React.FunctionComponent<IProps> = ({ name, imgUrl, group, average }) => {
  return (
    <div className="card grid__item">
      <div className="card__inner">
        <span className="chip chip--subtle imgTag">{group}</span>
        <Image imgUrl={imgUrl} altText={name} />
        <div className="card__inner__content">
          <span className="h2">{name}</span>
        </div>
      </div>
      <div className="card__bottom">
        {
          average !== "$0.00" ?
            <span className="h4 h4--bold special">{average}<span className="subtle"> Avg Price</span></span> :
            <></>
        }
      </div>
    </div>)
}