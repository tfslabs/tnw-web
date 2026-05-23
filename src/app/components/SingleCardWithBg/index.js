import "./index.scss";

export function SingleCardWithBg(props) {
    // Properties declaration
    let rootClassName = props.rootClassName || "";
    let bgImageUrl = props.bgImageUrl || "";
    let singleCardWithBgContent = props.children || (<></>);

    return (
        <div className={rootClassName}>
            <div className="singlenewcomer-style" style={{ backgroundImage: `url("${bgImageUrl}")` }}>
                {singleCardWithBgContent}
            </div>
        </div>
    );
}