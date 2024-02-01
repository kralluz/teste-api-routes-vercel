"use client";
import { useEffect, useState } from "react";

const Mensagem = () => {
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/saudacao");
            const data = await res.json();
            console.log("🚀 ~ fetchData ~ data:", data)
            setMensagem(data.mensagem);
        };

        fetchData();
    }, []);

    return (
        <>
            <h1>{mensagem}</h1>
        </>
    );
};

export default Mensagem;
