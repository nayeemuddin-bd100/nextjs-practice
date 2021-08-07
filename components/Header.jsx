import HeaderStyles from "../styles/Header.module.css";

const Header = () => {
  const x = 2;
  return (
    <div>
      <h1 className={HeaderStyles.title}>
        <span> WebDev</span> News
      </h1>
      <p className={HeaderStyles.description}>
        Keep Up to date with latest web News
      </p>

      {/* inline style and conditional css */}
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
