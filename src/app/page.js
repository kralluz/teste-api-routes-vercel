import { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    fetch('/api/saudacao')
      .then(res => res.json())
      .then(data => setMensagem(data.mensagem))
      .catch(err => console.error("Erro ao buscar dados:", err));
  }, []);

  return (
    <main className={styles.main}>
      {mensagem ? <p>{mensagem}</p> : <p>Carregando...</p>}
    </main>
  );
}
