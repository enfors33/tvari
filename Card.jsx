import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({ id, title, price, address, date, img }) => {
    return (
        <Link to={`/product/${id}`} className="content-main__list-item">
            <div className="content-main__list-item--img">
                <img src={img} alt="content-main__list-item-image" />
            </div>
            <h5 className="content-main__list-item--title">
                {title}
            </h5>
            <strong className="content-main__list-item--price">
                {price}
            </strong>

            <div className="content-main__list-item--desc-box">
                <span className="content-main__list-item--desc">
                    {address}
                </span>
                <span className="content-main__list-item--desc">
                    {date}
                </span>
            </div>
        </Link>
    )
}