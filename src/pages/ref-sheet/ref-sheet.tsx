import Header from "../../shared/header";
import Sidebar from "../../shared/sidebar";

export default function RefSheet() {
    return (
        <div className="w-full h-[calc(100vh-104px)]">
            <iframe
                src="./pdfs/Equation sheet.pdf"
                title="Embedded PDF"
                className="w-full h-full rounded-lg"
            />
        </div>
    )
}