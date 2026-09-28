export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <p>Stef Ballyn</p>
        <p>
          Ontwikkeld met React <span aria-hidden="true">&middot;</span>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
