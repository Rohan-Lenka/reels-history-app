import Spinner from "@/UI/Spinner";

export default function DashboardLoading() {
    return <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col">
            <div className="ml-34 mb-6">
                <Spinner />
            </div>
            <p className="text-orange-200 text-lg font-semibold font-mono text-center">Please wait</p>
            <p className="text-orange-200 text-lg font-semibold font-mono text-center">your dashboard is being prepared</p>
        </div>
    </div>
}