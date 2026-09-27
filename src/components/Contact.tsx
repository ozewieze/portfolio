import { details } from "../data/contact.ts";
import { Fragment } from "react";
import DownloadIcon from "./icons/DownloadIcon.tsx";
import ExternalLinkIcon from "./icons/ExternalLinkIcon.tsx";
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact__info">
          <p className="contact__intro">
            Ik ben op zoek naar een stage waar ik kan bijleren, meewerken aan
            echte projecten en verder groeien als developer.
          </p>
          <dl className="contact__details">
            {details.map((detail) => (
              <Fragment key={detail.label}>
                <dt className="contact__label label">{detail.label}</dt>
                <dd className="contact__content">
                  <a
                    href={detail.ref}
                    download={detail.download}
                    target={detail.external ? "_blank" : undefined}
                    rel={detail.external ? "noopener noreferrer" : undefined}
                  >
                    {detail.content}
                    {detail.external && (
                      <>
                        <span className="sr-only">
                          , opent in nieuw tabblad
                        </span>
                        <ExternalLinkIcon />
                      </>
                    )}
                    {detail.download && <DownloadIcon />}
                  </a>
                </dd>
              </Fragment>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
