import Header from "../shared/header";
import Sidebar from "../shared/sidebar";

export default function RefSheet() {
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="flex flex-col items-center w-full h-full justify-center pt-30 pl-[15vw]">
                <iframe
                    src={"https://drive.google.com/file/d/1tPsI7bNForEzl59DNmuW_zjeBPr_THue/"}
                    title="PDF Document"
                    width="100%"
                    height="500px"
                    style={{ border: 'none' }}
                />
            </div>
        </div>
    )
}