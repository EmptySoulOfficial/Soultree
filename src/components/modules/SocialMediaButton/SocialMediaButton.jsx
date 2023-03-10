import './SocialMediaButton.css'
import Icon from "../../../assets/js/Icon/Icon.asset"

function SocialMediaButton({name, label}) {

    return(
    <div className="SocialMediaButton">
        <div className="SocialMediaButton-Icon">
            <Icon name={name} />
        </div>
        <label className="SocialMediaButton-Label">
        {label}
        </label>
    </div>
    )
}

export default SocialMediaButton