import Image from "next/image"

export default function SideNavBar(){
    return(
       <div>
            <aside className="sidebar">
                <div>

                   <Image
                    src="/bus1.gif"
                    width={50}
                    height={50} 
                    className="sidebar_logo"
                    alt="logo"
                    />
                    
                </div>
            </aside>
       </div>
    )
}