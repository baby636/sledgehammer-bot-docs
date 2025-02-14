import React from "react";
import clsx from "clsx";
import styles from "./PrivacyPolicy.module.css";

const BlockList = [
  {
    description: (
      <>
        We at <a href="https://momentum-one.io/">Momentum Lancer LDA</a>{" "}
        (company behind Sledgehammer bot) know you care about your personal
        information and we take your privacy seriously. Please read the
        following to learn more about our Privacy Policy.
      </>
    ),
  },
  {
    description: (
      <>
        We only ask you to provide personal information when it is needed to
        provide services to you. All personal information is collected by fair
        and lawful means, with your full knowledge and consent. We will also let
        you know why we’re collecting it and how it will be used.
      </>
    ),
  },
  {
    description: (
      <>
        Momentum Lancer LDA does not share or sell your personal information for
        advertising or marketing purposes. Additionally, we don’t share your
        personally identifying information with any third-parties, except when
        it is required by law.
      </>
    ),
  },
  {
    description: (
      <>
        We only retain collected information for as long as necessary to provide
        you with your requested service. What data we do collect, we’ll protect
        using commercially reasonable means to prevent loss and theft, as well
        as unauthorized access, disclosure, copying, use or modification.
      </>
    ),
  },
  {
    description: (
      <>
        Our site may link to external sites that are not operated by us. Please
        be aware that we have no control over the content and practices of these
        sites, and cannot accept responsibility or liability for their
        respective privacy policies.
      </>
    ),
  },
  {
    description: (
      <>
        You can always opt not to disclose information to us, but keep in mind
        you may need to provide some information to us in order to take
        advantage of some of our services and features.
      </>
    ),
  },
  {
    description: (
      <>
        If you are a resident of the European Union, United Kingdom,
        Lichtenstein, Norway, or Iceland, you may have additional rights under
        the EU General Data Protection Regulation (the “GDPR”) with respect to
        your Personal Data. In this event, please refer to our{" "}
        <a href="/gdpr">GDPR Privacy Notice</a>, as it applies to you too.
      </>
    ),
  },
  {
    description: (
      <>
        If you have any questions or concerns regarding our privacy policies,
        please send us a detailed message to{" "}
        <a href="mailto:support@momentum-one.io">support@momentum-one.io</a>,
        and we will try to resolve your concerns.
      </>
    ),
  },
];

function Block({ description }) {
  return (
    <div className={clsx("col")}>
      <div className="padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Privacy Policy</h1>
        {BlockList.map((props, idx) => (
          <Block key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
