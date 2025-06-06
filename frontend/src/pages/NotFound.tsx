import PageWrapper from "../helpers/PageWrapper"

function NotFound() {
    return (
        <PageWrapper>
            <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </PageWrapper>
    )
}
export default NotFound
