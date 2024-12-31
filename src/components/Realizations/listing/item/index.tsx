import Gallery from "../../Gallery"
import ProjectDescription from "../../ProjectDescription"
import VideoPresentation from "../../videos"

export interface RealizationListItemProps {
    title: string,
    description: string,
    videosUrl?: string,
    folder?: __WebpackModuleApi.RequireContext
}

export default function RealizationListItem(props: RealizationListItemProps & {idx: number, projectId: string}) {
    const { title, description, videosUrl, folder, idx, projectId } = props

    return (
        <div className={`max-w-[986px] w-full flex items-center justify-between ${idx % 2 == 1 ? 'flex-row' : 'flex-row-reverse'}`}>
            {
                folder && <Gallery folder={folder} projectId={projectId}/>
            }
            {
                videosUrl && <VideoPresentation videosUrl={videosUrl} projectId={projectId}/>
            }
            <ProjectDescription title={title} description={description}/>
        </div>
    )

}