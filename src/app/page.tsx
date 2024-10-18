import styles from "./page.module.css";
import Card from "../app/components/card/image-card"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.header}>
          <h1 className={styles.title}>Coding demo</h1>
          <p>Michael Pinder</p>
          <br />
          <p>Mila/McGill/UdeM</p>
        </section>
        <section className={styles.body}>
          <div className={styles.leftPanel}>
            <Card open={false} src='' />
          </div>
          <div className={styles.rightPanel}>

          </div>
        </section>
      </main>
    </div>
  );
}
