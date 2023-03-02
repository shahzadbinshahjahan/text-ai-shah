import React,{useState,useContext} from "react";
import {useTranslation} from "react-i18next";
import PersistContext from "./../../Context/PersistContext";
import InputQuery from "./components/InputQuery";
import ResultScreen from "./components/ResultScreen";
import LoadingScreen from "./../../components/LoadingScreen";

function Write(){
    const {t}=useTranslation();
    const {writeResponseText,setWriteResponseText}=useContext(PersistContext);
    const [loading,setLoading]=useState(false);
    // const [responseText,setResponseText]=useState(false);
    let query=undefined;
    const setQuery=(text)=>query=text;
    const submitQuery=()=>{
        setLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic dGVzdDE6dGVzdDFfcGFzcw==");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "https://ml-text-ai.herokuapp.com");
        const data={
            data:query,
            input_lang:"en",
            output_lang:"en"
        }
        const options={
            method:"POST",
            headers:myHeaders,
            body:JSON.stringify(data),
            redirect:"follow"
        }
        // fetch("https://ml-text-ai.herokuapp.com/magic",options)
        // .then((res)=>res.json())
        // .then((data)=>{
        //     setWriteResponseText(data.txt);
        //     setLoading(false);
        //     console.log(responseText);
        // })
        //.catch((err)=>console.log(err));
        setTimeout(()=>{
            setWriteResponseText(`Congratulations on your outstanding performance this past quarter! Your hard work and dedication have been exemplary and have had a positive impact on the entire team.`);
            setLoading(false);
        },5000);
    }
    if(loading)
        return <LoadingScreen text={`${t("writing")}...`}/>
    else if(writeResponseText)
        return <ResultScreen text={writeResponseText} setResponseText={setWriteResponseText}/>
    return (<div className="overflow-hidden">
        <InputQuery setQuery={setQuery} submitQuery={submitQuery}/>
    </div>);
}

export default Write;