import TopBar from "../components/TopBar/TopBar";
import React from "react";

type Props = {
    children: React.ReactNode
}

const MainLayout = (props: Props) => {
    return (
        <>
            <TopBar />
            <main>
                {props.children}
            </main>
        </>
    )
}

export default MainLayout