

interface Props{
    params: {
        classId: string,
        courseId: string
    }

}

export default function PagePlayer({ params: { courseId, classId } }: Props) {

    return(
        <>
            Player {courseId} {classId}
        </>
    )

}