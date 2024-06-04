const IconCard = ({ image, alt, title, text }) => {
    return (
        <div className="icon-card">
            <div>
                <img src={image} alt={alt} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default IconCard