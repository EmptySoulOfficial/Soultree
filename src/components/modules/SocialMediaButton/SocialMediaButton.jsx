import './SocialMediaButton.css'
import Icon from "../../../assets/js/Icon/Icon.asset"

function SocialMediaButton({name, label, url, target}) {

    return(
    <a className="SocialMediaButton" href={url} target={target} >
        <div className="SocialMediaButton-Icon">
            <Icon name={name} />
        </div>
        <label className="SocialMediaButton-Label">
        {label}
        </label>
    </a>
    )
}

export default SocialMediaButton