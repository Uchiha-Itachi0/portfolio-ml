import CardComponent from "@/components/card";

export default function ProjectPage() {
    return (
        <div className={`mx-4 sm:mx-10 lg:mx-24`}>
            <CardComponent type={'project'} title={'Projects'} />
        </div>
    )
}