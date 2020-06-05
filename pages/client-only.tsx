const ClientOnlyPage = () => (
  <p>
    ℹ️ This page shows how use Apollo only in the client. If you{" "}
    <a href="/client-only">reload</a> this page, you will see a loader since
    Apollo didn't fetch any data on the server. This is useful when the page
    doesn't have SEO requirements or blocking data fetching requirements.
  </p>
);

export default ClientOnlyPage;
