import "./index.scss";

export function SingleCardWithBg(props) {
    // Properties declaration
    let rootClassName = props.rootClassName;
    let bgImageUrl = props.bgImageUrl;
    let singleCardWithBgContent = props.children;

    // Properties finallization
    if (rootClassName == null) {
        rootClassName = "";
    }

    if (bgImageUrl == null) {
        bgImageUrl = "";
    }

    if (singleCardWithBgContent == null) {
        singleCardWithBgContent = () => {
            <>
            </>
        };
    }

    return (
        <div className={rootClassName}>
            <div className="singlenewcomer-style" style={{ backgroundImage: `url("${bgImageUrl}")` }}>
                {singleCardWithBgContent}
            </div>
        </div>
    );
}