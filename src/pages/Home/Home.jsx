import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.welcomeWrapper}>
        <img
          src="https://cdn.dribbble.com/users/7165248/screenshots/18288468/media/820e297d500d87f11210d58debab3087.png"
          width="450"
        />
        <section className={styles.welcomeMessage}>
          <h1>
            Expecting a package? Of course you are...
          </h1>

          <p>
            Just in the year 2020 there were 20 Billion parcel shipments accross
            the US.
          </p>

          <h1>
            Now thats alot of packages!
          </h1>

          <p>
            With so many packages being shipped across the us, Americans are
            faced with a huge problem.
          </p>
          <h1>
            Theft 😔
          </h1>
          <p>
            Last year Americans reported 210 million packages stolen.
          </p>
        </section>
      </div>

      <div>
        <h1>
          {/* Who we are? */}
        </h1>
      </div>
    </div>
  );
};

export default Home;
