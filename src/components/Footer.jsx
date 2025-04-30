import Exclusive from "./Footer-Component/Exclusive"
import Support from "./Footer-Component/Support"
import Account from "./Footer-Component/Account"
import QuickLink from "./Footer-Component/QuickLink"
import DownloadApp from "./Footer-Component/DownloadApp"
export default function Footer(){
    return(
        <>
            <div className="bg-black text-white flex flex-col md:flex-row justify-between p-3 md:py-6 md:px-8">
                <div>
                    <Exclusive />
                </div>
                <div>
                    <Support />
                </div>
                <div>
                    <Account />
                </div>
                <div>
                    <QuickLink />
                </div>
                <div>
                    <DownloadApp />
                </div>
            </div>
        </>
    )
}