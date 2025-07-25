import Pause from "@/components/logo/Pause/pause";

export default function Logo1({id}) {
    // return <img src={logo1} alt="Logo" style={{width: "100%"}} id={id}/>
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    return <>
        <Pause/>
        <video loop width="100%" autoPlay muted id={id} playsInline>
            {/*<source src={"/video4.mov"}*/}
            {/*        type='video/quicktime'/>*/}
            {isSafari ? <></> : <source src='/logo.webm'
                                        type='video/webm'/>}
        </video>
    </>
}