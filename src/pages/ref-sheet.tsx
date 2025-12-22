import Header from "../shared/header";
import Sidebar from "../shared/sidebar";

export default function RefSheet() {
    return (
        <div className="w-full">
            <iframe
                src={"https://github.com/NimbleValley/physics-reference/blob/main/public/pdfs/Equation%20sheet.pdf"}
                title="PDF Document"
                width="100%"
                height="500px"
                style={{ border: 'none' }}
            />
        </div>
    )
}