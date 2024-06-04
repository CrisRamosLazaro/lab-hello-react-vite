import keypointData from "../data/keypoint-data"
import IconCard from "./IconCard"

const IconRow = () => {

    return (
        <div className="icon-row">
            {keypointData.map(keypoint => {
                return <IconCard image={keypoint.icon} alt={keypoint.alt} title={keypoint.title} text={keypoint.text} />
            })}

        </div>
    )
}

export default IconRow