import React from "react";

type Props = {
    children: React.ReactNode
}

const ContentLayout = (props: Props) => {
    return(
        <div className={'contentLayout'}>
            {props.children}
        </div>
    )
}

export default ContentLayout