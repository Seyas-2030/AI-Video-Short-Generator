import VideoList from "./_components/VideoList"

function Dashboard() {
    return (
        <div>
            <h1 className='font-bold text-3xl'>My Videos</h1>
            <VideoList />
        </div>
    )
}

export default Dashboard