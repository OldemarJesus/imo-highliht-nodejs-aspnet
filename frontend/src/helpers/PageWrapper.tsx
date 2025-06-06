import Navbar from "../components/Navbar/Navbar"

function PageWrapper({ children }: React.PropsWithChildren<{}>) {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                {children}
            </div>
        </>
    )
}

export default PageWrapper;
