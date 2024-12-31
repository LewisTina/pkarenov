import withRouter, { WithRouterProps } from "next/dist/client/with-router";
import { realisations } from "../../../components/Realizations";
import { NextRouter } from "next/router";
import Layout from "@/components/Layout";
import ShowRoom from "@/components/showroom";
import Custom_404 from "@/pages/404";

export function Project({ router}: WithRouterProps){
    let projectId = router.query.project as string;
    const ProjectData = realisations[projectId]

    return (
        !!ProjectData ?
        <Layout>
            <ShowRoom name={projectId} {...ProjectData}/> 
        </Layout> :
        <Custom_404/>
    )
}

Project.getInitialProps = async ({ query, router }: { query: any; router: NextRouter }) => {
    const { param } = query;
    return { param };
  };

export default withRouter(Project);