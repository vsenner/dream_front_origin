/* eslint-disable react/no-unescaped-entities */
import styles from './index.module.css';
import Header from '../../src/components/Header';
import { useRouter } from 'next/router';

const Terms = () => {
  return (
    <div className={styles.terms}>
      <Header />
      <div className={styles.terms_container}>
        <div className={styles.terms_header}>
          <h1 className={styles.terms_header_title}>Terms & Condition</h1>
        </div>
        <div className={styles.terms_content}>
          <span
            className={`${styles.terms_title} ${styles.terms_title_big}`}
          >
            TheDream.AI is operated by Verdita LTD.
          </span>
          <span
            className={`${styles.terms_text} ${styles.terms_text_big}`}
          >
            Verdita offers TheDream.AI and related services to you, a user,
            under the condition that you accept all of our set terms,
            including these Terms of Service and all related policies.
          </span>

          <span className={styles.terms_text}>
            Thank you for using TheDream.AI’s image generation and stock
            photography services (the “Services”). These Terms of Service
            (the “Agreement”) spell out what rights you have with respect
            to the Service generated images, and other assets, which you
            generate (the “Assets”), your use of the Services, and other
            important topics like arbitration. Please read it carefully. We
            have a privacy policy which outlines how we handle your data .
            This Agreement is entered into by TheDream.AI Inc. and the
            entity or person agreeing to these terms ("Customer") and
            govern Customer's access to and use of the Services. This
            Agreement is effective when the Customer is presented with this
            Agreement and proceeds to use the Services (the "Effective
            Date") or to receive or distribute Assets. These terms may be
            updated and presented again to the Customer from time to time.
            Continued use of the Services constitutes acceptance of the
            updated terms. If you do not agree to the Agreement, please
            stop using the Services. Other documents referenced here may
            also bind Customer’s use of this Services, including the
            Community Guidelines included below.
          </span>

          <span className={styles.terms_title}>
            1. Service Availability and Quality
          </span>
          <span className={styles.terms_text}>
            We are constantly evolving the Services to make them better for
            you. The Services are subject to modification and change,
            including but not limited to the art style of Assets, the
            algorithms used to generate the Assets, and features available
            to the Customer. No guarantees are made with respect to the
            Services’ quality, stability, uptime or reliability. Please do
            not create any dependencies on any attributes of the Services
            or the Assets. We will not be liable to you or your downstream
            customers for any harm caused by your dependency on the
            Service. Both the Services and the Assets are provided to
            Customer on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
            OF ANY KIND, either express or implied, including, without
            limitation, any warranties or conditions of TITLE,
            NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR
            PURPOSE. You are solely responsible for determining the
            appropriateness of using or redistributing the Assets and
            assume any risks associated with use of the Services.
            TheDream.AI reserves the right to suspend or ban your access to
            the Services at any time, and for any reason. You may not use
            the Services for competitive research. You may not reverse
            engineer the Services or the Assets. You may not use automated
            tools to access, interact with, or generate Assets through the
            Services. Only one user may use the Services per registered
            account. Each user of the Services may only have one account.
            We reserve the right to investigate complaints or reported
            violations of our Terms of Service and to take any action we
            deem appropriate including but not limited to reporting any
            suspected unlawful activity to law enforcement officials,
            regulators, or other third parties and disclosing any
            information necessary or appropriate to such persons or
            entities relating to user profiles, e-mail addresses, usage
            history, posted materials, IP addresses and traffic
            information.
          </span>

          <span className={styles.terms_title}>2. Age Requirements</span>
          <span className={styles.terms_text}>
            By accessing the Services, you confirm that you’re at least 13
            years old and meet the minimum age of digital consent in your
            country. If you are old enough to access the Services in your
            country, but not old enough to have authority to consent to our
            terms, your parent or guardian must agree to our terms on your
            behalf. Please ask your parent or guardian to read these terms
            with you. If you’re a parent or legal guardian, and you allow
            your teenager to use the Services, then these terms also apply
            to you and you’re responsible for your teenager’s activity on
            the Services. TheDream.AI tries to make its Services PG-13 and
            family friendly, but the Assets are generated by an artificial
            intelligence system based on user queries. This is new
            technology and it does not always work as expected. No
            guarantees are made as to the suitability of the Assets for the
            Customer.
          </span>

          <span className={styles.terms_title}>3. Your Information</span>
          <span className={styles.terms_text}>
            By using the Services, you may provide TheDream.AI with
            personal information like your email address, user name,
            billing information, favorites, image outputs, and text prompts
            that you enter, or sample images that you upload to the
            Service. Our policy outlining what we do with your personal
            information, and the rights you have with respect to your
            personal information, can be found . Both parties agree to
            comply with all applicable data protection laws. To the extent
            the parties need to enter into additional terms regarding data
            privacy or data transfers the parties will work together in
            good faith to enter into such terms.
          </span>

          <span className={styles.terms_title}>
            4. Copyright and Trademark
          </span>
          <span className={styles.terms_text}>
            To the extent allowed by law and as between you and The
            Dream.AI, you own your Uploads, and you agree that TheDream.AI
            owns all Generations, and you hereby make any necessary
            assignments for this. TheDream.AI grants you the exclusive
            rights to reproduce and display such Generations and will not
            resell Generations that you have created, use Generations in
            any way, or assert any copyright in such Generations against
            you or your end users, all provided that you comply with these
            terms and our Content Policy. If you violate our terms or
            Content Policy, you will lose rights to use Generations, but we
            will provide you written notice and a reasonable opportunity to
            fix your violation, unless it was clearly illegal or abusive.
            You understand and acknowledge that similar or identical
            Generations may be created by other people using their own
            Prompts, and your rights are only to the specific Generation
            that you have created.
          </span>
          <span className={styles.terms_title}>
            5. DMCA and Takedowns Policy
          </span>
          <span className={styles.terms_text}>
            TheDream.AI uses an artificial intelligence system trained on
            public datasets to produce its Assets. Such Assets may be
            unintentionally similar to copyright protected material or
            trademarks you hold. We respect rights holders internationally.
            If you believe your copyright or trademark is being infringed
            by the Service, please write to takedown@TheDream.AI.com and we
            will process your request.
          </span>

          <span className={styles.terms_title}>
            6. Dispute Resolution and Governing Law
          </span>
          <span className={styles.terms_text}>
            <ul>
              <li>
                ALL LEGAL CLAIMS ARISING OUT OF OR RELATING TO THIS
                AGREEMENT (INCLUDING ANY DISPUTE REGARDING THE
                INTERPRETATION OR PERFORMANCE OF THE AGREEMENT) ("Dispute")
                WILL BE GOVERNED BY THE LAWS OF COUNTRY OF Cyprus.
              </li>
              <li>
                The parties will try in good faith to settle any Dispute
                within 30 days after the Dispute arises. If the Dispute is
                not resolved within 30 days, it shall be resolved by
                arbitration by the Singaporean Arbitration Association’s
                International Centre for Dispute Resolution in accordance
                with its Expedited Commercial Rules in force as of the date
                of this Agreement ("Rules").
              </li>
              <li>
                The parties will mutually select one arbitrator. The
                arbitration will be conducted in English in Singapore.
              </li>
              <li>
                Either party may apply to any competent court for
                injunctive relief necessary to protect its rights pending
                resolution of the arbitration. The arbitrator may order
                equitable or injunctive relief consistent with the remedies
                and limitations in the Agreement.
              </li>
              <li>
                The arbitral award will be final and binding on the parties
                and its execution may be presented in any competent court,
                including any court with jurisdiction over either party or
                any of its property.
              </li>
              <li>
                Each party will bear its own lawyers’ and experts’ fees and
                expenses, regardless of the arbitrator’s final decision
                regarding the Dispute.
              </li>
            </ul>
          </span>
          <span className={styles.terms_title}>
            7. Unlimited Service and Rate Limiting
          </span>
          <span className={styles.terms_text}>
            If you purchase an unlimited plan, we will try to reasonably
            offer you unlimited access to the Services. However, we reserve
            the right to rate limit you to prevent quality decay or
            interruptions to other customers.
          </span>

          <span className={styles.terms_title}>
            8. Payment and Billing
          </span>
          <span className={styles.terms_text}>
            We may invoice you for your use of the Services through a third
            party payment service provider. The third party service
            provider’s terms of service shall govern and supersede this
            Agreement in case of conflict. You are free to cancel your plan
            at any time. We also reserve the right to terminate your access
            to the Service for any reason, including for violation of the
            Community Guidelines or other inappropriate use of the Service.
            Upon cancellation or termination, any outstanding usage fees
            will be charged immediately. You will not be refunded for the
            current pay period, but you will stop being charging after the
            current pay period has ended. Refunds requested within 14 days
            of purchase are eligable for a full refund, if no more than
            three images have been downloaded.
          </span>
          <span className={styles.terms_title}>
            9. Community Guidelines
          </span>
          <span className={styles.terms_text}>
            <ul>
              <li>
                Be kind and respect each other and staff. Do not create
                images or use text prompts that are inherently
                disrespectful, aggressive, or otherwise abusive. Violence
                or harassment of any kind will not be tolerated.
              </li>
              <li>
                No adult content or gore. Please avoid making visually
                shocking or disturbing content. We will block some text
                inputs automatically.
              </li>
              <li>
                Sharing others’ creations. Do not publicly repost the
                creations of others without their permission.
              </li>
              <li>
                Be careful about sharing. It’s OK to share your creations
                outside of the ProfilePhoto.AI community but please
                consider how others might view your content.
              </li>
              <li>
                Any violations of these rules may lead to bans from our
                services.
              </li>
            </ul>
          </span>

          <span className={styles.terms_title}>
            10. Limitation of Liability and Indemnity
          </span>
          <span className={styles.terms_text}>
            We provide the service as is, and we make no promises or
            guarantees about it. You understand and agree that we will not
            be liable to you or any third party for any loss of profits,
            use, goodwill, or data, or for any incidental, indirect,
            special, consequential or exemplary damages, however they
            arise. You are responsible for your use of the service. If you
            harm someone else or get into a dispute with someone else, we
            will not be involved. If you knowingly infringe someone else’s
            intellectual property, and that costs us money, we’re going to
            come find you and collect that money from you. We might also do
            other stuff, like try to get a court to make you pay our
            attorney’s fees. Don’t do it.
          </span>
          <span className={styles.terms_title}>11. Miscellaneous</span>
          <span className={styles.terms_text}>
            <ul>
              <li>
                Force Majeure. Neither party will be liable for failure or
                delay in performance to the extent caused by circumstances
                beyond its reasonable control, including acts of God,
                natural disasters, terrorism, riots, or war.
              </li>
              <li>
                No Agency. This Agreement does not create any agency,
                partnership, or joint venture between the parties.
              </li>
              <li>
                Severability. If any part of this Agreement is invalid,
                illegal, or unenforceable, the rest of the Agreement will
                remain in effect.
              </li>
              <li>
                No Third-Party Beneficiaries. This Agreement does not
                confer any benefits on any third party unless it expressly
                states that it does.
              </li>
              <li>
                Survival. The sections and obligations in this Agreement
                that a reasonable person would expect to survive this
                agreement, will. Particularly the IP and privacy stuff.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Terms;
