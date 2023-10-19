

export function UserInfo({ userName, children }) {
    return (
        <div className="content-user-info">
            <img src={`https://unavatar.io/twitter/${userName}`} alt="" />
            <div className="info">
                <h2>{children}</h2>
            </div>

        </div>
    )
}